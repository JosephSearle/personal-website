import '@fontsource/pacifico';
import '@fontsource/roboto';
import coffee from './illustrations/coffee.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='navbar'>
          <p className='title'>Joseph Searle</p>
          <p className='button'>Experience</p>
          <p className='button'>Projects</p>
          <p className='button'>Contact</p>
        </div>
        <div className='cover'>
          <div className='cover-text-container'>
            <p className='text-1'>Hi i'm Joseph</p>
            <p className='text-2'>I'm a Software Developer</p>
          </div>
          <div className='cover-illustration'>
            <img src={coffee} alt='coffee.png'/>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
