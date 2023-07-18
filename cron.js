
$(document).ready(function () {
    const counter = $("#counter");
    const startButton = $('.start-button');
    const stopButton = $('.stop-button');
    const resetButton = $('.reset-button');
    const startDiv = $('.start-div');
    const stopResetDiv = $('.stop-reset-div');
    let tempo = 0;
    let counterActive = false;
    let intervalId;
    $('.stop-button').hide();



function formatarTempo(tempo) {
    const horas = Math.floor(tempo / 3600);
    const minutos = Math.floor((tempo % 3600) / 60);
    const segundos = tempo % 60;

    return `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
}

function add() {
    if (!counterActive) {
        counterActive = true;
        intervalId = setInterval(() => {
            tempo++;
            counter.text(formatarTempo(tempo));
        }, 1000);

    }
    $('.start-button').hide();
    $('.stop-button, .reset-buttoon').show();
}

function stop() {
    if(counterActive){
        counterActive = false;
        clearInterval(intervalId)
    }
    $('.start-button').show();
    $('.stop-button').hide();


}

function reset() {
    tempo = 0;
    counter.text(formatarTempo(tempo));
    stop();
}


    startButton.on('click', add);
    stopButton.on('click', stop);
    resetButton.on('click', reset);
});