import Card from "@mui/material/Card";
import {
  initialValues,
  validationSchema,
} from "../validations/validationsSchema";
import formJson from "./data/input-clientes.json";
import { CardHeader } from "@mui/material";
import { CustomForm } from "components/CustomForm/CustomForm";
import { createCliente } from "apis/clientes";

export const FormClientes = () => {
  const handleCreateCliente = (obj: any) => {
    createCliente(obj).then((resp) => console.log(resp));
  };
  return (
    <Card sx={{ width: "97%", margin: "auto" }}>
      <CardHeader
        sx={{ backgroundColor: "#1976d2", color: "white" }}
        title="Alta de Clientes"
      />
      <CustomForm
        data={formJson}
        enviar={handleCreateCliente}
        validationSchema={validationSchema}
        initialValues={initialValues}
      />
    </Card>
  );
};
