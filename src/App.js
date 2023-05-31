import React from 'react';
import ApplicationBase from 'terra-application/lib/application-base';
import { HashRouter as Router, Route, Routes, Redirect } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import SignInPage from './pages/SignInPage/SignInPage';
import StartPage from './pages/StartPage/StartPage';
import LandingPage from './pages/LandingPage/LandingPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import Scoresheet from './pages/ScoresheetPage/Scoresheet';
import Fillout from './pages/FilloutPage/Fillout';

// This value could be sent from the server as well
const locale = (navigator.languages && navigator.languages[0])
               || navigator.language
               || navigator.userLanguage
               || 'en';

const App = () => (
  <ApplicationBase locale={locale}>
    <Router>
        <Routes>
      <Route exact path="/" element={<StartPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/start" element={<StartPage />} />
      <Route path="/landing" element={<LandingPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/scoresheet" element={<Scoresheet />} />
      <Route path="/fillout/:id" element={<Fillout />} />
    </Routes>

    </Router>
  </ApplicationBase>
);

export default App;