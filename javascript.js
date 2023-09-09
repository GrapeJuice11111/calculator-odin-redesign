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