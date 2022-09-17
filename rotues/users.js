import  Express  from "express";

const router = Express.Router();

router.get('/user', (req,res) =>{
      res.send('user connected')
})
 
export default router