import React from 'react';
import { BrowserRouter as Router,Routes, Route,Link } from 'react-router-dom';
import TaskBoard from './components/TaskBoard';
import Weather from './components/Weather';
import Calculator from './components/Calculator';
import ReactDOM from 'react-dom';
import './styles.css'; 

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


function App() {
  return(
    <Router>
      <div className="App" >
      <nav>
          <ul className='menu'>
            <li>
              <Link to="TaskBoard">Task Board</Link>
            </li>
            <li>
              <Link to="Weather">Weather</Link>
            </li>
            <li>
              <Link to="Calculator">Calculator</Link>
            </li>
          </ul>
        </nav>
        <Routes>
        <Route exact path="/TaskBoard" element ={<TaskBoard/>} />
        <Route exact path="/Weather"   element={<Weather/>} />
        <Route exact path="/Calculator" element={<Calculator/>} />
        </Routes>
      </div>
    </Router>
  )
};


export default App;
