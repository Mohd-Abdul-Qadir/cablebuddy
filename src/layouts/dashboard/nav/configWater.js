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
                                        
const navConfigWater = [
    {
        title: 'Home',
        path: '/water/waterdashboard',
        icon: <HomeIcon />,
    },
    {
        title: 'Customers',
        path: '/water/customers',
        icon: <Groups2Icon />,
    },
    {
        title: 'Products',
        path: '/water/products',
        icon: <ShoppingCartIcon />,
    },
    {
        title: 'Agents/Supervisor',
        path: '/water/agentsupervisor',
        icon: <SupportAgentIcon />,
    },
    // {
    //   title: 'Companys',
    //   path: '/water/companies',
    //   icon: <BusinessIcon />,
    // },
    {
        title: 'Collection',
        path: '/water/collection',
        icon: <AccountBalanceWalletIcon />,
    },
    {
        title: 'Reports',
        path: '/water/reports',
        icon: <AssessmentIcon />,
    },
    {
        title: 'Complaints',
        path: '/water/complaints',
        icon: <QuestionAnswerIcon />,
    },
    {
        title: 'SMS~Wallet',
        path: '/water/smswallet',
        icon: <ContactMailIcon />,
    },
    {
        title: 'Expenses',
        path: '/water/expenses',
        icon: <PaidIcon />,
    },
];

export default navConfigWater;
