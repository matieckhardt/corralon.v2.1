import { Box } from "@mui/material";
import { FormProveedores } from "./components/FormProveedores";
import { Listaproveedores } from "./components/Listaproveedores";

const Materiales = () => {
  return (
    <Box>
      <FormProveedores />
      <Listaproveedores />
    </Box>
  );
};

export default Materiales;
