const express=require("express")
const{connectTOMongoDB}=require('./connection')
 const urlRoute=require("./Router/url")
 const URL=require("./model/url")
 const app=express()

const Port=8001

 connectTOMongoDB(`mongodb://127.0.0.1:27017/short_url`)
 .then(()=>console.log("connected"))
 app.use(express.urlencoded({extended:true}))
 app.use(express.json())
app.use("/url",urlRoute)

app.get("/:shortId",async(req,res)=>{
    const shortId=req.params.shortId;

   const entry= await URL.findOneAndUpdate({
        shortId,
    },{
        $push:{
    visitHistory:{
        timestamp: Date.now()
    },
    },
})
    res.redirect(entry.redirectUrl)
}) 

 app.listen(Port,()=>console.log(`server started at Port :${Port }`))
