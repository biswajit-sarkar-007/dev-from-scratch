
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

async function insertUser (usrname: string, password:string, firstName:string,lastName:string) {
    const res = await prisma.user.create({
        data:{
            username:usrname,
            password,
            firstName,
            lastName
        },
        select:{
            id:true,
            password:true,
            lastName:true
        }
    })
    console.log(res);
    
} 


async function updateUser(username:string, {
    firstName,
    lastName
}:{
    firstName:string,
    lastName:string
}){
   const res = await prisma.user.update({
        where:{
            username:username

        },
        data:{
            firstName,
            lastName
        
        }
    })
    console.log(res);
    
}


// insertUser("biswajitsarkar@gmail.com", "password","Biswajit","Sarkar")


 
updateUser("biswajitsarkar@gmail.com", {
    firstName:"biswajit123",
    lastName:"sarkar123"
})