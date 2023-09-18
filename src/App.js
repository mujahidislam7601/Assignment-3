import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import Personalities from './components/Personalities';
import Cities from './components/Cities';
import TouristSpots from './components/TouristSpots';
import Contact from './components/Contact';
function App() {
  return (


    <>

    <Router>
      <div className="App">
        <Navbar />
          <Routes>


          <Route path="/" element={<Welcome/>} />
          <Route path="/personalities" element={<Personalities/>} />
          <Route path="/cities" element={<Cities/>} />
          <Route path="/tourist-spots" element={<TouristSpots/>} />
          <Route path="/contact" element={<Contact/>} />
          </Routes>
        <Footer />
      </div>
    </Router>


    <div>

    </div>
    </>

    );
}

export default App;