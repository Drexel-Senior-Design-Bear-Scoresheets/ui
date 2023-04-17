import React from 'react';
import ApplicationBase from 'terra-application/lib/application-base';
import Header from './Header';


// This value could be sent from the server as well
const locale = (navigator.languages && navigator.languages[0])
               || navigator.language
               || navigator.userLanguage
               || 'en';

const App = () => (
  <ApplicationBase locale={locale}>
    <Header />
  </ApplicationBase>
);

export default App;