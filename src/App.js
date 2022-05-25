import './App.css';
import NavBar from './components/Shared/Header/NavBar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Pages/Home/Dashboard';
import Product from './components/Pages/Product/Product';
import Clients from './components/Pages/Clients/Clients';
import Login from './components/LoginSystem/Login/Login';
import SignUp from './components/LoginSystem/SignUp/SignUp';
import Footer from './components/Shared/Footer/Footer';
import AllReview from './components/Pages/Reviews/AllReview';
import Blog from './components/Pages/Blog/Blog';
import RequireAuth from './components/Shared/RequireAuth';
import Purchase from './components/Pages/Purchase/Purchase';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Dashboard></Dashboard>}></Route>
        <Route path='/products' element={
          <RequireAuth>
            <Product></Product>
          </RequireAuth>}>
        </Route>
        <Route path='/products/:id' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>}>
        </Route>
        <Route path='/client' element={<Clients></Clients>}></Route>
        <Route path='/review' element={
          <RequireAuth>
            <AllReview></AllReview>
          </RequireAuth>
        }></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
