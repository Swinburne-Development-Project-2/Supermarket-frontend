import React, { Component } from 'react';
import styles from './SignUpForm.module.css';

class LogInForm extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    }

    handleFieldsChange = (event) => {
        const key = event.target.key;
        const value = event.target.value;
        this.setState({ [key]: value });
    }

    handleSubmit = () => {
        const { firstName, lastName, email, password } = this.state;
        this.props.redirectToHome();
        
        //TODO: Axios submit names and email and password
    }

    render() {
        return (
            <form className={styles.signUpForm} onSubmit={this.handleSubmit}>
                <h3 className={styles.signUpHeader}>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="First name" 
                        key="firstName"
                        value={this.state.firstName}
                        onChange={this.handleFieldsChange}
                    />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Last name" 
                        key="lastName"
                        value={this.state.lastName}
                        onChange={this.handleFieldsChange}
                    />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Enter email" 
                        value={this.state.email}
                        onChange={this.handleFieldsChange}
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        placeholder="Enter password" 
                        value={this.state.password}
                        onChange={this.handleFieldsChange}    
                    />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className={styles.alreadyRegistered}>
                    Already registered? 
                    <a 
                        href="#"
                        className={styles.logInLink}
                        onClick={this.props.redirectToLogInPage}
                    >
                        Log in
                    </a>
                </p>
            </form>
        )
    }
}

export default LogInForm;