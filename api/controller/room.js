import Room from "../models/Room.js"
import Hotel from "../models/Hotel.js"

export const createRoom  = async (req, res, next) =>{
      const hotelId = req.params.hotelid
      console.log(req.body, req.params.hotelid)
      const room = new Room(req.body)
      try{
            const saveRoom = await room.save()
            try{
                  await Hotel.findByIdAndUpdate(hotelId, {
                        $push: {rooms:saveRoom._id}
                  })
            }catch(err){
            next(err)
            }
            res.status(200).json(saveRoom);
      
      }catch(err){
            next(err)
      }
}

export const updateRoom = async (req, res, next) =>{
      try{
            const updateroom = await Room.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
            res.status(200).json(updateroom)
      }catch(err){
            next(err)
      }
}

export const deleteRoom = async (req, res, next) =>{
      try{
            await Room.findByIdAndDelete(req.params.id)
            res.status(200).json('Hotel has been deleted')
      }catch(err){
            next(err)
      }
}

export const getRoom = async (req, res, next) =>{
      try{
            const getRoom = await Room.findById(req.params.id)
            res.status(200).json(getRoom)
      }catch(err){
            next(err)
      }
}

export const getRooms = async (req, res, next) =>{
      try{
            const rooms = await hotel.find()
            res.status(200).json(rooms)
      }catch(err){
            //res.status(500).json(err)
            next(err)
      }
}