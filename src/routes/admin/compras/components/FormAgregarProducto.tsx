import { Box, FormControl } from "@mui/material";
import { CustomInputText, CustomSelect } from "components";
import React from "react";

const FormAgregarProducto = ({productos,producto}:any) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        margin: 2,
      }}
    >
      <CustomSelect label="Producto" name="productos">
        {productos?.map(({ _id, nombre }:any) => (
          <option key={_id} value={nombre}>
            {nombre}
          </option>
        ))}
      </CustomSelect>
      <CustomInputText
        name="marca"
        label="Marca"
        value={producto?.marca || ""}
      />
      <CustomInputText
        name="precio"
        label="Precio Unitario"
        value={producto?.precio || ""}
      />
      <FormControl sx={{ width: "20%" }}>
        <CustomSelect label="Guardar Precio Unit..?" name="comprobante">
          <option value="FcA">SI</option>
          <option value="FcC">NO</option>
        </CustomSelect>
        <CustomInputText name="ivaUni" label="IVA $ Unitario" />
      </FormControl>
      <FormControl sx={{ width: "20%" }}>
        <CustomInputText name="cantidad" label="Cantidad" />
        <CustomInputText name="precioBruto" label="Precio Bruto" />
      </FormControl>
      <FormControl sx={{ width: "20%" }}>
        <CustomInputText name="iva" label="IVA %" value={producto?.iva || ""} />
        <CustomInputText name="montoTotal" label="SubTotal" />
      </FormControl>
    </Box>
  );
};

export default FormAgregarProducto;
