import { User } from '../entity/user.entity';

export const dummyUser: User[] = [
  {
    id: 1,
    nama: 'John Doe',
    email: 'john@example.com',
    password: 'ngops',
    umur: 30,
    tanggal_lahir: '1994-05-15',
    status: true,
  },
  {
    id: 2,
    nama: 'Jane Doe',
    email: 'jane@example.com',
    password: 'ngops',
    umur: 28,
    tanggal_lahir: '1996-10-20',
    status: false,
  },
  {
    id: 3,
    nama: 'Alice Smith',
    email: 'alice@example.com',
    password: 'ngops',
    umur: 25,
    tanggal_lahir: '1999-02-28',
    status: true,
  },
];
