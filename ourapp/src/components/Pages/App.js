import Navbar from './../Navbar';
import React from 'react'; 
import Home from './Pages/Home';
import './App.css';
import Footer from '../../footer';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Explore from './exploreplants';
import Garden from './garden';
import Connect from './connect';
function App() {
  return (
    <>
      <Router>
          <Navbar/>
          <Routes>
            <Route path='/'exact component={Home} />
            <Route path='/exploreplants'exact component={Explore} />
            <Route path='/garden'exact component={Garden} />
            <Route path='/Connect'exact component={Connect} />
          </Routes>
          <Footer/>
        </Router>
    </>
  );
}

export default App;

