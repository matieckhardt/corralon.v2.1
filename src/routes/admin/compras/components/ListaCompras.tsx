import { useContext } from "react";
import { DataGrid, GridApi, GridColDef } from "@mui/x-data-grid";
import { Button, Card, CardHeader, Typography } from "@mui/material";
import AuthContext from "contexts/AuthContext";
import { useNavigate } from "react-router-dom";


export const ListaCompras = () => {
  const {stateCompras} = useContext(AuthContext);
  const navigate = useNavigate();

  const columns: GridColDef[] = [
    { field: "_id", hide: true },
    { field: "fechaFc", headerName: "Fecha Creación", width: 180 },
    { field: "tipoProveedor", headerName: "Tipo proveedor", width: 180 },
    { field: "proveedor", headerName: "Nombre Proveedor", width: 260 },
    { field: "cuit", headerName: "CUIT", width: 160 },
    { field: "factura", headerName: "N° de Factura", width: 180 },
    { field: "montoTotal", headerName: "Monto Total", width: 150 },
    {
      field: "ver",
      headerName: "Ver Comprobante",
      width: 180,
      sortable: false,
      renderCell: (params) => {
        const viewComprobante = () => {
          const api: GridApi = params.api;
          const fields = api
            .getAllColumns()
            .map((c) => c.field)
            .filter((c) => c !== "__check__" && !!c);
          const thisRow: any = {};
          fields.forEach((f) => {
            thisRow[f] = params.id;
          });
          navigate(`/admin/compras/detalles/${thisRow._id}`)
          return thisRow
        };
        return (
          <Button
            sx={{ backgroundColor: "green", color: "white", fontSize:10}}
            onClick={viewComprobante}
          >
            Ver Coprobante
          </Button>
        );
      },
    },
    {
      field: "eliminar",
      headerName: "Eliminar Comprobante",
      sortable: false,
      width:220,
      renderCell: (params) => {
        const deleteProveedor = () => {
          const api: GridApi = params.api;
          const fields = api
            .getAllColumns()
            .map((c) => c.field)
            .filter((c) => c !== "__check__" && !!c);
          const thisRow: any = {};
          fields.forEach((f) => {
            thisRow[f] = params.id;
          });
        return thisRow
        };

        return (
          <Button
            sx={{ backgroundColor: "#f53535", color: "white", fontSize:12 }}
            onClick={deleteProveedor}
          >
            Eliminar
          </Button>
        );
      },
    },
  ];

  return (
    <Card sx={{ margin: 2 }}>
    <CardHeader
      title={<Typography variant="h3">Lista de Proveedores</Typography>}
    />
    <div style={{ height: 800, width: "100%" }}>
      <DataGrid
        sx={{fontSize:20}}
        getRowId={(row) => row._id}
        rows={stateCompras}
        columns={columns}
        density="comfortable"
      />
    </div>
    </Card>
  );
};
