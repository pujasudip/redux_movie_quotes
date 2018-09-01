import { combineReducers } from 'redux';
import {reducer as formReducer } from 'redux-form';
import user_reducer from './user_reducer';
import movie_reducer from './movie_reducer';

const rootReducer = combineReducers({
    form: formReducer,
    user: user_reducer,
    movie: movie_reducer
});

export default rootReducer;