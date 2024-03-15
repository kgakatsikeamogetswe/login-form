import mongoose from 'mongoose';

let isConnected = false

export const connectToDb = async()=>{
    mongoose.set('strictQuery', true)

    if(isConnected){
        console.log("Mongo is connected")
        return
    }

    try{
        await mongoose.connect('mongodb://localhost:27017/LonginForm')

        isConnected(true)
        console.log("connected to mongodb")
    }
    catch(e){
        console.log(e)
    }
}