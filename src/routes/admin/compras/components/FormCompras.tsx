import { useContext, useEffect, useState } from "react";
import { Box, Button, Card, CardHeader } from "@mui/material";
import { CustomInputText, CustomSelect } from "components";
import AuthContext from "contexts/AuthContext";
import { Form, Formik } from "formik";
import { validationSchema } from "./validations/validationsSchema";
import FormAgregarProducto from "./FormAgregarProducto";
import { CustomTextArea } from "components/CustomTextArea/CustomTextArea";

const FormCompras = () => {
  const { stateProveedores, stateProductos } = useContext(AuthContext);
  const [proveedor, setProveedor] = useState<any>({});
  const [producto, setProducto] = useState<any>({});
  const [proveedorNombre, setProveedorNombre] = useState({} as any);
  const [productoNombre, setProductoNombre] = useState({} as any);

  let proveedorSelectd = stateProveedores.find(
    (obj: any) => obj.nombre === proveedorNombre
  );
  let productoSelected = stateProductos.find(
    (obj: any) => obj.nombre === productoNombre
  );

  useEffect(() => {
    setProveedor(proveedorSelectd);
    setProducto(productoSelected);
  }, [proveedorSelectd, productoSelected]);

  const addForm = () => {
    return (
      <FormAgregarProducto productos={stateProductos} producto={producto} />
    );
  };

  return (
    <Card sx={{ margin: 2 }}>
      <CardHeader
        sx={{ backgroundColor: "#ffc107", color: "white" }}
        title="Alta de Productos"
      />
      <Formik
        initialValues={{
          proveedor: "",
          razonSocial: "",
          tipo: "",
          productos: "",
          nombre: "",
          iva: "",
          precio: "",
          marca: "",
          rubro: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleReset, values, handleChange }) => {
          values.proveedor && setProveedorNombre(values.proveedor);
          values.productos && setProductoNombre(values.productos);
          return (
            <Box sx={{ display: "flex", width: "100%", padding: 2 }}>
              <Form style={{ width: "100%" }}>
                <CustomSelect
                  label="Selecciona Porveedor"
                  name="proveedor"
                  onChange={handleChange}
                >
                  <option value="">Seleccione un proveedor</option>
                  {stateProveedores?.map(({ _id, nombre }) => {
                    return (
                      <option key={_id} value={nombre}>
                        {nombre}
                      </option>
                    );
                  })}
                </CustomSelect>
                <CustomInputText
                  label={"Razon Social"}
                  name={"razonSocial"}
                  value={proveedor?.razonSocial || ""}
                />
                <CustomInputText
                  label={"Condicion Fiscal"}
                  name={"fiscal"}
                  value={proveedor?.fiscal || ""}
                />
                <CustomInputText
                  label={"Tipo"}
                  name={"tipo"}
                  value={proveedor?.tipo || ""}
                />
                <CustomSelect label="IVA" name="iva" placeholder="Seleccione">
                  <option value="FcA">FcA</option>
                  <option value="FcC">FcC</option>
                  <option value="ticket">Ticket</option>
                  <option value="S/C">S/C</option>
                </CustomSelect>
                <CustomInputText label={"Factura"} name={"factura"} />
                <CustomInputText label={"Fecha"} name={"date"} type="date" />

                <FormAgregarProducto
                  productos={stateProductos}
                  producto={producto}
                />

                <Box>
                  <Button
                    onClick={addForm}
                    variant="contained"
                    sx={{
                      fontSize: 14,
                      backgroundColor: "green",
                    }}
                  >
                    Agregar
                  </Button>
                </Box>
                <hr />
               <Box sx={{display:'flex', width:'100%', justifyContent:'space-between'}}>
               <CustomTextArea
                  label="Observeciones"
                  name="observaciones"
                  type="textarea"
                />
                <Box sx={{display:'grid', width:'20%'}}>
                <CustomInputText label={"IVA Total:"} name={"ivaTotal"} />
                <CustomInputText label={"Monto Total:"} name={"montoTotal"} />
                <Box sx={{display:'flex', width:'90%', justifyContent:'space-between'}}>
                <Button type="submit" variant="contained" sx={{width:'40%', backgroundColor:'#ffc107', fontSize:14,color:'black'}} >Ingresar Compra</Button>
                <Button variant="contained" sx={{width:'40%', fontSize:14,}} >Cancelar</Button>
                </Box>
                </Box>
               </Box>
              </Form>
            </Box>
          );
        }}
      </Formik>
    </Card>
  );
};

export default FormCompras;
