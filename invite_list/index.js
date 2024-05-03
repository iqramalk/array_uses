"use strict";
//Q14 Print message to guests using array , For and if else statement
let guest_list = ["Doctor Qasim", "Neil Armstrong", "Lim Yoona"];
let message = "\n  Assalamualaikum!\n You are genuinely invited in our house for tonight`s dinner, lets have good food and warm conversation together , me and my family will wait for you. Thank U  \n Your host : Iqra \n";
for (let i = 0; i < guest_list.length; i++) {
    if (i === 0) {
        console.log(guest_list[0] + message);
    }
    else if (i === 1) {
        console.log(guest_list[1] + message);
    }
    else if (i === 2) {
        console.log(guest_list[2] + message);
    }
}
