import React from 'react';
import Home from "./Home";
import {  Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Error from "./pages/Error";





const App = ()=>{
  
 
 return (
    
      <Switch>
      <Route  exact path="/" component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/contact" component={Contact}></Route>
      <Route path="/services" component={Services}></Route>
      <Route path="/error" component={Error}></Route>
      </Switch>
      
      
    
  );
}

export default App;
