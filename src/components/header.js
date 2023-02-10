import { Link } from 'react-router-dom';

import DateTime from './DateTime'
import classes from './header.module.css'
import Button from '@mui/material/Button';


function Header(){
return(
<header className={classes.header}>
    <div>
        <h1>BANK APP</h1>
        <DateTime/>
    </div>
    <div className="space-x-5 mt-5">
        <Button to="withdraw" component={Link} variant="outlined">Withdraw</Button>
        <Button to="deposit" component={Link} variant="outlined">Deposit</Button>
        <Button to="transactions" component={Link} variant="outlined">Transactions</Button>
    </div>
</header>
)
}

export default Header;