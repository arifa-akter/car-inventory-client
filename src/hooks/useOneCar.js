import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
const useOneCar = () => {
    const {id} =useParams()
    const [oneCarDetail , setOneCarDetail] =useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/service/${id}`)
        .then(res=>res.json())
        .then(data =>setOneCarDetail(data))
    },[id])
    return  [oneCarDetail , setOneCarDetail]
};

export default useOneCar;