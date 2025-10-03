import logo from './logo.svg';
import * as Icons from "lucide-react";
import {home} from "lucide-react";
import react from "react";
import Headers from './header';
import Bodies from './body';
import Footers from './footer';
import Project from './project';
import AboutMe from './aboutMe';
import CallMe from './callMe';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Certification from './certification';


const Components = () => {
    function toggleMenu() {
      document.getElementById("menu").classList.toggle("show");
    }
    return ( 
        <Router>
    <div 
  className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col" 
>
    <div className="App">
    <Headers />
   
    <div className="bodyComponent">
     <Switch>
      <Route exact path='/'>
       <Bodies />
      </Route>
      <Route exact path='/body'>
       <Bodies />
      </Route>
      <Route exact path='/project'>
       <Project />
      </Route>
      <Route exact path='/aboutMe'>
       <AboutMe />
      </Route>
      <Route exact path='/callMe'>
       <CallMe />
      </Route>
      <Route exact path='/certification'>
       <Certification />
      </Route>
     </Switch>
    </div>
    
      <Footers />
    </div>
    </div>
    </Router>
     );
}
 
export default Components;