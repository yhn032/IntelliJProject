const clock = document.querySelector("#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000);


//interval -> 매 2초 등 간격을 의미
// setInterval(sayHello, 5000);

//timeout -> 특정 시간 이후에 딱 한 번만 함수를 호출
// setTimeout(sayHello, 5000);