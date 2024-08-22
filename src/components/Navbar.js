import '../styles/Navbar.css';

function Navbar(props) {
    return (
        <div className='navbar'>
          <p className={'navbar-title'+props.device}>@JosephSearle</p>
        </div>
    );
}

export default Navbar;