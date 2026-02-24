// Operators & Condition...
let num1 = 5;
let num2 = 3;

if(num1 > num2){
    console.log("Num1 is greater"); 
}
else{
     console.log("Num2 is greater");
}


// WHILE loop iterations...
let i = 1;
while(i <= 5){
    console.log(`while loop iteration ${i}`);
    i++;
}


// FOR loop iteration...
for(let j = 1; j <= 5; j++){
    console.log(`For loop iteration ${j}`);
}


// DO WHILE loop iteration..

let k = 1;
do{
    console.log(`Do-While loop iteration ${k}`);
    k++;
}while(k <= 5);


// Switch CAse Conditions

let day = 1;
switch(day){
    case 1: 
        console.log("It's Monday");
        break;
    case 2: 
        console.log("It's Tuesday");
        break;
    case 3: 
        console.log("It's Wednesday");
        break;
    case 4: 
        console.log("It's Thursday");
        break;
    case 5: 
        console.log("It's Friday");
        break;
    case 6: 
        console.log("It's Saturday");
        break;    
    case 7: 
        console.log("It's Sunday");
        break;
    default :
        console.log("Invalid day");
        
    
}