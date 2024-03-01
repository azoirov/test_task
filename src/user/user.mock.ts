import { UserRole } from './user.enum';
import { UserDto } from './user.dto';

export const USERS: UserDto[] = [
  {
    id: 1,
    role: UserRole.Admin,
    username: 'admin_user',
    password: '123',
  },
  {
    id: 2,
    role: UserRole.Normal,
    username: 'normal_user',
    password: '123',
  },
  {
    id: 3,
    role: UserRole.Limited,
    username: 'limited_user',
    password: '123',
  },
];
