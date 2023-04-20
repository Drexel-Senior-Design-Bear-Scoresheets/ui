import React from 'react';
import { Link } from 'react-router-dom';
import ActionHeader from 'terra-action-header';


const AboutPage = () => (
    <div>
        <ActionHeader title='This is the about page.' />
        <Link to="/">Home Page</Link>
    </div>
);

export default AboutPage;