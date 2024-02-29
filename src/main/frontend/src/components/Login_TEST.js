import React, {useState} from 'react';
import {Form} from 'react-bootstrap';

function Login_TEST() {

    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    const [isPwVisibilityChecked, setIsPwVisibilityChecked] = useState(false); // Password Visibility default start value

    const handlePwVisibility = (event) => {
        setIsPwVisibilityChecked(event.target.checked);
    };

    //save stuff on submit
    const handleSubmit = (event) => {
        event.preventDefault();

        // Handle form submission here
        let formData = {
            emailInput,
            passwordInput
        };
        console.log(formData); // send it into the log
    };

    return (
        <Form id="form_Page1" onSubmit={handleSubmit}>
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