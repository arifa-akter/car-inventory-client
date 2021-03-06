import React from 'react';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import profile from '../../../images/profile.png'
import './Header.css'
import logo from '../../../images/logo.png'
import auth from '../../../firebase.init'
const Header = () => {

  const[user] = useAuthState(auth)
  console.log(user)
  const SingOutUsers =()=>{
    signOut(auth)
  }
    return (
  <section className='nav-design'>
               <section className='top-header'>
            <div className="container">
               <div className="row">
                 <div className="col-12 col-lg-7 login-language ">
                  <div className="main-item d-flex justify-content-center d-lg-flex justify-content-lg-start">
                  <div className="login-language-main">
                    {user?
                     <img src={user?.photoURL} alt="" />
                    : <img src={profile} alt="" /> 
                      
                    }
                    { user? <span onClick={SingOutUsers} className='link-login'>sing out</span>  :
                         <Link to='/login'><span>Login</span> </Link> 
                    }  
                      
                        <Link to='/signUp'>
                        <span>Sign up</span>
                        </Link>
                        <span>
                        <i className="fa fa-globe" aria-hidden="true"></i>Language</span>
                   </div>
                  </div>
                 </div>
                 <div className="col-lg-5 contact d-lg-block d-none login-language-main">
              
                 <span>
                 <i className="fa fa-phone" aria-hidden="true"></i>+98765340753</span>  
                 
                 <span>
                 <i className="fa fa-map-marker" aria-hidden="true"></i>nurjahn road dhaka</span> 
                 </div>
               </div>
            </div>
          </section>
      <Navbar collapseOnSelect expand="lg"  variant="dark" className="nav-p-none">
  <Container>
  <Navbar.Brand as={Link} to="/home">
      <img src={logo} style={{width:'70px', height:'50px'} } alt="" />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto nav-bg">
      <Nav.Link as={Link} to="/"><span className="menu-style">HOME</span></Nav.Link>
      <Nav.Link href="home#carInventory" ><span className="menu-style">CAR INVENTORY</span></Nav.Link>
       {
        user && <>
            <Nav.Link as={Link} to="/manageInv"><span className="menu-style">MANAGE INVENTORY</span></Nav.Link>
            <Nav.Link as={Link} to="/addItem" href="" >
             <span className="menu-style">ORDER</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/myItem">
            <span className="menu-style">ORDER COLLECTION</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/updateCollection">
            <span className="menu-style">MY ITEM</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/update">
            <span className="menu-style">ADD ITEM</span>
            </Nav.Link>
         </>
      }
      <Nav.Link as={Link} to="/blogs"><span className="menu-style">BLOGS</span></Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

  </section>
    
    );
};

export default Header;