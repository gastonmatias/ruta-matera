import { Divider, Grid, useMediaQuery} from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Tooltip from '@mui/material/Tooltip';

import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import { useTheme } from '@emotion/react';

export const About = () => {
  
    
    const theme = useTheme()
    const isSm = useMediaQuery(theme.breakpoints.up('sm'))


    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    return (
    <>
    <Grid 
        container
        alignItems='start'
        rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        px={isSm? 8:1}
        py={2}
        >

      <Grid item xs={12}>
        <Card sx={{textAlign:'center'}}>
          <CardContent >
            <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
              Creado con <FavoriteTwoToneIcon fontSize='small' />
            </Typography>
            <Typography variant="h6" component="div">
              React.JS + Material UI
            </Typography>
            <CardMedia
                sx={{maxWidth:"450px", display:'block', margin:'auto'}}
                component="img"
                image='https://i.morioh.com/2020/01/11/cfd101025c1a.jpg'
                alt="react+mui"
            />
            <Typography  color="text.secondary" sx={{ pt:2, pb:4 }}>
            Por Gastón Villagra
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      
      <Grid item xs={12} sm={12}>
        <Divider color='success'>
        <Typography variant='h5' fontWeight='light' align='center'>
           Contáctame 
        </Typography>
        </Divider>

        <BottomNavigation 
          sx={{  mt:1 , display:'flex'}}
          color='primary'
          showLabels
        >
          <Tooltip title="linkedin.com/in/gaston-villagra" arrow>
          <BottomNavigationAction 
                onClick={() => openInNewTab('https://www.linkedin.com/in/gaston-villagra/')}
                label="Linkedin" 
                icon={<LinkedInIcon color='info' />} />
          </Tooltip>
          
          <Tooltip title="github.com/gastonmatias" arrow>
          <BottomNavigationAction 
                onClick={() => openInNewTab('https://github.com/gastonmatias')}
                label="Github" 
                icon={<GitHubIcon color='inherit' />} 
                />
          </Tooltip>
          
          <Tooltip title="g.matiasvillagra@gmail.com" arrow>
          <BottomNavigationAction 
                onClick={() => openInNewTab('mailto:g.matiasvillagra@gmail.com')}
                label="Email" 
                icon={<EmailIcon color='warning' />} 
            />
          </Tooltip>
          
          <Tooltip title="+56933007644" arrow>
            <BottomNavigationAction 
                  label="WhatsApp" 
                  icon={<WhatsAppIcon color='success' />} 
                  />
          </Tooltip>
        </BottomNavigation>
      </Grid>  
    </Grid>
    </>
  )
}