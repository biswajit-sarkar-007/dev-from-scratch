// interface
// arrays
interface User {
    firstName:string,
    lastName:string,
    age:number
}

function filterUsers(users:User[]){
    return users.filter(x => x.age >= 18)
}

console.log(filterUsers([{
     firstName: "biswa",
    lastName:"sarkar",
    age: 10
}, {
     firstName: "aditi",
    lastName:"sarkar",
    age: 15
}, {
     firstName: "rahul",
    lastName:"sarkar",
    age: 20
},{
     firstName: "riya",
    lastName:"sarkar",
    age: 19
}]))


 
// enums
//type inputType = "up" | "down" | "left" | "right";

enum Direction {
    Up, //0
    Down, //1
    Right, //2
    Left //3
}
 
function doSomething(keyPressed: Direction){
     if(keyPressed == Direction.Up){

     }
      if(keyPressed == Direction.Down){
        
     }
      if(keyPressed == Direction.Up){
        
     }
      if(keyPressed == Direction.Up){
        
     }
}
doSomething(Direction.Up)
console.log(Direction.Up);



//Generics

function identity<T>(arg: T){
    return arg;
}

let output1  = identity<string>("biswajit");
let ouput2  = identity<number>(4);
let ouput3 = identity<boolean>(true)

console.log(output1.toUpperCase());


 
function getFirstEl<T>(arr:T[]){
    return arr[0]
}
 
// const el = getFirstEl<string>(["bisw", "jit"])
const el = getFirstEl (["bisw", "jit"])
console.log(el.toUpperCase());


// expoting and importing module

import b from "./b"
export function sum(){

}