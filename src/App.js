import '@fontsource/pacifico';
import '@fontsource/roboto';
import {useState, useEffect} from 'react';
import WebNavbar from './components/WebNavbar';
import MobileNavbar from './components/MobileNavbar';
import coffee from './illustrations/coffee.png';
import background from './illustrations/Background.png';
import './App.css';

function App() {
  // Window Width variables
  const [width, setWidth] = useState(window.innerWidth);
  const breakPoint = 800;

  // Background styling
  const backgroundStyle={
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  let navbar;
  if (width > breakPoint) navbar = <WebNavbar/>
  else navbar = <MobileNavbar/>

  return (
    <div className="App">
      <header className="App-header" style={backgroundStyle}>
        {navbar}
        <div className='cover'>
          <div className='cover-text-container'>
            <p className='text-1'>Hi i'm Joseph</p>
            <p className='text-2'>I'm a Software Developer</p>
          </div>
          <div className='cover-illustration'>
            <p>{width}</p>
            <img src={coffee} alt='coffee.png'/>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
