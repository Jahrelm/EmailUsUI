import React, { useState, useEffect } from 'react';
import { Sidebar, Menu, Icon, Input, Grid, Card, Header } from 'semantic-ui-react';
import axios from 'axios';

 
const Mail = () => {
  const [mails, setMails] = useState([]);
  const [visible] = useState(true);
  const [activeItem, setActiveItem] = useState('inbox');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://localhost:7037/api/Mail/GetAllMails');
        setMails(response.data);
      } catch (error) {
        console.error('Error fetching mails:', error);
      }
    };  

    fetchData();
  }, []);

  const handleItemClick = (name) => setActiveItem(name);

  const filteredMails = mails.filter((mail) =>
    mail.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Grid columns={2} divided style={{ height: '100vh', margin: 0 }}>
      <Grid.Column width={3} style={{ backgroundColor: '#2c3e50', padding: '1em', color: 'white' }}>
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          vertical
          visible={visible}
          width="thin"
        >
          <Menu.Item
            name="inbox"
            active={activeItem === 'inbox'}
            onClick={() => handleItemClick('inbox')}
          >
            <Icon name="inbox" />
            Inbox
          </Menu.Item>
          <Menu.Item
            name="sent"
            active={activeItem === 'sent'}
            onClick={() => handleItemClick('sent')}
          >
            <Icon name="send" />
            Sent
          </Menu.Item>
          <Menu.Item
            name="schedule"
            active={activeItem === 'schedule'}
            onClick={() => handleItemClick('schedule')}
          >
            <Icon name="calendar alternate outline" />
            Schedule
          </Menu.Item>
        </Sidebar>
      </Grid.Column>

      <Grid.Column width={13} style={{ padding: '1em', backgroundColor: '#ecf0f1' }}>
        <Input
          icon="search"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ marginBottom: '1em' }}
        />

        <Card.Group>
          {filteredMails.map((mail) => (
            <Card key={mail.id} fluid style={{ marginBottom: '1em', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
              <Card.Content>
                <Header as='h3'>{mail.subject}</Header>
                <Card.Description>{mail.body}</Card.Description>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </Grid.Column>
    </Grid>
  );
};

export default Mail;
