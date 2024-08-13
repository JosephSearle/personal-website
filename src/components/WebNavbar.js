import '../styles/App.css';

function WebNavbar(props) {
    return (
        <div className='navbar'>
          <p className={'title'+props.device}>@JosephSearle</p>
        </div>
    );
}

export default WebNavbar;