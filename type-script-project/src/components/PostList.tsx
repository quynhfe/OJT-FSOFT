import React, { useEffect, useState } from 'react';
import { Container, Card, Spinner, Alert, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import type { Post } from '../models/Post';
import { PostApiService } from '../services/PostApiService';
import './PostList.css';

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const postApiService: PostApiService = new PostApiService();

  useEffect((): void => {
    fetchPostList();
  }, []);

  const fetchPostList = async (): Promise<void> => {
    try {
      setLoading(true);
      const data: Post[] = await postApiService.getAll();
      setPosts(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch posts. Please try again later.');
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
    <Container className='post-list-container'>
      <h2 className='page-title'>Posts</h2>
      <div className='posts-wrapper'>
        {posts.map((post: Post) => (
          <Card
            key={post.id}
            className='post-card mb-3'>
            <Card.Body>
              <Card.Title className='post-card-title'>{post.title}</Card.Title>
              <Card.Text className='post-card-author'>
                Author: Leanne Graham
              </Card.Text>
              <Card.Text className='post-card-excerpt'>
                {post.body.substring(0, 100)}...
              </Card.Text>
              <div className='post-card-actions'>
                <Button
                  as={Link}
                  to={`/posts/${post.id}`}
                  variant='primary'
                  size='sm'
                  className='me-2'>
                  View
                </Button>
                <Button
                  variant='secondary'
                  size='sm'>
                  Edit
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default PostList;
