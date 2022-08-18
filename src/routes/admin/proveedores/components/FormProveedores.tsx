import Card from "@mui/material/Card";
import {
  initialValues,
  validationSchema,
} from "../validations/validationsSchema";
import formJson from "./data/input-proveedores.json";
import { CardHeader, Divider, Typography } from "@mui/material";
import { CustomForm } from "components/CustomForm/CustomForm";
import { createProveedor } from "apis/proveedores";

export const FormProveedores = () => {
  const handleCreateProveedor = (obj: any) =>{
    createProveedor(obj)
    .then((resp) => console.log(resp))
  }
  return (
    <Card sx={{ width: "97%", margin:'auto', marginTop:2}}>
      <CardHeader
        title={<Typography variant="h3">Alta de Proveedores</Typography>}
      />
      <Divider />
      <CustomForm
        data={formJson}
        enviar={handleCreateProveedor}
        validationSchema={validationSchema}
        initialValues={initialValues}
      />
    </Card>
  );
};
