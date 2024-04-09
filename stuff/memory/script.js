const words = ["mela", "banana", "ciliegia", "appuntamento", "ulivo", "figura", "grappolo", "alveare"];
const displayTime = 5000; // 5 seconds to memorize

document.getElementById("startButton").onclick = function() {
    startTest();
};

function startTest() {
    document.getElementById("startButton").style.display = "none";
    document.getElementById("instruction").style.display = "none";
    const wordListDiv = document.getElementById("word-list");
    wordListDiv.innerHTML = words.join("<br>");
    wordListDiv.style.display = "block";

    setTimeout(function() {
        wordListDiv.style.display = "none";
        document.getElementById("recall-instructions").style.display = "block";
    }, displayTime);
}

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
    resultsDiv.innerHTML = `<p>Hai ricordato <strong>${correctAnswers}</strong> parole su un totale di ${words.length}.<br>Vai alla <a href="memory_recall.html" title="prova differita">prova di richiamo</a>!</p>`;
    resultsDiv.style.display = "block";
    document.getElementById("recall-instructions").style.display = "none";
}
