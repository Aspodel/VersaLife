import { RouteObject } from 'react-router-dom';
import AppLayout from 'src/components/Layouts/AppLayout';
import Edify from 'src/pages/Edify';
import HomePage from 'src/pages/Home';

export const routePaths = {
  root: '/',
  home: 'home',
  edify: 'edify',
  nostalgia: 'nostalgia',
};

const routes: RouteObject[] = [
  {
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: routePaths.home,
        element: <HomePage />,
      },
      {
        path: routePaths.edify,
        element: <Edify />,
      },
      {
        path: routePaths.nostalgia,
        element: <Edify />,
      },
    ],
  },
];

export default routes;
