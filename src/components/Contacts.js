
import Contact from "./Contact";
import '../styles/Contacts.css';
import {CONTACTINFO} from "../data/contactInfo";

function Contacts(props) {
    return (
        <div className={'contacts'+ props.device}>
            {CONTACTINFO.map((info, index) =>
                <Contact testId={info.testId} href={info.href} icon={info.icon} openModal={info.testId === "email-button" ? props.openModal : null}/>
            )};
        </div>
    );
}

export default Contacts;