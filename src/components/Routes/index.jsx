import { useRoutes } from 'react-router-dom';
import { Counter } from '../Counter';
import { Stacking } from '../Stacking';
import { Duration } from '../Duration';

function AppRoutes() {
  let routes = useRoutes([
    {
      path: '/',
      element: <Stacking />,
    },
    {
      path: '/stacking',
      element: <Counter />,
    },
    {
      path: '/duration',
      element: <Duration />,
    },
  ]);

  return routes;
}

export { AppRoutes };
