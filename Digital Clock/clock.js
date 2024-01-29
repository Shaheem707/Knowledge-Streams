function clock(){
    const today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let date = today.getDate();
    let day = today.getDay();
    let month = today.getMonth();
    let year = today.getFullYear();

    //The below logic is to convert hours to 12-hour format
    if(hours > 12){
        if(hours < 22){
            hours = hours - 12;
            document.querySelector("#hours").textContent = `0${hours}`;
        }
        else    
            document.querySelector("#hours").textContent = hours;

        document.querySelector("#amPm").textContent = "PM";

    } else if(hours >= 10 && hours <= 12) {
        document.querySelector("#hours").textContent = hours;
    } else {
        document.querySelector("#hours").textContent = `0${hours}`
    }

    //To print minutes correctly.
    if(minutes < 10){
        document.querySelector("#minutes").textContent = `0${minutes}`;
    } else {
        document.querySelector("#minutes").textContent = minutes;
    }

    //To print seconds correctly
    if(seconds < 10){
        document.querySelector("#seconds").textContent = `0${seconds}`;
    } else {
        document.querySelector("#seconds").textContent = seconds;
    }

    //--------------------------------
    //Following section is for setting Date

    document.querySelector("#date").textContent = date;
    document.querySelector("#year").textContent = year;
    
    //For day:
    switch(day){
        case 0:
            document.querySelector("#day").textContent = "Sunday";
            break;
        case 1:
            document.querySelector("#day").textContent = "Monday";
            break;
        case 2:
            document.querySelector("#day").textContent = "Tuesday";
            break;
        case 3:
            document.querySelector("#day").textContent = "Wednesday";
            break;
        case 4:
            document.querySelector("#day").textContent = "Thursday";
            break;
        case 5:
            document.querySelector("#day").textContent = "Friday";
            break;
        case 6:
            document.querySelector("#day").textContent = "Saturday";
            break;
        default:
            break;
    }

    //For month:
    switch(month){
        case 0:
            document.querySelector("#month").textContent = "January";
            break;
        case 1:
            document.querySelector("#month").textContent = "February";
            break;
        case 2:
            document.querySelector("#month").textContent = "March";
            break;
        case 3:
            document.querySelector("#month").textContent = "April";
            break;
        case 4:
            document.querySelector("#month").textContent = "May";
            break;
        case 5:
            document.querySelector("#month").textContent = "June";
            break;
        case 6:
            document.querySelector("#month").textContent = "July";
            break;
        case 7:
            document.querySelector("#month").textContent = "August";
            break;
        case 8:
            document.querySelector("#month").textContent = "September";
            break;
        case 9:
            document.querySelector("#month").textContent = "October";
            break;
        case 10:
            document.querySelector("#month").textContent = "November";
            break;
        case 11:
            document.querySelector("#month").textContent = "December";
            break;
    }
}

setInterval(clock, 1000)


