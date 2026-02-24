let bulb = document.querySelector("#bulb");

function turnOn(){
    let color = prompt("Enter bulb color");


    if(color){
        document.getElementById("bulb").style.backgroundColor = color;
        document.getElementById("bulb").style.boxShadow = `0 0 40px ${color}`;
    }
}

function turnOff(){
    document.getElementById("bulb").style.backgroundColor = "white";
    document.getElementById("bulb").style.boxShadow = "none";
}