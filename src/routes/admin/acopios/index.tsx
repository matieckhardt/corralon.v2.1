import { Box } from "@mui/material";
import { ListaStock } from "./components/ListaStock";
import { ListaAcopios } from "./components/ListaAcopios";

const Acopios = () => {
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
      <ListaAcopios />
      <ListaStock />
    </Box>
  );
};

export default Acopios;
