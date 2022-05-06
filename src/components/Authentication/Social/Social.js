import React from 'react';
import './Social.css'
import google from '../../../images/google.png'
import git from '../../../images/git.png'
const Social = () => {
    return (
        <div>
            <div className="">
               <button className='social-btn w-100'>
               <img src={google} style={{width:'25px', height:'25px', marginRight:'10px'}} alt=""/>
                   Google</button>
               <button className='social-btn w-100'>
               <img src={git} style={{width:'25px', height:'25px', marginRight:'10px'}} alt=""/>
                   Git Hub</button>
            </div>
            
        </div>
    );
};

export default Social;