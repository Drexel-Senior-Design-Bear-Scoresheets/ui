import React from 'react';
import { Link } from 'react-router-dom';
import ActionHeader from 'terra-action-header';

const HomePage = () => (
    <div>
        <ActionHeader title='This is the home page.' />
        <Link to="/about">About Page</Link>{"\n"}
        <Link to="/start">Start Page </Link> {"\n"}
        <Link to="/signin">Signin Page</Link>{"\n"}
        <Link to="/signUp">SignUp Page</Link>{"\n"}
        <Link to="/landing">Landing Page</Link>{"\n"}
        <Link to="/profile">Profile Page</Link>{"\n"}
    </div>
);



export default HomePage;