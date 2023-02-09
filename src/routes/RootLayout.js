import { Outlet } from 'react-router-dom';
import Header from '../components/header'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';



function RootLayout(){
    return(
        <>
        <CssBaseline />
        <Header/>
        <Container>
        <Outlet/>
        </Container>
        </>
    )
}

export default RootLayout;