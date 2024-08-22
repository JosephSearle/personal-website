export function validateFields(fieldsToSend) {
    if (fieldsToSend.message === '' || fieldsToSend.first_name === '' || fieldsToSend.last_name === '' || fieldsToSend.reply_to === '') {
        console.log('Oops!! You have to fill in all fields to submit.');
        return false;
    } else {
        return true;
    }
}