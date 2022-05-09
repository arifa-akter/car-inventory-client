import React from 'react';
import './Social.css'
import google from '../../../images/google.png'
import {useSignInWithGoogle} from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import { useNavigate ,useLocation } from 'react-router-dom';
import Loading from '../../Share/Loading/Loading'
const Social = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/"
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let errorProperty;
  if (error) {
    errorProperty = <div>
        <p className='error-message'>
            your google pop up close please try again
            <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
            </p>
      </div>
  }
  if(user){
      navigate('/')
  }
  if(user){
    navigate(from , { replace: true })
}

  let loadingError
  if(loading){
    loadingError = 
    <p className='error-message'>
       <Loading></Loading>
    </p>
  }
 
    return (
        <div>
            {loadingError}
            {errorProperty}
            <div className="">
            <h2 className='text-center or'>or</h2>
               <button onClick ={()=>signInWithGoogle()} className='social-btn  w-100' >
               <img src={google} style={{width:'25px', height:'25px', marginRight:'10px'}} alt=""/>
                   Google</button>
            </div>
            
        </div>
    );
};

export default Social;