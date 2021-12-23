import React from 'react';
import { useAuth } from '@frontegg/react'
import { AdminPortal } from '@frontegg/react'
import { Card, Button } from 'react-bootstrap';


const handleClick = () => {
  AdminPortal.show();
};


function App() {
  const { user, isAuthenticated } = useAuth();

  return (
    <div className='App'>
      {isAuthenticated && (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={user.profilePictureUrl} />
          <Card.Body>
            <Card.Title>{user.name}</Card.Title>
            <Button variant="primary" onClick={handleClick}>Settings</Button>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}

export default App;