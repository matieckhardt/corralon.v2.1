import Card from "@mui/material/Card";
import {
  initialValues,
  validationSchema,
} from "../validations/validationsSchema";
import formJson from "./data/input-materiales.json";
import { CardHeader } from "@mui/material";
import { CustomForm } from "components/CustomForm/CustomForm";
import { createMaterial } from "apis";

export const Form = () => {
  const handleCreateMaterial = (obj: any) =>{
    createMaterial(obj)
    .then((resp) => console.log(resp))
  }
  return (
    <Card sx={{ minWidth: 275, width: "60%", marginRight: 10 }}>
      <CardHeader
        sx={{ backgroundColor: "yellow", color: "white" }}
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
