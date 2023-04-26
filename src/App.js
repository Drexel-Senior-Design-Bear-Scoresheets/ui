import React from 'react';
import ApplicationBase from 'terra-application/lib/application-base';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import SignInPage from './pages/SignInPage/SignInPage';


// This value could be sent from the server as well
const locale = (navigator.languages && navigator.languages[0])
               || navigator.language
               || navigator.userLanguage
               || 'en';

const App = () => (
  <ApplicationBase locale={locale}>
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/signin" element={<SignInPage />}></Route>
        </Routes>
    </Router>
  </ApplicationBase>
);

export default App;