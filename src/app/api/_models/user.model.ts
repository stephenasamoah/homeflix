import { BaseModel } from './base.model';

export interface User extends BaseModel {
  full_name?: string;
  email?: string;
  password?: string;
}
