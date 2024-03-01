function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

document.getElementById("filterButton").addEventListener("click", function() {
    const input = document.getElementById("numbers").value;
    const numbers = input.split(",");
    console.log(numbers);
    const primeNumbers = [];

    for (let i = 0; i < numbers.length; i++) {
        const num = parseInt(numbers[i].trim());
        if (!isNaN(num) && isPrime(num)) {
            primeNumbers.push(num);
        }
    }

    displayResult(primeNumbers);
});

function displayResult(primeNumbers) {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "<h2>Prime Numbers:</h2>";
    if (primeNumbers.length === 0) {
        resultDiv.innerHTML += "<p>No prime numbers found.</p>";
    } else {
        resultDiv.innerHTML += "<p>" + primeNumbers.join(", ") + "</p>";
    }
}
