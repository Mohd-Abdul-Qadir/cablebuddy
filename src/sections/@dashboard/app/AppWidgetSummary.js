// @mui
import PropTypes from 'prop-types';
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography, Box } from '@mui/material';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';
// components
import Iconify from '../../../components/iconify';
import { Icon } from '@iconify/react';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
// ----------------------------------------------------------------------

const StyledIcon = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
}));

// ----------------------------------------------------------------------

AppWidgetSummary.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  sx: PropTypes.object,
};

export default function AppWidgetSummary({ title, total, icon, color = 'primary', sx, ...other }) {
  return (
    <>
      <Card
        sx={{
          // border: '1px solid black',
          py: 5,
          boxShadow: '1px 3px 8px #D8D8D8',
          textAlign: 'center',
          color: (theme) => theme.palette[color].darker,
          bgcolor: (theme) => theme.palette[color].lighter,
          ...sx,
        }}
        {...other}
      >
        <StyledIcon
          sx={{
            color: (theme) => theme.palette[color].dark,
            backgroundImage: (theme) =>
              `linear-gradient(135deg, ${alpha(theme.palette[color].dark, 0)} 0%, ${alpha(
                theme.palette[color].dark,
                0.24
              )} 100%)`,
          }}
        >
          <Iconify icon={icon} width={28} height={28} />
        </StyledIcon>

        <Typography variant="h3">{fShortenNumber(total)}</Typography>

        <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
          {title}
        </Typography>
      </Card>
    </>
  );
}
