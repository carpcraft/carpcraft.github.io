document.getElementById('sleequal-form').addEventListener('submit', function(event) {
    
    event.preventDefault(); // Prevent form from submitting normally

    // Calculate total score
    let totalScore = 0;
    let quality = parseInt(document.querySelector(`select[name="q1"]`).value);
    let latency = parseInt(document.querySelector(`select[name="q2"]`).value);
    let duration = parseInt(document.querySelector(`select[name="q3"]`).value);
    let daytime = parseInt(document.querySelector(`select[name="q4"]`).value);
    for (let i = 1; i <= 4; i++) {
        totalScore += parseInt(document.querySelector(`select[name="q${i}"]`).value);
    }

    let percentile;
    let percPlot;
    if (totalScore <= 4) {
        percentile = 'tra il 1° e il 25° percentile';
        percPlot = 25;
    } else if (totalScore > 4 && totalScore <= 5) {
        percentile = 'tra il 25° e il 50° percentile';
        percPlot = 50;
    } else if (totalScore > 5 && totalScore <= 7) {
        percentile = 'tra il 50° e il 75° percentile';
        percPlot = 75;
    } else {
        percentile = 'tra il 75° e il 100° percentile';
        percPlot = 100;
    }

    // Determine feedback based on score
    let feedback = 'Il tuo punteggio totale di qualità del sonno è <strong>'+totalScore+'</strong> &#128164. <br>Qualità del sonno: <strong>'+quality+'</strong>; latenza: <strong>'+latency+'</strong>; durata: <strong>'+duration+'</strong>; problemi diurni: <strong>'+daytime+'</strong>.<br>Ricorda che un punteggio maggiore corrisponde a una peggiore qualit&agrave; del sonno.<br>&#128202 Il tuo punteggio si colloca <strong>'+percentile+'</strong> per la popolazione di riferimento.';
    

    // Display feedback
    document.getElementById('result').innerHTML = feedback;

    let percentileBar = document.getElementById('percentileBar');
    percentileBar.innerHTML = `<div style="height: 20px; width: ${percPlot}%; background-color: #822433;"></div>`;
});
