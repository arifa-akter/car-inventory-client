import React from 'react';

const UpdateMy = ({ manageItem , handleDeleteManageInventory}) => {
    const { _id , name, image ,description, price , supplier, quantity ,email }= manageItem
    return (
        <div className="col-lg-12 col-12 col-md-6 g-3 gx-lg-4 d-flex justify-content-center mx-auto">
                       <div className="table-responsive">
                <table className="table table-bordered">
                         <thead>
                          <tr>
                          <th className="text-danger" scope="col">name</th>
                          <th className="text-danger" scope="col">email</th>
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
                          <th className="text-danger" scope="col">delete</th>
                          </tr>
                    </thead>
                    <tbody>

                    
                                {/* <th scope="row">1</th> */}
                                <td>{name}</td>
                                <td>{email}</td>
                                <td>{_id}</td>
                                <td><img src={image} alt="" style={{width:'40px' ,height:'40px'}} /></td>
                                <td>{description?.color}</td>
                                <td>{description?.body}</td>
                                <td>{description?.transmission}</td>
                                <td>{quantity}</td>
                                <td>{description?.seating}</td>
                                <td>{description?.odometer}</td>
                                <td>${price}</td>
                                <td>{supplier}</td>
                                 <td><button className='update-button' onClick={()=>handleDeleteManageInventory(_id)}>Delete</button></td>
                           </tbody>
                     </table>
                    </div>
        </div>
    );
};

export default UpdateMy;