const webcamElement = document.getElementById('cam');
  const canvasElement = document.getElementById('canvas1');
  const webcam = new Webcam(webcamElement, 'user', canvasElement);
  webcam.start()