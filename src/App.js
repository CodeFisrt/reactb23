import logo from './logo.svg';
import './App.css';
import Variables from './topics/Variables';

import Events from './topics/Events';
import StateWithPremitive from './topics/StateWithPremitive';
import StateObjectUpdate from './topics/StateObjectUpdate';
import StateDyanamincForm from './topics/StateDyanamincForm';
import StateArrayUpdate from './topics/StateArrayUpdate';
import {  BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HIdeShow from './topics/HIdeShow';
import DynamicAttribute from './topics/DynamicAttribute';
import DynamicClass from './topics/DynamicClass';
import DynamicCss from './topics/DynamicCss';
import GetApiCall from './topics/GetApiCall';
import UserList from './UserApp/UserList';
import Patient from './SampleApp/Patient';
import Product from './SampleApp/Product';
import UseEffectTest from './topics/UseEffectTest';
function App() {
  return (
    <div className=''>
      <h1>Hello</h1>
      <BrowserRouter>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Logo</a>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav">
                <li className="nav-item"> 
                  <Link className='nav-link' to="/vaiables" >Variables</Link>
                </li>
                <li className="nav-item"> 
                  <Link className='nav-link' to="/user-list" >User-list</Link>
                </li>
                <li className="nav-item"> 
                  <Link className='nav-link' to="/patient" >patient</Link>
                </li>
                <li className="nav-item"> 
                  <Link className='nav-link' to="/product" >product</Link>
                </li>
                <li className="nav-item"> 
                  <Link className='nav-link' to="/UseEffect" >UseEffect</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          {/* Default Route */}
          <Route path='/' element={<Events></Events>}></Route> 
          <Route path='/vaiables' element={<Variables></Variables>} ></Route>
          <Route path='/user-list' element={<UserList></UserList>} ></Route>
          <Route path='/patient' element={<Patient></Patient>} ></Route>
          <Route path='/UseEffect' element={<UseEffectTest></UseEffectTest>} ></Route>
          <Route path='/product' element={<Product></Product>} ></Route>
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
