import { useEffect, useState } from "react"
const useAddItem = () => {
    const [addItem , setAddItem] =useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/addItems')
        .then(res=>res.json())
        .then(data =>setAddItem(data))
    },)
    return  [addItem , setAddItem]
};

export default useAddItem;