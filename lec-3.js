let a = 1;

if (a>0 && a<99){
    console.log("True");
}

//prompt() - To enter something into HTML
//if-else, nested if, if else-if else, multiple ifs with else


let b = 1;

if (b % 2 == 0){
    console.log("Even");
} else {
    console.log("Odd");
}

//---------------------------//

//By using ternary operator the above condition can be written as follows;

b % 2 == 0 ? console.log("Even") : console.log("Odd");

//---------------------------//

//Functions

function sum(a,b){
    return a+b;
}
sum();

// Default parameters

function sum(a = 2,b = 3){
    return(a+b);
}
sum();
//Output = 5
sum(5,2)
//Output = 7

//---------------------------//

//Pass by copy vs Pass by reference

function sum(a = 2,b = 3){
    return(a+b);
}
let a1 = 3;
let b1 = 4;
sum(a1, b1)
//Above is pass by copy



