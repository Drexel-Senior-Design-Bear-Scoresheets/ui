import React from 'react';
import ActionHeader from 'terra-action-header';

const Header = () => (
    <ActionHeader
      title="This is a test."
      onBack={() => alert('You clicked back!')}
      onClose={() => alert('You clicked close!')}
    />
);

export default Header;