import { useEffect, useState } from "react";

const Usefetch = (proxy) => {

    const [news , setNews] = useState([]);
    const [loding, setLoding] = useState(true);
    const [error , setError] = useState(null)

useEffect(()=>{
     fetch(proxy)
        .then(res => {
            return res.json()
        })
        .then(data => {
            setNews(data)  
            setLoding(false)
        })
        .catch(err => {
            setError(err.message)
            setLoding(false)
            })
        
},[proxy]);

    return  {news, loding, error};
    
}
 
export default Usefetch;