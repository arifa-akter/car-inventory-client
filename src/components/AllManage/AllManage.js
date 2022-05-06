import React from 'react';
import { Link } from 'react-router-dom';

const AllManage = ({carAll}) => {
    const {  name, image ,description, price , supplier, quantity } =carAll
    return (
        <div className="col-lg-4 col-12 col-md-6 g-3 gx-lg-4 d-flex justify-content-center mx-auto">
        <div className='car-card'>
         <div className="image-car">
         <img src={image} alt="" />
         </div>
         <div className="car-text">
             <h2 className='name'>Name: {name}</h2>
             <h2 className='name'>Description:</h2>
               <ul>
                  <li><span>Quantity</span>: {quantity}</li>
                   <li><span>seating </span>:{description.seating}</li>
                   <li><span>Body</span> :{description.body}</li>
                   <li><span>Odometer</span> :{description.odometer}</li>
                   <li><span>transmission</span> :{description.transmission}</li>
                   <li><span>car color</span> :{description.color}</li>
                   <li><span>comfort</span> :{description.comfortable}</li>
                   <li><span>price</span>:${price}</li>
                   <li><span>supplier</span>: {supplier}</li>
               </ul>
              </div>
         <div className="button-div">
         <button className='update-button'>Delete</button>
         
         <Link to="/addItem">
         <button className='update-button ' style={{background:'#d3626d'}}>Add Item</button>
         </Link>
  
         </div>
 </div>
</div>
    );
};

export default AllManage;