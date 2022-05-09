import React, { useEffect, useState } from 'react';
import './UpInfo.css'
import UpdateMy from '../UpdateMy/UpdateMy';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
const UpInfo = () => {
    const[updates , setUpdates] = useState([])
    const [user] =useAuthState(auth)
    console.log(updates)
    useEffect(()=>{
        const email =user.email
        fetch(`https://boiling-wildwood-73300.herokuapp.com/update?email=${email}`)
        .then(res => res.json())
        .then(data => setUpdates(data))
    },[user])
    const handleDeleteManageInventory = (id)=>{
        const confirmYOu = window.confirm('are you confirm you want to delete')
        if(confirmYOu){
          console.log(id)
          fetch(`https://boiling-wildwood-73300.herokuapp.com/update/${id}`,{
            method: 'DELETE',
          })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount>0)
                console.log('success data',data)
                const remaining = updates.filter(item=>item._id !==id)
                setUpdates(remaining)
        })
        }
    }
    return (
        <section className='my-upInfo'>
            <div className="container">
            <h2 className='text-center text-danger'> My ITEM</h2>
            <div className="row">
                  {
                      updates.map(manageItem =><UpdateMy
                      key={manageItem._id}
                      manageItem ={manageItem}
                      handleDeleteManageInventory={handleDeleteManageInventory}
                      ></UpdateMy>)
                  }
              </div>
            </div>
        </section>
    );
};

export default UpInfo;