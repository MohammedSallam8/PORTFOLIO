import './App.css';
import React, { useState } from 'react'
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About'
import Portfolio from './components/Portfolio'
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import Toggle from './components/Toggle';

function App() {
  

const [isDark, setIsDark] = useState (true);
  return (
    <div>

    <BrowserRouter>
      <div className="App" data-theme={isDark ? "dark" : "light"}>
          <div className="main-container container-fluid">
          <Toggle 
            isChecked={isDark}
            handleChange={() => setIsDark(!isDark)}
          />
            <Sidebar/>
              <Routes>
                <Route path="/" exact element= {<MainContent/>} />
                <Route path="/About" exact element= {<About/>} />
                <Route path="/Portfolio" exact element= {<Portfolio/>} />
              </Routes>
          </div>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
