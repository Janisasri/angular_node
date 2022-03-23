/*eslint-disable*/
function addition() {
   const x=100;
   const y=50;
   //console.log(x+y);
   //document.writeln(x+y);
   var resultElement=document.getElementById("result");
   resultElement.innerText=(x+y);
}

function sum() {
    const x = parseInt(document.getElementById("firstValue").value);
    const y = parseInt(document.getElementById("secondValue").value);
    var resultElement=document.getElementById("result");
    resultElement.innerText= x+y;
}

function add(x,y) {
    var resultElement= document.getElementById("result");
    resultElement.innerText= parseInt(x) + parseInt(y);
}
function problem1() {
     let i=0;
     for ( i = 0; i < 100; i++) {
         console.log(i);
     }
}
function problem2() {
    let i=0;
    for ( i = 10; i > 0; i--) {
        console.log(i);
    }
} 
function problem3() {
    let i=0;
    for ( i = 0; i <= 100; i++) {
        if ( i % 2 === 0){
            console.log(i);
        }
        
    }
}
function printdigits(A) {
    let reminder=0;
    let num=A;
    while(num > 0) {
        reminder = parseInt(num % 10);
        console.log(reminder);
        num = parseInt(num / 10);
        var resultElement= document.getElementById("result");
        resultElement.innerText= parseInt(reminder);
}
     
}
