import  Express  from "express";
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from "../controller/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = Express.Router();

router.post('/:hotelid', verifyAdmin, createRoom)

router.put('/:id', verifyAdmin, updateRoom)

router.delete('/:id', verifyAdmin, deleteRoom)


router.get('/:id', getRoom)

router.get('/', getRooms)
 
export default router