import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import AddItem from './components/AddItem/AddItem';
import Blogs from './components/Blogs/Blogs';
import CarDetail from './components/CarDetail/CarDetail';
import Home from './components/Home/Home/Home';
import ManageInventory from './components/ManageInventory/ManageInventory';
import Footer from './components/Share/Footer/Footer';
import Header from './components/Share/Header/Header';
import NotFound from './components/Share/NotFound/NotFound';

function App() {
  return (
    <div>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/carDetail/:id" element={<CarDetail></CarDetail>}></Route>
      <Route path="/manageInv" element={<ManageInventory></ManageInventory>}></Route>
      <Route path="/addItem" element={<AddItem></AddItem>}></Route>
      <Route path="/blogs" element={<Blogs></Blogs>}></Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>
    </Routes>
     <Footer></Footer>   
    </div>
  );
}

export default App;
