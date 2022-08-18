/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { Box, Button, Card, CardHeader, Divider, Typography } from "@mui/material";
import { CustomInputText, CustomSelect } from "components";
import AuthContext from "contexts/AuthContext";
import { Form, Formik } from "formik";
import { CustomTextArea } from "components/CustomTextArea/CustomTextArea";


const FormCompras = () => {
  const { stateProveedores, stateProductos } = useContext(AuthContext);
  const [proveedor, setProveedor] = useState<any>({});
  const [producto, setProducto] = useState<any>({});
  const [proveedorNombre, setProveedorNombre] = useState({} as any);
  const [productoNombre, setProductoNombre] = useState({} as any);
  const [carritoCompras, setCarritoCompras] = useState([]);

  let proveedorSelectd = stateProveedores.find(
    (obj: any) => obj.nombre === proveedorNombre
  );
  let productoSelected = stateProductos.find(
    (obj: any) => obj.nombre === productoNombre
  );
  const addCart = (data: any) => {
    setCarritoCompras(prev => ({...prev, data}));
  }

  useEffect(() => {
    setProveedor(proveedorSelectd);
    setProducto(productoSelected);
  }, [proveedorSelectd, productoSelected]);

  return (
    <Card sx={{ margin: 2 }}>
      <CardHeader
      title={<Typography variant="h3">Alta de Productos</Typography>}
      />
      <Divider />
      <Formik
        enableReinitialize
        initialValues={{
          proveedor: proveedor?.nombre,
          razonSocial: proveedor?.razonSocial,
          tipoProveedor: proveedor?.tipo,
          condicionFiscal: proveedor?.fiscal,
          factura: "",
          fechaFc: "",
          observaciones: "",
          montoTotal: 0,
          ivaTotal: Number(producto?.iva),
          producto: "",
          nombre: producto?.nombre,
          marca: producto?.marca,
          precio: producto?.precio,
          cantidad: 0,
          comprobante: "",
          montoIVA: 0,
          subTotal: 0,
          iva: Number(producto?.iva),
        }}
        // validationSchema={validationSchema}
        onSubmit={(values) => {
          // console.log(values);
        }}
      >
        {({ values, handleChange }) => {
          values.proveedor && setProveedorNombre(values.proveedor);
          values.producto && setProductoNombre(values.producto);
          return (
            <Box sx={{ display: "flex", width: "100%", padding: 2 }}>
              <Form style={{ width: "100%" }}>
                <CustomSelect label="Selecciona Porveedor" name="proveedor">
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
                  value={values?.razonSocial}
                />
                <CustomInputText
                  label={"Condicion Fiscal"}
                  name="fiscal"
                  value={values?.condicionFiscal || ""}
                />
                <CustomInputText
                  label={"Tipo"}
                  name="tipo"
                  value={values?.tipoProveedor || ""}
                />
                <CustomSelect label="IVA" name="iva" placeholder="Seleccione">
                  <option value="FcA">FcA</option>
                  <option value="FcC">FcC</option>
                  <option value="ticket">Ticket</option>
                  <option value="S/C">S/C</option>
                </CustomSelect>
                <CustomInputText label={"Factura"} name="factura" />
                <CustomInputText label={"Fecha"} name="fechaFc" type="date" />

                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    margin: 2,
                  }}
                >
                  <CustomSelect label="Producto" name="producto">
                    {stateProductos?.map(({ _id, nombre }: any) => (
                      <option key={_id} value={nombre}>
                        {nombre}
                      </option>
                    ))}
                  </CustomSelect>
                  <CustomInputText
                    name="marca"
                    label="Marca"
                    value={values.marca || ""}
                  />
                  <CustomInputText
                    name="precio"
                    label="Precio Unitario"
                    value={values.precio || ""}
                  />
                  <Box sx={{ width: "20%" }}>
                    <CustomSelect
                      label="Guardar Precio Unit..?"
                      name="comprobante"
                    >
                      <option value="FcA">SI</option>
                      <option value="FcC">NO</option>
                    </CustomSelect>
                    <CustomInputText name="ivaUni" label="IVA $ Unitario" />
                  </Box>
                  <Box sx={{ width: "20%" }}>
                    <CustomInputText
                      name="cantidad"
                      label="Cantidad"
                    />
                    <CustomInputText
                      name="precioBruto"
                      label="Precio Bruto"
                      value={values.precio || ""}
                    />
                  </Box>
                  <Box sx={{ width: "20%" }}>
                    <CustomInputText
                      label="IVA %"
                      name="iva"
                      value={values.iva || ""}
                      type="number"
                    />
                    <CustomInputText
                      name="subTotal"
                      label="SubTotal"
                      type="number"
                      value={Number(values.precio) * Number(values.cantidad)}
                    />
                  </Box>
                </Box>

                <Box>
                  <Button
                    variant="contained"
                    sx={{
                      fontSize: 14,
                      backgroundColor: "green",
                    }}
                    onClick={() => addCart(values)}
                  >
                    Agregar
                  </Button>
                </Box>
                <hr />
                <Box
                  sx={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <CustomTextArea
                    label="Observeciones"
                    name="observaciones"
                    type="textarea"
                  />
                  <Box sx={{ display: "grid", width: "20%" }}>
                    <CustomInputText label={"IVA Total:"} name={"ivaTotal"} />
                    <CustomInputText
                      label={"Monto Total:"}
                      name="montoTotal"
                      type="number"
                      value={Number(values.precio) * Number(values.cantidad)}
                    />
                    <Box
                      sx={{
                        display: "flex",
                        width: "90%",
                        justifyContent: "space-between",
                      }}
                    >
                      <Button
                        type="submit"
                        variant="contained"
                        sx={{
                          width: "40%",
                          backgroundColor: "#ffc107",
                          fontSize: 14,
                          color: "black",
                        }}
                      >
                        Ingresar Compra
                      </Button>
                      <Button
                        variant="contained"
                        sx={{ width: "40%", fontSize: 14 }}
                      >
                        Cancelar
                      </Button>
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
