import React, { useState, useEffect } from 'react';
import Table, { Header, HeaderCell, Body, Cell, Row } from 'terra-html-table';
import axios from 'axios';
import CustomToolbar from '../../CustomToolbar';
import SearchField from 'terra-search-field';
import classNames from 'classnames/bind';
import styles from '../../LandingPage.css';

const LandingPage = () => {
  const cx = classNames.bind(styles);
  const [rowData, setRowData] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    // Fetch data from the API
    axios.get('your-api-endpoint')
      .then(response => {
        // Update the rowData state with the fetched data
        setRowData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array to run the effect only once

  const filteredRows = rowData.filter(row =>
    row.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <CustomToolbar />
      <center>
        <div className="searchField">
          <SearchField
            onSearch={setSearchText}
            onInvalidSearch={setSearchText}
            Input
            name="default blank input"
            id="blank"
            ariaLabel="Blank"
          />
        </div>

        <div className={cx('overflow-wrapper')}>
          <Table paddingStyle="standard">
            <Header>
              <HeaderCell key="SCORESHEET_TITLE">Scoresheet Title</HeaderCell>
              <HeaderCell key="DATE_CREATED">Date Created</HeaderCell>
            </Header>
            <Body>
              {filteredRows.map((row, index) => (
                <Row key={`PERSON_${index}`}>
                  <Cell key={row.name}>{row.name}</Cell>
                  <Cell key="PATIENT_NAME">{row.patientName}</Cell>
                </Row>
              ))}
            </Body>
          </Table>
        </div>
      </center>
    </div>
  );
};

export default LandingPage;
