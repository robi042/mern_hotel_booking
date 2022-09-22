import { useEffect, useState } from "react";
import axios from "axios"
const useFatch = (url) =>{
      const [data, setData] = useState([])
      const [loding, setLoding] = useState(false)
      const [error, setError] = useState(false)

      useEffect(()=>{
            const fatchData = async () =>{
                  setLoding(true)
                  try{
                        const res = await axios.get(url);
                        setData(res.data);
                  }catch(err){
                        setError(err)
                  }
                  setLoding(false)
            };
            fatchData();
      },[url]);

      const reFatch = async () =>{
            setLoding(true)
            try{
                  const res = axios.get(url);
                  setData(res.data);
            }catch(err){
                  setError(err)
            }
            setLoding(false)
      };

      return {data, loding, error, reFatch}
}

export default useFatch

