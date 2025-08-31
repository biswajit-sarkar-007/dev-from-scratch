// #variables:

//  let a = 23;
//  var b = 24;
//  const c =25;



// #if -else:

//  1.
// const age = 19;
// if (age > 20) {
//   console.log("you are a man");
// }

// if (age < 20) {
//   console.log("you are a boy");
// }

// 2.

// const age = 19;
// if (age > 20) {
//   console.log("you are a man");
// } else {
//   console.log("you are a boy");
// }

// 3.

// const age = 19;
// const ans = age > 20 ? "you are a man" : " you are a boy";
// console.log(ans);



// #loops:

// const num = 1+2+3+4+5+6+7+8+9+10;
// console.log(num);

// let num =0;
// for (let i = 0; i<=10; i++){
//     num=num+i;
// }
// console.log(num);



// #array

// const pplArr = ["ram","sam","sita"];
// console.log(pplArr[1]);



// #obj

//1
// const pplObj = {
//     name:"ram",
//     age:19,
//     isMarried:false
// }
// console.log(pplObj["age"]);

//2

// const pplObj = [{
//     name:"ram",
//     age:19,
//     isMarried:false
// },{
//     name:"sam",
//     age:25,
//     isMarried:true
// },
//  {
//     name:"sita",
//     age:19,
//     isMarried:false
// }
// ]
// console.log(pplObj[1]["isMarried"]);



// #functios

// function sum(a,b){
//     return a+b;
// }

// const ans = sum(5,2);
// console.log(ans);



// function sum(num1, num2, fnToCall) {
//     let result = num1 + num2;
//     fnToCall(result);
// }

// function displayResult(data) {
//     console.log("Result of the sum is : " + data);
// }

// function displayResultPassive(data) {
//     console.log("Sum's result is : " + data);
// }

// // You are only allowed to call one function after this
// // How will you displayResult of a sum

// sum(5,2, displayResult);



//#setTimeout

// function greet(){
//     console.log("hello world");

// }

// setInterval(greet, 3* 1000)
