import { useEffect, useState } from "react"

const useCars =()=>{
    const [cars, setCars] =useState([])
    useEffect(()=>{
        fetch('https://boiling-wildwood-73300.herokuapp.com/inventory')
        .then(res=>res.json())
        .then(data =>setCars(data))
    },[])
    return [cars , setCars]
}

export default useCars