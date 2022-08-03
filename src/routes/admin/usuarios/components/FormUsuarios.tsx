import Card from "@mui/material/Card";
import {
  initialValues,
  validationSchema,
} from "../validations/validationsSchema";
import formJson from "./data/input-usuarios.json";
import { CardHeader } from "@mui/material";
import { CustomForm } from "components/CustomForm/CustomForm";
import { createUsuario } from "apis/usuarios";

export const FormUsuarios = () => {
  const handleCreateUsuario = (obj: any) => {
    createUsuario(obj).then((resp) => console.log(resp));
  };
  return (
    <Card sx={{ width: "97%", margin: "auto" }}>
      <CardHeader
        sx={{ backgroundColor: "#1976d2", color: "white" }}
        title="Alta de Usuarios"
      />
      <CustomForm
        data={formJson}
        enviar={handleCreateUsuario}
        validationSchema={validationSchema}
        initialValues={initialValues}
      />
    </Card>
  );
};
