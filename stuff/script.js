document.getElementById('rmeq-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Calculate total score
    let totalScore = 0;
    for (let i = 1; i <= 5; i++) {
        totalScore += parseInt(document.querySelector(`select[name="q${i}"]`).value);
    }

    // Determine feedback based on score
    let feedback = '';
    if (totalScore >= 4 && totalScore <= 10) {
        feedback = '<div style="text-align: justify;">Il tuo punteggio è <strong>'+totalScore+'</strong>. Sei un <strong>gufo</strong> &#129417! Rientri nella categoria dei tipi serotini, persone che come ben sai stentano a svegliarsi presto la mattina, sono più attive verso sera e inclini a trattenersi sveglie fino a tarda notte. Questa tipologia di persone possiede in genere una grande capacità di adattamento a variazioni del ciclo attività-riposo, tanto che per loro si parla di elasticità del ciclo attività-riposo. Questa capacità gli consente di vivere abbastanza liberamente senza dovere necessariamente seguire ritmi di vita regolari.</div>';
    } else if (totalScore >= 11 && totalScore <= 18) {
        feedback = '<div style="text-align: justify;">Il tuo punteggio è <strong>'+totalScore+'</strong>. Sei un <strong>orso</strong> &#128059! Non sei risultato né un mattutino né un serotino, ovvero rientri nella categoria dei così detti tipi intermedi. Non ci sono osservazioni di rilievo circa le tue caratteristiche circadiane. Il dato che forse ti può confortare è che la maggioranza della popolazione (circa il 70%) rientra nella tipologia intermedia. In ogni caso, l’appartenenza di un individuo a una data tipologia circadiana non è costante per tutto l’arco della vita, ma può evolversi in funzione di alcuni fattori, tra cui l’età. Pertanto, è possibile che se tra qualche anno ripeterai il test potresti ritrovarti spostato in una della altre due tipologie.</div>';
    } else if (totalScore >= 19 && totalScore <= 25) {
        feedback = '<div style="text-align: justify;">Il tuo punteggio è <strong>'+totalScore+'</strong>. Sei un\'<strong>allodola</strong> &#128038! Rientri nella categoria dei tipi mattutini, persone che tendono a svegliarsi presto la mattina, a essere più attive nella prima metà della giornata e inclini a coricarsi presto la sera. Questa tipologia di persone è in genere più soggetta a un abbassamento dei livelli di vigilanza nel primo pomeriggio (il così detto calo post-prandiale). Può essere consigliabile adottare regolarmente un breve riposo pomeridiano. Siate attenti se dovete guidare tra le 14 e le 16! I mattutini si adattano con difficoltà a modificazioni del ciclo attività-riposo imposte da cause esterne. Per conservare uno stato di benessere psicofisico è preferibile adottare ritmi di vita regolari.</div>';
    }

    // Display feedback
    document.getElementById('result').innerHTML = feedback;
});