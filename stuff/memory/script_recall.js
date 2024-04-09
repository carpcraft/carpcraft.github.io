const words = ["mela", "banana", "tamburo", "giardino", "baffi", "finestra", "fiume", "alveare"];
const displayTime = 8000; // 8 seconds to memorize


function checkAnswers() {
    const userInput = document.getElementById("user-input").value;
    const userWords = userInput.split(",").map(word => word.trim().toLowerCase());
    let correctAnswers = 0;

    words.forEach(word => {
        if(userWords.includes(word)) {
            correctAnswers++;
        }
    });

    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `<p>Hai ricordato <strong>${correctAnswers}</strong> parole su un totale di ${words.length}.</p>`;
    resultsDiv.style.display = "block";
    document.getElementById("recall-instructions").style.display = "none";
}
