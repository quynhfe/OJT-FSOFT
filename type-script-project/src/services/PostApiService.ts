import type { AxiosResponse } from 'axios';
import type { Post } from '../models/Post';
import type { Comment } from '../models/Comment';
import type { ApiService } from './ApiService';
import { postApi } from './axiosInstances';

export class PostApiService implements ApiService<Post> {
  async getAll(): Promise<Post[]> {
    const response: AxiosResponse<Post[]> = await postApi.get<Post[]>('');
    return response.data;
  }

  async getOneById(id: number): Promise<Post> {
    const response: AxiosResponse<Post> = await postApi.get<Post>(`/${id}`);
    return response.data;
  }

  async getPostComments(postId: number): Promise<Comment[]> {
    const response: AxiosResponse<Comment[]> = await postApi.get<Comment[]>(
      `/${postId}/comments`,
    );
    return response.data;
  }
}
