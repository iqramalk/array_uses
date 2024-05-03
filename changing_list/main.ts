//Q15 Print message to guests using array , For and if else statement
//Here I am changing the list while using Q14 as a reference 
let guest_list=["Dr Qasim" , "Neil Armstrong" , "Lim Yoona"];
let message="\n  Assalamualaikum!\n You are genuinely invited in our house for tonight`s dinner, lets have good food and warm conversation together , me and my family will  wait for you. Thank U  \n Your host : Iqra \n";
guest_list.forEach(guest=>
    {
        console.log(guest + message);
        
    }
)
let deceased_guest = guest_list[1];
console.log(`Sorry,${deceased_guest} can't attend the dinner with us \n`);
guest_list[1]= " Bilal Abbas ";
guest_list.forEach(guest=>
    {
        console.log(guest + message);
        
    }
)

