import { useRoutes } from 'react-router-dom';
import { Counter } from '../../pages/Counter';
import { Stacking } from '../Stacking';
import { Duration } from '../Duration';

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
    {
      path: '/duration',
      element: <Duration />,
    },
  ]);

  return routes;
}

export { AppRoutes };
