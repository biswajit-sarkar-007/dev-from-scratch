interface User1{
    name:string,
    age:number
}

function sumOfAge(user1:User1, user2:User1){
    return user1.age + user2.age;

}

const ans = sumOfAge({name:"biswa", age:20}, {name:"aditi", age:18})

console.log(ans);



interface User2 {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
}
type updateProfile = Pick<User2, "name" | "email">;
type updateProfileOptional = Partial<updateProfile>;
                                   // updateProfile
function displayUserProfile(user:  updateProfileOptional) {
  console.log(`Name :${user.name}, and Email is ${user.email}`);
}
displayUserProfile({
 // name: "biwsa",
  email: "biswa@gmail.com",
});


type User3 ={
    name:string,
   readonly age:number,
    isMarried:false
}

const user1:User3 = {
    name:"biswa",
    age:21,
    isMarried:false
}

//user.age=20;

user1.name="hiam"






type UsersAge ={
    [key:string] : number;
} 

type UsersAge1 = Record<string, {age:number , isMarried:boolean}>
const user2 :UsersAge1 = {
    "ram": {age:21, isMarried:true},
    "raj":  {age:20, isMarried: false}
}

 