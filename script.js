document
  .getElementById("derivative-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const expression = document.getElementById("expression").value;
    const variable = "x"; // Asumimos que la variable siempre es 'x'

    try {
      const result = math.derivative(expression, variable).toString();
      document.getElementById(
        "result"
      ).innerText = `La derivada de ${expression} con respecto a ${variable} es: ${result}`;
    } catch (error) {
      document.getElementById("result").innerText = `Error: ${error.message}`;
    }
  });
