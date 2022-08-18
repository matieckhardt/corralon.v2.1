import Card from "@mui/material/Card";
import {
  initialValues,
  validationSchema,
} from "../validations/validationsSchema";
import formJson from "./data/input-materiales.json";
import { CardHeader, Divider, Typography } from "@mui/material";
import { CustomForm } from "components/CustomForm/CustomForm";
import { createMaterial } from "apis/materiales";

export const FormMateriales = () => {
  const handleCreateMaterial = (obj: any) => {
    createMaterial(obj).then((resp) => console.log(resp));
  };
  return (
    <Card sx={{ width: "97%", margin: "auto", marginTop:2 }}>
      <CardHeader
        title={<Typography variant="h3">Alta de Materiales</Typography>}
      />
      <Divider />
      <CustomForm
        data={formJson}
        enviar={handleCreateMaterial}
        validationSchema={validationSchema}
        initialValues={initialValues}
      />
    </Card>
  );
};
