import  Express  from "express";

const router = Express.Router();

router.get('/room', (req,res) =>{
      res.send('user connected')
})
 
export default router