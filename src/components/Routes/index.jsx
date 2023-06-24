import { useRoutes } from 'react-router-dom';
import { Game } from '../../pages/Game';

function AppRoutes() {
  let routes = useRoutes([
    {
      path: '/',
      element: <Game />,
    },
  ]);

  return routes;
}

export { AppRoutes };
