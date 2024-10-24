function checkAnswer(exerciseNumber, correctAnswer) {
    const userAnswer = parseFloat(document.getElementById(`answer${exerciseNumber}`).value);
    const feedback = document.getElementById(`feedback${exerciseNumber}`);
  
    if (userAnswer === correctAnswer) {
      feedback.textContent = "¡Correcto!";
      feedback.style.color = "green";
    } else {
      feedback.textContent = "Incorrecto. Intenta de nuevo.";
      feedback.style.color = "red";
    }
  }
  
  document.getElementById("exerciseForm").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const type = document.getElementById("type").value;
    const inputExercise = document.getElementById("inputExercise").value;
    const solution = document.getElementById("solution");
  
    let result;
    if (type === "linear") {
      const match = inputExercise.match(/(\d+)x\s*\+\s*(\d+)\s*=\s*(\d+)/);
      if (match) {
        const a = parseFloat(match[1]);
        const b = parseFloat(match[2]);
        const c = parseFloat(match[3]);
        result = (c - b) / a;
      }
    } else if (type === "quadratic") {
      result = "La solución puede tener dos raíces.";
    } else if (type === "system") {
      result = "Resolver sistemas requiere más lógica.";
    }
  
    solution.textContent = result ? `Solución: ${result}` : "Formato no reconocido.";
  });
  