import React from 'react';
import './Spinner.css'
const Spinner = () => {
    return (
        <div className="container">
        <div className="row">
            <div className="col-12 d-flex justify-content-center align-items-center">
            <div className="spinner-border" style={{width:'200px' ,height:'200px'}} role="status">
            <span className="visually-hidden">Loading...</span>
           </div>
            </div>
        </div>
       </div>
    );
};

export default Spinner;