import App from './App';
import Playground from './components/Playground';

const routes = [
	{
		path: '/',
		element: <App />,
	},

	{
		path: '/:playgroundName',
		element: <Playground />,
	},
];

export default routes;
