import { useState } from 'react'
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material'
import { CustomTextArea } from 'components/CustomTextArea/CustomTextArea';
import { CustomInputText, CustomSelect } from 'components';
import { Form, Formik } from 'formik';


const DetalleCompra = () => {
    const [detalleDompra, setDetalleCompra] = useState();
    let  {id}  = useParams();

    // getDetalle().then((resp) => console.log(resp))

  return (
    <Box>
        <h2>Detalles de la compra</h2>
        <Formik
        enableReinitialize
        initialValues={{
          proveedor: "",
          razonSocial: "",
          tipoProveedor: "",
          condicionFiscal: "",
          factura: "",
          fechaFc: "",
          observaciones: "",
          montoTotal: "",
          ivaTotal: "",
          producto: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values }) => {
     
          return (
            <Box sx={{ display: "flex", width: "100%", padding: 2 }}>
              <Form style={{ width: "100%" }}>
               
                <CustomInputText
                  label="Proveedor"
                  name={"proveedor"}
                />  
                <CustomInputText
                  label="Razon Social"
                  name={"razonSocial"}
                />
                <CustomInputText
                  label={"Tipo Proveedor"}
                  name="tipoProveedor"
                />
                <CustomInputText
                  label={"Condicion Fiscal"}
                  name="fiscal"
                />
                <CustomInputText label={"Fecha"} name="fechaFc" type="date" />
                <CustomInputText label={"CUIT"} name="cuit" />
                <CustomInputText label={"Comprobante"} name="factura" />
                <CustomInputText label={"Factura"} name="factura" />
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
                </Box>
              </Form>
            </Box>
          );
        }}
      </Formik>
    </Box>
  )
}

export default DetalleCompra