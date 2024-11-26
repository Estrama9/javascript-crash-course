function convertUnits() {
    const inputElement = document.querySelector("input");
    const resultElement = document.getElementById("results");
    const unitSelector = document.querySelector("select");

    const MILES_TO_KILOMETERS = 1.6093;
    const KILOMETERS_TO_MILES = 0.6214;

    if (inputElement.value === "" || inputElement.value <= 0) {
        alert("Please insert a positive number")
        return
    }

    let convertedValue;

    if (unitSelector.value === "Km") {
        convertedValue = inputElement.value * MILES_TO_KILOMETERS;
    } else if (unitSelector.value === "Miles") {
        convertedValue = inputElement.value * KILOMETERS_TO_MILES;
    }
    resultElement.innerHTML = Math.round(convertedValue * 10) /10;
}
