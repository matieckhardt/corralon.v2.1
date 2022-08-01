import Card from "@mui/material/Card";
import {
  initialValues,
  validationSchema,
} from "../validations/validationsSchema";
import formJson from "./data/input-usuarios.json";
import { CardHeader } from "@mui/material";
import { CustomForm } from "components/CustomForm/CustomForm";
import { createUsuario } from "apis";

export const Form = () => {
  const handleCreateUsuarios = (obj: any) =>{
    createUsuario(obj)
    .then((resp) => console.log(resp))
  }
  return (
    <Card sx={{ minWidth: 275, width: "60%", marginRight: 10 }}>
      <CardHeader
        sx={{ backgroundColor: "green", color: "white" }}
        title="Alta de Usuarioses"
      />
      <CustomForm
        data={formJson}
        enviar={handleCreateUsuarios}
        validationSchema={validationSchema}
        initialValues={initialValues}
      />
    </Card>
  );
};
