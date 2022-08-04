import { useContext } from "react";
import { DataGrid, GridApi, GridColDef } from "@mui/x-data-grid";
import { Button, Card, CardHeader } from "@mui/material";
import AuthContext from "contexts/AuthContext";


export const ListaCompras = () => {
  const {stateCompras} = useContext(AuthContext);

  const columns: GridColDef[] = [
    { field: "_id", hide: true },
    { field: "createdAt", headerName: "Fecha Creacion", width: 150 },
    { field: "tipoProveedor", headerName: "Tipo proveedor", width: 130 },
    { field: "proveedor", headerName: "Nombre Proveedor", width: 130 },
    { field: "cuit", headerName: "CUIT", width: 100 },
    { field: "factura", headerName: "N° de Factura", width: 130 },
    { field: "montoTotal", headerName: "Monto Total", width: 130 },
    {
      field: "ver",
      headerName: "Ver Comprobante",
      width: 150,
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
            thisRow[f] = params.getValue(params.id, f);
          });
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
      renderCell: (params) => {
        const deleteProveedor = () => {
          const api: GridApi = params.api;
          const fields = api
            .getAllColumns()
            .map((c) => c.field)
            .filter((c) => c !== "__check__" && !!c);
          const thisRow: any = {};
          fields.forEach((f) => {
            thisRow[f] = params.getValue(params.id, f);
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
      sx={{ backgroundColor: "#ffc107", color: "white" }}
      title="Lista de Proveedores"
    />
    <div style={{ height: 800, width: "100%" }}>
      <DataGrid
        getRowId={(row) => row._id}
        rows={stateCompras}
        columns={columns}
      />
    </div>
    </Card>
  );
};
