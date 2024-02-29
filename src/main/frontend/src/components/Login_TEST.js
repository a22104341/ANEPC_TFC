import React, {useState} from 'react';
import {Form} from 'react-bootstrap';

function Login_TEST() {

    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    const [isPwVisibilityChecked, setIsPwVisibilityChecked] = useState(false); // Password Visibility default start value

    const handlePwVisibility = (event) => {
        setIsPwVisibilityChecked(event.target.checked);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // log the inputs
        let formData = {
            emailInput,
            passwordInput
        };
        console.log(formData); // send it into the log

        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: emailInput,
                    password: passwordInput
                })
            });
            console.log("STEP1:" + emailInput + "   " + passwordInput);

            if (!response.ok) {
                throw new Error('Login failed');
            }

            // Handle successful login, e.g., redirect user to dashboard
            console.log('Login successful');
        } catch (error) {
            console.error('Error:', error.message);
            // Handle login error, e.g., display error message to user
        }
    };

    return (
        <Form id="form_LoginTest" onSubmit={handleSubmit}>
            <div id="email">
                <Form.Group controlId="emailTextField">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="example@gmail.com"
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                    />
                </Form.Group>
            </div>

            <div id="password">
                <Form.Group controlId="passwordTextField">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                        type={isPwVisibilityChecked ? "text" : "password"}
                        placeholder="Password123!!!"
                        value={passwordInput}
                        onChange={(e) => setPasswordInput(e.target.value)}
                    />
                </Form.Group>
            </div>

            <Form.Group controlId="showPasswordCheckbox">
                <Form.Check
                    type="checkbox"
                    label="Show Password"
                    checked={isPwVisibilityChecked}
                    onChange={handlePwVisibility}
                />
            </Form.Group>

            <button type="submit">SubmitPW</button>
        </Form>
    )

}

export default Login_TEST;