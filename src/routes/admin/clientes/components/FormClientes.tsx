import Card from "@mui/material/Card";
import {
  initialValues,
  validationSchema,
} from "../validations/validationsSchema";
import formJson from "./data/input-clientes.json";
import { CardHeader, Divider, Typography } from "@mui/material";
import { CustomForm } from "components/CustomForm/CustomForm";
import { createCliente } from "apis/clientes";

export const FormClientes = () => {
  const handleCreateCliente = (obj: any) => {
    createCliente(obj).then((resp) => console.log(resp));
  };
  return (
    <Card sx={{ width: "97%", margin: "auto", marginTop:2}}>
      <CardHeader
        title={<Typography variant="h3" gutterBottom>Alta de Clientes</Typography>}
      />
      <Divider />
      <CustomForm
        data={formJson}
        enviar={handleCreateCliente}
        validationSchema={validationSchema}
        initialValues={initialValues}
      />
    </Card>
  );
};
