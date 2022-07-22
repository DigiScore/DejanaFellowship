/*
The MIT License (MIT)

Copyright (c) 2014 Chris Wilson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

import {createBirds} from "./birdpaths.js"

window.AudioContext = window.AudioContext || window.webkitAudioContext;

var audioContext = null;
var isPlaying = false;
var sourceNode = null;
var analyser = null;
var theBuffer = null;
var DEBUGCANVAS = null;
var meter = 0

var mediaStreamSource = null;
var detectorElem, 
	canvasElem,
	waveCanvas,
	pitchElem,
	noteElem,
	detuneElem,
	detuneAmount,
	pathCanvas,
	prev_pitch=-1,
	prev_x = 0,
	prev_y = 0,
	pc= null;

var audioElement = null;
var track = null
var timeperpoint = 0.0
var nextpoint = 0.0
var drawSvg = null
var userpath = null
var soundDuration = 0.0

//not a great idea, need to have a dedicated buffer

window.onclick = function() {

	audioContext = new AudioContext();
	//MAX_SIZE = Math.max(4,Math.floor(audioContext.sampleRate/5000));	// corresponds to a 5kHz signal

	// var request = new XMLHttpRequest();
	// request.open("GET", "./sounds/misch9.wav", true);
	// request.responseType = "arraybuffer";
	// request.onload = function() {
	//   audioContext.decodeAudioData( request.response, function(buffer) {
	//      theBuffer = buffer;
	//      console.log(theBuffer.duration);
	//      //getDuration(theBuffer)
	//  } );
	// }
	// request.send();
  

  var svg = document.getElementById("svgel")

  while (svg.firstChild) {
    svg.removeChild(svg.firstChild);
 }


  if( audioContext){
	  document.getElementById("info").innerHTML = "Loading files ... "
	  createBirds(svg, audioContext)
  }

  
  // var request = new XMLHttpRequest();
  // request.open("GET", "./sounds/whole5.mp3", true);
  // request.responseType = "arraybuffer";
  // request.onload = function() {
  //   audioContext.decodeAudioData( request.response, function(buffer) {
  //      theBuffer = buffer;
  //      console.log(theBuffer.duration);
  //        document.getElementById("info").style.visibility = "hidden"
		//  document.getElementById("liveinput").style.visibility = "visible"
  //      soundDuration = theBuffer.duration
  //  } );
  // }
  // request.send();


	
	// var request = new XMLHttpRequest();
	// request.open("GET", "../sounds/whistling3.ogg", true);
	// request.responseType = "arraybuffer";
	// request.onload = function() {
	//   audioContext.decodeAudioData( request.response, function(buffer) { 
	//     	theBuffer = buffer;
	// 	} );
	// }
	// request.send();

	detectorElem = document.getElementById( "detector" );
	canvasElem = document.getElementById( "output" );
	DEBUGCANVAS = document.getElementById( "waveform" );

	if (DEBUGCANVAS) {
		waveCanvas = DEBUGCANVAS.getContext("2d");
		waveCanvas.strokeStyle = "black";
		waveCanvas.lineWidth = 1;
	}

	pc = document.getElementById("paths")
	if( pc){
		pathCanvas = pc.getContext("2d")
		pathCanvas.lineWidth = "3";
		pathCanvas.strokeStyle = "red";

		pathCanvas.strokeStyle = "black";
		pathCanvas.beginPath()
		pathCanvas.moveTo(40,40)
		pathCanvas.quadraticCurveTo(40,80,150,200)
		pathCanvas.quadraticCurveTo(180,220,350,400)
		pathCanvas.quadraticCurveTo(350,400,500,450)
		pathCanvas.quadraticCurveTo(500,200,750,600)
		pathCanvas.stroke()
		pathCanvas.closePath()

		//pathCanvas.setLineDash([3,10]);
		prev_x = pc.width/2
		prev_y = pc.height/2
	}

	pitchElem = document.getElementById( "pitch" );
	noteElem = document.getElementById( "note" );
	detuneElem = document.getElementById( "detune" );
	detuneAmount = document.getElementById( "detune_amt" );

	detectorElem.ondragenter = function () { 
		this.classList.add("droptarget"); 
		return false; };
	detectorElem.ondragleave = function () { this.classList.remove("droptarget"); return false; };
	detectorElem.ondrop = function (e) {
  		this.classList.remove("droptarget");
  		e.preventDefault();
		theBuffer = null;

	  	var reader = new FileReader();
	  	reader.onload = function (event) {
	  		audioContext.decodeAudioData( event.target.result, function(buffer) {
	    		theBuffer = buffer;
	  		}, function(){alert("error loading!");} ); 

	  	};
	  	reader.onerror = function (event) {
	  		alert("Error: " + reader.error );
		};
	  	reader.readAsArrayBuffer(e.dataTransfer.files[0]);
	  	return false;
	};


}

function error() {
    alert('Stream generation failed.');
}

function getUserMedia(dictionary, callback) {
    try {
        navigator.getUserMedia = 
        	navigator.getUserMedia ||
        	navigator.webkitGetUserMedia ||
        	navigator.mozGetUserMedia;
        navigator.getUserMedia(dictionary, callback, error);
    } catch (e) {
        alert('getUserMedia threw exception :' + e);
    }
}

function draw(path, circle){
  var d = 0
  var coordinates = path
  var circle = circle
  return function(){

    if( d == Math.floor(coordinates.getTotalLength())){
      d = 0
    }
    var point = coordinates.getPointAtLength(d)
    circle.setAttribute('cx', point.x);
    circle.setAttribute('cy', point.y);
    d++;    
  }
}

function gotStream(stream) {
    // Create an AudioNode from the stream.
    mediaStreamSource = audioContext.createMediaStreamSource(stream);

    meter = createAudioMeter(audioContext);
    mediaStreamSource.connect(meter);

    console.log(meter)
    // Connect it to the destination.
    analyser = audioContext.createAnalyser();
    analyser.fftSize = 2048;
    mediaStreamSource.connect( analyser );

	// pass it into the audio context
	audioElement = document.querySelector('audio');
	track = audioContext.createMediaElementSource(audioElement);
	track.connect(audioContext.destination);

	//find times
   var path = document.getElementById("birdpath1")
   //path.setAttributeNS(null,"d",mpb["mpb3"])
   var pathLength = path.getTotalLength()
   timeperpoint = soundDuration*1000/pathLength //milliseconds
   nextpoint = Date.now()
   drawSvg = draw(path, document.getElementById("bird1"))

	//set birds

	var coordinates = document.getElementById("birdpath1")
	var point = coordinates.getPointAtLength(0)
	console.log(point)
	document.getElementById("bird1").setAttribute("cx",point.x) 
	document.getElementById("bird1").setAttribute("cy", point.y)
	document.getElementById("bird1").visibility="visible"

	const source = audioContext.createBufferSource();
	source.buffer = theBuffer
	source.connect(audioContext.destination);
	source.start();

   	updatePitch();
}

function togglePlay(){

	if (audioContext.state === 'suspended') {
        audioContext.resume();
    }
    console.log("INTERSECTING")
    console.log(audioElement.duration + " , " + !audioElement.paused)
    if(audioElement.duration > 0 && audioElement.paused){
    	console.log("PLAYING")
        audioElement.play();
    }
    else{
    	//do not do anything, it is playing
    }

}

function toggleOscillator() {
    if (isPlaying) {
        //stop playing and return
        sourceNode.stop( 0 );
        sourceNode = null;
        analyser = null;
        isPlaying = false;
		if (!window.cancelAnimationFrame)
			window.cancelAnimationFrame = window.webkitCancelAnimationFrame;
        window.cancelAnimationFrame( rafID );
        return "play oscillator";
    }
    sourceNode = audioContext.createOscillator();

    analyser = audioContext.createAnalyser();
    analyser.fftSize = 2048;
    sourceNode.connect( analyser );
    analyser.connect( audioContext.destination );
    sourceNode.start(0);
    isPlaying = true;
    isLiveInput = false;
    updatePitch();

    return "stop";
}

function toggleLiveInput() {
    if (isPlaying) {
        //stop playing and return
        sourceNode.stop( 0 );
        sourceNode = null;
        analyser = null;
        isPlaying = false;
        if (!window.cancelAnimationFrame)
			window.cancelAnimationFrame = window.webkitCancelAnimationFrame;
        window.cancelAnimationFrame( rafID );
    }
    getUserMedia(
    	{
            "audio": {
                "mandatory": {
                    "googEchoCancellation": "false",
                    "googAutoGainControl": "false",
                    "googNoiseSuppression": "false",
                    "googHighpassFilter": "false"
                },
                "optional": []
            },
        }, gotStream);
}

function togglePlayback() {
    if (isPlaying) {
        //stop playing and return
        sourceNode.stop( 0 );
        sourceNode = null;
        analyser = null;
        isPlaying = false;
		if (!window.cancelAnimationFrame)
			window.cancelAnimationFrame = window.webkitCancelAnimationFrame;
        window.cancelAnimationFrame( rafID );
        return "start";
    }

    sourceNode = audioContext.createBufferSource();
    sourceNode.buffer = theBuffer;
    sourceNode.loop = true;

    analyser = audioContext.createAnalyser();
    analyser.fftSize = 2048;
    sourceNode.connect( analyser );
    analyser.connect( audioContext.destination );
    sourceNode.start( 0 );
    isPlaying = true;
    isLiveInput = false;
    updatePitch();

    return "stop";
}

var rafID = null;
var tracks = null;
var buflen = 2048;
var buf = new Float32Array( buflen );

var noteStrings = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

function noteFromPitch( frequency ) {
	var noteNum = 12 * (Math.log( frequency / 440 )/Math.log(2) );
	return Math.round( noteNum ) + 69;
}

function frequencyFromNoteNumber( note ) {
	return 440 * Math.pow(2,(note-69)/12);
}

function centsOffFromPitch( frequency, note ) {
	return Math.floor( 1200 * Math.log( frequency / frequencyFromNoteNumber( note ))/Math.log(2) );
}


//intersecting lines 

function intersects(a,b,c,d,p,q,r,s) {
  var det, gamma, lambda;
  det = (c - a) * (s - q) - (r - p) * (d - b);
  if (det === 0) {
    return false;
  } else {
    lambda = ((s - q) * (r - a) + (p - r) * (s - b)) / det;
    gamma = ((b - d) * (r - a) + (c - a) * (s - b)) / det;
    return (0 < lambda && lambda < 1) && (0 < gamma && gamma < 1);
  }
};

// this is the previously used pitch detection algorithm.
/*
var MIN_SAMPLES = 0;  // will be initialized when AudioContext is created.
var GOOD_ENOUGH_CORRELATION = 0.9; // this is the "bar" for how close a correlation needs to be

function autoCorrelate( buf, sampleRate ) {
	var SIZE = buf.length;
	var MAX_SAMPLES = Math.floor(SIZE/2);
	var best_offset = -1;
	var best_correlation = 0;
	var rms = 0;
	var foundGoodCorrelation = false;
	var correlations = new Array(MAX_SAMPLES);

	for (var i=0;i<SIZE;i++) {
		var val = buf[i];
		rms += val*val;
	}
	rms = Math.sqrt(rms/SIZE);
	if (rms<0.01) // not enough signal
		return -1;

	var lastCorrelation=1;
	for (var offset = MIN_SAMPLES; offset < MAX_SAMPLES; offset++) {
		var correlation = 0;

		for (var i=0; i<MAX_SAMPLES; i++) {
			correlation += Math.abs((buf[i])-(buf[i+offset]));
		}
		correlation = 1 - (correlation/MAX_SAMPLES);
		correlations[offset] = correlation; // store it, for the tweaking we need to do below.
		if ((correlation>GOOD_ENOUGH_CORRELATION) && (correlation > lastCorrelation)) {
			foundGoodCorrelation = true;
			if (correlation > best_correlation) {
				best_correlation = correlation;
				best_offset = offset;
			}
		} else if (foundGoodCorrelation) {
			// short-circuit - we found a good correlation, then a bad one, so we'd just be seeing copies from here.
			// Now we need to tweak the offset - by interpolating between the values to the left and right of the
			// best offset, and shifting it a bit.  This is complex, and HACKY in this code (happy to take PRs!) -
			// we need to do a curve fit on correlations[] around best_offset in order to better determine precise
			// (anti-aliased) offset.

			// we know best_offset >=1, 
			// since foundGoodCorrelation cannot go to true until the second pass (offset=1), and 
			// we can't drop into this clause until the following pass (else if).
			var shift = (correlations[best_offset+1] - correlations[best_offset-1])/correlations[best_offset];  
			return sampleRate/(best_offset+(8*shift));
		}
		lastCorrelation = correlation;
	}
	if (best_correlation > 0.01) {
		// console.log("f = " + sampleRate/best_offset + "Hz (rms: " + rms + " confidence: " + best_correlation + ")")
		return sampleRate/best_offset;
	}
	return -1;
//	var best_frequency = sampleRate/best_offset;
}
*/

function autoCorrelate( buf, sampleRate ) {
	// Implements the ACF2+ algorithm
	var SIZE = buf.length;
	var rms = 0;

	for (var i=0;i<SIZE;i++) {
		var val = buf[i];
		rms += val*val;
	}
	rms = Math.sqrt(rms/SIZE);
	if (rms<0.01) // not enough signal
		return -1;

	var r1=0, r2=SIZE-1, thres=0.2;
	for (var i=0; i<SIZE/2; i++)
		if (Math.abs(buf[i])<thres) { r1=i; break; }
	for (var i=1; i<SIZE/2; i++)
		if (Math.abs(buf[SIZE-i])<thres) { r2=SIZE-i; break; }

	buf = buf.slice(r1,r2);
	SIZE = buf.length;

	var c = new Array(SIZE).fill(0);
	for (var i=0; i<SIZE; i++)
		for (var j=0; j<SIZE-i; j++)
			c[i] = c[i] + buf[j]*buf[j+i];

	var d=0; while (c[d]>c[d+1]) d++;
	var maxval=-1, maxpos=-1;
	for (var i=d; i<SIZE; i++) {
		if (c[i] > maxval) {
			maxval = c[i];
			maxpos = i;
		}
	}
	var T0 = maxpos;

	var x1=c[T0-1], x2=c[T0], x3=c[T0+1];
	var a = (x1 + x3 - 2*x2)/2;
	var b = (x3 - x1)/2;
	if (a) T0 = T0 - b/(2*a);

	return sampleRate/T0;
}

function map(val, d1, d2, r1, r2 ){
	return r1 + (val-d1)*(r2-r1)/(d2-d1)
}

function updatePitch( time ) {

	var cycles = new Array;
	analyser.getFloatTimeDomainData( buf );
	var ac = autoCorrelate( buf, audioContext.sampleRate );
	// TODO: Paint confidence meter on canvasElem here.

	pathCanvas.clearRect(0,0,pc.width,pc.height);
	pathCanvas.strokeStyle = "black";
	pathCanvas.beginPath()
	pathCanvas.moveTo(40,40)
	pathCanvas.quadraticCurveTo(40,80,150,200)
	pathCanvas.quadraticCurveTo(180,220,450,400)
	pathCanvas.quadraticCurveTo(550,500,750,600)
	pathCanvas.stroke()

	if(pc){

		if( ac == -1){
			//vague
		}
		else{

			var x = meter.volume
			var y = frequencyFromNoteNumber(noteFromPitch(ac))
			var fnote = frequencyFromNoteNumber(noteFromPitch(ac))

			var centsoff = centsOffFromPitch( ac, noteFromPitch(ac))

			//moving to raidus and angle
			// x = x < 0? pc.width/2: map(x, 0, 0.6 , 40, 1000)
			// y = pc.height - ((y < 55 || y > 2000)? pc.height/2 : map(y, 55, 2000, 40, 1000))

			pathCanvas.beginPath();
			pathCanvas.strokeStyle = "red";
			var r = x < 0? 0: map(x, 0, 0.8 , 0, 1000)
			var angle = (y < 55 || y > 2000)? 0 : map(y, 55, 2000, 0, 360)
			
			// Or, have an angle for each note
			// angle = ((fnote-69)%12)*30
			// console.log("ANGLE " + angle)

			function degreesToRadians(degrees) {
			    return (degrees * Math.PI)/180;
			}
			
			var anglerads = degreesToRadians(angle)
			var xpos = r*Math.cos(anglerads)
			var ypos = r*Math.sin(anglerads)

			if( userpath ){
				// userpath.parentNode.remove(userpath)
				userpath.setAttributeNS(null, "d", "");
			}

			userpath = document.getElementById("user")
			userpath.setAttributeNS(null, "d", "M " + Math.floor(pc.width/2) +"," + Math.floor(pc.height/2) + " l " + xpos + "," + ypos + " z ");

			
			pathCanvas.moveTo(Math.floor(pc.width/2),Math.floor(pc.height/2));
			pathCanvas.arc(Math.floor(pc.width/2),Math.floor(pc.height/2), r, degreesToRadians((-0.99) * angle), degreesToRadians((-1) * angle),false);
			//pathCanvas.lineTo(xpos, ypos)

			pathCanvas.closePath();

			// y_cents = Math.floor(centsoff <= 0 ? 0 : map(centsoff, 0, fnote*Math.pow(2,1/12) - fnote, 0, 50))
			
			// console.log("x and y " + x + " , " + y)
			// pathCanvas.strokeStyle = "red";
			// pathCanvas.beginPath()
			// //pathCanvas.moveTo(0,0);
			
			// pathCanvas.moveTo(Math.floor(pc.width/2),Math.floor(pc.height/2));
			// //pathCanvas.moveTo(prev_x, prev_y) 
			// xpx = Math.floor(x)
			// ypx = Math.floor(y)
			// pathCanvas.quadraticCurveTo(Math.floor(pc.width/2),  Math.floor(pc.height/2) + y_cents, xpx,ypx);
			prev_x = x 
			prev_y = y
			pathCanvas.stroke()	


			if( intersects( 450, 500, 600, 600, Math.floor(pc.width/2), Math.floor(pc.height/2), x, y)){
				togglePlay()
			}

		}
		

		// delta = ac - prev_pitch
		// y_ac = Math.floor(ac*100/880)
		// y_delta = Math.floor(delta*300/880)
		// y_prev = Math.floor(prev_pitch*100/880)

		// if( prev_pitch == -1 || prev_pitch == null || prev_pitch < 0 || ac <= 0 || ) {
		// 	prev_pitch = ac
		// 	y_delta = 0
		// }
		// else{
		// 	//console.log("Difference " + y_delta)
		// }
		
	}

	if (DEBUGCANVAS) {  // This draws the current waveform, useful for debugging
		waveCanvas.clearRect(0,0,512,256);
		waveCanvas.strokeStyle = "red";
		waveCanvas.beginPath();
		waveCanvas.moveTo(0,0);
		waveCanvas.lineTo(0,256);
		waveCanvas.moveTo(128,0);
		waveCanvas.lineTo(128,256);
		waveCanvas.moveTo(256,0);
		waveCanvas.lineTo(256,256);
		waveCanvas.moveTo(384,0);
		waveCanvas.lineTo(384,256);
		waveCanvas.moveTo(512,0);
		waveCanvas.lineTo(512,256);
		waveCanvas.stroke();
		waveCanvas.strokeStyle = "black";
		waveCanvas.beginPath();
		waveCanvas.moveTo(0,buf[0]);
		for (var i=1;i<512;i++) {
			waveCanvas.lineTo(i,128+(buf[i]*128));
		}
		waveCanvas.stroke();
	}

 	if (ac == -1) {
 		detectorElem.className = "vague";
	 	pitchElem.innerText = "--";
		noteElem.innerText = "-";
		detuneElem.className = "";
		detuneAmount.innerText = "--";
 	} else {
	 	detectorElem.className = "confident";
	 	var pitch = ac;
	 	pitchElem.innerText = Math.round( pitch ) ;
	 	var note =  noteFromPitch( pitch );
		noteElem.innerHTML = noteStrings[note%12];
		var detune = centsOffFromPitch( pitch, note );
		if (detune == 0 ) {
			detuneElem.className = "";
			detuneAmount.innerHTML = "--";
		} else {
			if (detune < 0)
				detuneElem.className = "flat";
			else
				detuneElem.className = "sharp";
			detuneAmount.innerHTML = Math.abs( detune );
		}
	}

	// setInterval(drawSvg, 10)
	var now = Date.now()

	if( nextpoint < now){
		drawSvg()
		nextpoint = now + timeperpoint
	}

	if (!window.requestAnimationFrame)
		window.requestAnimationFrame = window.webkitRequestAnimationFrame;
	rafID = window.requestAnimationFrame( updatePitch );

}

document.getElementById("liveinput").addEventListener("click",toggleLiveInput)
