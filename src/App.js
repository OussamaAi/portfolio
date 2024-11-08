import React from 'react';
import { BrowserRouter as Router,Route ,Routes,Link } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Projects from './components/Projects';
function App() {
  return (
    <Router>
    <div className="App">
     <Header />

     <Routes>
      <Route path='/' element={<About />}/> 
        <Route path='/Skills' element={<Skills/>} />     
          <Route path='/Projects' element={<Projects/>}/>
            <Route path='/Contact' element={<Contact/>}/>
             
      </Routes>
    </div>
    </Router>
  );
}

export default App;
