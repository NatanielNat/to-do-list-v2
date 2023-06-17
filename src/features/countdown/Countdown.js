import "./style.css";

var countDownDate = new Date("Feb 23,2023 20:50:00").getTime()
var x = setInterval(() => {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {
        clearInterval(x);

        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
    }

}, 1000)

export default () => {
return (
    <>
<div class="container_cd">
<p>Count Down</p>
<div class="countdown__timer">
    <div>
        <p id="days">00</p>
        <span>Days</span>
    </div>
    <div>
        <p id="hours">00</p>
        <span>Hours</span>
    </div>
    <div>
        <p id="minutes">00</p>
        <span>Minutes</span>
    </div>
    <div>
        <p id="seconds">00</p>
        <span>Seconds</span>
    </div>
</div>
</div>
</>
)};



