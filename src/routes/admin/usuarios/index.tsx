import { Box } from "@mui/material";
import { FormUsuarios } from "./components/FormUsuarios";
import { ListaUsuarios } from "./components/ListaUsuarios";

const Usuarios = () => {
  return (
    <Box>
      <FormUsuarios />
      <ListaUsuarios />
    </Box>
  );
};

export default Usuarios;
