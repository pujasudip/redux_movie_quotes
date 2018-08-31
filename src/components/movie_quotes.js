import React, { Component } from 'react';
import auth from '../hoc/auth';

class MovieQuotes extends Component{
    render(){
        return (
            <div>
                <h1 className='center'>Movie Quotes!</h1>
                <p className='center'>I'll be back.</p>
            </div>
        );
    }
}
export default auth(MovieQuotes, '/sign-up');