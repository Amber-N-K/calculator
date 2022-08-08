
const display = document.getElementById('display');
let btns = document.getElementsByClassName('btn');
btns = [...btns];
let opersBtns = document.getElementsByClassName('btn-opers');
opersBtns = [...opersBtns];
let numBtns = document.getElementsByClassName('btn-nums');
numBtns = [...numBtns];
const clearBtn = document.getElementById('clear');
const divideBtn = document.getElementById('divide');
const timesBtn = document.getElementById('times');
const minusBtn = document.getElementById('minus');
const plusBtn = document.getElementById('plus');
const equalsBtn = document.getElementById('equals');
const dotBtn = document.getElementById('dot');
const nineBtn = document.getElementById('nine');
const eightBtn = document.getElementById('eight');
const sevenBtn = document.getElementById('seven');
const sixBtn = document.getElementById('six');
const fiveBtn = document.getElementById('five');
//const fourBtn = document.getElementById('four');
//const threeBtn = document.getElementById('three');
//const twoBtn = document.getElementById('two');
//const oneBtn = document.getElementById('one');

const fourBtn = 4;
const threeBtn = 3;
const twoBtn = 2;
const oneBtn = 1;

const mainArray = [];

const num1Array = [];
const num2Array = [];
const num3Array = [];
const operArray = [];


btns.forEach(btn => {btn.addEventListener('click', operate)});

//equalsBtn.addEventListener('click', equals);

function operate(event) { 
    //console.log(event.target.id);

    //let opers = ["+", "-", "/", "X", "="];
    let opers = event.currentTarget.textContent;
    const nums = event.currentTarget.textContent;  

    if (event.target.classList.contains("btn-nums")) {
        console.log("num btn section")
        
        const numInput = event.currentTarget.textContent; 
        display.textContent = numInput;
        console.log(`Num btn: ${numInput}`);

        if (operArray.includes("+")) {
            //console.log("hello")
            let num2 = num2Array.push(nums);
            let wholeNum = mainArray.push(nums);

            console.log(`whole array ${mainArray}`)
            console.log(`num2 array ${num2Array}`)
            
        }
        else {
            let wholeNum = mainArray.push(nums);
            let num1 = num1Array.push(nums);

            console.log(`whole array ${mainArray}`)
            console.log(`num1 array ${num1Array}`)

        }       
    }
    else if (event.currentTarget.textContent == "=") {
        console.log("= was pressed");
        const equalInput = event.currentTarget.textContent;
        //display.textContent = equalInput;
        let equal = event.currentTarget.textContent;
        let equals = operArray.push(equal);
        console.log(`oper btn: ${equalInput}`);

        if (operArray.includes("+")) {
            console.log("hello +")

            console.log(`whole array ${mainArray}`);
            console.log(`num2 array ${num2Array}`);
            add();
            //equals();
        }
        else if (operArray.includes("=")) {
            console.log("hello =")
            console.log(`whole array ${mainArray}`);
            console.log(`num2 array ${num2Array}`);
            equals();
        }
        else {
            console.log("need more equal options for opersBtns")
        }
    }
    else if (event.target.classList.contains("btn-opers")) {
        console.log("opers btn section");

        const opersInput = event.currentTarget.textContent;
        display.textContent = opersInput;
        console.log(`oper btn: ${opersInput}`);

        opers = event.currentTarget.textContent;
        let wholeOper = mainArray.push(opers);
        let oper = operArray.push(opers);

        console.log(`whole array ${mainArray}`)
        console.log(`oper array ${operArray}`)
 
 
        if (event.target.textContent == "+") {
            //(opersInput === "+") {
            console.log("+ was pressed");
            //let remove = firstwholeStrArray.pop()
            add();
        }
        else if (opersInput === "/") {
            console.log("/ was pressed");
            divide();
        }
        else if (opersInput === "X") {
            console.log("x was pressed");
            multiply();
        }
        else if (opersInput === "-") {
            console.log("- was pressed");
            subtract();
        }
    }
    else {
        console.log("need more options for opersBtns")
    } 
  return null;
};


clearBtn.addEventListener('click', event => {
    reload();
    //console.clear();
    display.textContent = "0";
})

function reload() {
  location.reload();
  
};
    

let totalNum;
newMainArray = [];

function add(num1, num2){
    console.log("add function");

    if (operArray.includes("=")) {
        console.log("= in add")
        //display.textContent = `${totalNum}`;
        totalNum = Number(num1Array) + Number(num2Array) + Number(newMainArray);
        console.log(`total number in add with =: ${totalNum}`);
        console.log(`main array in add with =: ${mainArray}`)
        console.log(`oper array in add with =: ${operArray}`)
        equals();
        return totalNum;
        
    }
    else if (operArray.includes("+")) {
        console.log("+ in add")
        totalNum = Number(num1Array) + Number(num2Array);
        console.log(`total number in add with +: ${totalNum}`);
        console.log(`main array in add with +: ${mainArray}`)
        console.log(`oper array in add with +: ${operArray}`)
        return totalNum;
    } 
    else {
        console.log(`need options in add`)
        return totalNum;
    }


};



function subtract(){

};

function multiply(){

};

function divide(firstNumber, secondNumber){

    if (xxx / 0 ){
        display.textContent = "Nope!"
    }
};



function equals() {
    console.log("equals function");
    console.log(`total number: ${totalNum}`);
    console.log(`main array in equals: ${mainArray}`)
    console.log(`oper array in equals: ${operArray}`)

    if (mainArray[0] == "+") {
        console.log("equals function with +");
        console.log(`main array in equals with +: ${mainArray}`)
        console.log(`oper array in equals with +: ${operArray}`)

        display.textContent = `${totalNum}`;
        newMainArray.length = 0;
        mainArray.length = 0;
        operArray.length = 0;
        num1Array.length = 0;
        num2Array.length = 0;
        const newMainPush = newMainArray.push(totalNum);
        console.log(`new main array in equals: ${newMainArray}`)


        //console.log(num1Array.length = 0);
        //console.log(num2Array.length = 0);
    }
    else {
        display.textContent = `${totalNum}`;

        const newMainPush = newMainArray.push(totalNum);
        console.log(`new main array: ${newMainArray}`)

        mainArray.length = 0;
        operArray.length = 0;
        num1Array.length = 0;
        num2Array.length = 0;
        
        console.log(`main array in equals should be zero: ${mainArray}`);
        console.log(`num1 array in equals: ${num1Array}`)
        console.log(`num2 array in equals: ${num2Array}`)

    }
};



// final array
// firstNumberArray  ... 12+ ...plus is removed
// secondNumberArray...+3 ..plus is removed
// total numbers into finalArray...removed numbers from other arrays

///////////////////////////////////////////////




/*

if(firstwholeStrArray[0] == "+") {
            console.log("going to add again")
            let secondWhole = firstwholeStrArray.push(nums);
            console.log(`second whole str array: ${firstwholeStrArray}`)
            add();

firstwholeStrArray.includes("+"))
    //let removeEquals = wholeStrArray.pop();
    //console.log(`whole number without equals : ${wholeStrArray}`);
   /*

let lastItem = firstwholeStrArray[firstwholeStrArray.length -1];

       //console.log(Number(firstwholeStrArray));
    

    //let removeOper = wholeStrArray.pop();
    //let wholeNumber = wholeStrArray.pop();
    //let splitPlus = wholeStrArray.split("+");
    //console.log(`split array plus: ${splitPlus}`);
    //let wholeNumber = wholeStrArray.join('');
    //onsole.log(`First whole w/ oper number = : ${totalfirstNum}`);
    //let totalfirstNum = firstwholeStrArray.pop();
    //console.log(firstWholeNum);
    console.log(`first string array: ${firstStrArray}`);
    let removeOper = firstStrArray.pop();
    firstStrArray.join('');
    //console.log(firstWholeNum.includes("+"));
    let firstNumArray = firstStrArray.map(Number);
    //let firstNumber = firstNumArray.join('');
    console.log(`first Number joined: ${firstNumArray}`);

    console.log(`first operator : ${firstOperArray}`);

    console.log(`Second string array : ${secondStrArray}`);

    let secondNumArray = secondStrArray.map(Number);
    //let secondNumber = secondNumArray.join('');
    console.log(`first Number joined: ${secondNumArray}`);

    //let firstTotalNum = wholeStrArray.join('');

      
    let firstTotalNum = firstNumArray + secondNumArray;
    console.log(firstTotalNum); 


const firstNumsToRemoveSet = new Set(firstStrArray);

    let secondStrArray = wholeStrArray.filter((numbers) => {
        return !firstNumsToRemoveSet.has(numbers);
        console.log(secondStrArray);

    })

    console.log(`first number array in add: ${firstStrArray}`)
    console.log(`first operator array in add: ${firstOperArray}`)
    console.log(`second number array in add: ${secondStrArray}`)

function operate(event) { 
    //console.log(event.target.id);
    if (event.target.classList.contains("btn-nums")) {
        const nums = event.target.textContent;
        const numInput = event.target.textContent; 
        display.textContent = numInput;
        let digits = firstStrArray.push(nums);
        let firstWholeNum = firstStrArray.join('');
        console.log(`first whole number : ${firstWholeNum}`);
    }
    //console.log(`First Num Array: ${firstStrArray}`);

    else if (event.target.classList.contains("btn-opers")) {
        //console.log("hello 2")
        const opers = event.target.textContent;
        const opersInput = event.target.textContent;
        display.textContent = opersInput;
        let operator = firstOperArray.push(opers);
        let firstOper = firstOperArray.join('');
        //console.log(`first operator : ${firstOper}`);
        //operate(firstWholeNum);


btns.forEach(btn => {
    btn.addEventListener('click', event => {
        //console.log(event.target.id);
        const nums = event.target.textContent
        const btnInput = event.target.textContent;
        display.textContent = btnInput;
        const digits = [];
        const digit = digits.push(nums);
        digit.concat
        console.log(digits);        
        });
});


equalsBtn.addEventListener('click', event => {
    const equals = event.target.textContent;
    //const equalsInput = event.target.textContent;
    //display.textContent = equalsInput;
    display.textContent = total;



})



(event.type == click

            //console.log(event);
    }

    
    
    //console.log(event.target.textContent);
    //console.log(opersInput);


*/