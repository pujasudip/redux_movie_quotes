import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../assets/css/auth.css';

export default function (WrappedComponent, path='/', message) {
    class Auth extends Component {
        componentDidMount(){
            this.checkAuth();
        }

        componentDidUpdate(){
            this.checkAuth();
        }

        checkAuth(){
            const { auth, history } = this.props;

            if(!auth){
                console.log('auth:' + message);
                history.push(path);
            }
        }

        render(){
            return <WrappedComponent {...this.props}/>
        }
    }

    function mapStateToProps(state){
        return {
            auth: state.user.auth
        }
    }

    return connect(mapStateToProps)(Auth)
}