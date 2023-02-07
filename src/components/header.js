import classes from './header.module.css'

function Header(){
return <header className={classes.header}>
    <div>
        <h1>Arczi Beee</h1>
        <p>klient ID: 9909</p>
    </div>
    <p>Time</p>
    <p>Logout time</p>
    <button>Logout</button>

</header>
}

export default Header;