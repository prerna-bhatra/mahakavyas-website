import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import './App.css';
import Chapter from './components/Chapter';
import Stories from './components/Stories';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/chapter/:id" element={<Chapter />} />
          <Route path="/stories" element={<Stories />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
