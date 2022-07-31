import { Formik, Form } from "formik";
import { Button } from "@mui/material";
import { CustomInputText } from "components/CustomInputText/CustomInputText";
import { CustomSelect } from "components/CustomSelect/CustomSelect";
import "./styles.css"

export const CustomForm = ({ data,initialValues,validationSchema, ...props }: any) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        props.enviar(values);
      }}
    >
      {({ handleReset }) => (
        <Form className="form">
          {data.map(({ type, name, placeholder, label, options }: any) => {
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
            } else if (type === "select") {
              return (
                <CustomSelect
                  key={name}
                  label={label}
                  name={name}
                  placeholder="Seleccione"
                >
                  {options?.map(({ id, label }: any) => (
                    <option key={id} value={label}>
                      {label}
                    </option>
                  ))}
                </CustomSelect>
              );
            }

            throw new Error(`El type: ${type}, no es soportado`);
          })}
          <div className="btn_action">
            <Button
              onClick={props.cerrar || handleReset}
              variant="contained"
              type="submit"
              sx={{
                marginRigth: 4,
                fontSize:16,
                backgroundColor: "#0986cf",
              }}
            >
              Cancelar
            </Button>
            <Button
              variant="contained"
              type="submit"
              sx={{
                marginRigth: 4,
                fontSize:18,
                backgroundColor: "green",
                width:100,
                height:50
              }}
            >
              Guardar
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
