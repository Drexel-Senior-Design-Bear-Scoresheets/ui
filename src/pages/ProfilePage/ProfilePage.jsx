import React, { useState } from 'react';
import Layout from 'terra-layout';
import Card from 'terra-card';
import Button from "terra-button";
import Toolbar from 'terra-toolbar';
import IconProvider from 'terra-icon/lib/icon/IconProvider';
import IconHouse from 'terra-icon/lib/icon/IconHouse';
import IconEdit from 'terra-icon/lib/icon/IconEdit';
import Avatar from 'terra-avatar';
import styles from '../../ProfilePage.css';
import classNames from 'classnames/bind';
import ContentContainer from 'terra-content-container';
import Input from 'terra-form-input';
import Image from 'terra-image';
import Table, {
    Header,
    HeaderCell,
    Body,
    Cell,
    Row,
  } from 'terra-html-table';
  

const ProfilePage = () => {
    const cx = classNames.bind(styles);

    return (
        <div>
            <Toolbar ariaLabel="NavBar" ariaControls="content" className='Toolbar'>
                <Button text="Edit" variant="utility" icon={<IconHouse className='Homeicon'/>} className='Home' height='24em' width='24em' />
                <Button text="Edit" variant="utility" icon={<IconProvider className='Providericon'/>} className='Provider' height='24em' width='24em'/>
            </Toolbar>
            <Card className='mt-2 border-0 rounded-0 shadow-sm'>
            <Card.Body>
                    

            <ContentContainer className='text-center'>
              <Image style={{ maxWidth: '200px', maxHeight: '200px' }} src={'https://freesvg.org/img/abstract-user-flat-4.png'} alt="rounded image" variant="rounded" />
            </ContentContainer>
            <Table responsive striped hover bordered={true} className='text-center mt-5'>
              <tbody>
                <tr>
                  <td >
                    USER NAME
                  </td>
                  <td>
                    Placeholder
                  </td>
                </tr>
                <tr>
                  <td >
                    USER EMAIL
                  </td>
                  <td>
                    placehodler email
                  </td>
                </tr>
                <tr>
                  <td >
                    ABOUT
                  </td>
                  <td>
                  Placeholder
                  </td>
                </tr>
                <tr>
                  <td>
                    ROLE
                  </td>
                  <td>
                    placeholder
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>

          <Button text="Update Profile" variant="action" icon={<IconEdit />} className={cx('button')} />
        </Card>
      </div>
    )
};

export default ProfilePage;