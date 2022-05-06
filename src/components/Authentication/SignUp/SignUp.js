import React from 'react';
import Social from '../Social/Social';

const SignUp = () => {
    return (
        <section className='common-authn'>
        <div className="container">
        <h2 className='text-center text-danger'>Sign Up</h2>
        <h2 className='text-center text-danger'>create a new user</h2>
        <div className="row">
        <div className="col-lg-6 col-12 mx-auto ">
            <form action="">
            <div className='from-item'>
                <label htmlFor="name">
                   Name
                </label>
                <input type= "text" className=' w-100 h-100 py-2'  name="email" id="" required />
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
                <input type= "password" className=' w-100 h-100 py-2'  name="password" id="" required />
            </div>
            <Social></Social>
            </form>
        </div>
        </div>
       
        </div>
    </section>
    );
};

export default SignUp;