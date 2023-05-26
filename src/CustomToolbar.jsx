import React from 'react';
import Toolbar from 'terra-toolbar';
import {useNavigate} from 'react-router-dom';
import Button from "terra-button";
import classNames from 'classnames/bind';
import styles from './LandingPage.css';
import IconProvider from 'terra-icon/lib/icon/IconProvider';
import IconHouse from 'terra-icon/lib/icon/IconHouse';

const CustomToolbar = () => {
  const cx = classNames.bind(styles);
  const navigate = useNavigate();
  
    const routeStart = () =>{ 
        navigate('/start')
    }
    const routeProfile = () =>{ 
        navigate('/profile')
    }


  return (
    <div>
      
      <Toolbar ariaLabel="NavBar" ariaControls="content" className='Toolbar'>
  <Button to="/start" onClick={routeStart} text="Edit" variant="utility" icon={<IconHouse className='Homeicon' />} className={cx('button')} height='24em' width='24em' />
  <Button to="/profile" onClick={routeProfile} text="Edit" variant="utility" icon={<IconProvider className='Providericon' />} className={cx('button')} height='24em' width='24em' />
</Toolbar>
    </div>
  );
};

export default CustomToolbar;
