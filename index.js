
const express = require("express");
const cors = require('cors');




const  {sequelize,pat,patient,consultation,linecons} = require ('./models');

var app = express();
app.use(express.json());
app.use(cors())
app.listen(3000,()=>{
console.log("server up")

})

app.get('/attente' ,async (req,res)=>{
    try{
        var ph = await patient.findAll();
        return(res.json(ph));

    }catch(error){
      return (res.json(error));
    }


})

app.post('/patientcons',async (req,res)=>{
    const{nom,prenom,age,sexe,maladiechr,numero}=req.body;
    console.log(nom);
    var ph = await patient.create({nom,prenom,age,sexe,maladiechr,numero});
    return(res.json(ph));
    
    })

    app.post('/cons',async (req,res)=>{
        const{userid,uuid,date,rdv,total,vers,rest,type,obs}=req.body;
        var ph = await consultation.create({userid,uuid,date,rdv,total,vers,rest,type,obs});
        return(res.json(ph));
        
        })
        app.post('/linecons',async (req,res)=>{
            const{consid,rdv,vers,type,obs}=req.body;
            var ph = await consultation.create({consid,rdv,vers,type,obs});
            return(res.json(ph));
            
            })
    

app.post('/patient',async (req,res)=>{
    try{
        const{nom,prenom,age,sexe,maladiechr,numero,uuid}=req.body;

console.log(uuid);
var ph = await pat.findOne({where:{nom,numero}});


if (typeof ph !== 'undefined' && ph !== null){
    return(res.json(ph));



 }else{
    var cr = await pat.create({nom,prenom,age,sexe,maladiechr,numero});

    return(res.json(cr));


 }



s
    }catch(err){
      return(res.json(err))
    }


})
app.get('/',async(req,res)=>{
    res.send("hihi")
   await  sequelize.sync({force:true});
})