import '../App.css';
import { IconButton, Drawer, List, ListItem, Button } from '@mui/material';
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
                <List>
                    <ListItem>
                        <Link to="/"><Button disableRipple style={{color: '#424242'}}>Home</Button></Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/Experience"><Button disableRipple style={{color: '#424242'}}>Experience</Button></Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/Projects"><Button disableRipple style={{color: '#424242'}}>Projects</Button></Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/Contact"><Button disableRipple style={{color: '#424242'}}>Contact</Button></Link>
                    </ListItem>
                </List>
            </Drawer>
        </div>
    );
}

export default MobileNavbar;