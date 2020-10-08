import React, { Component } from 'react';
import styles from './LogInForm.module.css';

class LogInForm extends Component {
    state = {
        email: '',
        password: '',
    }

    handleEmailChange = (event) => {
        const email = event.target.value;
        this.setState({ email });
    }

    handlePasswordChange = (event) => {
        const password = event.target.value;
        this.setState({ password });
    }

    handleSubmit = () => {
        const { email, password } = this.state;
        this.props.redirectToHome();
        
        //TODO: Axios submit email and password
    }

    render() {
        return (
            <form className={styles.logInForm} onSubmit={this.handleSubmit}>
                <h3 className={styles.logInHeader}>Log In</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Enter email" 
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        placeholder="Enter password" 
                        value={this.state.password}
                        onChange={this.handlePasswordChange}
                    />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Log in</button>
                <p className={styles.dontHaveAccount}>
                    Don't have an account? 
                    <a 
                        href="#" 
                        className={styles.signUpLink} 
                        onClick={this.props.redirectToSignUpPage}
                    >
                        Sign Up
                    </a>
                </p>
            </form>
        )
    }
}

export default LogInForm;