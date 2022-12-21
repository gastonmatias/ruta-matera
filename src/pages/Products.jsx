import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { Grid} from "@mui/material"

import { Filters, ProductCard } from "../components"
import { getProductsFiltered } from "../helpers/getProductFiltered"
import { startLoadingCategories, startLoadingProducts } from "../store"

export const Products = () => {

  const {products} = useSelector(state => state.shop)
  const dispatch = useDispatch()
  const location = useLocation()

  const [selectedCat, setSelectedCat] = useState('Todo');
  const [name, setName] = useState('');

  useEffect(() => {
    loadShopData()
    filterFromHome()
  }, []);

  // x si el usuario clickeo categoria desde home
  const filterFromHome = () => {
    const catFromHome = location.state?.categorySelectFromHome
    
    !!catFromHome
    ? setSelectedCat(catFromHome) // si entro a productos seleccionando una cat desde home
    : setSelectedCat('Todo') // si entro a "productos" desde navbar, seteaar selected cat como "todo", sino da error de "undefined"
  }

  // empieza filtrado de productos, por default en "todo"
  let productsToShow  = getProductsFiltered(products,selectedCat,name)

  // carga de datos de la pagina ( productos y categorias)
  const loadShopData = () => {
    Promise.all([
      dispatch(startLoadingProducts()),
      dispatch(startLoadingCategories())
    ])
  }

  return (
  <>
    <Grid 
      container
      alignItems='stretch'
      rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      px={2}
      py={2}
    >

      <Grid item xs={12}>
        <Filters setName={setName} setSelectedCat={setSelectedCat} selectedCat={selectedCat}/>
      </Grid>

      {
      productsToShow.map((e) => (
        <Grid key={e.id} item
           xs={12} sm={6} md={4} lg={3}
        >
          <ProductCard key={e.id}{...e}/>
        </Grid>
      ))}

    </Grid >
  </>
  )
}