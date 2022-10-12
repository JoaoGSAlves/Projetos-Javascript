const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const anoNovo = '1 Jan 2023';

 function countdown() {
    const dataAnoNovo = new Date(anoNovo);
    const dataAtual = new Date();

    const segundosTotais = (dataAnoNovo - dataAtual) / 1000;

    const dias = Math.floor(segundosTotais / 3600 / 24);
    const horas = Math.floor(segundosTotais / 3600) % 24;
    const minutos = Math.floor(segundosTotais / 60) % 60;
    const segundos = Math.floor(segundosTotais) % 60;

    daysEl.innerHTML = dias;
    hoursEl.innerHTML = formatTime(horas);
    minsEl.innerHTML = formatTime(minutos);
    secondsEl.innerHTML = formatTime(segundos);
    
 }

 function formatTime(time) {
    return time < 10 ? `0${time}` : time;
 }

 countdown();
 setInterval(countdown,1000);