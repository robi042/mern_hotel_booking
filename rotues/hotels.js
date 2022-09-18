import Express from "express"

import {createHotel, updateHotel, deleteHotel, seeHotel, seeHotels} from "../controller/hotel.js"
import { verifyAdmin } from "../utils/verifyToken.js";

const router = Express.Router();

router.post('/', verifyAdmin, createHotel)

router.put('/:id', verifyAdmin, updateHotel)

router.delete('/:id', verifyAdmin, deleteHotel)


router.get('/:id', seeHotel)

router.get('/', seeHotels)
 
export default router