import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Home';
import FactOne from './Components/FactOne';
import FactTwo from './Components/FactTwo';
import FactThree from './Components/FactThree';

function App() {
  return (
    <Router>
      <div className="App">
        <Home />
        <main>
          <div className="buttons">
          <button><Link to='/FactOne'>Fact One</Link></button>
          <button><Link to='/FactTwo'>Fact Two</Link></button>
          <button><Link to='/FactThree'>Fact Three</Link></button>
          </div>
          <div className='fact'>
          <Routes>
            <Route path='/FactOne' element={<FactOne/>}/>
            <Route path='/FactTwo' element={<FactTwo/>}/>
            <Route path='/FactThree' element={<FactThree/>}/>
          </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
