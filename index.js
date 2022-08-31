let homeScoreTxt = document.getElementById("home-score")
let guestScoreTxt = document.getElementById("guest-score")
let countHome = 0
let countGuest = 0

function hincrement1() {
    countHome += 1
    homeScoreTxt.textContent = countHome
}

function hincrement2() {
    countHome += 2
    homeScoreTxt.textContent = countHome
}

function hincrement3() {
    countHome += 3
    homeScoreTxt.textContent = countHome
}



function gincrement1() {
    countGuest += 1
    guestScoreTxt.textContent = countGuest
}

function gincrement2() {
    countGuest += 2
    guestScoreTxt.textContent = countGuest
}

function gincrement3() {
    countGuest += 3
    guestScoreTxt.textContent = countGuest
}

function reset() {
    countGuest = 0
    guestScoreTxt.textContent = countGuest

    countHome = 0
    homeScoreTxt.textContent = countHome
}

var h3 = document.getElementsByTagName("h3");

var sec         = 1800,
    countDiv    = document.getElementById("timer"),
    secpass,
    countDown   = setInterval(function () {
        'use strict';
        
        secpass();
    }, 1000);

function secpass() {
    'use strict';
    
    var min     = Math.floor(sec / 60),
        remSec  = sec % 60;
    
    if (remSec < 10) {
        
        remSec = '0' + remSec;
    
    }
    if (min < 10) {
        
        min = '0' + min;
    
    }
    countDiv.innerHTML = min + ":" + remSec;
    
    if (sec > 0) {
        
        sec = sec - 1;
        
    } else {
        
        clearInterval(countDown);
        
        countDiv.innerHTML = '00:00';
        
    }

    if (sec < 0.1) {
        countGuest = 0
        guestScoreTxt.textContent = countGuest
    
        countHome = 0
        homeScoreTxt.textContent = countHome
    }
}
