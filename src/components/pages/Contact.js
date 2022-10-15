import React, { useState } from "react";
import { validateEmail } from '../utils/helpers.js'

export default function ContactMe() {
    const [ contactFormState, setContactFormState ] = useState({ name: '', email: '', message: '' });
    const [ errorMessage, setErrorMessage ] = useState('');
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

    const styles = {
        containStyle: {
            display: 'flex',
            flexWrap: 'wrap',
            textAlign: 'center',
            fontSize: '1.2em'
        },
        headerStyle: {
            width: '100%',
            fontSize: '2em'
        },
        formStyle: {
            width: '80%',
            marginLeft: '10%',
            overflow: 'hidden',
            marginBottom: '1.5%'
        },
        textStyle: {
            width: '80%',
            marginLeft: '10%',
            overflow: 'hidden',
            height: '20em',
            marginBottom: '3%'
        },
        pStyle: {
            color: 'red'
        },
        btnStyle: {
            borderRadius: '10px',
            fontSize: '1.2rem',
            width: '25%',
            marginBottom: '5%',
            height: '2em',
            borderStyle: 'ridge',
            backgroundColor: 'white'
        }
    }

    return (
        <div style={styles.containStyle}>
            <h1 style={styles.headerStyle}>Contact Me</h1>
            <form style={styles.formStyle}>
                <div>
                    <label for='name'>Name:</label>
                    <br></br>
                    <input style={styles.formStyle} type='text' name='name' defaultValue={name} onBlur={handleContact} />
                </div>
                <div>
                    <label for='email'>Email:</label>
                    <br></br>
                    <input style={styles.formStyle} type='email' name='email' defaultValue={email} onBlur={handleContact} />
                </div>
                <div>
                    <label for='message'>Message:</label>
                    <br></br>
                    <textarea style={styles.textStyle} name='message' defaultValue={message} onBlur={handleContact} />
                </div>
                {errorMessage && (
                    <div>
                        <p style={styles.pStyle}>{errorMessage}</p>
                    </div>
                )}
                <div>
                    <button style={styles.btnStyle} type="submit">Send Message</button>
                </div>
            </form>
            
        </div>
    )
}