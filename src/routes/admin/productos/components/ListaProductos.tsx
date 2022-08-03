import { useContext } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import AuthContext from "contexts/AuthContext";
import { Card, CardHeader } from "@mui/material";

export const ListaProductos = () => {
  const {stateProductos} = useContext(AuthContext);
 
  const columns: GridColDef[] = [
    { field: "proveedor", headerName: "Proveedor", width: 170 },
    { field: "nombre", headerName: "Nombre", width: 250 },
    { field: "marca", headerName: "Marca", width: 170 },
    { field: "precio", headerName: "Precio", width: 130 },
    { field: "iva", headerName: "IVA", width: 130 },
    { field: "rubro", headerName: "Rubro", width: 130 },
  ];
  
  return (
    <Card sx={{ margin: 2 }}>
    <CardHeader
      sx={{ backgroundColor: "#a5339c", color: "white" }}
      title="Lista de Productos"
    />
    <div style={{ height: 800, width: "100%" }}>

      <DataGrid
        getRowId={(row) => row._id}
        rows={stateProductos}
        columns={columns}
        />
        </div>
    </Card>
  );
};
