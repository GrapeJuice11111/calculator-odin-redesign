function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function divide(a,b){
    return a / b;
}

function multiply(a,b){
    return a * b;
}

let num1 = "";
let num2 = "";
let operator = "";

function Operate(){
    this.method = { 
     "+" : add,
     "-" : subtract,
     "/" : divide,
     "*" : multiply
        }
        
  this.calculate = function calc(a,op,b){
  return this.method[op](a,b); 
  }
}

let calc = new Operate();

// To display the number clicked on screen

const display = document.querySelector(".display");
let buttons = document.querySelectorAll("button");

// Looping the button to see if a button is pressed with forEach

buttons.forEach( btn => btn.addEventListener("click", function(e){

    if(typeof(Number(this.classList.value)) === "number"){
        num1 += this.classList.value;
        display.textContent = num1;
    }  
}));