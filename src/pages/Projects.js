import {useState, useEffect} from 'react';
import WebNavbar from '../components/WebNavbar';
import MobileNavbar from '../components/MobileNavbar';
import Spline from '@splinetool/react-spline';
import '../App.css';

function Projects() {
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
                <div className='projects-cover'>
                    <div className='ascent-project'>
                        <Spline className='ascent-3d' scene="https://prod.spline.design/7Mb3G5ta5tfGLFvT/scene.splinecode"/>
                        <div className='ascent-info'>
                            <p>Ascent - Climbing Application</p>
                            <p>A community-driven climbing app ensuring safety and support for climbers of all levels.</p>
                        </div>
                    </div>
                    
                </div>
            </header>
        </div>
    );
}

export default Projects;