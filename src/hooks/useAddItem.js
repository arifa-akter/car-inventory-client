import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import axios from 'axios'
const useAddItem = () => {
    const [user] = useAuthState(auth)
    const [addItem , setAddItem] =useState([])
    useEffect(()=>{
        const email = user.email
        const getAddItem = async()=>{
        const url = `https://boiling-wildwood-73300.herokuapp.com/addItems?email=${email}`
         const {data}= await axios.get(url)
         setAddItem(data)
        }
        getAddItem()
    },[user])
    return  [addItem , setAddItem]
};

export default useAddItem;