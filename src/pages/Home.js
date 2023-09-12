import '@fontsource/pacifico';
import '@fontsource/roboto';
import {useState, useEffect} from 'react';
import WebNavbar from '../components/WebNavbar';
import MobileNavbar from '../components/MobileNavbar';
import coffee from '../illustrations/coffee.png';
import '../App.css';

function Home() {
    // Window Width variables
    const [width, setWidth] = useState(window.innerWidth);
    const [navbar, setNavbar] = useState();
    const [mobileContent, setMobileContent] = useState();
    const breakPoint = 855;

    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
        if (width > breakPoint) {
            setNavbar(<WebNavbar/>);
            setMobileContent(false);
        } else {
            setNavbar(<MobileNavbar/>);
            setMobileContent(true);
        }
    }, [width]);

    return (
        <div className="App">
            <header className="App-header">
                {navbar}
                { !mobileContent ? 
                    <div className='cover'>
                        <div className='cover-text-container'>
                            <p className='text-1'>Hi i'm Joseph</p>
                            <p className='text-2'>I'm a Software Developer</p>
                        </div>
                        <div className='cover-illustration'>
                            <img className={'cover-illustration-web'} src={coffee} alt='coffee.png'/>
                        </div>
                    </div> 
                    : 
                    <div className='cover'>
                        <div className='cover-illustration'>
                            <img className={'cover-illustration-mobile'} src={coffee} alt='coffee.png'/>
                        </div>
                    </div> 
                }
            </header>
        </div>
    );
}

export default Home;