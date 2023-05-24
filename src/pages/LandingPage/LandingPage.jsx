import React, { useState } from 'react';
import Layout from 'terra-layout';
import Button from "terra-button";
import Grid from "terra-grid";
import { Link } from "react-router-dom";
import classNames from 'classnames/bind';
import SearchField from 'terra-search-field';
import styles from '../../LandingPage.css';
import Toolbar from 'terra-toolbar';
import IconProvider from 'terra-icon/lib/icon/IconProvider';
import IconHouse from 'terra-icon/lib/icon/IconHouse';
import Scroll from 'terra-scroll';
import List, { Item } from 'terra-list';
import Input from 'terra-form-input';
import Table, {
    Header,
    HeaderCell,
    Body,
    Cell,
    Row,
  } from 'terra-html-table';

const LandingPage = () => {
    
    const INVALID_MESSAGE = 'Search Scoresheet: ';
    const [searchText, setSearchText] = useState('');
    const message = searchText.length >= 2 ? `Search text: ${searchText}` : INVALID_MESSAGE;
    const cx = classNames.bind(styles);
    const [name, setName] = useState('');
    const [dateCreated, setdateCreated] = useState('');


    return (
    <div>
        <Toolbar ariaLabel="NavBar" ariaControls="content" className='Toolbar'>
            <Button text="Edit" variant="utility" icon={<IconHouse className='Homeicon'/>} className='Home' height='24em' width='24em' />
            <Button text="Edit" variant="utility" icon={<IconProvider className='Providericon'/>} className='Provider' height='24em' width='24em'/>
        </Toolbar>
        <center>
            
            <div className= 'searchField'>
                <SearchField  onSearch={setSearchText} onInvalidSearch={setSearchText} Input name="default blank input" id="blank" ariaLabel="Blank" />
            </div>
            
            <div className={cx('overflow-wrapper')}>
                <Scroll>
                    <Table paddingStyle="standard">
                        <Header>
                            <HeaderCell key="SCORESHEET_TITLE">Scoresheet Title</HeaderCell>
                            <HeaderCell key="DATE_CREATED">Date Created</HeaderCell>
                        </Header>
                        <Body>
                            <Row key="PERSON_0">
                                <Cell key = {name}>{setName}</Cell>
                                <Cell key="PATIENT_NAME">Afridi</Cell>
                            </Row>
                            <Row key="PERSON_1">
                                <Cell key = {name}>{setName}</Cell>
                                <Cell key="PATIENT_NAME"></Cell>
                            </Row>
                            <Row key="PERSON_2">
                                <Cell key = {name}>{setName}</Cell>
                                <Cell key="PATIENT_NAME"></Cell>
                            </Row>
                        </Body>                                     
                    </Table>
                </Scroll>
            </div>
        </center>
    </div>
    );
};

export default LandingPage;
