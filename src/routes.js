import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import BlogPage from './pages/BlogPage';
import UserPage from './pages/CustomersPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import ProductsPage from './pages/ProductsPage';
import DashboardAppPage from './pages/DashboardAppPage';
import AddCustomers from './pages/AddCustomers';
import CustomerDetails from './pages/CustomerDetails';
import ProfilePage from './pages/ProfilePage';
import Collection from './pages/Collection';
import CompaniesContent from './components/Companies/CompaniesContent';
import Companies from './pages/Companies';
import Reports from './pages/Reports';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'user', element: <UserPage /> },
        { path: 'add-customer', element: <AddCustomers /> },
        { path: 'customer-details', element: <CustomerDetails /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
        { path: 'profile', element: <ProfilePage /> },
        { path: 'collection', element: <Collection /> },
        { path: 'companies', element: <Companies /> },
        { path: 'reports', element: <Reports /> }
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },

  ]);

  return routes;
}
