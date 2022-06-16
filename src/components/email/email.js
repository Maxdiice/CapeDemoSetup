import React from 'react';
import emailjs from 'emailjs-com';

function SendEntryMail(props) {

    const serverID = "service_5on0elf"
    const templateID = "template_5nbrqee"
    const userID = "jQ9YB08SPfvkFU1tf"

    const userInfo = props[5]
    const brandName = props[1]

    emailjs.send(serverID, templateID, {
        to_name:  userInfo[0],
        to_brand: brandName,
        to_mail: userInfo[1]
    }, userID)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

    return <>
    </>
}

export default SendEntryMail;