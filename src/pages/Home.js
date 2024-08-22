import '@fontsource/pacifico';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/300.css'
import Navbar from '../components/Navbar';
import webBackground from '../resources/images/webBackground.png';
import mobileBackground from '../resources/images/mobileBackground.png';
import { useState, useEffect, useMemo} from 'react';
import Cover from "../components/Cover";

import '../styles/App.css';

function Home() {
    // Window Width variables
    const [width, setWidth] = useState(window.innerWidth);
    const [background, setBackground] = useState();
    const [device, setDevice] = useState();
    const [mobile, setMobile] = useState();
    const breakPoint = 844;

    const webBackgroundStyle =  useMemo(() => {
        return {backgroundImage: `url(${webBackground})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center',backgroundSize: 'cover'}
    }, []);

    const mobileBackgroundStyle = useMemo(() => {
        return {backgroundImage: `url(${mobileBackground})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center',backgroundSize: 'cover'}
    }, []);

    // eslint-disable-next-line
    useEffect(() => { 
        window.addEventListener("resize", () => setWidth(window.innerWidth));
        if (width > breakPoint) {
            setBackground(webBackgroundStyle);
            setMobile(false);
            setDevice("");
        } else {
            setBackground(mobileBackgroundStyle);
            setMobile(true);
            setDevice("-mobile");
        }
    }, [width, webBackgroundStyle, mobileBackgroundStyle]);

    return (
        <div className="App">
            <header className="App-header" style={background}>
                <Navbar device={device}/>
                <Cover device={device} mobile={mobile}/>
            </header>
        </div>
    );
}

export default Home;