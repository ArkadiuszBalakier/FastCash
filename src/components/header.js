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
    <div >
        <Link type="button" className={classes.b}>Withdraw</Link>
        <Link type="button" className={classes.b}>Deposit</Link>
        <Button to="transactions" component={Link} variant="outlined">Transactions</Button>
    </div>
</header>
)
}

export default Header;