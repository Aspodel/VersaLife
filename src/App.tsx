import './App.css';
import routes from './configs/routes';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/authContext';
import { NextUIProvider } from '@nextui-org/react';

function App() {
  const router = createBrowserRouter(routes);

  return (
    <AuthProvider>
      <NextUIProvider>
        <RouterProvider router={router} />
      </NextUIProvider>
    </AuthProvider>
  );
}

export default App;
