import './App.css'
import ScrollToTop from './helpers/scrollToTop'
import { AppRouter } from './router/AppRouter'
import { AppTheme } from './theme/AppTheme'

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function RutaMatera() {

  return (
    <AppTheme>
      <AppRouter/>
      <ToastContainer/>
      <ScrollToTop/>
    </AppTheme>
  )
}

export default RutaMatera
