import { Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="Experience" element={ <Experience/> } />
          <Route path="Projects" element={ <Projects/> } />
          <Route path="Contact" element={ <Contact/> } />
        </Routes>
      </div>
    );
}

export default App;
