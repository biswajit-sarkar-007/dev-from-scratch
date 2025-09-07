// map , filter, arrow fn

function sum(a, b) {
  return a + b;
}

const sumArrow = (a, b) => {
  return a + b;
};

sum(3, 4);
sumArrow(3, 4);

// given an array , give me back a new array in which every value is multiplied by 2

// [1,2,3,4,5]
//[2,4,6,8,10]

const input = [1, 2, 3, 4, 5];
const ouput =[];
for(let i = 0;i<input.length;i++){
 ouput.push(input[i] * 2);
}

console.log(ouput);

// other solution

const ansNew = input.map((i)=>i*2)

function trsnfrom(i){
    return i*2;
}

console.log(input.map( trsnfrom));

// create a map function that takes  inputs an array , and a trasfromantion callback/fn and trasfroms the array into a new on using the trasfromantion fn

const newArr = [1, 2, 3, 4, 5, 6, 7];

const map = (newArr, fn) => {
  const trasfromArr = [];
  for (let i = 0; i < newArr.length; i++) {
    trasfromArr.push(fn(newArr[i]));
  }
  return trasfromArr;
};

function fn(n) {
  return n * 2;
}

const ans = map(newArr, fn);
console.log(ans);

// filtering
// from given array give me all the even number back

const arr = [1,2,3,4,5,6,7,8,9,10];

function filterLogic(i){
    if(i%2 == 0){
        return true;
    }else{
        return false;
    }
}

const ansUpdate = arr.filter(filterLogic)

console.log(ansUpdate);
