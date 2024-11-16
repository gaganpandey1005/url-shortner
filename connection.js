const mongoose=require ('mongoose')

async function connectTOMongoDB(url) {
    mongoose.connect(url)
    
}
module.exports={
    connectTOMongoDB,
}