import '../styles/App.css';

import { IconButton, Drawer, List, ListItem, Button, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { Link } from 'react-router-dom';
 
function MobileNavbar() {
    const [menu, setMenu] = useState(false);

    return (
        <div className='mobile-navbar'>
            <p className='title'>Joseph Searle</p>
            <p>{menu}</p>
            <IconButton onClick={() => setMenu(!menu)}><MenuIcon fontSize='large'/></IconButton>
            <Drawer
                anchor='right'
                open={menu}
                onClose={() => setMenu(false)}
            >
                <List style={{padding: 0}}>
                    <ListItem>
                        <Link to="/"><Button disableRipple style={{color: '#424242'}}>Home</Button></Link>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <Link to="/Experience"><Button disableRipple style={{color: '#424242'}}>Experience</Button></Link>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <Link to="/Projects"><Button disableRipple style={{color: '#424242'}}>Projects</Button></Link>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <Link to="/Contact"><Button disableRipple style={{color: '#424242'}}>Contact</Button></Link>
                    </ListItem>
                    <Divider />
                </List>
            </Drawer>
        </div>
    );
}

export default MobileNavbar;