import React from 'react';
import useCars from '../../hooks/useCars';
import './ManageInventory.css'

const ManageInventory = () => {
    const[cars]=useCars([])
    console.log(cars)
    return (
        <section className='manageInventory'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-12">
                            <div className='manage-table'>
                            <table className="table table-bordered">
                         <thead>
                          <tr>
                          <th scope="col">name</th>
                          <th scope="col">description</th>
                          <th scope="col">color</th>
                          <th scope="col">Body</th>
                          <th scope="col">transmission</th>
                          <th scope="col">quantity</th>
                          <th scope="col">seating</th>
                          <th scope="col">Odometer</th>
                          <th scope="col">price</th>
                          <th scope="col">supplier</th>
                          <th scope="col">Remove</th>
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
                            <td><button>Delete</button></td>
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