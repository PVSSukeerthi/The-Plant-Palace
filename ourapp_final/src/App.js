import Navbar from './components/Navbar';
import React from 'react'; 
import Home from './components/Pages//Home';
import './App.css';
import Footer from './footer';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Explore from './components/Pages/exploreplants';
import Garden from './components/Pages/garden';
import Connect from './components/Pages/connect';
function App() {
  return (
    <>
      <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/explore'element={<Explore/>} />
            <Route path='/garden'element={<Garden/>} />
            <Route path='/Connect'element={<Connect/>} />
          </Routes>
          <Footer/>
        </Router>
    </>
  );
}

export default App;

