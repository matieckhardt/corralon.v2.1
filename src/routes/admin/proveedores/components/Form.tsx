import Card from "@mui/material/Card";
import {
  initialValues,
  validationSchema,
} from "../validations/validationsSchema";
import formJson from "./data/input-proveedores.json";
import { CardHeader } from "@mui/material";
import { CustomForm } from "components/CustomForm/CustomForm";
import { createProveedor } from "apis";

export const Form = () => {
  const handleCreateProveedor = (obj: any) =>{
    createProveedor(obj)
    .then((resp) => console.log(resp))
  }
  return (
    <Card sx={{ minWidth: 275, width: "60%", marginRight: 10 }}>
      <CardHeader
        sx={{ backgroundColor: "green", color: "white" }}
        title="Alta de Proveedores"
      />
      <CustomForm
        data={formJson}
        enviar={handleCreateProveedor}
        validationSchema={validationSchema}
        initialValues={initialValues}
      />
    </Card>
  );
};
