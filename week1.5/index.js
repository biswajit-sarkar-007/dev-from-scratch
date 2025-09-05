// 1.synchronous function--------------

function findSum(n) {
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans = ans + i;
  }
  return ans;
}
console.log(findSum(100));

//2. asynchronous function-------------

function findSum_new(n) {
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans = ans + i;
  }
  return ans;
}

function findSumTill100() {
  console.log(findSum_new(100));
}

// busy waiting
function syncSleep() {
  let a = 1;
  for (let i = 0; i < 10000000000; i++) {
    a++;
  }
}

syncSleep();
findSumTill100();

setTimeout(findSumTill100, 1000);
console.log("hello world");




//3. promises ------------------------------

const fs = require("fs");
// my own asynchronous function  using callback
function BiswaReadFile(cb) {
  fs.readFile("a.txt", "utf-8", function (err, data) {
    cb(data);
  });
}

function onDone(data) {
  console.log(data);
}

BiswaReadFile(onDone);



// const fs = require("fs");   ----just commned out of this before its check
// my own asynchronous function  using promises
function BiswaReadFile_New() {
  console.log("before the promises");
  return new Promise(function (resolve) {
    fs.readFile("a.txt", "utf-8", function (err, data) {
      resolve(data);
      console.log("after the resolve");
    });
  });
}

function onDone_New(data) {  // callback function to call
  console.log(data);
}

var a = BiswaReadFile_New();
console.log(a);
a.then(onDone_New);



// new promises

var d = new Promise(function(resolve){
    setTimeout(function(){
        resolve("foo");
    }, 1000)

})

function callback(){
    console.log(d);
}

console.log(d);

d.then(callback)



// calback syntax---------------------------

function  Biswa_CallBack_AsyncFunction(callback) {
  // do some async logic here
  callback("hi there!");
}

async function main_callback() {
   Biswa_CallBack_AsyncFunction(function (value) {
    console.log(value);
  });
}

main_callback();



// promise (then) syntax----------------------

function  Biswa_Promise_AsyncFunction() {
  let p = new Promise(function (resolve) {
    // do some async logic here
    resolve("hi there!");
  });
  return p;
}

function main_promise() {
   Biswa_Promise_AsyncFunction().then(function (value) {
    console.log(value);
  });
}

main_promise();




// aync/await syntax--------------------

function Biswa_await_AsyncFunction() {
  let p = new Promise(function (resolve) {
    // do some async logic here
    resolve("hi there!");
  });
  return p;
}

async function main_new() {
  const value = await Biswa_await_AsyncFunction();
  console.log(value);
}

main_new();




// complecated function :  
function BiswaAsyncFunctionUpdated() {
  let p = new Promise(function (resolve) {
    console.log("hi there inside promises ");

    setTimeout(function () {
      resolve("hi there!");
    }, 1000);
  });
  return p;
}
async function mainUpdated() {
  let val = await BiswaAsyncFunctionUpdated(); // thread is busy here

  console.log("hi there inside main fn");

  console.log(val);
}

mainUpdated();
console.log("hi there outside main fn");
