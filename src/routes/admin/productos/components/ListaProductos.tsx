import { useContext } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import AuthContext from "contexts/AuthContext";
import { Card, CardHeader, Typography } from "@mui/material";

export const ListaProductos = () => {
  const {stateProductos} = useContext(AuthContext);
 
  const columns: GridColDef[] = [
    { field: "proveedor", headerName: "Proveedor", width: 200 },
    { field: "nombre", headerName: "Nombre", width: 300 },
    { field: "marca", headerName: "Marca", width: 170 },
    { field: "precio", headerName: "Precio", width: 130 },
    { field: "iva", headerName: "IVA", width: 130 },
    { field: "rubro", headerName: "Rubro", width: 130 },
  ];
  
  return (
    <Card sx={{ margin: 2 }}>
    <CardHeader
     title={<Typography variant="h3">Lista de Productos</Typography>}
    />
    <div style={{ height: 800, width: "100%" }}>
      <DataGrid
        sx={{fontSize:16}}
        getRowId={(row) => row._id}
        rows={stateProductos}
        columns={columns}
        density="comfortable"
        />
        </div>
    </Card>
  );
};
