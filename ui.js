console.log("UI: Interfaz de usuario cargada.");

function updateResult(message) {
    const resultElement = document.getElementById("result");
    resultElement.textContent = message;
    const gifContainer = document.getElementById("gifperrobailarin");

    gifperrobailarin.innerHTML = "";

    if (message !== "") {
        const gif = document.createElement("img");
        gif.src = "https://i.pinimg.com/originals/00/ad/e5/00ade57d293e6fbbfea884580e148b92.gif";
        gif.alt = "Resultado";
        gif.classList.add("result-gif");
        gifContainer.appendChild(gif);
    }
}

function getInputValues() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;
    return { num1, num2, operation };
}