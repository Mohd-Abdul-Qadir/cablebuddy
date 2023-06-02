import React, { useState, useEffect, useParams } from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { BalancehistoryData } from '../../_mock/BalancehistoryData';

import Image from '../Image';
import moment from 'moment';

const BalanceHistory = (props) => {
  const id = props.allData._id;
  const [allData, setAllData] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (id) {
      fetch(`http://54.224.167.209:4001/api/balance-history/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setAllData(data);
        })
        .catch((error) => console.error(error));
    }
  }, [id]);

  const handleDownload = () => {
    fetch('http://54.224.167.209:4001/api/balance-download')
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'product.xlsx';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => console.error('Error:', error));
  };

  return (
    <Box sx={{ width: '55vw' }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between" width="100%">
        <Typography>
          <b>Balance History</b>
        </Typography>
        <Button
          startIcon={<FileDownloadOutlinedIcon />}
          onClick={handleDownload}
          color="success"
          variant="outlined"
          sx={{ height: '50px', color: '#229A16' }}
        >
          Download Excel
        </Button>
      </Stack>
      <TableContainer component={Paper} sx={{ mt: '15px' }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>DATE</TableCell>
              <TableCell>TRANSACTION AMOUNT</TableCell>
              <TableCell>FINAL</TableCell>
              <TableCell>ACTION</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allData.slice(page * 10, page * 10 + 10).map((row, index) => (
              <TableRow key={row.image} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  <Image
                    src={'/assets/images/Cash.jpeg'}
                    alt="image"
                    sx={{ width: '3rem', border: '1px solid #D8D8D8', p: '5px', borderRadius: '5px' }}
                  />
                </TableCell>
                <TableCell>
                  <Typography sx={{ fontSize: '15px' }}>
                    Payment On {moment(row.fromDate).format('DD-MMM-YY')}
                  </Typography>
                  <Typography sx={{ fontSize: '10px' }}>Recoded on:{moment(row.toDate).format('DD-MMM-YY')}</Typography>
                </TableCell>
                <TableCell>{row.transactionAmount}</TableCell>
                <TableCell>
                  <Typography
                    sx={{ bgcolor: '#072534', color: 'white', width: '50px', textAlign: 'center', borderRadius: '5px' }}
                  >
                    ₹ {row.remainingAmount}
                  </Typography>
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        count={Math.ceil(allData.length / 10)}
        page={page}
        onChange={(event, value) => setPage(value - 1)}
        sx={{
          mt: 3,
          display: 'flex',
          justifyContent: 'flex-end',
          mr: 2,
        }}
      />
    </Box>
  );
};

export default BalanceHistory;
