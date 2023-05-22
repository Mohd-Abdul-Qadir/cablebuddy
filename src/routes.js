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
import AddProduct from './pages/AddProduct';
import Details from './pages/Details';
import AgentDetails from './pages/AgentDetails';
import Collection from './pages/Collection';
import Companies from './pages/Companies';
import Reports from './pages/Reports';
import Complaints from './pages/Complaints';
import SmsWallet from './pages/SmsWallet';
import Expenses from './pages/Expenses';
// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        // { element: <Navigate to="/" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'user', element: <UserPage /> },
        { path: 'add-customer', element: <AddCustomers /> },
        { path: 'customer-details', element: <CustomerDetails /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'add-product', element: <AddProduct /> },
        { path: 'details/:id', element: <Details /> },
        { path: 'blog', element: <BlogPage /> },
        { path: 'profile', element: <ProfilePage /> },
        { path: 'collection', element: <Collection /> },
        { path: 'companies', element: <Companies /> },
        { path: 'reports', element: <Reports /> },
        { path: 'agent-details/:id', element: <AgentDetails /> },
        { path: 'complaints', element: <Complaints /> },
        { path: 'smswallet', element: <SmsWallet /> },
        { path: 'expenses', element: <Expenses /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/login" />, index: true },
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
