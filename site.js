


function getClock(){
    const d = new Date();
    timeNow = document.getElementById("time");
    timeNow.innerHTML = d.toLocaleTimeString();
}
