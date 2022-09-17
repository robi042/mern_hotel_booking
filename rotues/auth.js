import  Express  from "express";

const router = Express.Router();

router.get('/user1', (req,res) =>{
      res.send('user connected')
})
 
export default router