const canvasCtx = canvas.getContext('2d');
const WIDTH = canvas.width = 500;
const HEIGHT = canvas.height = 150;

const audioCtx = new (window.AudioContext || window.webkitAudioContext);
const analyser = audioCtx.createAnalyser();

const nyquist = audioCtx.sampleRate / 2;

// highest precision
analyser.fftSize = 32768;

const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);
const osc = audioCtx.createOscillator();
osc.frequency.value = 400;
osc.connect(analyser);
osc.connect(audioCtx.destination);

range.oninput = e => {
  osc.frequency.value = range.value;
};

if(!audioCtx.state || audioCtx.state === 'running') {
  begin();
}
else {
  log.textContent = 'click anywhere to begin';
  onclick = e => {
    onclick = null;
    begin()
  }
}

function begin() {
  osc.start(0);
  draw();
}

function draw() {
  requestAnimationFrame(draw);

  // get the Frequency Domain
  analyser.getByteFrequencyData(dataArray);

  canvasCtx.fillStyle = 'rgb(0, 0, 0)';
  canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

  const barWidth = (WIDTH / bufferLength) * 2.5;
  let max_val = -Infinity;
  let max_index = -1;
  let x = 0;
  for(let i = 0; i < bufferLength; i++) {
    let barHeight = dataArray[i];
    if(barHeight > max_val) {
      max_val = barHeight;
      max_index = i;
    }

    canvasCtx.fillStyle = 'rgb(' + (barHeight+100) + ',50,50)';
    canvasCtx.fillRect(x,HEIGHT-barHeight/2,barWidth,barHeight/2);
    x += barWidth;
  }
  log.textContent = `loudest freq: ${max_index * (nyquist / bufferLength)}
real value: ${range.value}`;
}
