import useOneCar from '../../hooks/useOneCar';
import './CarDetail.css';
import { Link,} from 'react-router-dom';

const CarDetail = () =>{
    const[oneCarDetail] = useOneCar({})

    const { _id , name, image ,description, price , supplier, quantity } = oneCarDetail
    return (
        <section className="car-detail">
            <div className="container">
            <h1 className="text-danger text-center">CAR DETAIL</h1>
            <div className="row car-info">
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
                            <td>{description?.color}</td>
                            <td>{description?.body}</td>
                            <td>{description?.transmission}</td>
                            <td>{quantity}</td>
                            <td>{description?.seating}</td>
                            <td>{description?.odometer}</td>
                            <td>{price}</td>
                            <td>{supplier}</td>
                            <td>sold out</td>
                            <td><button className="inventory-btn"> delivery</button></td>
                           </tr>
                 </tbody>
                 </table>
       
      </div>
     
       </div>
            </div>
            <div className="row quantity">
                <div className="col-lg-7 col-12 mx-auto">
                <div className='from-item'>
                <label htmlFor="supplier">
                Quantity increase
                </label>
                <input type= "text" className=' w-100 h-100 py-2'  name="password" id="" required />
               </div>
                <button className='social-btn add-item w-100'>
                   increase Quantity</button>
                </div>
            </div>

            <div className="row">
                         <div className="col-lg-12 col-12">
                             <div className="manage-btton">
                                <Link to="/manageInv">
                                <button className='manage-btn'>ManageInventory</button>
                                </Link>
                             </div>
                         </div>
                     </div>
            </div>
      
        </section>
    );
};

export default CarDetail;