const {nanoid}=require("shortid")
const URL=require("../model/url");
const shortid = require("shortid");

async function generateNewShortUrl(req,res) {
    const body=req.body;

    if (!body.url){
        
        return res.status(400).json({Error:"please provide URL"})
    }
    const shortId=shortid.generate()
    await URL.create({
        shortId: shortId,
        redirectUrl: body.url,
        visitHistory: []

    })
    return res.json({id: shortId})
}
module.exports={
    generateNewShortUrl,
}