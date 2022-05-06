import React, { useState } from 'react';
import './CarDetail.css';
import useCars from '../../hooks/useCars'
import { Link, useParams } from 'react-router-dom';
import OneCarInfo from '../OneCarInfo/OneCarInfo';

const CarDetail = () =>{
    const {id} =useParams()
    const [cars] = useCars() 
    const oneCar = cars.filter(one => one._id == id )

    return (
        <section className="car-detail">
            <div className="container">
            <h1 className="text-danger text-center">CAR DETAIL</h1>
            <div className="row car-info">
        {
            oneCar.map(one=><OneCarInfo
            key={one._id}
            one={one}
            ></OneCarInfo>)
        }
            </div>
            <div className="row quantity">
                <div className="col-lg-7 col-12 mx-auto">
                <div className='from-item'>
                <label htmlFor="supplier">
                Quantity increase
                </label>
                <input type= "text" className=' w-100 h-100 py-2'  name="password" id="" required />
               </div>
                <button className='social-btn add-item w-100'>
                   increase Quantity</button>
                </div>
            </div>

            <div className="row">
                         <div className="col-lg-12 col-12">
                             <div className="manage-btton">
                                <Link to="/manageInv">
                                <button className='manage-btn'>ManageInventory</button>
                                </Link>
                             </div>
                         </div>
                     </div>
            </div>
      
        </section>
    );
};

export default CarDetail;