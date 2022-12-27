import { Box, CssBaseline } from "@mui/material"
import { Container } from "@mui/system"
import { BottomNav } from "../ui/BottomNav"
import { NavBar } from "../ui/NavBar"

const classPage = {
    bgcolor: '#E7EBF0', 
    // bgcolor: '#cfe8fc', 
    // bgcolor: '#f4f4f4', 
    // height: '100vh', 
    pt: 9, 
    mt:0,
    px:1,
    pb:5,
    display:'flex',
    flexDirection: 'column',
    flex:1
}

export const Layout = ({children}) => {

    return (
    <>
        <Box sx={{
                display:'flex',
                flexDirection:'column',
                justifyContent:'',
                minHeight:'100vh',
                width:'auto'
            }}>

            <CssBaseline />
            <NavBar/>
            <Container sx={classPage} disableGutters maxWidth={false} >
                {children}
            </Container>
        
            <BottomNav/>
        </Box>

    </>
  )
}