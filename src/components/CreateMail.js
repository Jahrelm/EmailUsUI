import React, { useState } from 'react';
import axios from 'axios';
import { Form, Input, TextArea, Button, Grid, Header as FormHeader, Segment} from 'semantic-ui-react';

const CreateMail = () => {
  const [postData, setPostData] = useState({
    to: '',
    from: '',
    cc: '',
    subject: '',
    body: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPostData({
      ...postData,
      [name]: value,
    });
  };

  const handlePostRequest = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://localhost:7037/api/Mail', postData);
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <Grid centered>
        <Grid.Column style={{maxWidth:550,marginTop: 20}}>
          <FormHeader>Send Email</FormHeader>
          <Segment>
            <Form onSubmit={handlePostRequest}>
              <Form.Field>
                <label>To:</label>
                <Input type="text" name="to" value={postData.to} onChange={handleInputChange}/>
              </Form.Field>
              <Form.Field>
                <label>From:</label>
                <Input type="text" name="from" value={postData.from} onChange={handleInputChange} />
              </Form.Field>
              <Form.Field>
                <label>Cc:</label>
                <Input type="text" name="cc" value={postData.cc} onChange={handleInputChange} />
              </Form.Field>
              <Form.Field>
                <label>Subject:</label>
                <Input type="text" name="subject" value={postData.subject} onChange={handleInputChange}  />
              </Form.Field>
              <Form.Field>
                <label>Body:</label>
                <TextArea name="body" value={postData.body} onChange={handleInputChange}  />
              </Form.Field>
              <Button type="submit" style={{maxWidth:550}}>Send Email</Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default CreateMail;
