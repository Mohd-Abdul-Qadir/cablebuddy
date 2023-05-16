

function createData(image, date, dateDetail, transactionAmount, final) {
    return { image, date, dateDetail, transactionAmount, final };
}

export const BalancehistoryData = [
    createData('/assets/images/Cash.jpeg', 'Payment On 02-May-23', 'Recorded On 02-May-2023', '(-)  ₹ 350', '₹ 0'),
    createData('/assets/images/CashReceipt.jpeg', 'Bill From 01-May-23 To 31-May-23', 'Billed On 01-May-2023', '(+)  ₹ 350', '₹ 350'),
    createData('/assets/images/Cash.jpeg', 'Online Payment Received On 2023 - 04 - 02 09: 45: 52', 'Recorded On 02-Apr-2023', '(-)  ₹ 350', '₹ 0'),
    createData('/assets/images/CashReceipt.jpeg', 'Bill From 01-Apr-23 To 30-Apr-23', 'Billed On 01-Apr-2023', '(+)  ₹ 350', '₹ 350'),
    createData('/assets/images/Cash.jpeg', 'Online Payment Received On 2023-03-02 09:47:53', 'Recorded On 02-Mar-2023', '(-)  ₹ 350', '₹ 0'),
    createData('/assets/images/CashReceipt.jpeg', 'Bill From 01-Mar-23 To 31-Mar-23', 'Billed On 01-Mar-2023', '(+)  ₹ 350', '₹ 350'),
    createData('/assets/images/Cash.jpeg', 'Online Payment Received On 2023-02-02 12:46:32', 'Recorded On 02-Feb-2023', '(-)  ₹ 350', '₹ 0'),
    createData('/assets/images/CashReceipt.jpeg', 'Bill From 01-Feb-23 To 28-Feb-23', 'Billed On 01-Feb-2023', '(+)  ₹ 350', '₹ 350'),
];
