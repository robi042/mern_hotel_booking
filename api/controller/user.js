
import user from "../models/User.js";


export const updateUser = async (req, res, next) =>{
      try{
            const updateUser = await user.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
            res.status(200).json(updateUser)
      }catch(err){
            next(err)
      }
}

export const deleteUser = async (req, res, next) =>{
      try{
            await user.findByIdAndDelete(req.params.id)
            res.status(200).json('Hotel has been deleted')
      }catch(err){
            next(err)
      }
}

export const seeUser = async (req, res, next) =>{
      try{
            const getUser = await user.findById(req.params.id)
            res.status(200).json(getUser)
      }catch(err){
            next(err)
      }
}

export const seeUsers = async (req, res, next) =>{
      try{
            const getUsers = await user.find()
            res.status(200).json(getUsers)
      }catch(err){
            //res.status(500).json(err)
            next(err)
      }
}