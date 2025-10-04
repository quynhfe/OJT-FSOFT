import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Card, Spinner, Alert, Button } from 'react-bootstrap';
import type { Post } from '../models/Post';
import type { Comment } from '../models/Comment';
import { PostApiService } from '../services/PostApiService';
import './PostDetail.css';

const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const postApiService: PostApiService = new PostApiService();

  useEffect((): void => {
    if (id) {
      fetchPostDetail(parseInt(id, 10));
      fetchPostComments(parseInt(id, 10));
    }
  }, [id]);

  const fetchPostDetail = async (postId: number): Promise<void> => {
    try {
      const data: Post = await postApiService.getOneById(postId);
      setPost(data);
    } catch (err) {
      setError('Failed to fetch post details.');
      console.error(err);
    }
  };

  const fetchPostComments = async (postId: number): Promise<void> => {
    try {
      setLoading(true);
      const data: Comment[] = await postApiService.getPostComments(postId);
      setComments(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch comments.');
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

  if (error || !post) {
    return (
      <Container className='mt-3'>
        <Alert variant='danger'>{error || 'Post not found'}</Alert>
        <Link
          to='/posts'
          className='btn btn-primary'>
          Back to Posts
        </Link>
      </Container>
    );
  }

  return (
    <Container className='post-detail-container'>
      <Button
        as={Link}
        to='/posts'
        variant='outline-secondary'
        className='back-button mb-3'>
        ← Back to Posts
      </Button>

      <Card className='post-detail-card mb-4'>
        <Card.Body>
          <Card.Title className='post-detail-title'>{post.title}</Card.Title>
          <Card.Text className='post-detail-author'>
            Author: <Link to={`/users/${post.userId}`}>Leanne Graham</Link>
          </Card.Text>
          <Card.Text className='post-detail-body'>{post.body}</Card.Text>
        </Card.Body>
      </Card>

      <h4 className='comments-title'>Comments ({comments.length})</h4>
      <div className='comments-wrapper'>
        {comments.length > 0 ? (
          comments.map((comment: Comment) => (
            <Card
              key={comment.id}
              className='comment-card mb-3'>
              <Card.Body>
                <h6 className='comment-name'>{comment.name}</h6>
                <small className='comment-email'>{comment.email}</small>
                <p className='comment-body mt-2'>{comment.body}</p>
              </Card.Body>
            </Card>
          ))
        ) : (
          <Card>
            <Card.Body>No comments yet.</Card.Body>
          </Card>
        )}
      </div>
    </Container>
  );
};

export default PostDetail;
