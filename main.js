const img_output =  document.getElementById('img-output');

function loadFile(event){
  img_output.src = URL.createObjectURL(event.target.files[0]);
}

async function classifyImg(){
  console.log("Classify in progress...");
  const result = await net.classify(img_output);
  console.log("Classification completed");
  document.getElementById('answer').innerText = `
    Prediction: \n${result[0].className}\n
    Probability: \n${result[0].probability}\n
  `
}

async function loadApp(){
  // load the model
  console.log('Loading mobilenet...');
  net = await mobilenet.load();
  console.log('Sucessfully loaded model');
  // make a prediction through the model on the uploaded img upon click
  document.getElementById('classify').addEventListener("click", classifyImg);
}

loadApp();
