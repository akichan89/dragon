import React from 'react';

import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './NavigationBar';


import { Contact } from './Contact';
import { Home } from './Home';
import { About } from './About';

import Sidebar from './Sidebar';
import  { Order }  from './Order';





function App() {
  return (
    
    <React.Fragment>
      <Router>
        <NavigationBar>
          <i class="fas fa-dragon"></i> 
        </NavigationBar>
        
     

        <Sidebar />

     


        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/order" component={Order} />
          <Route path="/contact" component={Contact} />
         
        </Switch>
      </Router>
      
      
    </React.Fragment>

   
  );
}

export default App;