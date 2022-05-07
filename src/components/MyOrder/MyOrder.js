import React from 'react';
import './MyOrder.css'
const MyOrder = ({myItems ,handleDelete ,handleDeleteManageInventory ,manageItem}) => {
    const {priceAdd, imageAdd ,supplierAdd, descriptionAdd , nameAdd ,_id ,} =myItems
    return (
        <div className="col-lg-12 col-12 col-md-6 g-3 gx-lg-4 d-flex justify-content-center mx-auto">
        <div className="table-responsive">
        <table className="table table-bordered">
                         <thead>
                          <tr>
                          <th className="text-danger" scope="col">name</th>
                          <th className="text-danger" scope="col">Id</th>
                          <th className="text-danger" scope="col">image</th>
                          <th className="text-danger" scope="col">description</th>
                          <th className="text-danger" scope="col">price</th>
                          <th className="text-danger" scope="col">supplier</th>
                          </tr>
                    </thead>
                  <tbody>
                            <tr>
                            {/* <th scope="row">1</th> */}
                            <td>{nameAdd}</td>
                            <td>{_id}</td>
                            <td><img src={imageAdd} alt="" style={{width:'40px' ,height:'40px'}} /></td>
                            <td>{descriptionAdd}</td>
                            <td>${priceAdd}</td>
                            <td>{supplierAdd}</td>
                            <td><button className="inventory-btn" onClick={()=>handleDelete(_id)}>Remove</button></td>
                           </tr>
                 </tbody>
                 </table>
                 </div>
            </div>
    );
};

export default MyOrder;