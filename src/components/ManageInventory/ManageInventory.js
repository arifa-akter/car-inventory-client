import React from 'react';
import { Link } from 'react-router-dom';
import useCars from '../../hooks/useCars';
import './ManageInventory.css'

const ManageInventory = () => {
    const[cars]=useCars([])
    console.log(cars)
    return (
        <section className='manageInventory'>
            <div className="container"> 
            <h2 className="text-center text-danger">MANAGE INVENTORY</h2>
            <div className="row">
                         <div className="col-lg-12 col-12">
                             <div className="manage-btton">
                                <Link to="/addItem">
                                <button className='manage-btn'>ADD ITEM</button>
                                </Link>
                             </div>
                         </div>
                     </div>
                <div className="row">
                    <div className="col-lg-12">
                            <div className='manage-table'>
                            <table className="table table-bordered">
                         <thead>
                          <tr>
                          <th className="text-danger" scope="col">name</th>
                          <th className="text-danger" scope="col">description</th>
                          <th className="text-danger" scope="col">color</th>
                          <th className="text-danger" scope="col">Body</th>
                          <th className="text-danger" scope="col">transmission</th>
                          <th className="text-danger" scope="col">quantity</th>
                          <th className="text-danger" scope="col">seating</th>
                          <th className="text-danger" scope="col">Odometer</th>
                          <th className="text-danger" scope="col">price</th>
                          <th className="text-danger" scope="col">supplier</th>
                          <th className="text-danger" scope="col">Remove</th>
                          </tr>
                    </thead>
                  <tbody>
                      {
                        cars.map(c=>
                            <tr>
                            {/* <th scope="row">1</th> */}
                            <td>{c.name}</td>
                            <td>{c.description.comfortable}</td>
                            <td>{c.description.color}</td>
                            <td>{c.description.body}</td>
                            <td>{c.description.transmission}</td>
                            <td>{c.quantity}</td>
                            <td>{c.description.seating}</td>
                            <td>{c.description.odometer}</td>
                            <td>{c.price}</td>
                            <td>{c.supplier}</td>
                            <td><button className="inventory-btn">Delete</button></td>
                           </tr>
                            )
                      }
                
                 </tbody>
                 </table>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ManageInventory;