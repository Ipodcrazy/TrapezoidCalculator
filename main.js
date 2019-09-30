"use strict";

document.getElementById("btn").addEventListener("click", equation);

function equation() {
    let b1 = Number(document.getElementById("ltb").value);
    console.log(b1);

    let b2 = Number(document.getElementById("lbb").value);
    console.log(b2);

    let h = Number(document.getElementById("height").value);
    console.log(h);

    let step1 = b1 + b2;
    console.log(step1);
    let step2 = step1 * 0.5;
    console.log(step2);
    let result = step2 * h;
    document.getElementById("answer").innerHTML = result;
}