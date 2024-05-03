"use strict";
// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
let guest_list = ["Dr Qasim", "Neil Armstrong", "Lim Yoona"];
let message = "\n  Assalamualaikum!\n You are genuinely invited in our house for tonight`s dinner, lets have good food and warm conversation together , me and my family will  wait for you. Thank U  \n Your host : Iqra \n";
const deceased_guest = "Neil Armstrong";
// console.log(`Sorry,${deceased_guest} can't attend the dinner with us \n`);
// Now from list neil armstrong is eliminated
const removeIndex = guest_list.indexOf(deceased_guest);
if (removeIndex !== -1) {
    guest_list.splice(removeIndex, 1, "Maryam Nawaz");
}
// Here Neil armstrong is eliminated and Maryam  Nawaz is added 
guest_list.splice(0, -1, "Salar Sikander");
guest_list.push("Kamran Tessori");
// output ["Dr Qasim" ,"Maryam Nawaz" ,  "Lim Yoona" ,"Kamran Tessori"]
// guest_list.forEach(guest=>
//     {
//         console.log(guest + message);
//     }
// )
//Q16 ends here then proceed to Q17
// guest_list["Salar Sikander", "Dr Qasim" , "Maryam Nawaz" "Lim Yoona", "Kamran tessori"]
console.log("Sorry for inconvineince I can invite only two person for dinner \n");
let eliminated_guest = guest_list.pop();
console.log(`Sorry ${eliminated_guest} cant join this dinnner \n`);
// console.log(guest_list);
let eliminated_guest2 = guest_list.pop();
console.log(`Sorry ${eliminated_guest2} cant join this dinnner \n`);
let eliminated_guest3 = guest_list.pop();
console.log(`Sorry ${eliminated_guest3} cant join this dinnner \n`);
// guest_list["Salar Sikander", "Dr Qasim"] Now teo remain in array
guest_list.forEach(guest => {
    console.log(guest + message);
});
let eliminated_guest4 = guest_list.pop();
let eliminated_guest5 = guest_list.pop();
console.log(guest_list);
// Now output is empty
