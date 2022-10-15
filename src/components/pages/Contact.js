import React, { useState } from "react";
import { validateEmail } from '../utils/helpers.js'

export default function ContactMe() {
    const [ contactFormState, setContactFormState ] = useState({ name: '', email: '', message: '' });
    const [ errorMessage, setErrorMessage ] = setState('');
    const { name, email, message } = contactFormState;

    function handleContact(e) {
        if (e.target.name === 'email') {
            const validEmail = validateEmail(e.target.value)
            if (!validEmail) {
                setErrorMessage('Please enter a valid email!')
            } else {
                setErrorMessage('')
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`)
            } else {
                setErrorMessage('')
            }
        }

        if (!errorMessage) {
            setContactFormState({ ...contactFormState, [e.target.name]: e.target.value })
        }
    }

    function contactSubmit(e) {
        e.preventDefault();
    }

    return (
        <div>
            
        </div>
    )
}