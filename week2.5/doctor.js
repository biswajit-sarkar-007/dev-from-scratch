 const express = require("express")
 const app = express()

 const users = [{
    name:"Jhon",
    kidneys:[{
        healthy: false
    }]
 }]

app.use(express.json())


 app.get("/", function(req,res){
     

    const jhonKidneys = users[0].kidneys;
    const numberOfKidneys = jhonKidneys.length;
    let numberOfHealthyKidneys = 0;
    for(let i =0; i<numberOfKidneys;i++){
        if(jhonKidneys[i].healthy){
            numberOfHealthyKidneys = numberOfHealthyKidneys+1;
        }
    }

    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

    res.json({
         numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
 })


 // similary for this the backend validation to check is there any healthy kidneys there
 app.post("/", function(req,res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy:isHealthy
    })
    res.json({
        msg:"Done!"
    })
 })


 // similary for this the backend validation to check is there any healthy kidneys there
app.put("/", function(req,res){
    for(let i =0; i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy=true;
    }
    res.json({})
})

// remove all the unhealthy kidneys

app.delete("/", function(req,res){

    if(isThereAtleastOneUnhealthyKidney()){
        const newKidneys = [];
    for(let i =0;i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy:true
            })
        }
    }

    users[0].kidneys = newKidneys;
    res.json({msg:"all unhealthy kidneys deleted!"})
 
    }else{
        res.status(411).json({msg:"You have no bad kidneys"})
    }
     
})
  

function isThereAtleastOneUnhealthyKidney(){
    let atleastOneUnhealthyKidney = false;
    for(let i =0;i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy){
            atleastOneUnhealthyKidney=true;
        }
    }
    return atleastOneUnhealthyKidney;
}
 

 app.listen(3000)