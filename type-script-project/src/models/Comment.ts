import type { BaseModel } from './BaseModel';

export interface Comment extends BaseModel {
  postId: number;
  name: string;
  email: string;
  body: string;
}
