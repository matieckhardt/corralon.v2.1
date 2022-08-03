import { Box } from "@mui/material";
import { FormProveedores } from "./components/FormProveedores";
import { Listaproveedores } from "./components/ListaProveedores";

const Proveedores = () => {
  return (
    <Box>
      <FormProveedores />
      <Listaproveedores />
    </Box>
  );
};

export default Proveedores;
