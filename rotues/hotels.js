import Express from "express"

import {createHotel, updateHotel, deleteHotel, seeHotel, seeHotels} from "../controller/hotel.js"

const router = Express.Router();

router.post('/', createHotel)

router.put('/:id', updateHotel)

router.delete('/:id', deleteHotel)


router.get('/:id', seeHotel)

router.get('/', seeHotels)
 
export default router