import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ExploreTwoToneIcon from '@mui/icons-material/ExploreTwoTone';

export const BottomNav = () => {

    const classes ={     
        '.MuiBottomNavigationAction-label, .MuiSvgIcon-root':{
            color: 'white',
        },
        'cursor':'inherit'
    }

  return (
    <>
    <Box sx={{ width: 'auto'}} >
      <BottomNavigation
        sx={{
            bgcolor:'primary.800',
        }}
        showLabels
      >
        <BottomNavigationAction sx={classes} label="Ruta Matera® 2022" icon={<ExploreTwoToneIcon />} />
      </BottomNavigation>
    </Box>
    </>
  );
}