import React from 'react';
import useAddItem from '../../hooks/useAddItem';
import MyOrder from '../MyOrder/MyOrder'
import './MyItem.css'

const MyItem = () =>{
    const[addItem , setAddItem] = useAddItem([])
    const handleDelete = (id)=>{
        const confirmYOu = window.confirm('are you confirm you want to delete')
        if(confirmYOu){
          console.log(id)
          fetch(`http://localhost:5000/addItems/${id}`,{
            method: 'DELETE',
          })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount>0)
                console.log('success data',data)
                const remaining = addItem.filter(item=>item._id !==id)
                setAddItem(remaining)
        })
        }
    }
  
    return (
      <section className='my-item'>
          <div className="container">
             <h2 className='text-center text-danger'>MY ITEM</h2>
              <div className="row">
                  {
                      addItem.map(myItems =><MyOrder
                      key={myItems._id}
                      myItems={myItems}
                      handleDelete={handleDelete}
                      ></MyOrder>)
                  }
              </div>
         
          </div>
      </section>
    );
};

export default MyItem;