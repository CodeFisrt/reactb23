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
function App() {
  return (
    <div className=''>
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
                <Link className='nav-link' to="/events" >Events</Link>
                </li>
                <li className="nav-item">
                <Link className='nav-link' to="/State-With-Premitive" >State-Premitive</Link>
                </li>
                <li className="nav-item">
                <Link className='nav-link' to="/State-Array-Update" >State-Array</Link>
                </li>
                <li className="nav-item">
                 <Link className='nav-link' to="/hide-show" >Hide-show</Link>
                </li>
                <li className="nav-item">
                 <Link className='nav-link' to="/Dyanamic-attribute" >Dyanamic-attribute</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          {/* Default Route */}
          <Route path='/' element={<Events></Events>}></Route> 
          <Route path='/vaiables' element={<Variables></Variables>} ></Route>
          <Route path='/events'  element={<Events></Events>}></Route>
          <Route path='/Dyanamic-attribute'  element={<DynamicAttribute></DynamicAttribute>}></Route>
          <Route path='/hide-show'  element={<HIdeShow></HIdeShow>}></Route>
          <Route path='/State-With-Premitive'  element={<StateWithPremitive></StateWithPremitive>}></Route>
          <Route path='/State-Object-Update'  element={<StateObjectUpdate></StateObjectUpdate>}></Route>
          <Route path='/State-Dyanaminc-Form'  element={<StateDyanamincForm></StateDyanamincForm>}></Route>
          <Route path='/State-Array-Update'  element={<StateArrayUpdate></StateArrayUpdate>}></Route>
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
