import React from 'react';

export default ({input, label, type, meta: {touched, error}}) => (
    <div className="row">
        <div className="col s12">
            <label>{label}</label>
            <input {...input} type={type || 'text'} autoComplete="off"/>
            <p className="red-text darken-2">{touched && error}</p>
        </div>
    </div>
);