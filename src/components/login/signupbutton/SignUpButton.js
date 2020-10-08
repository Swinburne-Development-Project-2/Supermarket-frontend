import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './SignUpButton.module.css';

const SignUpButton = () => {
    const history = useHistory();
    
    return (    
        <p className={styles.dontHaveAccount}>
            Don't have an account? 
            <a 
                href="#" 
                className={styles.signUpLink} 
                onClick={() => history.push('/signup')}
            >
                Sign Up
            </a>
        </p>
    );
}

export default SignUpButton;