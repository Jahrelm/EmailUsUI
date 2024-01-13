import React, { useState } from 'react';
import { Container, Header, Button, Grid, Segment, Form, Input, Icon, Divider } from 'semantic-ui-react';

const Welcome = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Container fluid style={{ marginTop: '50px', backgroundColor: '#2c3e50', height: '100vh', display: 'flex', alignItems: 'center' }}>
      <Grid columns={2} centered verticalAlign="middle" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Grid.Column textAlign="center">
          <Segment raised style={{ background: 'rgba(255, 255, 255, 0.9)', padding: '60px', borderRadius: '25px' }}>
            <Header as="h1" textAlign="center" style={{ color: '#2c3e50', fontSize: '3em', marginBottom: '20px' }}>
              Welcome to Email Sender App
            </Header>
            <Icon name="envelope" size="massive" style={{ color: '#2c3e50' }} />
            <Divider hidden />
            <Header as="h3" textAlign="center" style={{ color: '#7f8c8d' }}>
              Send emails with ease and stay connected!
            </Header>
            <Button.Group size="huge" style={{ marginTop: '40px' }}>
              <Button color="blue" onClick={handleToggleForm}>
                {isLogin ? 'Log In' : 'Sign Up'}
              </Button>
            </Button.Group>
          </Segment>
        </Grid.Column>

        <Grid.Column textAlign="center">
          <Segment raised style={{ background: '#ecf0f1', padding: '60px', borderRadius: '25px' }}>
            <Header as="h2" textAlign="center" style={{ color: '#2c3e50', fontSize: '2.5em', marginBottom: '20px' }}>
              {isLogin ? 'Log In' : 'Sign Up'}
            </Header>
            <Form size="large">
              <Form.Field>
                <Input icon="mail" iconPosition="left" placeholder="Email" />
              </Form.Field>
              <Form.Field>
                <Input icon="lock" iconPosition="left" type="password" placeholder="Password" />
              </Form.Field>
              {!isLogin && (
                <Form.Field>
                  <Input
                    icon="lock"
                    iconPosition="left"
                    type="password"
                    placeholder="Confirm Password"
                  />
                </Form.Field>
              )}
              <Button color={isLogin ? 'blue' : 'green'} fluid size="huge">
                {isLogin ? 'Log In' : 'Sign Up'}
              </Button>
            </Form>
            <Segment secondary style={{ marginTop: '30px', color: '#7f8c8d', fontSize: '1.2em' }}>
              {isLogin ? 'New to Email Sender App? Sign up now!' : 'Already have an account? Log in!'}
              <Button basic compact onClick={handleToggleForm} style={{ fontSize: '1em' }}>
                {isLogin ? 'Sign Up' : 'Log In'}
              </Button>
            </Segment>
          </Segment>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default Welcome;
