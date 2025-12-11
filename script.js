let timer;
const menu = document.getElementById('menu');
const medArea = document.getElementById('areaMeditacao');
const btoSair = document.getElementById('btSAIR');
const circle = document.querySelector('circle');

// Circunferência do círculo (2 * PI * 140)
const circunferencia = 2 * Math.PI * 190;

circle.style.strokeDasharray = circunferencia;
circle.style.strokeDashoffset = circunferencia;

function comecarMeditacao(minutos) {
    menu.style.display = 'none';
    medArea.style.display = 'flex';
    btoSair.style.display = 'block';
    const tempoTotal = minutos * 60; // segs
    let tempoRestante = tempoTotal;
    circle.style.strokeDashoffset = circunferencia;

    timer = setInterval(() => {
       tempoRestante--;
       
       //porcentagem concluida:
       const offset = circunferencia - (tempoRestante / tempoTotal) * circunferencia;
       circle.style.strokeDashoffset = offset;

       if (tempoRestante <= 0) {
        fimMeditacao();
       }
       
    }, 1000);
}

function fimMeditacao(){
    clearInterval(timer);
    setTimeout(()=> {
        alert("Meditação Concluída.");
        resetApp();
    }, 500);
}

function resetApp() {
    clearInterval(timer);
    menu.style.display = 'flex';
    medArea.style.display = 'none';
    btoSair.style.display = 'none';
    circle.style.strokeDashoffset = circunferencia;
}