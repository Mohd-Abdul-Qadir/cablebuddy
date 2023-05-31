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
import AddCustomers from './components/Customer/AddCustomers';
import CustomerDetails from './components/Customer/CustomerDetails';
import ProfilePage from './pages/ProfilePage';
import AddProduct from './components/Product/AddProduct';
import Details from './components/Product/Details';
import AgentDetails from './components/Agent/AgentDetails';
import Collection from './pages/Collection';
import Companies from './pages/Companies';
import Reports from './pages/Reports';
import Complaints from './pages/Complaints';
import SmsWallet from './pages/SmsWallet';
import Expenses from './pages/Expenses';
import RechargeRenew from './pages/RechargeRenew';
import LandingPage from './pages/LandingPage';
import Dashboard from './components/Agent/AgentDashboard/Dashboard';
// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/home',
      element: <LandingPage />,
    },
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        // { element: <Navigate to="/" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'customer', element: <UserPage /> },
        { path: 'add-customer', element: <AddCustomers /> },
        { path: 'customer-details/:id', element: <CustomerDetails /> },
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
        { path: 'rechargeRenew', element: <RechargeRenew /> },
        { path: 'agent-dashboard', element: <Dashboard /> },
      ],
    },

    // {
    //   path: '/agent',
    //   element: <DashboardLayout />,
    //   children: [
    //     { path: 'app', element: <DashboardAppPage /> },
    //     { path: 'customer', element: <UserPage /> },
    //     { path: 'add-customer', element: <AddCustomers /> },
    //     { path: 'customer-details/:id', element: <CustomerDetails /> },
    //     { path: 'products', element: <ProductsPage /> },
    //     { path: 'add-product', element: <AddProduct /> },
    //     { path: 'details/:id', element: <Details /> },
    //     { path: 'blog', element: <BlogPage /> },
    //     { path: 'profile', element: <ProfilePage /> },
    //     { path: 'collection', element: <Collection /> },
    //     { path: 'companies', element: <Companies /> },
    //     { path: 'reports', element: <Reports /> },
    //     { path: 'agent-details/:id', element: <AgentDetails /> },
    //     { path: 'complaints', element: <Complaints /> },
    //     { path: 'smswallet', element: <SmsWallet /> },
    //     { path: 'expenses', element: <Expenses /> },
    //     { path: 'rechargeRenew', element: <RechargeRenew /> },
    //     { path: 'agent-dashboard', element: <Dashboard /> },
    //   ],
    // },
    {
      path: 'login',
      element: <LoginPage value={'1'} />,
    },
    {
      path: 'signup',
      element: <LoginPage value={'2'} />,
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
