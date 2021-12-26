import React from 'react';
import { useAuth } from '@frontegg/react'
import { AdminPortal } from '@frontegg/react'
import { Row, Card, Button } from 'react-bootstrap';


const handleClick = () => {
  AdminPortal.show();
};


function App() {
  const { user, isAuthenticated } = useAuth();

  return (
    <div className='App '>
      {isAuthenticated && (
        <Row style={{ marginTop: '2%' }} className="justify-content-md-center">
          <Card className="text-center" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={user.profilePictureUrl} />
            <Card.Body>
              <Card.Title class="text-secondary" style={{ marginBottom: '6%' }}>Logged in as: <h5 class="font-weight-bold text-dark">{user.name}</h5></Card.Title>
              <Button style={{ marginRight: '4%' }} variant="primary" onClick={handleClick}>Settings</Button>
              <Button class='nav-btn' href="/account/logout" variant='danger'>Logout</Button>
            </Card.Body>
          </Card>
        </Row>
      )}
    </div>
  );
}

export default App;