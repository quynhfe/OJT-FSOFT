import type { BaseModel } from './BaseModel';

export interface Post extends BaseModel {
  userId: number;
  title: string;
  body: string;
}
