const clockTitle = document.querySelector("h1.js-clock");
//const clockTitle = document.getElementsByClassName("js-clock");

function currentTime(){
    const date = new Date();
    const hour = date.getHours();
    const min = date.getMinutes();

    clockTitle.innerText = `${String(hour).padStart(2,"0")} : ${String(min).padStart(2,"0")}`;
    //clockTitle.innerText = hour;
    //clockTitle.innerHTML = "aaa";
}


setInterval(currentTime, 1000);