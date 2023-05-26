import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
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
    axios.get('http://localhost:5000/scoresheet')
      .then(response => {
        // Update the rowData state with the fetched data
        setRowData(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array to run the effect only once

  const formatDateString = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const filteredRows = rowData.filter(row =>
    row.scoresheetData && (
      row.scoresheetData.scoresheetTitle.toLowerCase().includes(searchText.toLowerCase()) ||
      row.scoresheetData.scoresheetDate.toLowerCase().includes(searchText.toLowerCase())
    )
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

        <div className="table-container">
          <table className={cx('table')}>
            <thead>
              <tr>
                <th>Scoresheet Title</th>
                <th>Date Created</th>
              </tr>
            </thead>
            <tbody>
              {filteredRows.map((row, index) => (
                <tr className={cx('table-row')} key={`SCORESHEET_${index}`}>
                  <td className={cx('table-cell')}>
                    <Link to={`/fillout/${row.id}`} className={cx('table-link')}>
                      {row.scoresheetData.scoresheetTitle}
                    </Link>
                  </td>
                  <td className={cx('table-cell')}>
                    {formatDateString(row.scoresheetData.scoresheetDate)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </center>
    </div>
  );
};

export default LandingPage;
