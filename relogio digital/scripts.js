const relogio = document.querySelector(".relogio");

function showHour() {
    const data = new Date();
    const hour = data.getHours();
    const minute = data.getMinutes();
    const seconds = data.getSeconds();
    relogio.innerHTML = hour + ":" + minute + ":" + seconds;
}

showHour();

setInterval(() => {
    showHour();
}, 1000);
