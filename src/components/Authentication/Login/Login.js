import React ,{ useRef }from 'react';
import { Link , useNavigate , useLocation} from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import Social from '../Social/Social';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css'

const Login = () => {
    const emailRef = useRef('')
    const [signInWithEmailAndPassword ,user,loading, error]= useSignInWithEmailAndPassword(auth)
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"
    const navigate = useNavigate()
    let errorProperty;
    if (error) {
        errorProperty = <div>
            <p className='error-message'>
               password does not match
                <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                </p>
          </div>
      }
    const handleLoginForm =(event) =>{
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        signInWithEmailAndPassword(email ,password)
    }
    if(user){
        navigate(from , { replace: true })
     }

    const handleResatLink = async() =>{
        const email = emailRef.current.value
        console.log(email)
        if(email){
            await sendPasswordResetEmail(email);
            toast('Sent email please check email and set password');
        }
        else{
            toast('please enter email'); 
        }
    }

    return (
        <section className='common-authn'>
            <div className="container">
            <h2 className='text-center text-danger'> Login</h2>
            <div className="row">
            <div className="col-lg-6 col-12 mx-auto ">
                <form onSubmit={handleLoginForm} action="">
                <div className='from-item'>
                    <label htmlFor="email">
                       Email
                    </label>
                    <input type= "email" ref={emailRef} className=' w-100 h-100 py-2'  name="email" id="" required />
                </div>
                <div className='from-item'>
                    <label htmlFor="password">
                     Password
                    </label>
                    <input type= "password" className=' w-100 h-100 py-2'  name="password" id="" required />
                    {errorProperty}
                             {
                              loading && <p>loading.....</p>
                             }
                </div>
                <span>create a new Account? </span>
                          <span className='create-account sm-font'><Link to="/signUp">create account </Link> </span><br/>
                          <span>forget password?</span>
                          <span className='create-account sm-font text-primary' onClick={handleResatLink}> 
                          Reset password </span>
                          <button className='social-btn w-100'>
                           Login</button>
                <Social></Social>
                <ToastContainer/>
                </form>
            </div>
            </div>
           
            </div>
        </section>
    );
};

export default Login;