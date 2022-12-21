
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Button, Divider, Grid, MenuItem, TextField } from "@mui/material"

export const Filters = ({setSelectedCat,selectedCat,setName}) => {
  
  const {categories} = useSelector(state => state.shop)
  
  const [busqueda, setBusqueda]   = useState('');
  
  const handleSelectChange = (e) => setSelectedCat(e.target.value)
  
  const onSearch = (e) => setName(busqueda)

    return (
    <>
    <Grid container  spacing={2}>
        <Grid item xs={12} sm={3}> 
        <TextField 
            select
            onChange={handleSelectChange}
            label='Categoría'
            fullWidth
            defaultValue='Todo'
            value={selectedCat}
        >
          {categories.map((e) => (
            <MenuItem key={e.id} value={e.nombre}>
              {e.nombre}
            </MenuItem>
          ))}
            <Divider/>
            <MenuItem value='Todo'>
              Todo
            </MenuItem>
          </TextField>
        </Grid>

        {/* //! GRID BUSQUEDA */}
        <Grid item xs={12} sm={6} sx={{display:'flex'}}>
          <TextField 
                id="outlined-search" 
                label="Búsqueda Producto" 
                type="search"
                fullWidth
                onChange={(e)=>setBusqueda(e.target.value)}
                value={busqueda}
                />

          <Button 
            sx={{ml:1}}
            onClick={onSearch}
            size='large'  variant="contained" align='center'>
            Buscar
          </Button>
        </Grid>
    </Grid >
    </>
  )
}