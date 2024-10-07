import React, { useState } from 'react';
import NavContainer from './components/nav/nav-container';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/Home';


function App() {
  const [navHeight, setNavHeight] = useState<number>(0)
  return (
    <div className="App">
      <NavContainer setNavHeight={setNavHeight}/>
      <div style={{height: `${navHeight}px`}} className='space-height-nav'></div>

      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
