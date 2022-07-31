import { Box } from "@mui/material";
import { FormProveedores } from "./components/FormProveedores";
import { Listaproveedores } from "./components/ListaProveedores";

const Proveedores = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "90%",
        margin: "auto",
        marginTop:5,
        justifyContent: "space-between",
      }}
    >
      <FormProveedores />
      <Listaproveedores />
    </Box>
  );
};

export default Proveedores;
