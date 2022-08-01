import Button from "@mui/material/Button";
import { useContext } from "react";
import formJson from "./data/input-login.json";
import AuthContext from "contexts/AuthContext";
import { Form, Formik } from "formik";
import { CustomInputText } from "components";
import {
  initialValues,
  validationSchema,
} from "../validations/validationsSchema";

export default function LoginForm() {
  const { handleLogin } = useContext(AuthContext);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        handleLogin(values);
      }}
    >
      {(formik) => (
        <Form noValidate>
          {formJson.map(({ type, name, placeholder, label }) => {
            if (type === "input" || type === "password" || type === "email") {
              return (
                <CustomInputText
                  key={name}
                  type={type as any}
                  name={name}
                  label={label}
                  placeholder={placeholder}
                />
              );
            }

            throw new Error(`El type: ${type}, no es soportado`);
          })}
          <Button
            sx={{ display: "block", marginLeft: "auto" }}
            variant="contained"
            type="submit"
          >
            Log In
          </Button>
        </Form>
      )}
    </Formik>
  );
}
