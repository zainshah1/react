
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import Signup from './components/Signup';
import Login from './components/Login';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
<Routes>

<Route path='/' element={<Home/>}></Route>
<Route path='/about' element={<About/>}></Route>
<Route path='/contact' element={<Contact/>}></Route>
<Route path='/product' element={<Product/>}></Route>
<Route path='/signup' element={<Signup/>}></Route>
<Route path='/login' element={<Login/>}></Route>
</Routes>
    </div>
  );
}

export default App;
