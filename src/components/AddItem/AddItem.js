import React from 'react';
import './AddItem.css'
import { toast } from 'react-toastify';
import axios from 'axios'
const AddItem = () => {
    const handleAddItem =(event)=>{
        event.preventDefault()
       const nameAdd = event.target.nameAdd.value
       const descriptionAdd = event.target.descriptionAdd.value
       const supplierAdd = event.target.supplierAdd.value
       const imageAdd = event.target.imageAdd.value
       const priceAdd = event.target.priceAdd.value
       const email = event.target.email.value
       const newItem = {nameAdd , descriptionAdd , supplierAdd ,imageAdd , priceAdd ,email}
       console.log(nameAdd , descriptionAdd , supplierAdd ,imageAdd ,priceAdd)

     axios.post('https://boiling-wildwood-73300.herokuapp.com/additems',newItem)
     .then(response=>{
        console.log(response) 
        const {data}=response
        if(data.insertedId){
           toast('your item is add')
           event.target.reset()
        }
     })

  

    }
    return (
        <section className='common-authn'>
        <div className="container">
        <h1 className='text-center text-danger'>ORDER</h1>
        <h2 className='text-center text-danger w-100 py-2 '>create a new item</h2>
        <div className="row">
        <div className="col-lg-6 col-12 mx-auto ">
            <form onSubmit={handleAddItem} action="">
            <div className='from-item'>
                <label htmlFor="name">
                   Name
                </label>
                <input type= "text" className=' w-100 h-100 py-2'  name="nameAdd" id="" required />
            </div>
            <div className='from-item'>
                <label htmlFor="name">
                  email
                </label>
                <input type= "email" className=' w-100 h-100 py-2'  name="email" id="" required />
            </div>
            <div className='from-item'>
                <label htmlFor="description">
                description
                </label>
                <textarea type= "email" className=' w-100 h-100 py-2'  name="descriptionAdd" id="" required />
            </div>
            <div className='from-item'>
                <label htmlFor="image">
                 image
                </label>
                <input type= "text" className=' w-100 h-100 py-2'  name="imageAdd" id="" required/>
            </div>
            <div className='from-item'>
                <label htmlFor="price">
                price
                </label>
                <input type= "number" className=' w-100 h-100 py-2'  name="priceAdd" id="" required />
            </div>
            <div className='from-item'>
                <label htmlFor="supplier">
                supplier
                </label>
                <input type= "text" className=' w-100 h-100 py-2'  name="supplierAdd" id="" required/>
            </div>
            <button className='social-btn add-item w-100'>
                   Add item</button>
            </form>
        </div>
        </div>
       
        </div>
    </section>
    );
};

export default AddItem;