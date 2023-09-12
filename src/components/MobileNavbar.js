import '../App.css';
import { IconButton, Drawer, List, ListItem, ListItemButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

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
                        <ListItemButton disableRipple style={{color: '#424242'}}>Experience</ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton disableRipple style={{color: '#424242'}}>Projects</ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton disableRipple style={{color: '#424242'}}>Contact</ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
        </div>
    );
}

export default MobileNavbar;