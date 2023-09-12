import {useState, useEffect} from 'react';
import WebNavbar from '../components/WebNavbar';
import MobileNavbar from '../components/MobileNavbar';
import '../App.css';

function Contact() {
    // Window Width variables
    const [width, setWidth] = useState(window.innerWidth);
    const breakPoint = 855;

    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);

    let navbar;
    if (width > breakPoint) navbar = <WebNavbar/>
    else navbar = <MobileNavbar/>

    return (
        <div className="App">
            <header className="App-header">
                {navbar}
                <div className='cover'>
                    <p>Contact</p>
                </div>
            </header>
        </div>
    );
}

export default Contact;