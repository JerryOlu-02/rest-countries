import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CountryPage from './pages/CountryPage';
import Homepage from './pages/HomePage';
import './sass/main.scss';

const router = createBrowserRouter([
  { path: '/', element: <Homepage /> },
  {
    path: '/countries/:countryId',
    element: <CountryPage />,
  },
]);

const App = function () {
  return <RouterProvider router={router} />;
};

export default App;
