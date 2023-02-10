import { Outlet } from 'react-router-dom';
import Header from '../components/header'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';



function RootLayout(){
    return(
     <>
    <CssBaseline />      
    <Header/>
        <Container maxWidth="lg">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} >
            <Outlet/>   
        </Box>
        </Container>   
    </>
    )
}

export default RootLayout;