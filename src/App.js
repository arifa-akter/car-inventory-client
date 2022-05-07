import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import AddItem from './components/AddItem/AddItem';
import Login from './components/Authentication/Login/Login';
import SignUp from './components/Authentication/SignUp/SignUp';
import Blogs from './components/Blogs/Blogs';
import CarDetail from './components/CarDetail/CarDetail';
import Home from './components/Home/Home/Home';
import ManageInventory from './components/ManageInventory/ManageInventory';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Footer from './components/Share/Footer/Footer';
import Header from './components/Share/Header/Header';
import NotFound from './components/Share/NotFound/NotFound';

function App() {
  return (
    <div>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/home" element={<Home></Home>}> </Route>
      <Route path="/carDetail/:id" element={
        <RequireAuth>
        <CarDetail></CarDetail>
        </RequireAuth>
        }></Route>
      <Route path="/manageInv" element={
         <RequireAuth>
      <ManageInventory></ManageInventory>
         </RequireAuth>
     }></Route>
     <Route path="/login" element={<Login></Login>}></Route>
     <Route path="/signUp" element={<SignUp></SignUp>}></Route>
      <Route path="/addItem" element={<AddItem></AddItem>}></Route>
      <Route path="/blogs" element={<Blogs></Blogs>}></Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>
    </Routes>
     <Footer></Footer>   
    </div>
  );
}

export default App;
