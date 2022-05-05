import React from 'react';
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
                                key={car.id}
                                car={car}
                             >
                             </Car>)
                         }

                     </div>
              
                 </div>
        </section>
    );
};

export default CarInventory;