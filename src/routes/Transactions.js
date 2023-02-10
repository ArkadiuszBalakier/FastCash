import { useEffect, useState } from 'react';

import axios from 'axios'

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function Transactions () {

//transactions block
const [accounts,setAccounts]= useState([])
const [selectedAccount,setSelectedAccount]= useState('')

async function getAccounts (){
   const response= await axios.get('http://localhost:3000/accounts.json')
    const data=response.data;
    setAccounts(data)
}

function getTransactionsByAccountId(accountId){    
    const account = accounts.find(account=> account.id === accountId )
    return account.transactions
}

function handleChange(event){
    setSelectedAccount(event.target.value)
}

useEffect(()=>{
    getAccounts();
},[])
//end transactions block

function getBalance(accountId){
  const account = accounts.find(account=> account.id === accountId)
  return account.balance
}

    return(
      <>
        <FormControl className='min-w-[150px] mb-5' >
        <InputLabel id="account">Account</InputLabel>
        <Select
          defaultValue=""
          labelId="account"
          id="demo-simple-select"
          value={selectedAccount}
          label="account"
          onChange={handleChange}
          >
          {accounts.map(account=>
             <MenuItem key={account.id} value={account.id}>{`${account.accountNumber}:
              ${account.firstName} ${account.lastName}`}</MenuItem>)}
        </Select>
        </FormControl>   

        <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align='left'>Type</TableCell>
            <TableCell align="right">Value</TableCell>
            <TableCell align="right">Date</TableCell>
          </TableRow>
        </TableHead>
        {selectedAccount && <TableBody>
          {getTransactionsByAccountId(selectedAccount).map((transaction) => (
            <TableRow
            key={transaction.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {transaction.type}
              </TableCell>
              <TableCell align="right">{transaction.ammount}</TableCell>
              <TableCell align="right">{transaction.transactionDate}</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          ))}
          <TableRow 
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell rowSpan={2}></TableCell>
            <TableCell rowSpan={3} align="right">Balance :</TableCell>
            <TableCell align='right'>{getBalance(selectedAccount)}</TableCell>
          </TableRow>
        </TableBody>}
      </Table>
    </TableContainer>
              </>
    )
  }
  
  export default Transactions;