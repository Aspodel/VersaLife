import { RouteObject } from 'react-router-dom';
import AppLayout from 'src/components/Layouts/AppLayout';
import Edify from 'src/pages/Edify';
import Listening from 'src/pages/Edify/Listening';
import Vocabulary from 'src/pages/Edify/Vocabulary';
import Writing from 'src/pages/Edify/Writing';
import Home from 'src/pages/Home';

export const routePaths = {
  root: '/',
  home: 'home',

  // EDIFY
  edify: 'edify',
  vocabulary: 'vocabulary',
  quiz: 'quiz',
  idioms: 'idioms',
  listening: 'listening',
  writing: 'writing',

  //NOSTALGIA
  nostalgia: 'nostalgia',
};

const routes: RouteObject[] = [
  {
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: routePaths.home,
        element: <Home />,
      },
      // EDIFY
      {
        path: routePaths.edify,
        children: [
          {
            index: true,
            element: <Edify />,
          },
          {
            path: routePaths.vocabulary,
            element: <Vocabulary />,
          },
          {
            path: routePaths.quiz,
            element: <Edify />,
          },
          {
            path: routePaths.idioms,
            element: <Edify />,
          },
          {
            path: routePaths.listening,
            element: <Listening />,
          },
          {
            path: routePaths.writing,
            element: <Writing />,
          },
        ],
      },
      // NOSTALGIA
      {
        path: routePaths.nostalgia,
        element: <Edify />,
      },
    ],
  },
];

export default routes;
