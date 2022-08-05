import { Box } from "@mui/material";
import FormCompras from "./components/FormCompras";
import { ListaCompras } from "./components/ListaCompras";


const Proveedores = () => {
  return (
    <Box>
      <FormCompras />
      <ListaCompras />
    </Box>
  );
};

export default Proveedores;
