import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Blogs from './components/Blogs/Blogs';
import Home from './components/Home/Home/Home';
import Header from './components/Share/Header/Header';

function App() {
  return (
    <div>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/blogs" element={<Blogs></Blogs>}></Route>
    </Routes>
        
    </div>
  );
}

export default App;
