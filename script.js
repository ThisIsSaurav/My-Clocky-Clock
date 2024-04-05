// Scripting for Clock 

let hour = document.getElementById("hour");
let minute = document.getElementById("min");
let second = document.getElementById("sec");

// varible of alarms section 

let setAlarmBtn = document.getElementById("setAlarmBtn");
let setAlarmSection = document.getElementById("setAlarmSection");
let addAlarmBtn = document.getElementById("addAlarmBtn");
let showAlaramSection = document.getElementById("showAlaramSection");


// let alarmBlock = `<div class="alarm">
// <span id="alarmHour">09</span>
// <span id="alarmDot">:</span>
// <span id="alarmmin">38</span>
// </div>`

// setInterval(() => {
//     //creating a date object for the current time
//     let date = new Date();
//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();

//     //displaying the current time on the clock
//     hour.innerHTML = hours;

//     minute.innerHTML = minutes;

//     second.innerHTML = seconds;
// }, 1000);


// // Scripting for Clock alarm events

setAlarmBtn.addEventListener("click", function () {
    setAlarmSection.classList.toggle("display-none");
});

addAlarmBtn.addEventListener("click", function () {
    setAlarmSection.classList.toggle("display-none");
    let hourText = document.getElementById("hourText").value;
    let minuteText = document.getElementById("minText").value;
    
    let alarmBlock = `<div class="alarm">
    <span id="alarmHour">${hourText}</span>
    <span id="alarmDot">:</span>
    <span id="alarmmin">${minuteText}</span>
    </div>`

    showAlaramSection.append = alarmBlock

});