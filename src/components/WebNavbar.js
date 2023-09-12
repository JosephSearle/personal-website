import '../App.css';
import { Button } from '@mui/material';

function WebNavbar() {
    return (
        <div className='navbar'>
          <p className='title'>Joseph Searle</p>
          <Button disableRipple style={{color: '#424242'}}>Experience</Button>
          <Button disableRipple style={{color: '#424242'}}>Projects</Button>
          <Button disableRipple style={{color: '#424242'}}>Contact</Button>
        </div>
    );
}

export default WebNavbar;