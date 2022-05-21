// //....1..............
// function counter() {
//     var counter = 0;

//     function IncreaseCounter() {
//         return counter += 1;
//     };

//     return IncreaseCounter;
// }

// var counter = counter(); // not defined
// alert(counter());
// alert(counter());
// alert(counter());
// alert(counter());

// Ans-this page show 1 then 2 ,3,4




//....2........
// let count = 0;
// (function immediate() {
//     if (count === 0) {
//         let count = 1;
//         console.log(count); // What is logged?
//     }
//     console.log(count); // What is logged?
// })(); // 1 / 0





// //....3.....
// for (var i = 0; i < 3; i++) {
//     setTimeout(function log() {
//         console.log(i); // What is logged?
//     }, 1000);
// } //...3..



//......4......Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.

// function areaRectangle(width, length) {
//     let area = width * length;
//     return area;
// }

// let width = 5;
// let length = 6;
// document.write("Area = " + areaRectangle(width, length) + "<br>");



function rectanglee(length) {
    return function innerRectanglee(breadth) {
        var area = length * breadth;
        console.log(area);
    }
}

var areaa = rectanglee(2);
areaa(3);
//output 6


//.....5......
// Take a variable in outer function and create an inner function to increase the counter every time it is called
const g = function() {
    let a = 0;
    return function() {
        a++;
        console.log(`Now the count is ${a}`);

    }

}

const f = g();
f();
f();
f();
//   output-Now the count is 1
// index.js:58 Now the count is 2
// index.js:58 Now the count is 3




// //..6......

// var a = 12;
// (function() {
//     alert(a);
// })(); ///12



// //........7......
// var a = 10;
// var x = (function() {
//     var a = 12;
//     return function() {
//         alert(a);
//     };
// })(); //12
// x();


// //.....8................................................................
// var globalVar = "xyz";

// (function outerFunc(outerArg) {
//     var outerVar = 'a';

//     (function innerFunc(innerArg) {
//         var innerVar = 'b';

//         console.log(
//             "outerArg =" + outerArg + "\n" +
//             "innerArg =" + innerArg + "\n" +
//             "outerVar =" + outerVar + "\n" +
//             "innerVar =" + innerVar + "\n " +
//             "globalVar =" + globalVar);

//     })(456);
// })(123);