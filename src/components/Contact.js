import IconButton from "@mui/material/IconButton";

function Contact(props) {

    return(
        <IconButton
            data-testid={props.testId}
            size='large'
            style={{color: '#fff', marginRight: '10px'}}
            href={props.href}
            target='_blank'
            onClick={props.openModal}
        >
            {props.icon}
        </IconButton>
    );
}

export default Contact;