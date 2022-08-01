import { Box } from "@mui/material";
import { Form } from "./components/Form";
import { Lista } from "./components/Lista";

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
      <Form />
      <Lista />
    </Box>
  );
};

export default Usuarios;
