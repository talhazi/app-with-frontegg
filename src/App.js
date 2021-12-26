import React from 'react';
import { useAuth, AdminPortal, useAuthActions } from '@frontegg/react'
import { Row, Card, Button, Dropdown } from 'react-bootstrap';


function App() {
  const { user, isAuthenticated } = useAuth();
  const { switchTenant } = useAuthActions();

  const handleClick = () => {
    AdminPortal.show();
  };

  const handleSwitchTenant = (id) => {
    switchTenant({ tenantId: id });
  };

  return (
    <div className='App '>
      {isAuthenticated && (
        <Row style={{ marginTop: '2%' }} className="justify-content-md-center">
          <Card className="text-center" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={user.profilePictureUrl} />
            <Card.Body>
              <Card.Title class="text-secondary" style={{ marginBottom: '6%' }}>Logged in as: <h5 class="font-weight-bold text-dark">{user.name}</h5></Card.Title>
              
              <Dropdown style={{ marginBottom: '4%' }}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">My Tenants</Dropdown.Toggle>
                <Dropdown.Menu>
                {user.tenantIds.map(tenantId => {
                  return (
                    <Dropdown.Item onClick={() => handleSwitchTenant(tenantId)}>{tenantId}</Dropdown.Item>
                  )
                })}
                </Dropdown.Menu>
              </Dropdown>

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