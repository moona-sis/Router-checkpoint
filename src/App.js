import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Category from './components/Category'
import Products from './components/Products'
import Login from './components/Login'
import {Switch, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
      <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/categories">
            <Category/>
          </Route>
          <Route path="/products">
        <Products/>
        </Route>
        <Route path="/login">
          <Login />
        </Route>

      </Switch>
   
    </div>
  );
}

export default App;
