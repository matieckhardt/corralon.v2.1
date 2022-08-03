import { Button, Card, CardHeader, FormControl } from "@mui/material";
import { Box } from "@mui/system";
import { Formik, Form } from "formik";
import { formGroup, inputGrup } from "./styles";
import {
  initialValues,
  validationSchema,
} from "./validations/validationsSchema";
import { CustomInputText, CustomSelect } from "components";
import mock from "./data/mock-proveedores.json";

export const FormProductos = () => {
  const createProducto= (obj:any) => {
    console.log(obj)
  }
  return (
    <Card sx={{ margin: 2 }}>
      <CardHeader
        sx={{ backgroundColor: "#a5339c", color: "white" }}
        title="Alta de Productos"
      />
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => createProducto(values)}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Box sx={formGroup}>
            <Form style={{ width: "100%", display: "flex" }}>
              <FormControl sx={{ width: "60%" }}>
                <CustomSelect label="Seleccione El Proveedor" name="proveedor">
                  <option value="">Seleccione un proveedor</option>
                  {mock.map(({ id, name }) => (
                    <option key={id} value={name}>
                      {name}
                    </option>
                  ))}
                </CustomSelect>
              </FormControl>

              <FormControl sx={{ width: "60%" }}>
                <CustomInputText
                  name="producto"
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
                <CustomSelect label="Rubro" name="proveedor">
                  <option value="">Seleccione un rubro</option>
                  {mock.map(({ id, name }) => (
                    <option key={id} value={name}>
                      {name}
                    </option>
                  ))}
                </CustomSelect>
              </FormControl>
              <Button
                type="submit"
                variant="contained"
                sx={{ backgroundColor: "#a5339c" }}
              >
                Submit
              </Button>
            </Form>
          </Box>
        )}
      </Formik>
    </Card>
  );
};
