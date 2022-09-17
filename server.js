console.log(" ############################ Khelo SERVER BOOT ############################ ");

import Express from "express";
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import auth_router from './rotues/auth.js'
import user_router from './rotues/users.js'
import hotel_router from './rotues/hotels.js'
import room_router from './rotues/rooms.js'
dotenv.config()



const app = Express();
app.use(Express.json())

const port = process.env.PORT || 8000


const connect = async () =>{
      try{
            await mongoose.connect(process.env.DB_URI)
            console.log('Connected MongoDB!')
      }
      catch(error){
            throw error;
      }
};

mongoose.connection.on('disconnected', () =>{
      console.log('mpngoDb Disconnected!')
})

mongoose.connection.on('connected', () =>{
      console.log('mongoDb Connected!')
})

app.get('/', (req, res) => {
  res.send('Khelo!')
})

app.use('/api/auth', auth_router)
app.use('/api/users', user_router)
app.use('/api/hotels', hotel_router)
app.use('/api/rooms', room_router)

app.use('*', (req, res) =>{
      res.status(404).json({error: 'Not found'})
})


app.use((err, req, res, next) =>{
      const errStatus = err.status || 500
      const errMessage = err.errMessage || 'Something went wrong!'
      return res.status(errStatus).json({
            Success: false,
            Status: errStatus,
            Message: errMessage,
            Stack: err.Stack
      })
})
      

app.listen(port,()=>{
      connect()
      console.log(`Khelo are listening on port ${port}`);
});



