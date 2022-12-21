import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { 
  Badge, AppBar,Box,Toolbar,IconButton,Typography,Menu,Container,Button,Tooltip,MenuItem
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ExploreIcon from '@mui/icons-material/Explore';

import { CartDrawer } from '../components/Cart/CartDrawer';

const pages = ['Productos', 'Acerca de'];

export const NavBar = () => {

  const [anchorElNav, setAnchorElNav]   = useState(null);
  const [showDrawer, setShowDrawer] = useState(false)

  const {totalCartItems} = useSelector(state => state.cart)


  const navigate = useNavigate()

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleClickCart = (event) => {

    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setShowDrawer(true)
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleClickNavMenu = (e, page) => {
    setAnchorElNav(null);
    navigate(page.replace(/ +/g, "-"))
  };
  
  const handleClickLogo = () => {
    navigate('/')
  }

  return (
    <AppBar position="fixed" elevation={0} sx={{backgroundColor: 'primary.800'}} >
      <Container maxWidth="xl">
        <Toolbar disableGutters >
          {/* //! INIT desktop titulo */}
          <ExploreIcon fontSize='medium' sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={ () => navigate('/')}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              cursor: 'pointer'
            }}
          >
            Ruta Matera
          </Typography>{/* //! fin desktop titulo */}


          {/* //! INIT NAVIGATION MENU PHONE */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={(e)=> handleClickNavMenu(e,page)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> {/* //! END NAVIGATION MENU */}
          {/* //! END PHONE */}

          {/* //! INIT titulo phone*/}
          <ExploreIcon fontSize='medium' sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            onClick={ () => navigate('/')}
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              cursor: 'pointer'
            }}
          >
            Ruta Matera
          </Typography>{/* //! END titulo phone*/}


          {/* //! INIT NAVIGATION MENU DESKTOP*/}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page,i) => (
              <Button
                key={page}
                onClick={(e)=>handleClickNavMenu(e,page)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>{/* //! END NAVIGATION MENU PHONE */}

          {/* //! INIT CART icon */}
          <Box sx={{ flexGrow: 0 }}>

            <Tooltip title="Mi Carrito">
              <IconButton 
                size="large" aria-label="cart"
                onClick={handleClickCart} 
                sx={{ p: 0 }} 
                color='inherit'
                >
                <Badge 
                    badgeContent={totalCartItems} 
                    color="error"
                    overlap='circular'
                >
                    <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Tooltip>
            
            {
              showDrawer &&
              <CartDrawer showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
            }

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
