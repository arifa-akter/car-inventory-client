import React from 'react';
import "./Footer.css"
import logo from '../../../images/logo.png'
import footerD from '../../../images/footerD.png'

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
      <section className='Footer'>

          <div className="container">
              <div className="row">
                  <div className="col-lg-12 col-12">
                  <div className="image-footer">
                  <img src={footerD} style={{width:'235px', height:'45px'}} alt="" />
                  </div>
                  </div>
              </div>
              <div className="row line">
                  <div className="col-lg-3 col-12">
                      <div className="footer-text">
                      <img src={logo} style={{width:'80px', height:'50px' ,marginBottom:"20px"} }  alt="" />
                  <p>Here our social link you can visit our 
                      social platform there some link . please visit 
                      and join us.
                  </p>
                  <i class="fa fa-facebook-official" aria-hidden="true"></i>
                  <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                      </div>
             
                  </div>
                  <div className="col-lg-3 col-12">
                  <div className="footer-text">
                   <h2>Latest Tweets</h2>
                      <div className="display">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                      <p>our car production and delivery concept very unique 
                          and you also join with us very easily
                       </p>
                      </div>
                      <div className="display">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                      <p>most latest tweets to jon smith he told 
                          our services are very sufficient </p>
                      </div>
                   </div>
                  </div>
                  <div className="col-lg-3 col-12">
                 <div className="footer-text">
                 <h2>Contact Us</h2>
                     <div className="display">
                     <i className="fa fa-map-marker" aria-hidden="true"></i>
                      <p>nurjahan rode  dhaka 
                       </p>
                      </div>
                     <div className="display">
                     <i className="fa fa-phone" aria-hidden="true"></i>
                      <p>+55883455389
                       </p>
                      </div>
                     <div className="display">
                     <i className="fa fa-envelope" aria-hidden="true"></i>
                      <p>arifaAutoCar@gamil.com
                       </p>
                      </div>
                 </div>
                  </div>
                  <div className="col-lg-3 col-12">
                 <div className="footer-text">
                 <h2>About Us</h2>
                  <p>Arifa Auto car help to easily reach this website has connected many popular supplier
                    and brand this website help to production house  </p>
                 </div>
                
              </div>
              </div>
                  <div className="row">
                  <div className="col-lg-12 col-12">
                  <div className="image-footer fo">
                    <span>&copy; copyright Arifa Auto car /{year}</span>
                  </div>
                  </div>
              </div>
               
          </div>
      </section>
    );
};

export default Footer;