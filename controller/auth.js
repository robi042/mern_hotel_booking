import user from "../models/user.js"
import bcrypt from "bcrypt"
import{createError} from "../utils/error.js"

export const register = async (req, res, next) =>{
      try{
            const salt = bcrypt.genSaltSync(10)
            const hash = bcrypt.hashSync(req.body.password, salt);
            const newUser = new user({
            username: req.body.username,
            email: req.body.email,
            password: hash
            })

            await newUser.save();
            res.status(200).send('User created!')
      }catch(err){
            next(err)
      }
}

export const login = async (req, res, next) =>{
      try{
            const User = await user.findOne({username:req.body.username})
            if(!User) return next(createError(404, 'User not found!'))

            const isPasswordCorrect = await bcrypt.compare(req.body.password, User.password)
            if(!isPasswordCorrect) return next(createError(400, 'Wrong password!'))

            const {password, isAdmin, ...otherDetails} = User._doc

            res.status(200).json({...otherDetails})
      }catch(err){
            next(err)
      }
}