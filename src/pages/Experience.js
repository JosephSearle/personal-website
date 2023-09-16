import {useState, useEffect} from 'react';
import WebNavbar from '../components/WebNavbar';
import MobileNavbar from '../components/MobileNavbar';
import Spline from '@splinetool/react-spline';
import '../App.css';

function Experience() {
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
                    <Spline scene="https://prod.spline.design/Q0FH5dTjUpXHSslT/scene.splinecode" />
                </div>
            </header>
        </div>
    );
}

export default Experience;