"use strict";
//Q16 Print message to guests using array , Here now i am adding more guest in list 
let guest_list = ["Dr Qasim", "Neil Armstrong", "Lim Yoona"];
let message = "\n  Assalamualaikum!\n You are genuinely invited in our house for tonight`s dinner, lets have good food and warm conversation together , me and my family will  wait for you. Thank U  \n Your host : Iqra \n";
// guest_list.forEach(guest=>
//     {
//         console.log(guest + message);
//     }
// )
let deceased_guest = guest_list[1];
console.log(`Sorry,${deceased_guest} can't attend the dinner with us \n`);
// As I've got a big table for dinner so I'll invite more people
const removeIndex = guest_list.indexOf(deceased_guest);
if (removeIndex !== -1) {
    guest_list.splice(removeIndex, 1, "Maryam Nawaz");
}
guest_list.push("Kamran Tessori");
guest_list.splice(0, -1, "Salar Sikander");
// output ["Dr Qasim"   , "Lim Yoona" ,"Kamran Tessori"]
// output ["Dr Qasim" ,"Maryam Nawaz" , "Lim Yoona" ,"Kamran Tessori"]
guest_list.forEach(guest => {
    console.log(guest + message);
});
