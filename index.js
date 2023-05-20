import CountDown from "./CountDown.js"


// const counter = new CountDown("1 August 2025")
const counter = new CountDown("30 May 2026")


// let seconds = counter.Seconds();
// let minutes = counter.Minutes();
// let hours = counter.Hours();
// let days = counter.Days();
// let weeks = counter.Weeks();
// let years = counter.Years();

setInterval(() => {
    // seconds = counter.Seconds();
    // minutes = counter.Minutes();
    // hours = counter.Hours();
    // days = counter.Days();
    // weeks = counter.Weeks();
    // years = counter.Years();
})


console.log(counter, "All")
console.log(counter.isComplete(), "Complete")
console.log(counter.Seconds(), "Seconds")
console.log(counter.Minutes(), "Minutes")
console.log(counter.Hours(), "Hours")
console.log(counter.Days(), "Days")
console.log(counter.Weeks(), "Weeks")
console.log(counter.Years(), "Years")

console.log("Booleans")


console.log(counter.hasSeconds(), "Seconds")
console.log(counter.hasMinutes(), "Minutes")
console.log(counter.hasHours(), "Hours")
console.log(counter.hasDays(), "Days")
console.log(counter.hasWeeks(), "Weeks")
console.log(counter.hasYears(), "Years")






const rootElement = document.getElementById('root');
const timeWrapper = document.createElement("div");
const yearWrapper = document.createElement("div");
const weekWrapper = document.createElement("div");
const dayWrapper = document.createElement("div");
const hourWrapper = document.createElement("div");
const minuteWrapper = document.createElement("div");
const secondWrapper = document.createElement("div");



if (counter.hasYears()) {
    secondWrapper.innerHTML = `<h2>${counter.Seconds()}</h2><h3>Second${counter.Seconds() >= 2 ? "s" : ""}</h3>`;
    minuteWrapper.innerHTML = `<h2>${counter.Minutes()}</h2><h3>Minute${counter.Minutes() >= 2 ? "s" : ""}</h3>`;
    hourWrapper.innerHTML = `<h2>${counter.Hours()}</h2><h3>Hour${counter.Hours() >= 2 ? "s" : ""}</h3>`;
    dayWrapper.innerHTML = `<h2>${counter.Days()}</h2><h3>Day${counter.Days() >= 2 ? "s" : ""}</h3>`;
    weekWrapper.innerHTML = `<h2>${counter.Weeks()}</h2><h3>Week${counter.Weeks() >= 2 ? "s" : ""}</h3>`;
    yearWrapper.innerHTML = `<h2>${counter.Years()}</h2><h3>Year${counter.Years() >= 2 ? "s" : ""}</h3>`;
    
    timeWrapper.appendChild(yearWrapper);
    timeWrapper.appendChild(weekWrapper);
    timeWrapper.appendChild(dayWrapper);
    timeWrapper.appendChild(hourWrapper);
    timeWrapper.appendChild(minuteWrapper);
    timeWrapper.appendChild(secondWrapper);
}
else if (counter.hasWeeks()) {
    secondWrapper.innerHTML = `<h2>${counter.Seconds()}</h2><h3>Second${counter.Seconds() >= 2 ? "s" : ""}</h3>`;
    minuteWrapper.innerHTML = `<h2>${counter.Minutes()}</h2><h3>Minute${counter.Minutes() >= 2 ? "s" : ""}</h3>`;
    hourWrapper.innerHTML = `<h2>${counter.Hours()}</h2><h3>Hour${counter.Hours() >= 2 ? "s" : ""}</h3>`;
    dayWrapper.innerHTML = `<h2>${counter.Days()}</h2><h3>Day${counter.Days() >= 2 ? "s" : ""}</h3>`;
    weekWrapper.innerHTML = `<h2>${counter.Weeks()}</h2><h3>Week${counter.Weeks() >= 2 ? "s" : ""}</h3>`;
    
    timeWrapper.appendChild(weekWrapper);
    timeWrapper.appendChild(dayWrapper);
    timeWrapper.appendChild(hourWrapper);
    timeWrapper.appendChild(minuteWrapper);
    timeWrapper.appendChild(secondWrapper);
}
else if (counter.hasDays()) {
    secondWrapper.innerHTML = `<h2>${counter.Seconds()}</h2><h3>Second${counter.Seconds() >= 2 ? "s" : ""}</h3>`;
    minuteWrapper.innerHTML = `<h2>${counter.Minutes()}</h2><h3>Minute${counter.Minutes() >= 2 ? "s" : ""}</h3>`;
    hourWrapper.innerHTML = `<h2>${counter.Hours()}</h2><h3>Hour${counter.Hours() >= 2 ? "s" : ""}</h3>`;
    dayWrapper.innerHTML = `<h2>${counter.Days()}</h2><h3>Day${counter.Days() >= 2 ? "s" : ""}</h3>`;
    
    timeWrapper.appendChild(dayWrapper);
    timeWrapper.appendChild(hourWrapper);
    timeWrapper.appendChild(minuteWrapper);
    timeWrapper.appendChild(secondWrapper);
}
else if (counter.hasHours()) {
    secondWrapper.innerHTML = `<h2>${counter.Seconds()}</h2><h3>Second${counter.Seconds() >= 2 ? "s" : ""}</h3>`;
    minuteWrapper.innerHTML = `<h2>${counter.Minutes()}</h2><h3>Minute${counter.Minutes() >= 2 ? "s" : ""}</h3>`;
    hourWrapper.innerHTML = `<h2>${counter.Hours()}</h2><h3>Hour${counter.Hours() >= 2 ? "s" : ""}</h3>`;
    
    timeWrapper.appendChild(hourWrapper);
    timeWrapper.appendChild(minuteWrapper);
    timeWrapper.appendChild(secondWrapper);
}
else if (counter.hasMinutes()) {
    secondWrapper.innerHTML = `<h2>${counter.Seconds()}</h2><h3>Second${counter.Seconds() >= 2 ? "s" : ""}</h3>`;
    minuteWrapper.innerHTML = `<h2>${counter.Minutes()}</h2><h3>Minute${counter.Minutes() >= 2 ? "s" : ""}</h3>`;
    
    timeWrapper.appendChild(minuteWrapper);
    timeWrapper.appendChild(secondWrapper);
}
else if (counter.hasSeconds()) {
    secondWrapper.innerHTML = `<h2>${counter.Seconds()}</h2><h3>Second${counter.Seconds() >= 2 ? "s" : ""}</h3>`;

    timeWrapper.appendChild(secondWrapper);
}

setInterval(() => {
    if (counter.hasYears()) {
        const seconds = `<h2>${counter.Seconds()}</h2><h3>Second${counter.Seconds() >= 2 ? "s" : ""}</h3>`;
        const minutes = `<h2>${counter.Minutes()}</h2><h3>Minute${counter.Minutes() >= 2 ? "s" : ""}</h3>`;
        const hours = `<h2>${counter.Hours()}</h2><h3>Hour${counter.Hours() >= 2 ? "s" : ""}</h3>`;
        const days = `<h2>${counter.Days()}</h2><h3>Day${counter.Days() >= 2 ? "s" : ""}</h3>`;
        const weeks = `<h2>${counter.Weeks()}</h2><h3>Week${counter.Weeks() >= 2 ? "s" : ""}</h3>`;
        const years = `<h2>${counter.Years()}</h2><h3>Year${counter.Years() >= 2 ? "s" : ""}</h3>`;

        secondWrapper.innerHTML = seconds
        minuteWrappersecondWrapper.innerHTML = minutes
        hourWrappersecondWrapper.innerHTML = hours
        dayWrappersecondWrapper.innerHTML = days
        weekWrappersecondWrapper.innerHTML = weeks
        yearWrappersecondWrapper.innerHTML = years
    }
    else if (counter.hasWeeks()) {
        secondWrapper.innerHTML = counter.Seconds();
        minuteWrappersecondWrapper.innerHTML = counter.Minutes();
        hourWrappersecondWrapper.innerHTML = counter.Hours();
        dayWrappersecondWrapper.innerHTML = counter.Days();
        weekWrappersecondWrapper.innerHTML = counter.Weeks();
    }
    else if (counter.hasDays()) {
        secondWrapper.innerHTML = counter.Seconds();
        minuteWrappersecondWrapper.innerHTML = counter.Minutes();
        hourWrappersecondWrapper.innerHTML = counter.Hours();
        dayWrappersecondWrapper.innerHTML = counter.Days();
    }
    else if (counter.hasHours()) {
        secondWrapper.innerHTML = counter.Seconds();
        minuteWrappersecondWrapper.innerHTML = counter.Minutes();
        hourWrappersecondWrapper.innerHTML = counter.Hours();
    }
    else if (counter.hasMinutes()) {
        secondWrapper.innerHTML = counter.Seconds();
        minuteWrappersecondWrapper.innerHTML = counter.Minutes();
    }
    else if (counter.hasSeconds()) {
        secondWrapper.innerHTML = counter.Seconds();
    }
}, 1000);


timeWrapper.id = "tWrapper"
rootElement.appendChild(timeWrapper)