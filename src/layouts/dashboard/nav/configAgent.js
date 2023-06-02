// component
import HomeIcon from '@mui/icons-material/Home';
import Groups2Icon from '@mui/icons-material/Groups2';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import BusinessIcon from '@mui/icons-material/Business';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AssessmentIcon from '@mui/icons-material/Assessment';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import PaidIcon from '@mui/icons-material/Paid';
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfigAgent = [
  {
    title: 'Home',
    path: '/agent/dashboard',
    icon: <HomeIcon />,
  },
  {
    title: 'Customers',
    path: '/agent/customer',
    icon: <Groups2Icon />,
  },
  // {
  //   title: 'Products',
  //   path: '/dashboard/products',
  //   icon: <ShoppingCartIcon />,
  // },
  //   {
  //     title: 'Agents/Supervisor',
  //     path: '/dashboard/blog',
  //     icon: <SupportAgentIcon />,
  //   },
  // {
  //   title: 'Companys',
  //   path: '/dashboard/companies',
  //   icon: <BusinessIcon />,
  // },
  {
    title: 'Collection',
    path: '/agent/collection',
    icon: <AccountBalanceWalletIcon />,
  },
  {
    title: 'Reports',
    path: '/agent/reports',
    icon: <AssessmentIcon />,
  },
  {
    title: 'Complaints',
    path: '/agent/complaints',
    icon: <QuestionAnswerIcon />,
  },
  //   {
  //     title: 'SMS~Wallet',
  //     path: '/dashboard/smswallet',
  //     icon: <ContactMailIcon />,
  //   },
  {
    title: 'Expenses',
    path: '/agent/expenses',
    icon: <PaidIcon />,
  },
];

export default navConfigAgent;
