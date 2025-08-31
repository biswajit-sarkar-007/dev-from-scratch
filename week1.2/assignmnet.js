// create a clock in terminal
function timeFn() {
    let currentTime = new Date();
    let hours = String(currentTime.getHours()).padStart(2, '0');
    let minutes = String(currentTime.getMinutes()).padStart(2, '0');
    let seconds = String(currentTime.getSeconds()).padStart(2, '0');

    let finalTime = `${hours}:${minutes}:${seconds}`;
    console.clear();  
    console.log(finalTime);
}

setInterval(timeFn, 1000);
