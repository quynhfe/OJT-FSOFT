import type { AxiosResponse } from 'axios';
import type { User } from '../models/User';
import type { Post } from '../models/Post';
import type { ApiService } from './ApiService';
import { userApi } from './axiosInstances';

export class UserApiService implements ApiService<User> {
  async getAll(): Promise<User[]> {
    const response: AxiosResponse<User[]> = await userApi.get<User[]>('');
    return response.data;
  }

  async getOneById(id: number): Promise<User> {
    const response: AxiosResponse<User> = await userApi.get<User>(`/${id}`);
    return response.data;
  }

  async getUserPosts(userId: number): Promise<Post[]> {
    const response: AxiosResponse<Post[]> = await userApi.get<Post[]>(
      `/${userId}/posts`,
    );
    return response.data;
  }
}
