import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.scss';
import MainContent from './MainContent';
import Contact from './contact';
import FrontPage from './frontpage';

class App extends React.Component {
  render() { 
    return ( 
      <div>
        <ul>
          <li>
            <Link to="/frontpage">home</Link>
          </li>
          <li>
            <Link to="/MainContent">mine</Link>
          </li>
          <li>
            <Link to="/MainContent">archive</Link>
          </li>
          <li>
            <Link to="/MainContent">deploy</Link>
          </li>
          <li>
            <Link to="/MainContent">wallet</Link>
          </li>
          <li>
            <Link to="/MainContent">playground</Link>
          </li>
          <li>
            <Link to="/MainContent">show case</Link>
          </li>
          <li>
            <Link to="/MainContent">hackathon</Link>
          </li>
          <li>
            <Link to="/MainContent">blog</Link>
          </li>
          <li>
            <Link to="/MainContent">FAQ</Link>
          </li>
          <li>
            <Link to="/MainContent">brand guideline</Link>
          </li>
        </ul>
      
        <div className="content">
          <Route path="/MainContent" component={MainContent} />
          <Route path="/contact" component={Contact} />
          <Route path="/frontpage" component={FrontPage} />
        </div>
      </div>
     );
  }
}
 
export default App;