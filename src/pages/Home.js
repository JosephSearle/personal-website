import '@fontsource/pacifico';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/300.css'
import WebNavbar from '../components/WebNavbar';
import profile from '../images/profile.png';
import IconButton from '@mui/material/IconButton';
import webBackground from '../images/webBackground.png';
import mobileBackground from '../images/mobileBackground.png';
import '../styles/App.css';
import { Email, GitHub, LinkedIn } from '@mui/icons-material';
import { useState, useEffect, useMemo} from 'react';
import EmailForm from '../components/EmailForm';
import Modal from 'react-modal';

function Home() {
    // Window Width variables
    const [width, setWidth] = useState(window.innerWidth);
    const [background, setBackground] = useState();
    const [device, setDevice] = useState();
    const [mobile, setMobile] = useState();
    const breakPoint = 844;

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

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
                <WebNavbar device={device}/>
                <div className={'cover'+device}>
                    <div className='cover-content'>
                        {
                            mobile && 
                            <img className={'profile'+device} src={profile} alt='profile'/>
                        }
                        <p className={'hi-there'+device}>HI THERE I'M</p>
                        <p className={'name'+device}>JOSEPH SEARLE</p>
                        <p className={'job-title'+device}>SOFTWARE DEVELOPER</p>
                        <p className={'info'+device}>I'M A FULL STACK DEVELOPER CURRENTLY WORKING @IBM</p>
                        <p className={'info'+device}>BUILDING A LARGE SCALE MICROSERVICE'S APPLICATION IN AWS CLOUD</p>
                        <div className={'contacts'+device}>
                            <IconButton data-testid="git-button" size='large' style={{color: '#fff', marginRight: '10px'}} href='https://github.com/JosephSearle' target='_blank'>
                                <GitHub fontSize='inherit'/>
                            </IconButton>
                            <IconButton data-testid="linkedin-button" size='large' style={{color: '#fff', marginRight: '10px'}} href='https://www.linkedin.com/in/josephwilliamsearle/' target='_blank'>
                                <LinkedIn fontSize='large'/>
                            </IconButton>
                            <IconButton data-testid="email-button" size='large' style={{color: '#fff', marginRight: '10px'}} onClick={openModal}>
                                <Email fontSize='large'/>
                            </IconButton>
                        </div>
                        <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={closeModal}
                            className={'modal'+ device}
                            style={{
                                overlay: {
                                    backgroundColor: 'rgb(27,27,27,50%)',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }
                            }}
                        >
                            <EmailForm onClose={closeModal}/>
                        </Modal>
                    </div>
                    {
                        !mobile &&
                        <div className='cover-image'>
                            <img className={'profile'+device} src={profile} alt='profile'/>
                        </div>
                    }
                </div>
            </header>
        </div>
    );
}

export default Home;