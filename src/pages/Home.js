import '@fontsource/pacifico';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/300.css'
import WebNavbar from '../components/WebNavbar';
import profile from '../images/profile.png';
import Spline from '@splinetool/react-spline';
import IconButton from '@mui/material/IconButton';
import '../App.css';
import { Email, GitHub, LinkedIn } from '@mui/icons-material';

function Home() {
    // Window Width variables
    //const [width, setWidth] = useState(window.innerWidth);
    //const [navbar, setNavbar] = useState();
    //const [mobileContent, setMobileContent] = useState();
    //const [device, setDevice] = useState();
    //const breakPoint = 855;

    /*useEffect(() => {
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
    }, [width]);*/

    return (
        <div className="App">
            <header className="App-header">
                <WebNavbar />
                <div className='cover'>
                    <div className='cover-content'>
                        <img className='profile' src={profile} alt='profile'/>
                        <p className='hi-there'>HI THERE I'M</p>
                        <p className='name'>JOSEPH SEARLE</p>
                        <p className='job-title'>FULL-STACK DEVELOPER</p>
                        <p className='info'>I’M A FIRST CLASS COMPUTER SCIENCE GRADUATE WITH SKILLS IN</p>
                        <p className='info'>SOFTWARE DEVELOPMENT AND CLOUD COMPUTING</p>
                        <div className='contacts'>
                            <IconButton size='large' style={{color: '#fff', marginRight: '10px'}}>
                                <GitHub fontSize='inherit'/>
                            </IconButton>
                            <IconButton size='large' style={{color: '#fff', marginRight: '10px'}}>
                                <LinkedIn fontSize='large'/>
                            </IconButton>
                            <IconButton size='large' style={{color: '#fff', marginRight: '10px'}}>
                                <Email fontSize='large'/>
                            </IconButton>
                        </div>
                    </div>
                    <div className='cover-image'>
                        <Spline scene="https://prod.spline.design/8ZKVJLzg4ccZ0lfA/scene.splinecode" />
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Home;