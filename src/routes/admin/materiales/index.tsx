import { Box } from "@mui/material";
import { FormMateriales } from "./components/FormMateriales";
import { ListaMateriales } from "./components/ListaMateriales";

const Materiales = () => {
  return (
    <Box>
      <FormMateriales />
      <ListaMateriales />
    </Box>
  );
};

export default Materiales;
