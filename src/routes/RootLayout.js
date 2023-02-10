import { Outlet } from 'react-router-dom';
import Header from '../components/header'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { flexbox } from '@mui/system';



function RootLayout(){
    return(
     <>
    <CssBaseline />      
    <Header/>
        <Container fixed >
        <Box sx={{ bgcolor: '#cfe8fc',
         height: '100vh',
         padding: '20px',           
          }} >
            <Outlet/>   
        </Box>
        </Container>   
    </>
    )
}

export default RootLayout;