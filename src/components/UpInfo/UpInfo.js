import React, { useEffect, useState } from 'react';
import './UpInfo.css'
import UpdateMy from '../UpdateMy/UpdateMy';
const UpInfo = () => {
    const[updates , setUpdates] = useState([])
    console.log(updates)
    useEffect(()=>{
        fetch('http://localhost:5000/update')
        .then(res => res.json())
        .then(data => setUpdates(data))
    },[])
    const handleDeleteManageInventory = (id)=>{
        const confirmYOu = window.confirm('are you confirm you want to delete')
        if(confirmYOu){
          console.log(id)
          fetch(`http://localhost:5000/update/${id}`,{
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