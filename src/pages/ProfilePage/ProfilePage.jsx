import React from 'react';
import Layout from 'terra-layout';
import Button from "terra-button";
import Toolbar from 'terra-toolbar';
import IconProvider from 'terra-icon/lib/icon/IconProvider';
import IconHouse from 'terra-icon/lib/icon/IconHouse';


class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
        <div>
            <Toolbar ariaLabel="NavBar" ariaControls="content" className='Toolbar'>
                <Button text="Edit" variant="utility" icon={<IconHouse className='Homeicon'/>} className='Home' height='24em' width='24em' />
                <Button text="Edit" variant="utility" icon={<IconProvider className='Providericon'/>} className='Provider' height='24em' width='24em'/>
            </Toolbar>

            
        </div>
        );
    }
}