import React from 'react';
import './AddItem.css'
const AddItem = () => {
    return (
        <section className='common-authn'>
        <div className="container">
        <h1 className='text-center text-danger'>ADD ITEM</h1>
        <h2 className='text-center text-danger w-100 py-2 '>create a new item</h2>
        <div className="row">
        <div className="col-lg-6 col-12 mx-auto ">
            <form action="">
            <div className='from-item'>
                <label htmlFor="name">
                   Name
                </label>
                <input type= "text" className=' w-100 h-100 py-2'  name="email" id="" required />
            </div>
            <div className='from-item'>
                <label htmlFor="description">
                description
                </label>
                <textarea type= "email" className=' w-100 h-100 py-2'  name="email" id="" required />
            </div>
            <div className='from-item'>
                <label htmlFor="image">
                 image
                </label>
                <input type= "text" className=' w-100 h-100 py-2'  name="password" id="" required />
            </div>
            <div className='from-item'>
                <label htmlFor="price">
                price
                </label>
                <input type= "price" className=' w-100 h-100 py-2'  name="password" id="" required />
            </div>
            <div className='from-item'>
                <label htmlFor="supplier">
                supplier
                </label>
                <input type= "text" className=' w-100 h-100 py-2'  name="password" id="" required />
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