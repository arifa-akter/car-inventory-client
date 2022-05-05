import React from 'react';
import { Link } from 'react-router-dom';
import useCars from '../../../hooks/useCars';
import Car from '../Car/Car';
import './CarInventory.css'
const CarInventory = () => {
    const [cars] = useCars()
    // console.log(cars)
    const sixItem = cars.slice(0,6)
    console.log(sixItem)
    return (
        <section id="" className='car-inventory'>
                 <div className="container">
                     <h1 className='car-house-header'>CARS HOUSE</h1>
                     <div className="row">
                         {
                             sixItem.map(car=> <Car
                                key={car._id}
                                car={car}
                             >
                             </Car>)
                         }

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

export default CarInventory;