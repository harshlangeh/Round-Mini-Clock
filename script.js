



function displayTime(){
    const time = new Date;
    let hours = time.getHours().toString().padStart(2,0);
    let minutes = time.getMinutes().toString().padStart(2,0);
    let seconds = time.getSeconds().toString().padStart(2,0);
    let mytime = `${hours}:${minutes}:${seconds}`;

    document.querySelector(".clock").textContent = mytime;
}

setInterval(displayTime,1000);