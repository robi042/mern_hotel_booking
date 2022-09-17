import  Express  from "express";
import { nextTick } from "process";
import hotel from "../models/Hotel.js";
const router = Express.Router();

router.post('/', async (req, res) =>{
      const newHotel = new hotel(req.body)
      try{
            const saveHotel = await newHotel.save()
            res.status(200).json(saveHotel)
      }catch(err){
            res.status(500).json(err)
      }
})

router.put('/:id', async (req, res) =>{
      try{
            const updateHotel = await hotel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
            res.status(200).json(updateHotel)
      }catch(err){
            res.status(500).json(err)
      }
})

router.delete('/:id', async (req, res) =>{
      try{
            await hotel.findByIdAndDelete(req.params.id)
            res.status(200).json('Hotel has been deleted')
      }catch(err){
            res.status(500).json(err)
      }
})


router.get('/:id', async (req, res) =>{
      try{
            const getHotel = await hotel.findById(req.params.id)
            res.status(200).json(getHotel)
      }catch(err){
            res.status(500).json(err)
      }
})

router.get('/', async (req, res, next) =>{
      try{
            const getHotels = await hotel.find()
            res.status(200).json(getHotels)
      }catch(err){
            //res.status(500).json(err)
            next(err)
      }
})
 
export default router