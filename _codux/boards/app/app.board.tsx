import { createBoard } from '@wixc3/react-board';
import { createRemixStub } from '@remix-run/testing';
import App from 'app/root';
import HomePage from 'app/routes/_index/route';
import AboutPage from 'app/routes/about/route';

const BASE = '/sliencio';

const AppWrapper = createRemixStub([
  {
    Component: () => {
      return <App />;
    },
    children: [
      {
        path: `${BASE}/`,
        Component: HomePage,
      },
      {
        path: `${BASE}/about`,
        Component: AboutPage,
      },
    ],
  },
]);

export default createBoard({
    name: 'App',
    Board: () => <AppWrapper />,
});
