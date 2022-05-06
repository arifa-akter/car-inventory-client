import React from 'react';
import './OneCarInfo.css'
const OneCarInfo = ({one}) => {
  console.log(one)
  const { _id , name, image ,description, price , supplier, quantity } = one
    return (
      <div className='col-lg-7 col-12 mx-auto'>
      <div className="car-detail-img">
          <img src={image} alt="" />
      </div>
      <div className="car-detail-text car-text">
      <h2 className='name'>Name: {name}</h2>
          <h2 className='name'>Description:</h2>
            <ul>
               <li><span>id</span>: {_id}</li>
               <li><span>Quantity</span>: {quantity}</li>
                <li><span>seating </span>:{description.seating}</li>
                <li><span>Body</span> :{description.body}</li>
                <li><span>Odometer</span> :{description.odometer}</li>
                <li><span>transmission</span> :{description.transmission}</li>
                <li><span>car color</span> :{description.color}</li>
                <li><span>comfort</span> :{description.comfortable}</li>
                <li><span>price</span>:${price}</li>
                <li><span>supplier</span>: {supplier}</li>
                <li><span>sold</span></li>
            </ul>
      </div>
      <div className="button-div">
             <button className='update-button'> delivery</button>
             </div>
 </div>
    );
};

export default OneCarInfo;