import useOneCar from '../../hooks/useOneCar';
import './CarDetail.css';
import { useParams } from "react-router-dom";
import { Link,} from 'react-router-dom';

const CarDetail = () =>{
    const[oneCarDetail ] = useOneCar({})
    const { _id , name, image ,description, price , supplier, quantity } = oneCarDetail
    const {id} =useParams()
    if(quantity === 0){
        alert('quantity value is more then 0 please increase quantity')
    }

    const handleQuantity =(event)=>{
    event.preventDefault()
    if(event.target.increase.value < 0 || event.target.increase.value == 0 ){
        alert('quantity value is more then 0 please increase quantity')
    }
    else{
        const quantityData={
            quantity:parseInt(event.target.increase.value)+parseInt(quantity)
        }
    
        fetch (`https://boiling-wildwood-73300.herokuapp.com/service/${id}`,{
            method: 'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(quantityData)
            })
            // .then(res=>res.json())
            .then(data=>{
                console.log('success data',data)
                alert('Quantity increase')
                 event.target.reset()
                //  window.location.reload()
             
    
        })
        
        }

    }

    const delivery =(event)=>{
        event.preventDefault()
        
        const quantityData={
            quantity:parseInt(quantity)-parseInt(1)
        }
      
        fetch (`https://boiling-wildwood-73300.herokuapp.com/service/${id}`,{
            method: 'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(quantityData)
            })
            // .then(res=>res.json())
            .then(data=>{
                console.log('success data',data)
                alert('Quantity decrease')
                 event.target.reset()
                // location.reload()
             
    
        })
        }
  
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
     <div className="table-responsive">
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
                          <th className="text-danger " scope="col">price</th>
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
                            <td><button onClick={delivery} className="inventory-btn"> delivery</button></td>
                           </tr>
                 </tbody>
                 </table>
                   </div>
       
                 </div>
     
                 </div>
            </div>
            <div className="row quantity">
                <div className="col-lg-7 col-12 mx-auto">
               <form onSubmit={handleQuantity}action="">
               <div className='from-item'>
                <label htmlFor="supplier">
                Quantity increase
                </label>
                <input type= "number" className=' w-100 h-100 py-2'  name="increase" id="" required />
               </div>
               <button className='social-btn add-item w-100'>
                   increase Quantity</button>
               </form>
             
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