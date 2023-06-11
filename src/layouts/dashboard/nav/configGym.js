// component
import HomeIcon from '@mui/icons-material/Home';
import Groups2Icon from '@mui/icons-material/Groups2';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import BusinessIcon from '@mui/icons-material/Business';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import PaidIcon from '@mui/icons-material/Paid';
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfigGym = [
    {
        title: 'Home',
        path: '/gym/gymdashboard',
        icon: <HomeIcon />,
    },
    {
        title: 'Customers',
        path: '/gym/customers',
        icon: <Groups2Icon />,
    },
    {
        title: 'Products',
        path: '/gym/products',
        icon: <FitnessCenterIcon />,
    },
    // {
    //     title: 'Agents/Supervisor',
    //     path: '/gym/blog',
    //     icon: <SupportAgentIcon />,
    // },
    // {
    //     title: 'Companys',
    //     path: '/gym/companies',
    //     icon: <BusinessIcon />,
    // },
    {
        title: 'Collection',
        path: '/gym/collection',
        icon: <AccountBalanceWalletIcon />,
    },
    // {
    //     title: 'Reports',
    //     path: '/gym/reports',
    //     icon: <AssessmentIcon />,
    // },
    // {
    //     title: 'Complaints',
    //     path: '/gym/complaints',
    //     icon: <QuestionAnswerIcon />,
    // },
    {
        title: 'SMS~Wallet',
        path: '/gym/smswallet',
        icon: <ContactMailIcon />,
    },
    {
        title: 'Expenses',
        path: '/gym/expenses',
        icon: <PaidIcon />,
    },
];

export default navConfigGym;
