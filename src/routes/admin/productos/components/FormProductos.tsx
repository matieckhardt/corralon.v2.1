import { Button, Card, CardHeader, Divider, FormControl, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Formik, Form } from "formik";
import { formGroup, inputGrup } from "./styles";
import {
  initialValues,
  validationSchema,
} from "./validations/validationsSchema";
import { CustomInputText, CustomSelect } from "components";
import { useContext } from "react";
import AuthContext from "contexts/AuthContext";

export const FormProductos = () => {
  const {handleCreateProduct,stateProveedores, stateRubros} = useContext(AuthContext)
  return (
    <Card sx={{ margin: 2 }}>
      <CardHeader
       title={<Typography variant="h3">Alta de Productos</Typography>}
      />
      <Divider />
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => handleCreateProduct(values)}
        validationSchema={validationSchema}
      >
        {({handleReset}) => (
          <Form >
              <Box sx={formGroup}>
              <FormControl sx={{ width: "60%" }}>
                <CustomSelect label="Seleccione El Proveedor" name="proveedor">
                  <option value="">Seleccione un proveedor</option>
                  {stateProveedores?.map(({ _id, nombre }) => (
                    <option key={_id} value={nombre}>
                      {nombre}
                    </option>
                  ))}
                </CustomSelect>
              </FormControl>

              <FormControl sx={{ width: "60%" }}>
                <CustomInputText
                  name="nombre"
                  label="Nombre del Producto"
                  placeholder="Seleccione un producto"
                />
              </FormControl>
              <FormControl sx={{ width: "50%" }}>
                <CustomInputText
                  name="marca"
                  label="Marca"
                  placeholder="Seleccione un Marca"
                />
              </FormControl>
              <FormControl sx={{ width: "40%" }}>
                <CustomInputText name="precio" label="Precio" placeholder="" />
              </FormControl>
              <FormControl sx={inputGrup}>
                <CustomSelect label="IVA" name="iva">
                  <option value="">0%</option>
                  <option value="10.5">10.5%</option>
                  <option value="21">21%</option>
                  <option value="27">27%</option>
                  <option value="30">30%</option>
                </CustomSelect>
              </FormControl>
              <FormControl sx={{ width: "60%" }}>
                <CustomSelect label="Rubro" name="rubro">
                  <option value="">Seleccione un rubro</option>
                  {stateRubros?.map(({ _id, nombre }) => (
                    <option key={_id} value={nombre}>
                      {nombre}
                    </option>
                  ))}
                </CustomSelect>
              </FormControl>
          </Box>
          <Box>
          <Button
                type="submit"
                variant="contained"
                sx={{ backgroundColor: "#a5339c",margin:2 }}
              >
                Enviar
              </Button>
              <Button
              onClick={handleReset}
                type="submit"
                variant="contained"
                sx={{ backgroundColor: "#2a74e3",margin:2 }}
              >
                Cancelar
              </Button>
          </Box>
            </Form>
        )}
      </Formik>
      
    </Card>
  );
};
