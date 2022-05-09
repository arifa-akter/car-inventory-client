// import { updateProfile } from 'firebase/auth';
import React from 'react';
import { Link } from 'react-router-dom';
import './UpDate.css'
const UpDate = () => {
    const handleUpdate =(event)=>{
        event.preventDefault()
        const name = event.target.name.value
        const supplier = event.target.supplier.value
        const image = event.target.image.value
        const price = event.target.price.value
        const body=event.target.body.value
        const color=event.target.color.value
        const comfortable=event.target.comfortable.value
        const odometer=event.target.odometer.value
        const quantity =event.target.quantity.value
        const transmission =event.target.transmission.value
        const email=event.target.email.value
        const seating=event.target.seat.value
        const newItem = {name ,quantity, email, description:{
                       body,
                       color,
                       comfortable,
                       odometer,
                       transmission,
                       seating
        } , supplier ,image , price}
        console.log(newItem)

           //    send a data to server
    fetch('https://boiling-wildwood-73300.herokuapp.com/inventory',{
        method: 'POST',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(newItem)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log('success data',data)
            alert('user add success fully')
             event.target.reset()
    })

    fetch('https://boiling-wildwood-73300.herokuapp.com/update',{
        method: 'POST',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(newItem)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log('success data',data)
            alert('user add success fully')
             event.target.reset()
    })
    } 
    return (
        <section className='update'>
            <div className="container">
            <h2 className="text-danger text-center">ADD ITEM</h2>
            <div className="row">
                         <div className="col-lg-12 col-12">
                             <div className="manage-btton">
                                <Link to="/manageInv">
                                <button className='manage-btn'>ManageInventory</button>
                                </Link>
                             </div>
                         </div>
                     </div>
            <div className='row quantity'>
             
              <div className="col-lg-6 col-12 mx-auto ">
            <form onSubmit={handleUpdate} action="">
            <div className='from-item'>
                <label htmlFor="name">
                   Name
                </label>
                <input type= "text" className=' w-100 h-100 py-2'  name="name" id="" required />
            </div>
            <div className='from-item'>
                <label htmlFor="name">
                  email
                </label>
                <input type= "email" className=' w-100 h-100 py-2'  name="email" id="" required />
            </div>
            <div className='from-item'>
                <label htmlFor="description">
                odometer
                </label>
                <input type= "number" className=' w-100 h-100 py-2'  name="odometer" id="" required />
            </div>
            <div className='from-item'>
                <label htmlFor="image">
                 image
                </label>
                <input type= "text" className=' w-100 h-100 py-2'  name="image" id="" required/>
            </div>
            <div className='from-item'>
                <label htmlFor="price">
                price
                </label>
                <input type= "number" className=' w-100 h-100 py-2'  name="price" id="" required />
            </div>
            <div className='from-item'>
                <label htmlFor="supplier">
                supplier
                </label>
                <input type= "text" className=' w-100 h-100 py-2'  name="supplier" id="" required/>
            </div>
            <div className='from-item'>
                <label htmlFor="supplier">
                Quantity
                </label>
                <input type= "text" className=' w-100 h-100 py-2'  name="quantity" id="" required/>
            </div>
            <div className='from-item'>
                <label htmlFor="supplier">
                color
                </label>
                <input type= "text" className=' w-100 h-100 py-2'  name="color" id="" required/>
            </div>
            <div className='from-item'>
                <label htmlFor="supplier">
                body
                </label>
                <input type= "text" className=' w-100 h-100 py-2'  name="body" id="" required/>
            </div>
            <div className='from-item'>
                <label htmlFor="supplier">
                comfortable
                </label>
                <input type= "text" className=' w-100 h-100 py-2'  name="comfortable" id="" required/>
            </div>
            <div className='from-item'>
                <label htmlFor="supplier">
                 seat
                </label>
                <input type= "text" className=' w-100 h-100 py-2'  name="seat" id="" required/>
            </div>
            <div className='from-item'>
                <label htmlFor="supplier">
                transmission
                </label>
                <input type= "text" className=' w-100 h-100 py-2'  name="transmission" id="" required/>
            </div>
            <button className='social-btn add-item w-100' >
                 upDate</button>
            </form>
        </div>

              </div>

            </div>
            
        </section>
    );
};

export default UpDate;