
window.addEventListener("load", function () {
   // Código que se ejecuta cuando la página se carga completamente

   const net = new brain.NeuralNetwork();
   const trainingData = [

      { input: [5.1, 3.5, 1.4, 0.2], output: { setosa: 1 } },
      { input: [4.9, 3.0, 1.4, 0.2], output: { setosa: 1 } },
      { input: [4.7, 3.2, 1.3, 0.2], output: { setosa: 1 } },
      { input: [4.6, 3.1, 1.5, 0.2], output: { setosa: 1 } },
      { input: [5.0, 3.6, 1.4, 0.3], output: { setosa: 1 } },
      { input: [5.4, 3.9, 1.7, 0.4], output: { setosa: 1 } },
      { input: [4.6, 3.4, 1.4, 0.3], output: { setosa: 1 } },
      { input: [5.0, 3.4, 1.5, 0.2], output: { setosa: 1 } },
      { input: [4.4, 2.9, 1.4, 0.2], output: { setosa: 1 } },
      { input: [7.0, 3.2, 4.7, 1.4], output: { versicolor: 1 } },
      { input: [6.4, 3.2, 4.5, 1.5], output: { versicolor: 1 } },
      { input: [6.9, 3.1, 4.9, 1.5], output: { versicolor: 1 } },
      { input: [5.5, 2.3, 4.0, 1.3], output: { versicolor: 1 } },
      { input: [6.9, 3.1, 4.9, 1.5], output: { versicolor: 1 } },
      { input: [6.3, 3.3, 4.7, 1.6], output: { versicolor: 1 } },
      { input: [4.9, 2.4, 3.3, 1.0], output: { versicolor: 1 } },
      { input: [6.6, 2.9, 4.6, 1.3], output: { versicolor: 1 } },
      { input: [5.2, 2.7, 3.9, 1.4], output: { versicolor: 1 } },
      { input: [5.0, 2.0, 3.5, 1.0], output: { versicolor: 1 } },
      { input: [6.3, 3.3, 6.0, 2.5], output: { virginica: 1 } },
      { input: [6.3, 3.3, 6.0, 2.5], output: { virginica: 1 } },
      { input: [5.8, 2.7, 5.1, 1.9], output: { virginica: 1 } },
      { input: [7.1, 3.0, 5.9, 2.1], output: { virginica: 1 } },
      { input: [6.3, 2.9, 5.6, 1.8], output: { virginica: 1 } },
      { input: [6.5, 3.0, 5.8, 2.2], output: { virginica: 1 } },
      { input: [7.6, 3.0, 6.6, 2.1], output: { virginica: 1 } },
      { input: [7.3, 2.9, 6.3, 1.8], output: { virginica: 1 } },
      { input: [6.7, 2.5, 5.8, 1.8], output: { virginica: 1 } },
      { input: [7.2, 3.6, 6.1, 2.5], output: { virginica: 1 } },
      // Datos de entrenamiento para la red neuronal
   ];

   net.train(trainingData); // Entrena la red neuronal con los datos de entrenamiento

   const result = brain.likely([7.0, 3.2, 4.7, 1.4], net);// Realiza una predicción con la red neuronal

   document.getElementById("output").innerHTML = "La prediccion es " + result; // Muestra el resultado en un elemento HTML con id "output"

})
