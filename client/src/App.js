import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import About from './pages/About';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
          <Navbar/>

          <Routes>
            <Route path='/' exact Component={Home}/>
            <Route path='/Register' exact Component={Register}/>
            <Route path='/Login' exact Component={Login}/>
            <Route path='/About'exact Component={About}/>

          </Routes>
          <Footer/>
      </Router>
   
   
    </div>
  );
}

export default App;
