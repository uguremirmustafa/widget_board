import { useQuery } from 'react-query';
import { User } from '../../types';
import axios from '../axios';

export const DUMMY_USER = {
  created_at: '',
  updated_at: '',
  id: '',
  username: '',
};

export const registerUser = async (username: string) => {
  const res = await axios.post<User>('users', { username });
  return res.data;
};
const getUser = async () => {
  const res = await axios.get<User>('users');
  return res.data ?? DUMMY_USER;
};

type IParams = {
  initialUser: User;
};

export const useGetUser = (params: IParams) => {
  return useQuery({
    queryFn: getUser,
    queryKey: 'get-user',
    initialData: params.initialUser,
    enabled: !!params.initialUser.username,
  });
};
