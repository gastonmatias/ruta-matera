//! NOTA: importar createTheme & THemeProvider desde @mui/material
//! NO desde @mui/system!
//! importacion automatica suele fallar!

import { teal,red } from "@mui/material/colors"
import { createTheme, ThemeProvider } from "@mui/material"

export const AppTheme = ({children}) => {
  
    const theme = createTheme({
        palette:{
            primary: teal,
            neutral: {
                main: '#64748B',
                contrastText: '#fff',
              },
            error: {
                main: red[400],
            },
        },

        typography:{
            fontFamily:'Nunito Sans',
            fontWeightLight: 300,
            fontWeightRegular: 400,
            fontWeightMedium: 600,
            fontWeightBold: 700,
        }
    })
  
    return (
    
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
  )
}