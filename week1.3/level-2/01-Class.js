// class is blueprint
 
// class Animal {
//   constructor(name, legCount) {
//     this.name = name
//     this.legCount = legCount
//   }
//   describe() {
//     return `${this.name} has ${this.legCount} legs`
//   }
// }


class Animal {
    constructor(name, legCount, speak){
        this.name = name;
        this.legCount=legCount;
        this.speak=speak;
    }
    speak(){
        console.log("hi there" + this.speak);
        
    }
}

 let cat = new Animal("cat",4 ,"mew mew mew");
cat.speak() 

