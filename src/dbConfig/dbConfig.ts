import mongoose from 'mongoose';

export async function connect(){
    try{
        mongoose.connect(process.env.MONGO_URI!)
        const connection = mongoose.connection

        connection.on('connected',()=>{
            console.log('mongodb connected')
        })

        connection.on('error',(err)=>{
            console.log('connection error'+ err)
            process.exit()
        })

    } catch(error){
        console.log("something went wrong while connecting to db");
        console.log(error)
    }
}