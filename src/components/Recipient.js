import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Grid, Header, Segment, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Recipient = () => {
  const [recipients, setRecipients] = useState([]);

  useEffect(() => {
    const fetchRecipients = async () => {
      try {
        const response = await axios.get('https://localhost:7037/api/Recipient/GetAllRecipients');
        setRecipients(response.data);
      } catch (error) {
        console.error('Error fetching recipients:', error);
      }
    };

    fetchRecipients();
  }, []);


  return (
    <Grid centered>
      <Grid.Column style={{ maxWidth: 800, marginTop: 20 }}>
        <Header as="h2" textAlign="center" style={{color :'#2c3e50'}}>
          Recipient List
        </Header>
        <Button
            as={Link}
            to="/CreateRecipient"

            style={{background :'#2c3e50', color:'white'}}
            icon labelPosition="left"
            onClick={() => {
            // Implement navigation or modal for adding a recipient
            console.log('Navigate or show add recipient modal');
          }}
        >
          <Icon name="add user" />
          Add Recipient
        </Button>
        <Segment>
          <Card.Group itemsPerRow={2}>
            {recipients.map((recipient) => (
              <Card key={recipient.id} fluid>
                <Card.Content>
                  <Card.Header>Now : {recipient.firstname}</Card.Header>
                  <Card.Meta>Email: {recipient.emailaddress}</Card.Meta>
                  <Card.Description>
                    <strong>Phone Number:</strong> {recipient.phoneNumber}
                    <br />
                    <strong>Group:</strong> {recipient.groupID}
                    <br/>
                    <strong>First-Name:{recipient.firstname}</strong>
                  </Card.Description>
                </Card.Content>
              </Card>
            ))}
          </Card.Group>
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

export default Recipient;
