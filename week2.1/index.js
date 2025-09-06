// callback revisions

function square(n) {
    console.log("sqare number 1");    
  return n * n;
}

function cube(n) {
  return n * n * n;
}

function sumOfSquares(a, b) {
  let square1 = square(a);
  let square2 = square(b);
  return square1 + square2;
}

let ans = sumOfSquares(1, 2);
console.log(ans);

// async functions

function myOwnSetTimeout(fn, duration){
  
  setTimeout(fn, duration)
}

myOwnSetTimeout(function(){
  console.log("setTime out");
  
}, 1000)

 

function peomisefyMyOwnSetTimeout(duration){
  let p = new Promise(function(resolve){
    setTimeout(function(){
         console.log("inside the setTimeout");
         
    },2000)
  })
   return p;
}

const ans2 =  peomisefyMyOwnSetTimeout(1000)
ans.then(function(){
  console.log("setTimeout is done");
  
})
console.log(ans2);


const p = new Promise(function(first){
   first("hi there")
})

 console.log(p);
 

setTimeout(function(){
  console.log("hi there");
  
},1000)

setTimeout(1000).then(function(){
  console.log("hi there ");
  
})

