import logo from './logo.svg';
import './App.css';
import NavBar from './components/Shared/Header/NavBar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Pages/Home/Dashboard';
import Product from './components/Pages/Product/Product';
import Clients from './components/Pages/Clients/Clients';
import Reviews from './components/Pages/Home/Reviews';
import Login from './components/LoginSystem/Login/Login';
import SignUp from './components/LoginSystem/SignUp/SignUp';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Dashboard></Dashboard>}></Route>
        <Route path='/products' element={<Product></Product>}></Route>
        <Route path='/client' element={<Clients></Clients>}></Route>
        <Route path='/review' element={<Reviews></Reviews>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
