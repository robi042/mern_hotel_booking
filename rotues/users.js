import  Express  from "express";
import { deleteUser, seeUser, seeUsers, updateUser } from "../controller/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = Express.Router();

// router.get('/cheakAuth', verifyToken, (req, res) =>{
//       res.send('you are logged in')
// })

// router.get('/cheakUser', verifyUser, (req, res) =>{
//       res.send('you are logged in and you can delete your account')
// })

// router.get('/cheakAdmin', verifyAdmin, (req, res) =>{
//       res.send('you are logged in and you can delete all the account')
// })

router.put('/:id', verifyUser, updateUser)

router.delete('/:id', verifyUser, deleteUser)


router.get('/:id', verifyUser,seeUser)

router.get('/', verifyAdmin, seeUsers)
 
export default router