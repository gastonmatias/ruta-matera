import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
   name: 'cart',
   initialState: {
      cartItems:      [],
      totalPrice:     0,
      totalCartItems: 0
   },
   reducers:{
      addToCart:( state, action ) => {
        
        // verifica si ya existe el mismo tipo de elemento a añadir al carrito 
        const exist = state.cartItems.find( item => item.id === action.payload.id)

        // si existe, NO añadir denuevo todo el item, en cambio sumar un "+1" en qty
        if (exist) {
          state.cartItems = state.cartItems.map( item => (
            item.id === action.payload.id 
            ? {...exist, qty: exist.qty+1}
            : item
          ))
        }
        // si NO existe previamente en el carrito, agregar el elemento entero al cart
        else{
          state.cartItems.push(action.payload)
        }

        // actulizar costo total
        state.totalPrice = state.cartItems.reduce( (prev, current) => 
          (prev + current.precio*current.qty),0
        )

        // actualizar nro items total del carrito
        state.totalCartItems = state.cartItems.reduce( (prev, current) => 
          (prev + current.qty),0
        )
      },
      removeFromCart:( state, action ) =>{
        // verifica si existe ya en el carrito el elemento qe se quiere remover
        const exist = state.cartItems.find( item => item.id === action.payload.id)

        // si existe SOLO 1 elemento del mismo tipo, remover todo el elemento
        if (exist.qty === 1) {
          state.cartItems = state.cartItems.filter( item => 
            item.id !== action.payload.id
          )
        }
        
        // si existe + de 1 elemento del mismo tipo, reducer la qty en "-1"
        else{
          state.cartItems = state.cartItems.map( item => 
            item.id === action.payload.id
            ? {...exist, qty: exist.qty - 1}
            : item
          )
        }

        // actulizar costo total
          state.totalPrice = state.cartItems.reduce( (prev, current) => 
          (prev + current.precio*current.qty),0
        )

        // actualizar nro items total del carrito
        state.totalCartItems = state.cartItems.reduce( (prev, current) => 
          (prev + current.qty),0
        )
      },

   }
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, updateTotal } = cartSlice.actions; 