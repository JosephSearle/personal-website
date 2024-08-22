import profile from "../images/profile.png";
import MyInfo from "./MyInfo";
import Contacts from "./Contacts";
import Modal from "react-modal";
import EmailForm from "./EmailForm";
import {useState} from "react";
import '../styles/Cover.css';

function Cover(props) {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return(
        <div className={'cover'+props.device}>
            <div className='cover-content'>
                {
                    props.mobile &&
                    <img className={'cover-profile'+props.device} src={profile} alt='profile'/>
                }
                <MyInfo device={props.device}/>
                <Contacts openModal={openModal} device={props.device}/>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    className={'cover-modal'+ props.device}
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
                !props.mobile &&
                <div className='cover-image'>
                    <img className={'cover-profile'+props.device} src={profile} alt='profile'/>
                </div>
            }
        </div>
    );
}

export default Cover;