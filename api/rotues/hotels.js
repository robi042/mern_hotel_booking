import Express from "express"

import {createHotel, updateHotel, deleteHotel, seeHotel, seeHotels, countByCity, countByType} from "../controller/hotel.js"
import { verifyAdmin } from "../utils/verifyToken.js";

const router = Express.Router();

router.post('/', verifyAdmin, createHotel)

router.put('/:id', verifyAdmin, updateHotel)

router.delete('/:id', verifyAdmin, deleteHotel)


router.get('/find/:id', seeHotel)

router.get('/', seeHotels)

router.get('/countByCity', countByCity)
router.get('/countByType', countByType)
 
export default router