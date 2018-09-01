import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import Input from './input';
import { connect } from 'react-redux';
import { singIn } from '../actions';

//"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1Yjg5Y2VjOGUzZTBmNDVmMmVkNWNjZTMiLCJpYXQiOjE1MzU3NTgwMjQyOTd9.VqcJ1n_u7xsLTUqpeFcUi_DuXrhiTZ-fye5wq4-4Sl0"
//"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1Yjg5Y2ZjY2UzZTBmNDVmMmVkNWNjZTQiLCJpYXQiOjE1MzU3NTgyODQzMTd9.Yvsf4QyzawH_SXqdLRZKJpoEDwwtzoqghGi_BhZqwGQ"

class SignIn extends Component{
    logIn = (values) => {
        console.log('Register Values:', values);

        this.props.singIn(values);
    }

    render(){
        const { handleSubmit, authError } = this.props;
        return (
            <div>
                <h1 className="center">Sign In</h1>
                <form onSubmit={handleSubmit(this.logIn)} className="row">
                    <div className="col s12 m8 offset-m2">
                        <Field name='email' label="Email" component={Input} />
                        <Field name='password' type='password' label="Password" component={Input} />
                        <p className="red-text darken-2 center">{authError}</p>
                        <div className="row">
                            <div className="col s12 right-align center">
                                <button className='btn blue'>Sign In</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

function validate({email, password}){
    const errors = {};

    if(!email) errors.email = 'Please enter your email address';
    if(!password) errors.password = 'Please choose a password';

    return errors;
}

SignIn = reduxForm({
    form: 'sign-in',
    validate
})(SignIn);

function mapStateToProps(state){
    return {
        authError: state.user.error
    }
}

export default connect(mapStateToProps, { singIn })(SignIn);