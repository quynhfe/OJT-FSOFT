import React, { useEffect, useState } from 'react';
import { Container, Card, Spinner, Alert, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import type { User } from '../models/User';
import { UserApiService } from '../services/UserApiService';
import './UserList.css';

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const userApiService: UserApiService = new UserApiService();

  useEffect((): void => {
    fetchUserList();
  }, []);

  const fetchUserList = async (): Promise<void> => {
    try {
      setLoading(true);
      const data: User[] = await userApiService.getAll();
      setUsers(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch users. Please try again later.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Container className='text-center mt-5'>
        <Spinner
          animation='border'
          role='status'
          variant='primary'>
          <span className='visually-hidden'>Loading...</span>
        </Spinner>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className='mt-3'>
        <Alert variant='danger'>{error}</Alert>
      </Container>
    );
  }

  return (
    <Container className='user-list-container'>
      <h2 className='page-title'>Users</h2>
      <div className='users-wrapper'>
        {users.map((user: User) => (
          <Card
            key={user.id}
            className='user-card mb-3'>
            <Card.Body>
              <Card.Title className='user-card-name'>{user.name}</Card.Title>
              <Card.Subtitle className='user-card-username mb-3'>
                @{user.username}
              </Card.Subtitle>
              <div className='user-card-info'>
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
                <p>
                  <strong>Company:</strong> {user.company.name}
                </p>
              </div>
              <Button
                as={Link}
                to={`/users/${user.id}`}
                variant='primary'
                size='sm'>
                View Details
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default UserList;
