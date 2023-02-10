import { useState, useEffect } from 'react';

import axios from 'axios';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const Loan = ()=>{
    const [accounts,setAccounts]=useState([]);
    const [selectedAccount, setSelectedAccount]=useState('');

    async function getAccounts(){
        const response= await axios.get('http://localhost:3000/accounts.json')
        const data=response.data;
         setAccounts(data)
    }

    function handleChange(event){
        setSelectedAccount(event.target.value)
    }
    

    useEffect(()=>{
        getAccounts();
    },[])

    function getBalance(accountId){
      const account = accounts.find(account=> account.id === accountId)
      return account.balance
    }


    return(
      <>
        <FormControl className="min-w-[150px] mb-5">
        <InputLabel id="account">Account</InputLabel>
        <Select
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

      <Stack spacing={2} direction="row" className='mb-5'>
        <div>Current Balance:</div>
        { selectedAccount && <div>{getBalance(selectedAccount)}</div>}
      </Stack>

      <Stack spacing={4} direction="row">
         <TextField id="outlined-basic" label="Ammount" type="number" variant="outlined" />
         <Button variant="contained">LOAN</Button>
      </Stack>
      
      </>
    )
}

export default Loan;