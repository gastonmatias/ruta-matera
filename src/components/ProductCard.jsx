import Card from '@mui/material/Card';
import { useDispatch, useSelector } from "react-redux"

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions, Divider, ButtonGroup } from '@mui/material';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

import { addToCart, removeFromCart } from '../store/cart/cartSlice';

const classes ={
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  border: '1px solid gray',
  borderRadius: '5px',
  textAlign: 'center',
  pb:2
}

export const ProductCard = (props) => {

  const {id, img, nombre, descripcion,precio, caract} = props
  
  const dispatch = useDispatch()
  const {cartItems} = useSelector(state => state.cart)

  const result = cartItems.find(({ id }) => id === props.id);

  const handleClickAddToCart = () => {
    dispatch(addToCart({id,nombre,precio,img, qty:1}))
  }

  const handleClickRemoveFromCart = () => {
    dispatch(removeFromCart({id}))
  }

  return (
  <>
    <Card  sx={classes}>
      <CardMedia
        component="img" // component='img': x default objectFit:'contain'
        alt="ruta matera"
        height="350px"
        sx={{objectFit:'contain'}}
        image={img}
      />
      <CardContent >
        <Typography  variant="h5" component="div" fontWeight='medium' >
          {nombre}
        </Typography>
        <Divider >
          <Typography gutterBottom variant="h5" color='neutral' align='center'>
            ${precio}
          </Typography>
        </Divider>
        <Typography variant="body2" color="text.secondary" align='left'>
          {descripcion}
        </Typography>
        <Typography variant="body2" color="text.secondary" align='left'>
          {caract}
        </Typography>
      </CardContent>
      
      {/* //! INIT AÑADIR/REMOVER DEL CARRITO */}
      <CardActions
        sx={{display: 'flex', alignItems: 'center'}}
      >
        {cartItems.some(e => e.id === id)
          ? <ButtonGroup size='small' color='neutral'  variant="outlined" aria-label="text button group" >
              <Button startIcon={<RemoveShoppingCartIcon/>} color='error' onClick={(ev)=> handleClickRemoveFromCart(cartItems.id)}>-</Button>
              <Button variant='outlined'>{result.qty}</Button>
              <Button endIcon={<AddShoppingCartIcon />} color='primary' onClick={(ev)=>handleClickAddToCart(ev,cartItems.id)}>+</Button>
            </ButtonGroup>

          : <Button
              onClick={handleClickAddToCart} 
              endIcon={<AddShoppingCartIcon />}
              variant='contained'
              color='primary' 
              aria-label="add to shopping cart"
              >
                Añadir al carrito
            </Button>
        }

      </CardActions>
      {/* //! END AÑADIR/REMOVER DEL CARRITO */}
  </Card>
  </>
  );
}


