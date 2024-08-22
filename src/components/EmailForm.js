import '../styles/EmailForm.css';
import {useState} from "react";
import {send} from "emailjs-com";

function EmailForm(props) {
    const serviceID = process.env.REACT_APP_EMAIL_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAIL_TEMPLATE_ID;
    const userID = process.env.REACT_APP_EMAIL_USER_ID;

    const [errorMessage, setErrorMessage] = useState("");
    const [toSend, setToSend] = useState({
        first_name: '',
        last_name: '',
        message: '',
        reply_to: ''
    });

    const onSubmit = (e) => {
        e.preventDefault();
        if(validateToSend(toSend)) {
            send(
                serviceID,
                templateID,
                toSend,
                userID
            )
            props.onClose();
        } else {
            setErrorMessage("Uh Oh: All fields must be filled in");
        }
    }

    const validateToSend = (fieldsToSend) => {
        if (fieldsToSend.message === '' || fieldsToSend.first_name === '' || fieldsToSend.last_name === '' || fieldsToSend.reply_to === '') {
            console.log('Oops!! You have to fill in all fields to submit.');
            return false;
        } else {
            return true;
        }
    }

    const handleChange = (e) => {
        setToSend({...toSend, [e.target.name]: e.target.value });
        setErrorMessage("");
    };

    return (
        <form className="email-form" onSubmit={onSubmit}>
            <p className='email-form-title'>GET IN TOUCH</p>
            <input
                className="small-input"
                type='text'
                name='first_name'
                placeholder='First name'
                value={toSend.first_name}
                onChange={handleChange}
            />
            <input
                className="small-input"
                type='text'
                name='last_name'
                placeholder='Last name'
                value={toSend.last_name}
                onChange={handleChange}
            />
            <textarea
                className="large-input"
                name='message'
                placeholder='Message'
                value={toSend.message}
                onChange={handleChange}
            />
            <input
                className="small-input"
                type='text'
                name='reply_to'
                placeholder='Your email'
                value={toSend.reply_to}
                onChange={handleChange}
            />
            <p className='email-form-error-message'>{errorMessage}</p>
            <button type='submit'>Submit</button>
        </form>
    );
}

export default EmailForm;