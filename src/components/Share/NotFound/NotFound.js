import React from 'react';
import './NotFound.css'
import notFound from '../../../images/notFound.jpg'

const NotFound = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-12">
                        <div className="not-found-img">
                         <img src={notFound} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;