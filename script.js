
function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = document.getElementById('session');


    // To get AM or PM
    if(hrs >= 12){
        session.innerHTML = 'PM';
    } else{
        session.innerHTML = 'AM';
    }

    // To get the 12 hours format 

    if(hrs > 12){
        hrs = hrs - 12;
    }


    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;

}

setInterval(displayTime, 10);