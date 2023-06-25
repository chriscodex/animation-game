import { useRoutes } from 'react-router-dom';
import { Counter } from '../../pages/Counter';
import { Stacking } from '../Stacking';

function AppRoutes() {
  let routes = useRoutes([
    {
      path: '/',
      element: <Counter />,
    },
    {
      path: '/stacking',
      element: <Stacking />,
    },
  ]);

  return routes;
}

export { AppRoutes };
