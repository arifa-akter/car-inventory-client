import React from 'react';
import { Link } from 'react-router-dom';
import useCars from '../../hooks/useCars';
// import AllManage from '../AllManage/AllManage';
import './ManageInventory.css'

const ManageInventory = () => {
    const[cars ,setCars]=useCars([])
    console.log(cars)
    const handleDeleteItem = (id)=>{
        const confirmYOu = window.confirm('are you confirm you want to delete')
        if(confirmYOu){
          console.log(id)
          fetch(`https://boiling-wildwood-73300.herokuapp.com/inventory/${id}`,{
            method: 'DELETE',
          })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount>0)
                console.log('success data',data)
                const remaining = cars.filter(item=>item._id !== id)
                setCars(remaining)
                console.log(remaining)
        })
        }
    }
    return (
        <section className='manageInventory'>
            <div className="container"> 
            <h2 className="text-center text-danger">MANAGE INVENTORY</h2>
            <div className="row">
                         <div className="col-lg-12 col-12">
                             <div className="manage-btton">
                                <Link to="/addItem">
                                <button className='manage-btn'>order</button>
                                </Link>
                                <Link to="/update">
                                <button className='manage-btn'>Add Item</button>
                                </Link>
                             </div>
                         </div>
                     </div>
                <div className="row">
                <div className="col-lg-12 col-12 col-md-6 g-3 gx-lg-4 d-flex justify-content-center mx-auto">
                <div className="table-responsive">
                <table className="table table-bordered">
                         <thead>
                          <tr>
                          <th className="text-danger" scope="col">name</th>
                          <th className="text-danger" scope="col">Id</th>
                          <th className="text-danger" scope="col">image</th>
                          <th className="text-danger" scope="col">color</th>
                          <th className="text-danger" scope="col">body</th>
                          <th className="text-danger" scope="col">transmission</th>
                          <th className="text-danger" scope="col">Quantity</th>
                          <th className="text-danger" scope="col">seating</th>
                          <th className="text-danger " scope="col">odometer</th>
                          <th className="text-danger" scope="col">price</th>
                          <th className="text-danger" scope="col">supplier</th>
                          <th className="text-danger" scope="col">AddItem</th>
                          <th className="text-danger" scope="col">delete</th>
                          </tr>
                    </thead>
                    <tbody>

                    {
                             cars.map(c=><tr>
                                {/* <th scope="row">1</th> */}
                                <td>{c.name}</td>
                                <td>{c._id}</td>
                                <td><img src={c.image} alt="" style={{width:'40px' ,height:'40px'}} /></td>
                                <td>{c.description?.color}</td>
                                <td>{c.description?.body}</td>
                                <td>{c.description?.transmission}</td>
                                <td>{c.quantity}</td>
                                <td>{c.description?.seating}</td>
                                <td>{c.description?.odometer}</td>
                                <td>{c.price}</td>
                                <td>{c.supplier}</td>
                                <td> <Link to ='/update' >
                                   <button className='update-button ' style={{background:'#d3626d'}}>Add Item</button>
                                 </Link></td>
                                 <td><button className='update-button' onClick={()=>handleDeleteItem(c._id)}>Delete</button></td>
                                 
                               </tr>)
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