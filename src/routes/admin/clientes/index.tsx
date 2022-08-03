import { Box } from "@mui/material";
import { FormClientes } from "./components/FormClientes";
import { ListaClientes } from "./components/ListaClientes";

const Clientes = () => {
  return (
    <Box>
      <FormClientes />
      <ListaClientes />
    </Box>
  );
};

export default Clientes;
