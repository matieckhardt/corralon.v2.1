import { Box } from '@mui/system'
import { FormProductos } from './components/FormProductos'
import { ListaProductos } from './components/ListaProductos'

const Productos = () => {
  return (
   <Box>
    <FormProductos /> 
   <ListaProductos />
   </Box>
  )
}

export default Productos