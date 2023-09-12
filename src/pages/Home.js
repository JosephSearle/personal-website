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
    const [device, setDevice] = useState();
    const breakPoint = 855;

    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
        if (width > breakPoint) {
            setNavbar(<WebNavbar/>);
            setMobileContent(false);
            setDevice("web");
        } else {
            setNavbar(<MobileNavbar/>);
            setMobileContent(true);
            setDevice("mobile");
        }
    }, [width]);

    return (
        <div className="App">
            <header className="App-header">
                {navbar}
                    <div className='cover'>
                        { !mobileContent ? 
                            <div className='cover-text-container'>
                                <p className='text-1'>Hi i'm Joseph</p>
                                <p className='text-2'>I'm a Software Developer</p>
                            </div>
                            :
                            null
                        }
                        <div className='cover-illustration'>
                            <img className={'cover-illustration-' + device} src={coffee} alt='coffee.png'/>
                        </div>
                    </div> 
            </header>
        </div>
    );
}

export default Home;