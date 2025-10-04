import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Container,
  Card,
  Spinner,
  Alert,
  Button,
  Row,
  Col,
} from 'react-bootstrap';
import type { User } from '../models/User';
import type { Post } from '../models/Post';
import { UserApiService } from '../services/UserApiService';
import './UserDetail.css';

const UserDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const userApiService: UserApiService = new UserApiService();

  useEffect((): void => {
    if (id) {
      fetchUserDetail(parseInt(id, 10));
      fetchUserPosts(parseInt(id, 10));
    }
  }, [id]);

  const fetchUserDetail = async (userId: number): Promise<void> => {
    try {
      const data: User = await userApiService.getOneById(userId);
      setUser(data);
    } catch (err) {
      setError('Failed to fetch user details.');
      console.error(err);
    }
  };

  const fetchUserPosts = async (userId: number): Promise<void> => {
    try {
      setLoading(true);
      const data: Post[] = await userApiService.getUserPosts(userId);
      setPosts(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch user posts.');
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

  if (error || !user) {
    return (
      <Container className='mt-3'>
        <Alert variant='danger'>{error || 'User not found'}</Alert>
        <Link
          to='/users'
          className='btn btn-primary'>
          Back to Users
        </Link>
      </Container>
    );
  }

  return (
    <Container className='user-detail-container'>
      <Button
        as={Link}
        to='/users'
        variant='outline-secondary'
        className='back-button mb-3'>
        ← Back to Users
      </Button>

      <Card className='user-detail-card mb-4'>
        <Card.Body>
          <h3 className='user-detail-name'>{user.name}</h3>
          <p className='user-detail-username'>@{user.username}</p>

          <Row className='mt-4'>
            <Col md={6}>
              <div className='info-section'>
                <h6 className='info-title'>Contact Information</h6>
                <p className='info-item'>
                  <strong>Email:</strong> {user.email}
                </p>
                <p className='info-item'>
                  <strong>Phone:</strong> {user.phone}
                </p>
                <p className='info-item'>
                  <strong>Website:</strong> {user.website}
                </p>
              </div>
            </Col>

            <Col md={6}>
              <div className='info-section'>
                <h6 className='info-title'>Address</h6>
                <p className='info-item'>
                  {user.address.street}, {user.address.suite}
                  <br />
                  {user.address.city}, {user.address.zipcode}
                </p>
                <p className='info-item'>
                  <strong>Geo:</strong> Lat {user.address.geo.lat}, Lng{' '}
                  {user.address.geo.lng}
                </p>
              </div>
            </Col>
          </Row>

          <div className='info-section mt-3'>
            <h6 className='info-title'>Company</h6>
            <p className='info-item'>
              <strong>Name:</strong> {user.company.name}
            </p>
            <p className='info-item'>
              <strong>Catch Phrase:</strong> {user.company.catchPhrase}
            </p>
            <p className='info-item'>
              <strong>BS:</strong> {user.company.bs}
            </p>
          </div>
        </Card.Body>
      </Card>

      <h4 className='section-title'>User Posts</h4>
      <div className='posts-wrapper'>
        {posts.length > 0 ? (
          posts.map((post: Post) => (
            <Card
              key={post.id}
              className='user-post-card mb-3'>
              <Card.Body>
                <Card.Title className='user-post-title'>
                  {post.title}
                </Card.Title>
                <Card.Text className='user-post-excerpt'>
                  {post.body.substring(0, 100)}...
                </Card.Text>
                <Button
                  as={Link}
                  to={`/posts/${post.id}`}
                  variant='primary'
                  size='sm'>
                  View Post
                </Button>
              </Card.Body>
            </Card>
          ))
        ) : (
          <Card>
            <Card.Body>No posts yet.</Card.Body>
          </Card>
        )}
      </div>
    </Container>
  );
};

export default UserDetail;
