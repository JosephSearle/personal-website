import '@fontsource/pacifico';
import '@fontsource/roboto';
import {useState, useEffect} from 'react';
import WebNavbar from '../components/WebNavbar';
import MobileNavbar from '../components/MobileNavbar';
import coffee from '../illustrations/coffee.png';
import background from '../illustrations/Background.png';
import '../App.css';

function Home() {
    // Window Width variables
    const [width, setWidth] = useState(window.innerWidth);
    const breakPoint = 855;
    let mobileViewActive;

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

    if (width > breakPoint) {
        navbar = <WebNavbar/>;
        mobileViewActive = false;
    } else {
        navbar = <MobileNavbar/>;
        mobileViewActive = true;
    }

    return (
        <div className="App">
            <header className="App-header" style={backgroundStyle}>
                {navbar}
                { !mobileViewActive ? 
                    <div className='cover'>
                        <div className='cover-text-container'>
                            <p className='text-1'>Hi i'm Joseph</p>
                            <p className='text-2'>I'm a Software Developer</p>
                        </div>
                        <div className='cover-illustration'>
                            <img src={coffee} alt='coffee.png'/>
                        </div>
                    </div> 
                    : 
                    <div className='cover'>
                        <div className='cover-illustration'>
                            <img src={coffee} alt='coffee.png'/>
                        </div>
                    </div> 
                }
            </header>
        </div>
    );
}

export default Home;