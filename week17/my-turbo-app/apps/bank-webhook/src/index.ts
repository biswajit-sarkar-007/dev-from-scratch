import express from "express"
import db from "@repo/db/client"

const app = express();

app.post("/",async (req,res)=>{
    // add validation endpoint here

    const paymentInformation = {
        token:req.body.token,
        userId:req.body.userId,
        amount:req.body.amount
    };

   await db.balance.update({
        where:{
            userId:paymentInformation.userId
        },
        data:{
            amount: {
                increment: paymentInformation.amount
            }
        }
    })

    await db.onRampTransaction.update({
        where:{
            token:paymentInformation.token
        },
        data:{
            status:"Success"
        }
    })

    res.json({
        msg:"captured!"
    })



    

    // uppdate balcane db 
}) 