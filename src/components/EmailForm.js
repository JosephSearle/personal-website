import '../styles/EmailForm.css';
import {useState} from "react";
import {send} from "emailjs-com";

function EmailForm() {
    const serviceID = process.env.REACT_APP_EMAIL_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAIL_TEMPLATE_ID;
    const userID = process.env.REACT_APP_EMAIL_USER_ID;

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
    };

    return (
        <form className="email-form" onSubmit={onSubmit}>
            <p className='email-form-title'>Email Me</p>
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
            <button type='submit'>Submit</button>
        </form>
    );
}

export default EmailForm;