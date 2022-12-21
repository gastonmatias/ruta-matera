import { Typography, Divider,Grid, Box, Paper} from "@mui/material"
import { SlickSlider } from "../ui/slider/SlickSlider";

import { ImagesList } from "../components";

import { grey } from "@mui/material/colors";

export const Home = () => {
  return (
  <>
  <Box sx={{ flexGrow: 1 }}>
   <Grid
      container
      alignItems='center'
      justifyContent='center'
      spacing={1}
    >

      <Grid item  xs={11} sm={8} md={11} lg={7} sx={{mt:2,pt:5}}  >
        <SlickSlider/>
      </Grid>
      
      <Grid item xs={11} sm={11} md={11} lg={11} >
        <Divider variant='fullWidth' color='primary.900'/>
          <Typography variant='h5' align="center" m={1}>
              Explora Nuestras Categorías
          </Typography>
          <Divider color='primary.800'/>
      </Grid>

      <Grid item  xs={12} sm={11} md={11} lg={11}   >
        <ImagesList/>
      </Grid>

      <Grid item xs={10} sm={7} md={7} mt={2} p={2} 
      >
      <Paper elevation={3}
            sx={{ bgcolor:`${grey[100]}`, p: 2 }} 
      >
      <Typography 
            textAlign='end'
            variant="subtitle" 
            fontStyle='italic'>
            {'"Mirá, un mate es como un punto y aparte. Uno lo toma y después se puede empezar un párrafo nuevo"'}
         <Typography fontStyle='initial' textAlign='end'>-Julio Cortázar</Typography>
        </Typography>
      </Paper>
      </Grid>
   
   </Grid>
   </Box>
  </>
  )
} 