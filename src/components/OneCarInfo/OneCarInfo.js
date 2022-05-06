import React from 'react';
import './OneCarInfo.css'
const OneCarInfo = ({one}) => {
  console.log(one)
  const { _id , name, image ,description, price , supplier, quantity } = one
    return (
      <div className='col-lg-12 col-12 mx-auto'>
      <div className="car-detail-img">
          <img src={image} alt="" />
      </div>
      <div className="car-detail-text car-text">
      <h2 className='name'>Name: {name}</h2>
          <h2 className='name'> Description:</h2>
          <table className="table table-bordered">
                         <thead>
                          <tr>
                          <th className="text-danger" scope="col">name</th>
                          <th className="text-danger" scope="col">Id</th>
                          <th className="text-danger" scope="col">color</th>
                          <th className="text-danger" scope="col">Body</th>
                          <th className="text-danger" scope="col">transmission</th>
                          <th className="text-danger" scope="col">quantity</th>
                          <th className="text-danger" scope="col">seating</th>
                          <th className="text-danger" scope="col">Odometer</th>
                          <th className="text-danger" scope="col">price</th>
                          <th className="text-danger" scope="col">supplier</th>
                          <th className="text-danger" scope="col">sold</th>
                          <th className="text-danger" scope="col">Delivery</th>
                          </tr>
                    </thead>
                  <tbody>
                  
                            <tr>
                            {/* <th scope="row">1</th> */}
                            <td>{name}</td>
                            <td>{_id}</td>
                            <td>{description.color}</td>
                            <td>{description.body}</td>
                            <td>{description.transmission}</td>
                            <td>{quantity}</td>
                            <td>{description.seating}</td>
                            <td>{description.odometer}</td>
                            <td>{price}</td>
                            <td>{supplier}</td>
                            <td>sold out</td>
                            <td><button className="inventory-btn"> delivery</button></td>
                           </tr>
                 </tbody>
                 </table>
            {/* <ul>
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
            </ul> */}
      </div>
      {/* <div className="button-div">
             <button className='update-button'> delivery</button>
             </div> */}
       </div>
    );
};

export default OneCarInfo;