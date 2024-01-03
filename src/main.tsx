import './assets/styles.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { AuthWrapper } from './context/AuthContext.tsx';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { ThemeWrapper } from './components/theme/ThemeWrapper.tsx';
import { Toaster } from 'react-hot-toast';
import { ModalProvider } from './context/ModalContext.tsx';
import ModalManager from './components/modal/ModalManager.tsx';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AuthWrapper>
          <ThemeWrapper>
            <ModalProvider>
              <Toaster
                position="top-right"
                toastOptions={{
                  className: 'toast',
                  success: {
                    className: 'success-toast',
                  },
                  error: {
                    className: 'error-toast',
                  },
                }}
              />
              <ModalManager />
              <App />
            </ModalProvider>
          </ThemeWrapper>
        </AuthWrapper>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
