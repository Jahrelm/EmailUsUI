import React, { useState } from 'react';
import axios from 'axios';
import {
  Form,
  Input,
  Grid,
  Button,
  Header as RecipientHeader,
  Segment,
  Checkbox,
  Dropdown,
} from 'semantic-ui-react';

const CreateRecipient = () => {
  const [recipientData, setRecipientData] = useState({
    emailaddress: '',
    firstname: '',
    lastname: '',
    phoneNumber: '',
    isActive: true,
    isOptedIn: true,
    groupID: 0,
    createdAt: '',
    updatedAt: '',
  });

  const recipientInput = (e) => {
    const { name, value } = e.target;
    setRecipientData({
      ...recipientData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e,{name, checked}) => {
    setRecipientData({
      ...recipientData,
      [name]: checked,
    });
  };

  const handleDropdownChange = (e, { name, value }) => {
    setRecipientData({
      ...recipientData,
      [name]: value,
    });
  };
  
 
  const postRecipientRequest = async (e) => {
    e.preventDefault();
    try {
      const recipientResponse = await axios.post(
        'https://localhost:7037/api/Recipient',
        recipientData
      );
      console.log('Response:', recipientResponse.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const options = [
    { key: 1, text: '1', value: 1 },
    { key: 2, text: '2', value: 2 },
  ];

  return (
    <div>
      <Grid centered>
        <Grid.Column style={{ maxWidth: 550, marginTop: 20 }}>
          <RecipientHeader>Create Recipient</RecipientHeader>
          <Segment>
            <Form onSubmit={postRecipientRequest}>
              <Form.Field>
                <label>Email Address</label>
                <Input
                  type="text"
                  name="emailaddress"
                  value={recipientData.emailaddress}
                  onChange={recipientInput}
                />
              </Form.Field>
              <Form.Field>
                <label>First Name</label>
                <Input
                  type="text"
                  name="firstname"
                  value={recipientData.firstname}
                  onChange={recipientInput}
                />
              </Form.Field>
              <Form.Field>
                <label>Last Name</label>
                <Input
                  type="text"
                  name="lastname"
                  value={recipientData.lastname}
                  onChange={recipientInput}
                />
              </Form.Field>
              <Form.Field>
                <label>Phone Number</label>
                <Input
                  type="text"
                  name="phoneNumber"
                  value={recipientData.phoneNumber}
                  onChange={recipientInput}
                />
              </Form.Field>
              <Form.Field>
                  <Checkbox
                    label="Active"
                    name="isActive"
                    checked={recipientData.isActive}
                    onChange={handleCheckboxChange}
                  />
                </Form.Field>
                <Form.Field>
                  <Checkbox
                    label="Opted In"
                    name="isOptedIn"
                    checked={recipientData.isOptedIn}
                    onChange={handleCheckboxChange}
                  />
                </Form.Field>

              <Form.Field>
                <label>Group</label>
                <Dropdown
                  selection
                  name="groupID"
                  options={options}
                  value={recipientData.groupID}
                  onChange={handleDropdownChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Created At</label>
                <Input
                  type="datetime-local"
                  name="createdAt"
                  value={recipientData.createdAt}
                  onChange={recipientInput}
                />
              </Form.Field>
              <Form.Field>
                <label>Updated At</label>
                <Input
                  type="datetime-local"
                  name="updatedAt"
                  value={recipientData.updatedAt}
                  onChange={recipientInput}
                />
              </Form.Field>
              <Button type="submit">Submit</Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default CreateRecipient;
