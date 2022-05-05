import React from 'react';
import './Car.css'
const Car = ({car}) => {
    console.log(car)
    const { name, image ,description, price , supplier } =car
    return (
       <div className="col-lg-4 col-12 col-md-6 g-3 gx-lg-4 d-flex justify-content-center mx-auto">
            <div className='car-card'>
             <div className="image-car">
             <img src={image} alt="" />
             </div>
             <div className="car-text">
                 <h2>Name: {name}</h2>
                 <h2>Description:</h2>
                   <ul>
                       <li>seating :{description.seating}</li>
                       <li>Body :{description.body}</li>
                       <li>Odometer :{description.odometer}</li>
                       <li>transmission :{description.transmission}</li>
                       <li>car color :{description.color}</li>
                       <li>comfort :{description.comfortable}</li>
                       <li>price:{price}</li>
                       <li>supplier: {supplier}</li>
                   </ul>

             </div>
            </div>
    </div>
    );
};

export default Car;