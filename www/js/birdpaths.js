
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
	"M426.5,307.5c7-15,33-13.5,42-45c6.312-22.093,32.243-41.354,49.5-62c20.864-24.962,44.653-32.296,67-52.5c16.776-15.169,31.199,78.033,47,70c19.488-9.907,33-155,48-131c17.881,28.61,29.544,61.331,32,135c1.971,59.119,38,101.5,15.952,177.577C720.273,426.074,747.901,513.772,756,527",
	"M276.5,0C325,48,157.747,78.481,165,122C179,206-0.594,246.162,4.5,276c10.5,61.5,396.592,40.734,399.459,78.666C406.636,390.078,360.5,391.5,358,426c-2.217,30.597-14.713,58.613-6.764,87.484c11.268,40.925,34.3,18.753,50.264,53.016c13.293,28.53-198.819,81.003-182,101.5c12.719,15.5-29.973,42.389-32,55c-4.146,25.794-2,34.5-10,42.5"	

]

var mph = [

	"M837.535,277.454c-12.582,6.12-50.476,9.526-92.151,8.054c-27.044-0.956-55.682-3.967-80.027-9.624c-59.489-13.822-95.384-56.279-114.643-80.572 M725.49,386.279c0-6.579,1.197-43.109,8.651-57.028c10.842-20.243,26.73-41.206,11.242-43.744 M554.607,240.58c4.613,9.685,51.341,57.168,80.536,68.293c15.221,5.799,16.042,2.73,24.229-4.885c2.5-2.325,34.677-13.721,36.413-22.614",
	"M481.928,141.422c32.446,51.274,1.559,41.491,12.818,72.271c7.509,20.527,57.151,10.745,61.045,62.542c0.896,11.938,32.14,0,11.363,35.655c-8.826,15.145-25.958,21.545-11.309,49.396c24.362,46.31,12.146,101.441,3.954,121.262 M550.714,311.891c-24.659-15.603-41.309,53.461,5.132,49.396 M559.679,369.321c-8.965,36.839-50.274,4.924-70.668,14.864c-21.83,10.641-14.236,75.003-14.236,108.304",
	"M448.185,455.837c-10.722-40.865-52.528-123.172-27.254-132.342c8.652-3.14,51.214,0.78,63.595-6.279c30.282-17.265,32.792-68.55,14.682-71.677 M426.554,292.626c-3.109,0-5.624,13.807-5.624,30.868",
	"M580.564,311.983c16.006,41.335,106.701,65.646,119.938,60.75c32.014-11.84,80.362,74.236,103.289,101.442 M574.271,332.389c0,25.737,57.775,41.52,127.729,41.52 M700.503,372.733c0,53.209,35.802,83.104,38.159,101.442 M571.636,319.551c-41.142,45.827,8.929,103.904,80.031,51.163 M598.301,390.689c0,47.704,57.854,86.306,129.352,86.306"	

]

var compulsorypath = "M584,231c65.5,4.5,70.635,28.669,99,51c12.915,10.167,36.285,22.099,48,38.5c5,7,20.225-12.948,25,16.5c3,18.5-24.319,32.237-28.5,57.5c-3.531,21.339-15.681,63.695-4.5,95c2.5,7-44.916,29.475-52.885,25.5c-45.115-22.5-53.17,0.625-61.615,3"
var compulsorytrack = "./sounds/mottwnh_memory3.mp3"

var tracks = [
	"./sounds/whole5.mp3",	
	"./sounds/whole1.mp3",	
	"./sounds/whole5.mp3",	
	"./sounds/whole1.mp3",	
	"./sounds/whole5.mp3",	
	"./sounds/whole1.mp3",	
	"./sounds/whole5.mp3",	
	"./sounds/whole1.mp3",	
	"./sounds/whole5.mp3",	
	"./sounds/whole1.mp3",	
 	]

class Bird {
  
  constructor(path,svg,ctx, gridlist, ind) {
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
    this.gridlist = gridlist
    this.id = "p"+ind

    this.path = document.createElementNS('http://www.w3.org/2000/svg',"path"); 
    this.path.setAttributeNS(null,"d",path)
    this.path.setAttributeNS(null, "stroke", "#000000"); 
	this.path.setAttributeNS(null, "stroke-width", 1);
	this.path.setAttributeNS(null, "fill", "None");
	this.path.setAttributeNS(null, "id", this.id);  

	this.circle = document.createElementNS('http://www.w3.org/2000/svg',"circle"); 
	var start = this.path.getPointAtLength(0)
	this.circle.setAttribute("cx",start.x)
	this.circle.setAttribute("cy",start.y)
	this.circle.setAttribute("r",10)

	this.svg.appendChild(this.path)
	this.svg.appendChild(this.circle)

  }	

  addTextPath(){
		
		let textElem = document.createElementNS('http://www.w3.org/2000/svg', "text");

		// Create a <textPath> element
		let textPath = document.createElementNS('http://www.w3.org/2000/svg', "textPath");
		textPath.setAttribute("href", "#"+this.id);
		//Center text
		textPath.setAttribute("dominant-baseline", "Middle");
		textPath.setAttribute("startOffset", 50);
		textPath.setAttribute("text-anchor", "middle");

		// Give it a class that will determine the text size, colour, etc
		// textPath.classList.add("label-text");
		// Set the text
		textPath.textContent = "meditternenanseameditternenanseameditternenanseameditternenansea";

		// Add the elements directly after the label background path
		// bgPath.after(pathElem);
		// pathElem.after(textElem);
		textElem.appendChild(textPath);
		this.svg.appendChild(textElem)

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

  addSound(track, loop){
		
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

  	this.source = this.audioctx.createBufferSource();
	this.loop = loop

  }

  moveOnPath(){
  	
  	var totalLength = this.path.getTotalLength();
  	this.pathPointer = ( this.pathPointer + 1 ) % totalLength;

  	if( this.pathPointer < totalLength){
		var start = this.path.getPointAtLength(this.pathPointer)
		this.circle.setAttribute("cx",start.x)
		this.circle.setAttribute("cy",start.y)
		this.circle.setAttribute("r",10)
	  	this.checkIntersection(start.x, start.y)
  	}

  }

  checkIntersection(x,y){

  	for(var i=0; i < this.gridlist.length; i++){
  		this.gridlist[i].intersects(x,y)
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

  	this.source = this.audioctx.createBufferSource();
	this.source.loop = this.loop
	this.source.buffer = this.buffer
	this.source.connect(this.audioctx.destination);
	this.source.start();

  }


}

export function createBirds(svg, audioContext, gridlist){

	var birdlist = []

	var firstbird = new Bird(compulsorypath, svg, audioContext, gridlist, -1); //-1 as in its is the backing track
	firstbird.addSound(compulsorytrack, false)
	
	birdlist.push(firstbird)

	while(birdlist.length < 5){

		console.log("Created path " + birdlist.length)
		var trackind = Math.floor(Math.random()*mpb.length)
		var newBird = new Bird(mpb[trackind], svg, audioContext, gridlist, trackind)
		newBird.addSound(tracks[trackind], true)
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
	document.getElementById("pause").innerText = "Pause"
	document.getElementById("pause").style.visibility = "visible"

	birdlist[0].source.onended = function(event){
		for(var b=1; b<birdlist.length; b++){
			birdlist[b].source.stop()
		}
	}

	return birdlist;

}


//selects 5 out of 11 human paths and makes them visible
export function humanpaths(svg, audioContext){

	var humanlist = []

	// var ctr = 0
	// while(ctr < mph.length){

	// 	console.log("Created path " + humanlist.length)
	// 	var trackind = ctr
	// 	var newBird = new Bird(mph[trackind], svg, audioContext, [], trackind)
	// 	newBird.addTextPath()
	// 	humanlist.push(newBird)
	// 	ctr++
	// }

	document.getElementById("humanpaths").style.visibility = "visible"
	var gtags = document.getElementsByTagName('g');
	var len = gtags.length-1
	var randnarray = []

	while( randnarray.length < 5){
		let newn = Math.floor(Math.random()*len)
		if( randnarray.indexOf(newn) == -1 ){
			randnarray.push(newn)
			console.log(newn)
			console.log(gtags.item(newn+1))
			gtags.item(newn+1).style.visibility = "visible"
		}
	}

	for(let i=1;i<12;i++){
		if( randnarray.indexOf(i-1) == -1){
			gtags.item(i).style.visibility = "hidden"
		}

	}

	return humanlist;

}