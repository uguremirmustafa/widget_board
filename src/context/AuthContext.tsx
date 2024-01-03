import { createContext, useContext, ReactNode, useEffect } from 'react';
import { User } from '../types';
import { DUMMY_USER, registerUser, useGetUser } from '../lib/api/users';
import { getLocalUser, storeUser } from '../lib/axios';
import { useNavigate } from 'react-router-dom';
import { UseMutateFunction, useMutation } from 'react-query';

interface InitialValues {
  user: User;
  register: UseMutateFunction<User, unknown, string, unknown>;
}

const initialUser = getLocalUser();

const initialValues: InitialValues = {
  user: initialUser ? { ...DUMMY_USER, username: initialUser } : DUMMY_USER,
  register: (p: string) => {
    console.log(p);
  },
};

const Context = createContext<InitialValues>(initialValues);

interface IProps {
  children: ReactNode;
}

export const AuthWrapper = (props: IProps) => {
  const { children } = props;
  const navigate = useNavigate();
  const { data: user, isLoading, refetch } = useGetUser({ initialUser: initialValues.user });

  const { mutate: register } = useMutation({
    mutationFn: registerUser,
    onSuccess: (user) => {
      storeUser(user.username);
      refetch();
    },
  });

  useEffect(() => {
    if (!initialValues.user.username) {
      navigate('/login');
    }
  }, [navigate]);

  if (isLoading) {
    return <>loading</>;
  }

  return (
    <Context.Provider value={{ user: user ?? DUMMY_USER, register }}>{children}</Context.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(Context);

  return context;
};
