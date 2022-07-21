
// Query DOM Elements
const path = document.querySelector('.infinity');
const circle = document.querySelector('.circle');

// // Create an object that gsap can animate
// const val = { distance: 0 };
// // Create a tween
// gsap.to(val, {
//   // Animate from distance 0 to the total distance
//   distance: path.getTotalLength(),
//   // Loop the animation
//   repeat: -1,
//   // Make the animation lasts 5 seconds
//   duration: 5,
//   // Function call on each frame of the animation
//   onUpdate: () => {
//     // Query a point at the new distance value
//     const point = path.getPointAtLength(val.distance);
//     // Update the circle coordinates
//     circle.setAttribute('cx', point.x);
//     circle.setAttribute('cy', point.y);
//   }
// });


var pathlen = path.getTotalLength()
var distance = 0
var rafID = null
var nextPointTime = 0.0;     // when the next note is due.
var timeperpoint = 0.0

if (!window.requestAnimationFrame)
  window.requestAnimationFrame = window.webkitRequestAnimationFrame;

var drawSvg = draw(path)

function draw(path){
  var d = 0
  var coordinates = path
  return function(){

    console.log(d)
    if( d == Math.floor(coordinates.getTotalLength())){
      d = 0
    }
    var point = coordinates.getPointAtLength(d)
    circle.setAttribute('cx', point.x);
    circle.setAttribute('cy', point.y);
    d++;    
  }
}

var theBuffer = null
var soundDuration = null

window.onclick = function() {

  audioContext = new AudioContext();
  MAX_SIZE = Math.max(4,Math.floor(audioContext.sampleRate/5000));  // corresponds to a 5kHz signal

  var request = new XMLHttpRequest();
  request.open("GET", "./sounds/whole5.wav", true);
  request.responseType = "arraybuffer";
  request.onload = function() {
    audioContext.decodeAudioData( request.response, function(buffer) {
       theBuffer = buffer;
       console.log(theBuffer.duration);
       soundDuration = theBuffer.duration
       //getDuration(theBuffer)
       pathLength = path.getTotalLength()
       timeperpoint = soundDuration*1000/pathLength //milliseconds
       console.log(timeperpoint)
       nextpoint = Date.now()
       draw(theBuffer.duration)
       updateBird();
   } );
  }
  request.send();
}

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


function updateBird(){

  // setInterval(drawSvg, 10)
  var now = Date.now()

  console.log( nextpoint - now)
  if( nextpoint < now){
    drawSvg()
    nextpoint = now + timeperpoint
  }

  if (!window.requestAnimationFrame)
    window.requestAnimationFrame = window.webkitRequestAnimationFrame;
  rafID = window.requestAnimationFrame( updateBird );

}
