import '../App.css';
import { IconButton, Drawer } from '@mui/material';
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
                
            </Drawer>
        </div>
    );
}

export default MobileNavbar;