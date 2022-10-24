"use strict";
const fizz = "fizz";
const buzz = "buzz";
const numberContainer = document.getElementById('number-container');

for(let i=1; i<=100; i++){
    if(i%15 === 0){
        const boardNumber = document.createElement('div');
        boardNumber.classList.add('box');
        boardNumber.classList.add('fizzbuzz');
        numberContainer.append(boardNumber);
        boardNumber.innerHTML = fizz + buzz;
        // console.log(fizz + buzz);
    }else if(i%3 === 0){
        const boardNumber = document.createElement('div');
        boardNumber.classList.add('box');
        boardNumber.classList.add('fizz');
        numberContainer.append(boardNumber);
        boardNumber.innerHTML = fizz;
        // console.log(fizz);
    }else if(i%5 === 0){
        const boardNumber = document.createElement('div');
        boardNumber.classList.add('box');
        boardNumber.classList.add('buzz');
        numberContainer.append(boardNumber);
        boardNumber.innerHTML = buzz;
        // console.log(buzz);
    }else{
        const boardNumber = document.createElement('div');
        boardNumber.classList.add('box');
        numberContainer.append(boardNumber);
        boardNumber.innerHTML = i;
        // console.log(i);
    }
}