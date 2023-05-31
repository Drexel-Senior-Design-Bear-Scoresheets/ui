import React, { useState, useEffect } from 'react';
import Card from 'terra-card';
import Button from "terra-button";
import IconEdit from 'terra-icon/lib/icon/IconEdit';
import ContentContainer from 'terra-content-container';
import Input from 'terra-form-input';
import CustomToolbar from '../../CustomToolbar';
import Image from 'terra-image';
import Table from 'terra-html-table';
import { getUserAttributes } from '../../auth';

const ProfilePage = () => {
  const [profileData, setProfileData] = useState({
    name: 'Gurleen',
    email: 'gurleen@gmail.com',
    role: 'Admin',
  });
  const [editing, setEditing] = useState(false); // State to track editing mode
  const [updatedProfileData, setUpdatedProfileData] = useState({
    name: '',
    email: '',
    role: '',
  }); // State to track updated profile data

  useEffect(() => {
    // Fetch profile data from the API and update the state
    fetchProfileData()
      .then(data => {
        setProfileData(data);
        setUpdatedProfileData(data);
      })
      .catch(error => console.error('Error fetching profile data:', error));
  }, []);

  const fetchProfileData = async () => {
    // Make your API call here to fetch the profile data
    // Replace the placeholder URLs with your actual API endpoints
    let data = getUserAttributes();
    let filteredData = {}
    data.forEach((attr) => {
      switch(attr.Name) {
        case "given_name":
          filteredData.firstName = attr.Value;
          break;
        case "family_name":
          filteredData.lastName = attr.Value;
          break;
        case "email":
          filteredData.email = attr.Value;
          break;
        case "custom:role":
          filteredData.role = attr.Value;
          break;
        default:
          break;
      }
    })
    filteredData.name = filteredData.firstName + " " + filteredData.lastName;
    return filteredData;
  };

  const handleEditProfile = () => {
    setEditing(true);
  };

  const handleSaveProfile = () => {
      setProfileData(updatedProfileData);
      setEditing(false);
      alert("Changes Saved!")
      
      
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUpdatedProfileData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <CustomToolbar />
      <div className="profile-card">
        <Card className='mt-2 border-0 rounded-0 shadow-sm'>
          <Card.Body className="card-test">
            <ContentContainer className='text-center'>
              <Image className="profile-icon" style={{ maxWidth: '200px', maxHeight: '200px' }} src={'https://freesvg.org/img/abstract-user-flat-4.png'} alt="rounded image" variant="rounded" />
            </ContentContainer>
            <Table responsive striped hover bordered={true} className='text-center mt-5'>
              <tbody>
                <tr>
                  <td className="profile-labels">
                    Username
                  </td>
                  <td>
                    {editing ? (
                      <Input
                        name="name"
                        value={updatedProfileData.name}
                        onChange={handleInputChange}
                      />
                    ) : (
                      profileData.name
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="profile-labels">
                    Email
                  </td>
                  <td>
                    {editing ? (
                      <Input
                        name="email"
                        value={updatedProfileData.email}
                        onChange={handleInputChange}
                      />
                    ) : (
                      profileData.email
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="profile-labels">
                    Role
                  </td>
                  <td>
                    {editing ? (
                      <Input
                        name="role"
                        value={updatedProfileData.role}
                        onChange={handleInputChange}
                      />
                    ) : (
                      profileData.role
                    )}
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
          {!editing ? (
            <Button className="update-profile-button" text="Update Profile" variant="action" icon={<IconEdit />} onClick={handleEditProfile} />
          ) : (
            <div>
              <Button text="Save" variant="action" icon={<IconEdit />} onClick={handleSaveProfile} />
              <Button text="Cancel" variant="utility" onClick={() => setEditing(false)} />
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default ProfilePage;
