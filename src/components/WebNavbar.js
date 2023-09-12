import '../App.css';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function WebNavbar() {
    return (
        <div className='navbar'>
          <p className='title'>Joseph Searle</p>
          <Link to='/'><Button disableRipple style={{color: '#424242'}}>Home</Button></Link>
          <Link to='/Experience'><Button disableRipple style={{color: '#424242'}}>Experience</Button></Link>
          <Link to='/Projects'><Button disableRipple style={{color: '#424242'}}>Projects</Button></Link>
          <Link to='/Contact'><Button disableRipple style={{color: '#424242'}}>Contact</Button></Link>
        </div>
    );
}

export default WebNavbar;