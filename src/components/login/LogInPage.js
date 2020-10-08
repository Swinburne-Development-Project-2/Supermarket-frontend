import React from 'react';
import { useHistory } from 'react-router-dom';
import LogInForm from './loginform/LogInForm';

const LogInPage = () => {
    const history = useHistory();

    return (
        <LogInForm redirectToHome={() => history.push('/home')}/>
    );
}

export default LogInPage;