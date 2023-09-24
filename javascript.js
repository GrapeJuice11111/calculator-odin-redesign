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
//Declaring variables for global use
let string1 = "";
let string2 = "";
let num1;
let num2;
let operator = "";
let output = 0;
let num = 1;
let temp = "";

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
    let arrayForInput = [0,];
    buttons.forEach( btn => btn.addEventListener("click", function(e){
        
        let arrayForOperator = ["-","+","/","*"]
        let arrayForNumbers = [".","0","1","2","3","4","5","6","7","8","9"]
        display.textcontent = ""

        //To take the first value for input and display it
      if(arrayForNumbers.includes(this.classList.value)){
          arrayForInput[num] += this.classList.value
           arrayForInput[num] = arrayForInput[num].replace(/undefined/g,"")
          display.textContent = [arrayForInput[num]]
      }
       

       //Reset value resets everything
      else if(this.classList.value === "reset"){
           num = 1;
           num1 = 0;
           num2 = 0;
           arrayForInput = [0,];
           output = 0;
           display.textContent = "";
        }
    else if(arrayForOperator.includes(this.classList.value)){
            num = num + 1
            operator = this.classList.value;
        }
     else if(this.classList.value === "equal"){
        if( operator === "+")
        {
        output = arrayForInput.reduce((accumulator,item) => calc.calculate(accumulator,operator,parseInt(item)),0) 
        display.textContent = output;
        

        
        }else if ( operator === "-"){
           output = Math.abs(arrayForInput.reduce((accumulator,item) => calc.calculate((item), operator, parseInt(accumulator),0) ))
           display.textContent = output;
        }
        
        else if( operator === "*"){
            output = arrayForInput.reduce((accumulator,item) => calc.calculate(accumulator,operator,parseInt(item)))
            display.textContent = output;      
        } 
        else if( operator === "/"){
            output = (arrayForInput.reduce((accumulator,item) => calc.calculate(accumulator,operator,parseInt(item))))
            display.textContent = output;  
        }
        arrayForInput.splice(0,1,output)
        arrayForInput.splice(1,arrayForInput.length-1);
     }
        else if(this.classList.value === "del"){
          arrayForInput[num] = arrayForInput[num].slice(0,arrayForInput[num].length-1)
          display.textContent = arrayForInput[num]
        }
    // we can use array to filter this out will change it after sometime
         
}));