import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import Input from './input';
import { connect } from 'react-redux';
import {signUp} from '../actions';

//"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1Yjg5Y2VjOGUzZTBmNDVmMmVkNWNjZTMiLCJpYXQiOjE1MzU3NTgwMjQyOTd9.VqcJ1n_u7xsLTUqpeFcUi_DuXrhiTZ-fye5wq4-4Sl0"
//"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1Yjg5Y2ZjY2UzZTBmNDVmMmVkNWNjZTQiLCJpYXQiOjE1MzU3NTgyODQzMTd9.Yvsf4QyzawH_SXqdLRZKJpoEDwwtzoqghGi_BhZqwGQ"

class SignUp extends Component{
    register = (values) => {
        console.log('Register Values:', values);

        this.props.signUp(values);
    }

    render(){
        const { handleSubmit } = this.props;
        return (
            <div>
                <h1 className="center">Sign Up</h1>
                <form onSubmit={handleSubmit(this.register)} className="row">
                    <div className="col s12 m8 offset-m2">
                        <Field name='email' label="Email" component={Input} />
                        <Field name='password' type='password' label="Password" component={Input} />
                        <Field name='confirmPassword' type='password' label="Confirm Password" component={Input} />
                        <div className="row">
                            <div className="col s12 right-align">
                                <button className='btn blue'>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

function validate({email, password, confirmPassword}){
    const errors = {};

    if(!email) errors.email = 'Please enter your email address';
    if(!password) errors.password = 'Please choose a password';

    if(password !== confirmPassword){
        errors.confirmPassword = 'Password do not match';
    }

    return errors;
}

SignUp = reduxForm({
    form: 'sign-up',
    validate
})(SignUp);

export default connect(null, { signUp })(SignUp);