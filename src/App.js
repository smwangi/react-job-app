import React,{useState, useEffect} from 'react';
import {Route,Switch} from 'react-router-dom';

//import logo from './logo.svg';
import './App.css';

import Home from './components/Home';
import About from './components/About';

function App() {
  //Declare a new state variable "count"
  const [count] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
   <main>
     <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/about" component={About}/>
     </Switch>
   </main>
  );
}

export default App;
