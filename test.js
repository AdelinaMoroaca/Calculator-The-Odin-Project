// Create the functions that populate the display when you click the number buttons. 
// You should be storing the ‘display value’ in a variable somewhere for use
// in the next step.
let resultDisplay = document.getElementById('resultDisplay');
let display = document.getElementById('display');
let clearBtn = document.getElementById('clear');
let deleteBtn = document.getElementById('delete');
const errorDivide = document.getElementsByClassName('divideBy0');

let opDivide = document.getElementById('operatorDivide');
let opMultiply = document.getElementById('operatorMultiply');
let opSubtract = document.getElementById('operatorSubtract');
let opAdd = document.getElementById('operatorAdd');
let btnPoint = document.getElementById('btnPoint');
let opEqual = document.getElementById('operatorEqual');

let num9 = document.getElementById('btn9');
let num8 = document.getElementById('btn8');
let num7 = document.getElementById('btn7');
let num6 = document.getElementById('btn6');
let num5 = document.getElementById('btn5');
let num4 = document.getElementById('btn4');
let num3 = document.getElementById('btn3');
let num2 = document.getElementById('btn2');
let num1 = document.getElementById('btn1');
let num0 = document.getElementById('btn0');


//CREATE VARIABLES FOR EACH OF THE PARTS OF A CALCULATOR OPERATION
let firstNum = '0';
let secondNum = '';
let operator = '';
let result = '';
let flag = true;

resultDisplay.innerHTML = firstNum; 

// CREATING MATH FUNCTIONS FOR ALL OF THE BASIC MATH OPERATORS
// ADD
function addNumbers(firstNum, secondNum){
    result = Number(firstNum) + Number(secondNum);
    return result;
}

// SUBTRACT
function subtractNumbers(firstNum, secondNum){
    result = Number(firstNum) - Number(secondNum);
    return result;
}

// MULTIPLY
function multiplyNumbers(firstNum, secondNum){
    result = Number(firstNum) * Number(secondNum);
    return result;
}

// DIVIDE
function divideNumbers(firstNum, secondNum){
    result = Number(firstNum) / Number(secondNum);
    return result;
}

//Create a new function operate that takes an operator and 2 numbers
// and then calls one of the above functions on the numbers.

function selectEqualOperator(){
    if(operator === '/' && secondNum === '0' && firstNum !== ''){ //DIVIDE NUMBERS
        for (const divideBy0 of errorDivide) {
           divideBy0.disabled = true;
        }
        resultDisplay.innerHTML = `Error! You can't divide by 0! Restart by pressing CLEAR button !`;
    
    } else if(operator === '/' && firstNum !== '' && secondNum !== '0' && secondNum !== ''){
        result = divideNumbers(firstNum,secondNum).toFixed(3);
        resultDisplay.innerHTML = result;
        firstNum = result;
        secondNum = '';

    } else if(operator === '/' && firstNum !== '' && secondNum === ''){
        secondNum = firstNum;
        divideNumbers(firstNum,secondNum);
        resultDisplay.innerHTML = result;
 
    } else if(operator === '+' && firstNum !== '' && secondNum === ''){ //ADD NUMBERS
        secondNum = firstNum;
        addNumbers(firstNum,secondNum);
        resultDisplay.innerHTML = result;

    } else if (operator === '+' && firstNum !== '' && secondNum !== ''){
        result = addNumbers(firstNum,secondNum);
        resultDisplay.innerHTML = result;
        firstNum = result;
        secondNum = '';

    } else if(operator === '*' && firstNum !== '' && secondNum === ''){//MULTIPLY NUMBERS
        secondNum = firstNum;
        multiplyNumbers(firstNum,secondNum);
        resultDisplay.innerHTML = result;

    } else if (operator === '*' && firstNum !== '' && secondNum !== ''){
        result = multiplyNumbers(firstNum,secondNum);
        resultDisplay.innerHTML = result;
        firstNum = result;
        secondNum = '';
    // operator = e.target.textContent;
    //

    } else if(operator === '-' && firstNum !== '' && secondNum === ''){// SUBTRACT NUMBERS
        secondNum = firstNum;
        subtractNumbers(firstNum,secondNum);
        resultDisplay.innerHTML = result;

    } else if (operator === '-' && firstNum !== '' && secondNum !== ''){
        result = subtractNumbers(firstNum,secondNum);
        resultDisplay.innerHTML = result;
        firstNum = result;
        secondNum = '';
    
    }

    flag = true;
}

let selectMathOperator = (e) => {
    flag = false;
    // operator = e.target.textContent;
    console.log('1', operator);
    if(operator === ''){
        console.log('2', operator);
        operator = e.target.textContent;
        display.innerHTML = firstNum + operator;
        console.log('3', operator);
        
    } else {
        console.log('4', operator);
        display.innerHTML = firstNum + operator + secondNum;
        if (operator === '+' && firstNum !== '' && secondNum !== '' ){ //ADD NUMBERS
        console.log('5', operator);
            result = addNumbers(firstNum,secondNum);
            // display.innerHTML = result;
            display.innerHTML = firstNum + operator + secondNum;
            resultDisplay.innerHTML = result;
            firstNum = result;
            operator = e.target.textContent;
            secondNum = '';
            console.log('6', operator);
            display.innerHTML = firstNum + operator + secondNum;


        } else if(operator === '/' && secondNum === '0' && firstNum !== ''){
            console.log(firstNum, secondNum, result, 'displayValueERROR');
            for (const divideBy0 of errorDivide) {
                divideBy0.disabled = true;
            }
            resultDisplay.innerHTML = `Error! You can't divide by 0! Restart by pressing CLEAR button !`;
            console.log('7', operator);
            
        } else if(operator === '/' && firstNum !== '' && secondNum !== '0' && secondNum !== ''){
            result = divideNumbers(firstNum,secondNum).toFixed(3);

            display.innerHTML = firstNum + operator + secondNum;
            resultDisplay.innerHTML = result;
            firstNum = result;
            operator = e.target.textContent;
            

            secondNum = '';
            console.log('8', operator);
            display.innerHTML = firstNum + operator + secondNum;

        } else if(operator === '*' && firstNum !== '' && secondNum !== '' ){
            console.log('9', operator);
            result = multiplyNumbers(firstNum,secondNum);
            // display.innerHTML = result;
            display.innerHTML = firstNum + operator + secondNum;
            resultDisplay.innerHTML = result;
            firstNum = result;
            operator = e.target.textContent;
            

            secondNum = '';
            console.log('10', operator);
            display.innerHTML = firstNum + operator + secondNum;

        }  else if (operator === '-' && firstNum !== '' && secondNum !== ''){
            result = subtractNumbers(firstNum,secondNum);
            display.innerHTML = firstNum + operator + secondNum;
            resultDisplay.innerHTML = result;
            firstNum = result;
            operator = e.target.textContent;


            secondNum = '';
            console.log('10', operator);
            display.innerHTML = firstNum + operator + secondNum;
    
        }

    }
  
}

let displayValue = (e) => {
    if(flag){
        if(firstNum === '0'){
            console.log(firstNum, secondNum, result,'displayValue1');
            firstNum = e.target.textContent;
            display.innerHTML = firstNum; 
            resultDisplay.innerHTML = firstNum; 


        } else {
            console.log(firstNum, secondNum, result, 'displayValue2');

            firstNum += e.target.textContent;
            display.innerHTML = firstNum + operator;
            resultDisplay.innerHTML = firstNum; 

        }

    } else {
        secondNum += e.target.textContent;
        display.innerHTML = firstNum + operator + secondNum;
        // if(display && operator === '/' && secondNum.length > 1){
        //     console.log('do');
        //     resultDisplay.innerHTML = divideNumbers(firstNum, secondNum)
        // } else if(display && operator === '/' && secondNum.length === 1){
        //     console.log('do2');
        //     resultDisplay.innerHTML = divideNumbers(firstNum, secondNum)
        // }
    }
}

function clearData(){
    firstNum = '0';
    secondNum = '';
    operator = '';
    for (const divideBy0 of errorDivide) {
            divideBy0.disabled = false;

    }
    display.innerHTML = firstNum;
    resultDisplay.innerHTML = firstNum;
}

function deleteNum(){
    firstNum = firstNum.slice(0, -1);
    if(firstNum.length < 1){
        firstNum = '0';
        resultDisplay.innerHTML = firstNum;
    }
    display.innerHTML = firstNum;
    resultDisplay.innerHTML = firstNum;
}

num9.addEventListener('click', displayValue);
num8.addEventListener('click', displayValue);
num7.addEventListener('click', displayValue);
num6.addEventListener('click', displayValue);
num5.addEventListener('click', displayValue);
num4.addEventListener('click', displayValue);
num3.addEventListener('click', displayValue);
num2.addEventListener('click', displayValue);
num1.addEventListener('click', displayValue);
num0.addEventListener('click', displayValue);

clearBtn.addEventListener('click', clearData);
deleteBtn.addEventListener('click', deleteNum);


opAdd.addEventListener('click', selectMathOperator);
opSubtract.addEventListener('click', selectMathOperator);
opMultiply.addEventListener('click', selectMathOperator);
opDivide.addEventListener('click', selectMathOperator);
opEqual.addEventListener('click', selectEqualOperator);