var Neuron = synaptic.Neuron;
var Layer = synaptic.Layer;
var Network = synaptic.Network;

var input = new Layer(2); // Two inputs
var output = new Layer (2); // One output

input.project(output); // Connect input to output
// Every neuron of the input layer is connected to every layer of the output layer

var trainingData = [
  {input: [0,0], output: [0,1]}, // A
  {input: [0,1], output: [1,0]}, // B
  {input: [1,0], output: [1,0]}, // C
  {input: [1,1], output: [0,1]}  // D
];

var learningRate = 0.4;

function train() {
  for (var i = 0; i < trainingData.length; i++) {
    input.activate(trainingData[i].input); // Send input data to input layer
    output.activate();
    // Propogate on the output layer to help neural network adjust its configuration
    // Needs learning rate and output data as an input
    output.propagate(learningRate, trainingData[i].output);
  }
}

function retrain() {
  for (var i = 0; i < 30000; i++) {
    trainingData = _.shuffle(trainingData);
    train();
  }
}

retrain(); // Start the training

// Pass an array to the input layer, and then check the neurons of the output layer.
input.activate([0,1]);
var result = output.activate();

console.log(result);

console.log("0: " + result[0]);
console.log("1: " + result[1]);
