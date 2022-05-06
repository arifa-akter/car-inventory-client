import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Social from '../Social/Social';

const SignUp = () => {
    const [createUserWithEmailAndPassword , user ,loading ,error] = 
    useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true})
    const [errorSignUp ,ErrorSignUp] =useState()
    const navigate = useNavigate()
    let errorProperty;
    if (error) {
        errorProperty = <div>
            <p className='error-message'>
                your email are already exist
                <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                </p>
          </div>
      }
    const handleSignUpForm = (event) =>{
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value
        const passwordConform = event.target.passwordConform.value
        console.log(name , email , password ,passwordConform )
     

        if(password !== passwordConform ){
            return ErrorSignUp('your password does not match')
           }
           if(password.length<6){
               return ErrorSignUp('please character up to 6 digit')
           }
           createUserWithEmailAndPassword(email, password )

    }

    if(user){
        navigate('/')
    }
    return (
        <section className='common-authn'>

        <div className="container">
        <h2 className='text-center text-danger'>Sign Up</h2>
        <h2 className='text-center text-danger'>create a new user</h2>
        <div className="row">
        <div className="col-lg-6 col-12 mx-auto ">
            <form onSubmit={handleSignUpForm} action="">
            <div className='from-item'>
                <label htmlFor="name">
                   Name
                </label>
                <input type= "text" className=' w-100 h-100 py-2'  name="name" id="" required />
            </div>
            <div className='from-item'>
                <label htmlFor="email">
                   Email
                </label>
                <input type= "email" className=' w-100 h-100 py-2'  name="email" id="" required />
            </div>
            <div className='from-item'>
                <label htmlFor="password">
                 Password
                </label>
                <input type= "password" className=' w-100 h-100 py-2'  name="password" id="" required />
            </div>
            <div className='from-item'>
                <label htmlFor="password">
                Conform Password
                </label>
                <input type= "password" className=' w-100 h-100 py-2'  name="passwordConform" id="" required />
                {errorSignUp}
                {
                loading && <p> loading.....</p>
                }
                {errorProperty}
            </div>
           
            <span>Already have an account? </span>
             <span className='create-account sm-font'><Link to="/login"> Login </Link></span>
             <button className='social-btn w-100'>
                sign Up</button>
            <Social></Social>
            </form>
        </div>
        </div>
       
        </div>
    </section>
    );
};

export default SignUp;