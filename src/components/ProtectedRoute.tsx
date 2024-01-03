import { ReactNode } from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = ({
  children,
  redirect = '/login',
}: {
  children?: ReactNode;
  redirect?: string;
}) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to={redirect} replace />;
  }

  return children ? children : <Outlet />;
};
