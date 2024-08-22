import IconButton from "@mui/material/IconButton";
import {Email, GitHub, LinkedIn} from "@mui/icons-material";
import Contact from "./Contact";

function Contacts(props) {

    const contactInfo = [
        {
            testId: "git-button",
            href: 'https://github.com/JosephSearle',
            icon: <GitHub fontSize='inherit'/>,
            openModal: null
        },
        {
            testId: "linkedin-button",
            href: 'https://www.linkedin.com/in/josephwilliamsearle/',
            icon: <LinkedIn fontSize='large'/>,
            openModal: null
        },
        {
            testId: "email-button",
            href: '',
            icon: <Email fontSize='large'/>,
            openModal: props.openModal
        }
    ];

    return (
        <div className={'contacts'+ props.device}>

            {contactInfo.map((info, index) =>
                <Contact testId={info.testId} href={info.href} icon={info.icon} openModal={info.openModal}/>)};

        </div>
    );
}

export default Contacts;