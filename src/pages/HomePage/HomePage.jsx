import React from 'react';
import { Link } from 'react-router-dom';
import ActionHeader from 'terra-action-header';


const HomePage = () => (
    <div>
        <ActionHeader title='This is the home page.' />
        <Link to="/about">About Page</Link>
    </div>
);

export default HomePage;