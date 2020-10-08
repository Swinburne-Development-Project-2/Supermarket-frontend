import React from 'react';
import { useHistory } from 'react-router-dom';
import SignUpForm from './signupform/SignUpForm';

const SignUpPage = () => {
    const history = useHistory();

    return (
        <SignUpForm 
            redirectToHome={() => history.push('/home')}
            redirectToLogInPage={() => history.push('/')}
        />
    );
}

export default SignUpPage;