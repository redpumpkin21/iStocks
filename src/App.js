import './App.css';
import React from 'react'
import { Route, Switch } from "react-router-dom";
import Main from './pages/main'
import Stocks from './pages/stocks'
import About from './pages/about'
import Header from './componets/header'
import Dashboard from './pages/dashboard'
function App() {
  return (
    <div className="App">
    <Header/>
    <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/about">
          <About />
          </Route>
          <Route exact path="/stocks">
          <Dashboard />
          </Route>
         <Route path="/stocks/:symbol"
          render={(routerProps) => { 
          return <Stocks {...routerProps}/> 
          }}
          />
         
    </Switch>
    </div>
    
  );
  
}

export default App;
