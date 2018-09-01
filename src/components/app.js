import React from 'react';
import { Route } from 'react-router-dom';
import Nav from './nav';
import Home from './home';
import About from './about';
import SecretList from './secret_list';
import MovieQuotes from './movie_quotes';
import SignUp from './sign_up';
import 'materialize-css/dist/css/materialize.min.css';
import auth from '../hoc/auth';
import SignIn from './sign_in';
import redirect from "../hoc/redirect";

const App = () => (
    <div>
        <Nav/>
        <div className="container">
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About}/>
            <Route path='/secret-list' component={auth(SecretList)}/>
            <Route path='/movie-quotes' component={MovieQuotes}/>
            <Route path='/sign-up' component={redirect(SignUp, '/about')}/>
            <Route path='/sign-in' component={redirect(SignIn, '/movie-quotes')}/>
        </div>
    </div>
);

export default App;
