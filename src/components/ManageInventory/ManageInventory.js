import React from 'react';
import { Link } from 'react-router-dom';
import useCars from '../../hooks/useCars';
import AllManage from '../AllManage/AllManage';
import './ManageInventory.css'

const ManageInventory = () => {
    const[cars]=useCars([])
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
                {
                             cars.map(carAll=><AllManage
                             key={carAll._id}
                             carAll={carAll}
                             car
                             ></AllManage>)
                         }
                </div>
            </div>
        </section>
    );
};

export default ManageInventory;