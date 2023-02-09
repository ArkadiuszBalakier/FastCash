import { Link } from 'react-router-dom';

import DateTime from './DateTime'
import classes from './Header.module.css'


function Header(){
return(
<header className={classes.header}>
    <div>
        <h1>BANK APP</h1>
        <p><DateTime/></p>
    </div>
    <div >
        <Link type="button" className={classes.b}>Withdraw</Link>
        <Link type="button" className={classes.b}>Deposit</Link>
        <Link to="/transactions" className={classes.b}>Transactions</Link>
    </div>
</header>
)
}

export default Header;