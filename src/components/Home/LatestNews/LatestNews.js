import React from 'react';
import './LatestNews.css'
import banner2 from '../../../images/banner2.jpg'
import banner1 from '../../../images/banner1.jpg'
import banner3 from '../../../images/banner3.jpg'
const LatestNews = () => {
    return (
     <section className='latest'>
           <div className="container">
               <div className="row g-3">
                   <h1 className='text-center text-danger'>LATEST NEWS</h1>
                   <div className="col-lg-4 col-12 b">
                       <div className="latest-img">
                          <img src={banner2} alt="" />
                       </div>
                       <div className="latest-text">
                           <h4 className='text-center text-danger'>Mitsubishi l200 Triton Savana</h4>
                           <i class="fa fa-user" aria-hidden="true"></i>
                           <span> John doe</span>
                           <i class="fa fa-folder-open-o" aria-hidden="true"></i>
                           <span> News 2022</span>
                           <p>this car are new lonch it very expensive you
                             can store these car we have some stock ...more</p>
                       </div>
                   </div>
                   <div className="col-lg-4 col-12 b">
                   <div className="latest-img">
                          <img src={banner1} alt="" />
                       </div>
                       <div className="latest-text">
                           <h4 className='text-center text-danger'>Modern volvo v40 Ts car Wd 11  </h4>
                           <i class="fa fa-user" aria-hidden="true"></i>
                           <span> John doe</span>
                           <i class="fa fa-folder-open-o" aria-hidden="true"></i>
                           <span> News 2022</span>
                           <p>this car are new lonch it very expensive you
                             can store these car we have some stock ...more</p>
                       </div>
                   </div>
                   <div className="col-lg-4 col-12 b">
                   <div className="latest-img">
                          <img src={banner3} alt="" />
                       </div>
                       <div className="latest-text">
                           <h4 className='text-center text-danger'>Mitsubishi l200 Triton Savana</h4>
                           <i class="fa fa-user" aria-hidden="true"></i>
                           <span> John doe</span>
                           <i class="fa fa-folder-open-o" aria-hidden="true"></i>
                           <span> News 2022</span>
                           <p>this car are new lonch it very expensive you
                             can store these car we have some stock ...more</p>
                       </div>
                   </div>
               </div>
           </div>
     </section>
    );
};

export default LatestNews;