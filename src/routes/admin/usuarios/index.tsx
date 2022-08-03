import { Box } from "@mui/material";
import { FormUsuarios } from "./components/FormUsuarios";
import { ListaUsuarios } from "./components/ListaUsuarios";

const Usuarios = () => {
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
      <FormUsuarios />
      <ListaUsuarios />
    </Box>
  );
};

export default Usuarios;
