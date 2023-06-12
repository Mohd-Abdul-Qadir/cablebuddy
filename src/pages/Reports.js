import React from 'react';
import ReportsContent from '../components/Reports/ReportsContent';

const Reports = () => {
  // const downloadPDF = (productData) => {
  //     axios
  //       .get('/api/download-pdf', {
  //         responseType: 'blob',
  //         data: productData,
  //       })
  //       .then((response) => {
  //         const url = window.URL.createObjectURL(new Blob([response.data]));
  //         const link = document.createElement('a');
  //         link.href = url;
  //         link.setAttribute('download', 'product.pdf');
  //         document.body.appendChild(link);
  //         link.click();
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   };

  //   // Usage:
  //   const productData = {
  //     name: 'Product Name',
  //     price: 10.99,
  //     select: 'Option A',
  //     gst: 18,
  //     product: 'Product Description',
  //     additional: 'Additional Details',
  //     hsn: 'HSN Code',
  //     genre: 'Product Genre',
  //     type: 'Product Type',
  //   };

  //   downloadPDF(productData);
  return (
    <>
      <ReportsContent />
    </>
  );
};

export default Reports;
