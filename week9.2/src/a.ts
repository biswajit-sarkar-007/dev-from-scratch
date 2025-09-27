let a: number = 7;
console.log(a);



function greet(firstName: string) {
  console.log("hello " + firstName);
}
greet("biswajit");




function sum(a: number, b: number): number {
  return a + b;
}
const ans = sum(5, 4);
console.log(ans);




function isLegal(age: number): boolean {
  if (age > 18) {
    return true;
  } else {
    return false;
  }
}

const x = isLegal(17);
console.log(x);



// callbacks

function runAfter(fn: () => void) {
  setTimeout(fn, 2000);
}
runAfter(() => {
  console.log("hi there ");
});

const helloFn = (name: string) => `Hello, ${name}`;
const result = helloFn("biswa");
console.log(result);



// you are a pretty lady

//interfaces

interface User {
  firstName: string;
  age: number;
  isMarried?: boolean;
}

function isEligable(user: User) {
  if (user.age > 18) {
    return true;
  } else {
    return false;
  }
}

function helloNew(user: User) {
  if (user.isMarried == true) {
    return "picture abhi bki hai mera dost!";
  } else {
    return "you are happy man";
  }
}

const newAns1 = isEligable({
  firstName: "biswa",
  age: 10,
  isMarried: false,
});
console.log(newAns1);

const newAns2 = helloNew({
  firstName: "biswa",
  age: 10,
  //isMarried: false
});
console.log(newAns2);







 // interface uses class 
 
interface Perosn {
  name: string;
  age: number;
  greet(phrase: string): void;
}

class Man implements Perosn {
  name: string;
  age: number;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }

  greet(phrase: string): void {
    console.log(`${phrase} ${this.name}`);
  }
}

const e =new Man("biswa", 21 );
const newgreet = e.greet("hi gm");
console.log(newgreet);



//types

type GreetArg = number | string | boolean;
function welcGreet(id:GreetArg ){
   console.log(`ID: ${id}`);
   
}

const firstWlc = welcGreet(1)
console.log(firstWlc);

const secWel = welcGreet("abc")
console.log(secWel);

const  thirdWel = welcGreet( true)
console.log(thirdWel);


//intersection of types the main differnt between interfaces and types is interfaces used extends and types used intersection
// union and intersection only be done in type
type Employee = {
    name:string,
    joinDate:number
}

type Manager = {
    name:string,
    department:string
}

type TechLed = Employee & Manager;

const t:TechLed ={
    name:"biswajit",
    joinDate:20,
    department:"Software Developer"
}
console.log(t);


// arrays


function maxOfArr (arr:number[]){
    let max =0;
    for(let i =0;i<arr.length;i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max
}

const maxVal =maxOfArr([6,7,4,3,9,2,1, 12])

console.log(maxVal);
