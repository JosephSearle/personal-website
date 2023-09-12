import {useState, useEffect} from 'react';
import WebNavbar from '../components/WebNavbar';
import MobileNavbar from '../components/MobileNavbar';
import background from '../illustrations/Background.png';
import '../App.css';

function Projects() {
    // Window Width variables
    const [width, setWidth] = useState(window.innerWidth);
    const breakPoint = 855;

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
                <p>Projects</p>
            </header>
        </div>
    );
}

export default Projects;