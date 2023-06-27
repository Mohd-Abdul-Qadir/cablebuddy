import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
import DashboardAgent from './layouts/dashboard/DashboardAgent';
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
import AgentCustomer from './components/Agent/AgentCustomer/AgentCustomer';
import AgentAddCustomer from './components/Agent/AgentAddCustomer/AgentAddCustomer';
import AgentCustomerDetails from './components/Agent/AgentCustomerDetails/AgentCustomerDetails';
import AgentProducts from './components/Agent/AgentProducts/AgentProducts';
import AgentAddProduct from './components/Agent/AgentAddProduct.js/AgentAddProduct';
import AgentBlog from './components/Agent/AgentBlog/AgentBlog';
import AgentProfile from './components/Agent/AgentProfile/AgentProfilePage';
import AgentCollection from './components/Agent/AgentCollection/AgentCollection';
import AgentCompanies from './components/Agent/AgentCompanies/AgentCompanies';
import AgentReports from './components/Agent/AgentReports/AgentReports';
import AgentagentDetails from './components/Agent/AgentagentDetails/AgentagentDetails';
import AgentComplaints from './components/Agent/AgentComplaints/AgentComplaints';
import AgentSmsWallet from './components/Agent/AgentSmsWallet/AgentSmsWallet';
import AgentExpenses from './components/Agent/AgentExpenses/AgentExpenses';
import AgentRechargeRenew from './components/Agent/AgentRechargeRenew/AgentRechargeRenew';
import DashboardGym from './layouts/dashboard/DashboardGym';
import GymDashboard from './components/Gym/GymDashboard/GymDashboard';
import GymCustomers from './components/Gym/GymCustomers/GymCustomers';
import GymAddCustomer from './components/Gym/GymCustomers/GymAddCustomer';
import GymCustomerDetails from './components/Gym/GymCustomers/GymCustomerDetails';
import GymProducts from './components/Gym/GymProducts/GymProducts';
import GymAddProducts from './components/Gym/GymProducts/GymAddProducts';
import GymCollectionContent from './components/Gym/GymCollection/GymCollectionContent';
import GymSmsWallet from './components/Gym/GymSmsWallet/GymSmsWallet';
import GymProfilePage from './components/Gym/GymProfile/GymProfilePage';
import GymExpensesContent from './components/Gym/GymExpenses/GymExpensesContent';
import DashboardWater from './layouts/dashboard/DashboardWater';
import WaterDashboard from './components/Water/DashboardHome/WaterDashboard';
import CustomersWater from './components/Water/Customers/CustomersWater';
import AddCustomersWater from './components/Water/Customers/AddCustomersWater';
import CustomerDetailsWater from './components/Water/Customers/CustomerDetailsWater';
import ProductsWater from './components/Water/Products/ProductsWater';
import ProductDetailsWater from './components/Water/Products/ProductDetailsWater';
import AddProductWater from './components/Water/Products/AddProductWater';
import AgentSupervisorWater from './components/Water/AgentSupervisor/AgentSupervisorWater';
import AgentSupervisorDetails from './components/Water/AgentSupervisor/AgentSupervisorDetails';
import CollectionWater from './components/Water/Collection/CollectionWater';
import ReportsContentWater from './components/Water/Reports/ReportsContentWater';
import ComplaintsContentWater from './components/Water/Complaints/ComplaintsContentWater';
import SmsWalletContentWater from './components/Water/SmsWallet/SmsWalletContentWater';
import ExpensesContentWater from './components/Water/Expenses/ExpensesContentWater';

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
        // { path: 'agent-dashboard', element: <Dashboard /> },
      ],
    },

    {
      path: '/agent',
      element: <DashboardAgent />,
      children: [
        { path: 'dashboard', element: <Dashboard /> },
        { path: 'customer', element: <AgentCustomer /> },
        { path: 'addcustomer', element: <AgentAddCustomer /> },
        { path: 'customer-details/:id', element: <AgentCustomerDetails /> },
        { path: 'products', element: <AgentProducts /> },
        { path: 'addproduct', element: <AgentAddProduct /> },
        { path: 'details/:id', element: <AgentDetails /> },
        { path: 'blog', element: <AgentBlog /> },
        { path: 'profile', element: <AgentProfile /> },
        { path: 'collection', element: <AgentCollection /> },
        { path: 'companies', element: <AgentCompanies /> },
        { path: 'reports', element: <AgentReports /> },
        { path: 'details/:id', element: <AgentagentDetails /> },
        { path: 'complaints', element: <AgentComplaints /> },
        { path: 'smswallet', element: <AgentSmsWallet /> },
        { path: 'expenses', element: <AgentExpenses /> },
        { path: 'rechargeRenew', element: <AgentRechargeRenew /> },
      ],
    },

    {
      path: '/gym',
      element: <DashboardGym />,
      children: [
        { path: 'gymdashboard', element: <GymDashboard /> },
        { path: 'customers', element: <GymCustomers /> },
        { path: 'addcustomers', element: <GymAddCustomer /> },
        { path: 'customerdetails', element: <GymCustomerDetails /> },
        { path: 'products', element: <GymProducts /> },
        { path: 'addproducts', element: <GymAddProducts /> },
        { path: 'details/:id', element: <Details /> },
        { path: 'profile', element: <GymProfilePage /> },
        { path: 'collection', element: <GymCollectionContent /> },
        { path: 'companies', element: <Companies /> },
        { path: 'agent-details/:id', element: <AgentDetails /> },
        { path: 'smswallet', element: <GymSmsWallet /> },
        { path: 'expenses', element: <GymExpensesContent /> },
        { path: 'rechargeRenew', element: <RechargeRenew /> },
      ],
    },

    {
      path: '/water',
      element: <DashboardWater />,
      children: [
        { path: 'waterdashboard', element: <WaterDashboard /> },
        { path: 'customers', element: <CustomersWater /> },
        { path: 'addcustomers', element: <AddCustomersWater /> },
        { path: 'customerdetails', element: <CustomerDetailsWater /> },
        { path: 'products', element: <ProductsWater /> },

        { path: 'addproducts', element: <AddProductWater /> },
        { path: 'productdetails', element: <ProductDetailsWater /> },
        { path: 'agentsupervisor', element: <AgentSupervisorWater /> },
        { path: 'agentdetails', element: <AgentSupervisorDetails /> },

        { path: 'profile', element: <GymProfilePage /> },
        { path: 'collection', element: <CollectionWater /> },
        { path: 'reports', element: <ReportsContentWater /> },
        { path: 'complaints', element: <ComplaintsContentWater /> },
        { path: 'smswallet', element: <SmsWalletContentWater /> },
        { path: 'expenses', element: <ExpensesContentWater /> },
      ],
    },

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
