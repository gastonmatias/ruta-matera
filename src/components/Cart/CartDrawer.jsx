import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SentimentVeryDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentVeryDissatisfiedOutlined';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';
import { Avatar, Grid, ListItemAvatar, Typography, useMediaQuery, ButtonGroup, Chip } from '@mui/material';
import { grey } from '@mui/material/colors';

import { toast } from 'react-toastify';
import json2mq from 'json2mq';

import { addToCart, removeFromCart } from '../../store';
import logo_webpay from '../../assets/otros/logo_webpay.webp'


export function CartDrawer({showDrawer, setShowDrawer}) {

  const dispatch = useDispatch()
  const {cartItems, totalPrice} = useSelector(state => state.cart)

  const isPhone = useMediaQuery(
    json2mq({maxWidth: 500})
  )

  const toggleDrawer = (open) => setShowDrawer(open)

  const handleClickAddToCart = (ev,id) => {
    dispatch(addToCart({id}))
  }

  const handleClickRemoveFromCart = (id) => {
    dispatch(removeFromCart({id}))
  }

  const handleClickPagar = () => {
    toast.warning('¡ Próximamente !', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      icon: <ConstructionOutlinedIcon colo='theme'/>
      });
  }

  const list = () => (
    <Box
      sx={{width: isPhone ? 'auto' : 350, 
      display: 'flex', flexDirection:'column', alignContent: 'stretch', alignItems:'stretch',justifyContent:'space-between'}}
      role="presentation"
    >
        <Grid 
            container
            alignItems='stretch'
            justifyContent='center'
            spacing={1}
            mt={2}
            mb={2}
        >
            <Grid item>
              <Chip 
                label='Carrito de Compras'
                variant="outlined" 
                color="neutral" 
                onDelete={()=>toggleDrawer( false)} 
                icon={<ShoppingCartOutlinedIcon />}
                sx={{p:3, fontSize: '1.3rem', borderRadius: '0'}}
                />
            </Grid>
            
            {cartItems.length===0 && 
            <Grid item mt={10} alignItems='center' justifyContent='center'>
              <Box sx={{bgcolor:'#E7EBF0',px:5, py:10}}>
                <Typography variant='h5' color='grey' align='center'>Tu carrito esta vacío! </Typography>
                <Typography variant='h5' color='grey' align='center'> 
                  <SentimentVeryDissatisfiedOutlinedIcon color='warning' fontSize='large'/>
                </Typography>
              </Box>
            </Grid>
            }
        </Grid>

      <List >
        {cartItems.map( e => (
        <div key={e.id}>
          <ListItem key={e.id}
           sx={{  
            ':hover':{
              backgroundColor:grey[100],
              opacity: 1
            }
          }}            
           secondaryAction={
              <ButtonGroup size='small' color='neutral'  variant="outlined" aria-label="text button group" >
                <Button color='error' onClick={(ev)=> handleClickRemoveFromCart(e.id)}>-</Button>
                <Button >{e.qty}</Button>
                <Button color='primary' onClick={(ev)=>handleClickAddToCart(ev,e.id)}>+</Button>
              </ButtonGroup>
            }>
           <ListItemAvatar>
             <Avatar
             srcSet={e.img}
             alt={e.nombre}
             >
             </Avatar>
           </ListItemAvatar>
           
           <ListItemText
             primary={  e.nombre.length > 14 //&& !isPhone
                      ? e.nombre.substring(0,14)+'...'
                      : e.nombre}
             secondary={`$${e.precio*e.qty}`}
           />
          </ListItem>
          <Divider/>
         </div>
        ))}


        {/* //! A PAGAR */}
        {cartItems.length> 0 && 
          <Box sx={{display:'flex', direction:'row', justifyContent:'end'}}>
            <div>
              <img 
                style={{maxWidth:'160px'}}
                src={logo_webpay}/>
            </div>
            <ListItem key='pagar' sx={{display:'flex', direction:'row', flexWrap:'wrap', justifyContent:'end'}}>
                <Typography sx={{mr:1}} color='grey' variant='h6'>Pagar</Typography>
                <Button 
                  onClick={()=> handleClickPagar()}
                  variant='contained' 
                  color='secondary'
                  sx={{fontWeight:'bold'}}
                  >
                  ${totalPrice}
                </Button>
            </ListItem>
            

          </Box>
        }
      </List>
    </Box>
  );

  return (
    <div>
        <Drawer
          anchor={isPhone? 'top' : 'right'}
          open={showDrawer}
          onClose={()=>toggleDrawer(false)}
        >
          { list()}
          
        </Drawer>


    </div>
  );
}