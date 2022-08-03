import Card from "@mui/material/Card";
import {
  initialValues,
  validationSchema,
} from "../validations/validationsSchema";
import formJson from "./data/input-materiales.json";
import { CardHeader } from "@mui/material";
import { CustomForm } from "components/CustomForm/CustomForm";
import { createMaterial } from "apis/materiales";

export const FormMateriales = () => {
  const handleCreateMaterial = (obj: any) => {
    createMaterial(obj).then((resp) => console.log(resp));
  };
  return (
    <Card sx={{ width: "97%", margin: "auto" }}>
      <CardHeader
        sx={{ backgroundColor: "green", color: "white" }}
        title="Alta de Materiales"
      />
      <CustomForm
        data={formJson}
        enviar={handleCreateMaterial}
        validationSchema={validationSchema}
        initialValues={initialValues}
      />
    </Card>
  );
};
