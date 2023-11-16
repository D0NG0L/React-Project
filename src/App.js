import { Routes,Route } from 'react-router-dom';
import './App.css';
import Nav from './component/Nav';
import { Cart } from './pages/Cart';
import { Products } from './pages/Products';
import { Singlep } from './pages/Singlep';
import { Login } from './pages/Login';
import { Home } from './component/Home';
import  ListDividers  from './component/ListDividers';

function App() {
  return (
    <div className="App"> 
     <Nav />
     <Routes>
     <Route path='/'  element={<Login />} />
     <Route path='ListDividers' element={< ListDividers/>}/>
     <Route path='/HOME' element={<Home/>}/>
     <Route path='/products' element={<Products />}/>
     <Route path='/products/:id' element={<Singlep />} />
     <Route path='/LOGIN'  element={<Login />} />
     <Route path='/cart' element={<Cart />}/>
     </Routes>
    </div>
  );
}

export default App;
