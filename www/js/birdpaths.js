
//bird paths

var mpb = [

	// "mpb1": "M578.951,656.887c8.051-22.355,22.203-89.424,1.832-149.346c-6.273-18.455-33.715-59.947-31.129-102.789c2.519-41.717-15.339-66.491-18.768-85.967c-3.604-20.464,19.343-21.619,18.54-35.724c-0.918-16.113-5.266-25.662,0.457-27.196c10.619-2.845,11.444-23.277,21.688-32.389c8.793-7.822,8.069-7.087,22.681-16.957c6.445-4.354,8.483-31.591,10.414-39.308c1.101-4.398-14.531-53.396,17.056-46.204c6.215,1.415,19.72-25.781,21.779-39.84",
	// "mpb2": "M676,79c9.117,21.741,75.309,38.961,79,73c3.923,36.167,37.098,83.422,33,119c-22,191-124.695,473.851-99,497",
	// "mpb3": "M474,301c4.227-10.142,21-126,102-188 c26.308-20.137,45.387-48.396,41-56c-22.339-38.72-1.808-69.865,20-52c13.268,10.869,90,13,64,109c-12.802,47.269-28.062,117.836-8,167c17.69,43.354,48.278,24.882,54,43c12,38-13.436,35.859-26,61.027C707.329,412.412,782,472,698,536",
	// "mpb4": "M658,763c55-31-76.579-41.461-71-52c27-51,121-92,123-135 c2.509-53.941,3.314-31.155,34-75c9.314-13.309,34.597,45,48,17c13.789-28.808,40-33,43-61c2.276-21.241-5.406-72.441,2-81c45-52,124.822-127,187-127",
	// "mpb5a": "M609,576c-13.238,0-26.141-31.156-58.5-39.5c-31.595-8.146-87.198,11.991-112-8.5c-13.648-11.275-19.71-29.968-25.5-46c-6.5-18-36.53,5.208-40.5-6c-17.001-48,60.5-117.5,70-142.5c7.142-18.795,7.5-46,26-54c16.836-7.281,11.182-34.336,23.5-58.5",
	// "mpb5b": "M609,576c0,4.109,86.752,28,86.752,40c0,54.915,87.293,74.288,86.748,78c-8,54.5-169.723-70-167.5-70",
	// "mpb5c": "M615,624c-51.238,1.43-192.5-12-209.5-72.5c-11.589-41.242,43.323-96.76,61-175c2.982-13.201-29.72-31.292-19.5-38.5c42.536-30,24.426-92.66,42.536-119",
	// "mpb6": "M670,85.5c13,6.5,0.726,20.922,2,31c0.721,5.699,10.34-5.071,10.5,1c0.397,15.036-6.027,30.739-6.5,48c-4,146-85.552,386-86,386",
	// "mpb7": "M584,231c65.5,4.5,70.635,28.669,99,51c12.915,10.167,36.285,22.099,48,38.5c5,7,20.225-12.948,25,16.5c3,18.5-24.319,32.237-28.5,57.5c-3.531,21.339-15.681,63.695-4.5,95c2.5,7-44.916,29.475-52.885,25.5c-45.115-22.5-53.17,0.625-61.615,3",
	// "mpb8": "M426.5,307.5c7-15,33-13.5,42-45c6.312-22.093,32.243-41.354,49.5-62c20.864-24.962,44.653-32.296,67-52.5c16.776-15.169,31.199,78.033,47,70c19.488-9.907,33-155,48-131c17.881,28.61,29.544,61.331,32,135c1.971,59.119,38,101.5,15.952,177.577C720.273,426.074,747.901,513.772,756,527",
	// "mpb9": "M276.5,0C325,48,157.747,78.481,165,122C179,206-0.594,246.162,4.5,276c10.5,61.5,396.592,40.734,399.459,78.666C406.636,390.078,360.5,391.5,358,426c-2.217,30.597-14.713,58.613-6.764,87.484c11.268,40.925,34.3,18.753,50.264,53.016c13.293,28.53-198.819,81.003-182,101.5c12.719,15.5-29.973,42.389-32,55c-4.146,25.794-2,34.5-10,42.5"	

	"M578.951,656.887c8.051-22.355,22.203-89.424,1.832-149.346c-6.273-18.455-33.715-59.947-31.129-102.789c2.519-41.717-15.339-66.491-18.768-85.967c-3.604-20.464,19.343-21.619,18.54-35.724c-0.918-16.113-5.266-25.662,0.457-27.196c10.619-2.845,11.444-23.277,21.688-32.389c8.793-7.822,8.069-7.087,22.681-16.957c6.445-4.354,8.483-31.591,10.414-39.308c1.101-4.398-14.531-53.396,17.056-46.204c6.215,1.415,19.72-25.781,21.779-39.84",
	"M676,79c9.117,21.741,75.309,38.961,79,73c3.923,36.167,37.098,83.422,33,119c-22,191-124.695,473.851-99,497",
	"M474,301c4.227-10.142,21-126,102-188 c26.308-20.137,45.387-48.396,41-56c-22.339-38.72-1.808-69.865,20-52c13.268,10.869,90,13,64,109c-12.802,47.269-28.062,117.836-8,167c17.69,43.354,48.278,24.882,54,43c12,38-13.436,35.859-26,61.027C707.329,412.412,782,472,698,536",
	"M658,763c55-31-76.579-41.461-71-52c27-51,121-92,123-135 c2.509-53.941,3.314-31.155,34-75c9.314-13.309,34.597,45,48,17c13.789-28.808,40-33,43-61c2.276-21.241-5.406-72.441,2-81c45-52,124.822-127,187-127",
	"M609,576c-13.238,0-26.141-31.156-58.5-39.5c-31.595-8.146-87.198,11.991-112-8.5c-13.648-11.275-19.71-29.968-25.5-46c-6.5-18-36.53,5.208-40.5-6c-17.001-48,60.5-117.5,70-142.5c7.142-18.795,7.5-46,26-54c16.836-7.281,11.182-34.336,23.5-58.5",
	"M609,576c0,4.109,86.752,28,86.752,40c0,54.915,87.293,74.288,86.748,78c-8,54.5-169.723-70-167.5-70",
	"M615,624c-51.238,1.43-192.5-12-209.5-72.5c-11.589-41.242,43.323-96.76,61-175c2.982-13.201-29.72-31.292-19.5-38.5c42.536-30,24.426-92.66,42.536-119",
	"M670,85.5c13,6.5,0.726,20.922,2,31c0.721,5.699,10.34-5.071,10.5,1c0.397,15.036-6.027,30.739-6.5,48c-4,146-85.552,386-86,386",
	"M584,231c65.5,4.5,70.635,28.669,99,51c12.915,10.167,36.285,22.099,48,38.5c5,7,20.225-12.948,25,16.5c3,18.5-24.319,32.237-28.5,57.5c-3.531,21.339-15.681,63.695-4.5,95c2.5,7-44.916,29.475-52.885,25.5c-45.115-22.5-53.17,0.625-61.615,3",
	"M426.5,307.5c7-15,33-13.5,42-45c6.312-22.093,32.243-41.354,49.5-62c20.864-24.962,44.653-32.296,67-52.5c16.776-15.169,31.199,78.033,47,70c19.488-9.907,33-155,48-131c17.881,28.61,29.544,61.331,32,135c1.971,59.119,38,101.5,15.952,177.577C720.273,426.074,747.901,513.772,756,527",
	"M276.5,0C325,48,157.747,78.481,165,122C179,206-0.594,246.162,4.5,276c10.5,61.5,396.592,40.734,399.459,78.666C406.636,390.078,360.5,391.5,358,426c-2.217,30.597-14.713,58.613-6.764,87.484c11.268,40.925,34.3,18.753,50.264,53.016c13.293,28.53-198.819,81.003-182,101.5c12.719,15.5-29.973,42.389-32,55c-4.146,25.794-2,34.5-10,42.5"	

]

var tracks = [
	"./sounds/whole5.mp3",	
	"./sounds/whole5.mp3",	
	"./sounds/whole5.mp3",	
	"./sounds/whole5.mp3",	
	"./sounds/whole5.mp3",	
	"./sounds/whole5.mp3",	
	"./sounds/whole5.mp3",	
	"./sounds/whole5.mp3",	
	"./sounds/whole5.mp3",	
	"./sounds/whole5.mp3",	
	"./sounds/whole5.mp3",	
	]

class Bird {
  
  constructor(path,svg,ctx) {
    this.d = path;
    this.svg = svg
    this.timeperpoint = 0
    this.nextPoint = 0
    this.buffer = []
    this.soundDuration = 0.0
    this.loaded = 0
    this.audioctx = ctx
    this.pathPointer = 0
    this.track = null

    this.path = document.createElementNS('http://www.w3.org/2000/svg',"path"); 
    this.path.setAttributeNS(null,"d",path)
    this.path.setAttributeNS(null, "stroke", "#000000"); 
	this.path.setAttributeNS(null, "stroke-width", 1);
	this.path.setAttributeNS(null, "fill", "None");  

	this.circle = document.createElementNS('http://www.w3.org/2000/svg',"circle"); 
	var start = this.path.getPointAtLength(0)
	this.circle.setAttribute("cx",start.x)
	this.circle.setAttribute("cy",start.y)
	this.circle.setAttribute("r",10)

	this.svg.appendChild(this.path)
	this.svg.appendChild(this.circle)

  }	

  pointsAtD(d){
  	return d < this.path.getTotalLength()? this.path.getPointAtLength(d): null;
  }

  pathLen(){
  	return this.path.getTotalLength()
  }

  removeBird(){
  	return this.path.parentNode.remove(this.path)
  }

  addSound(track){
		
	  var audioCtx = this.audioctx
	  var request = new XMLHttpRequest();
	  this.request = request
	  var that = this
	    
	  request.open("GET", track, true);
	  request.responseType = "arraybuffer";
	  request.onload = function() {
	    audioCtx.decodeAudioData( request.response, function(buffer) {
	       that.buffer = buffer;
	       that.soundDuration = buffer.duration
	       console.log("Loaded " + track)
	       that.loaded = 1
	   })
	  }
	  request.send();

  }

  moveOnPath(){
  	this.pathPointer = ( this.pathPointer + 1 )
  	if( this.pathPointer < this.path.getTotalLength()){
		var start = this.path.getPointAtLength(this.pathPointer)
		this.circle.setAttribute("cx",start.x)
		this.circle.setAttribute("cy",start.y)
		this.circle.setAttribute("r",10)
  	}

  }

  inittime(){

  	if( this.request.status != 200){
		alert("Sorry, the sounds are taking time to load. Please wait for few seconds to let them load and try again.")
		return null
	}

  	this.nextPoint = Date.now()
   	var pathLength = this.path.getTotalLength()
   	this.timeperpoint = this.soundDuration*1000/pathLength //milliseconds

   	return 1
   	
  }

  updateTime(now){
  	this.nextPoint = now + this.timeperpoint
  }

  playSound(){
  	console.log(this)
	const source = this.audioctx.createBufferSource();
	source.buffer = this.buffer

	source.connect(this.audioctx.destination);
	source.start();

  }

}

export function createBirds(svg, audioContext){

	var birdlist = []

	while(birdlist.length < 5){

		console.log("Created path " + birdlist.length)
		var trackind = Math.floor(Math.random()*mpb.length)
		var newBird = new Bird(mpb[trackind], svg, audioContext)
		newBird.addSound(tracks[trackind])
		birdlist.push(newBird)
	}

	function sumLoaded( birdlist){
		return birdlist.map(function(b){return b.loaded}).reduce(function(a,b){return a+b});
	}

	// while( sumLoaded(birdlist) < birdlist.length){
	// 	//Wiating for sounds to load
	// 	console.log("Waiting")
	// }

	document.getElementById("info").style.visibility = "hidden"
	document.getElementById("liveinput").style.visibility = "visible"



	return birdlist;

}