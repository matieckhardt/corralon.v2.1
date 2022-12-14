import { useState, useContext } from "react";
import { DataGrid, GridApi, GridColDef } from "@mui/x-data-grid";
import { Button, Card, CardHeader, Modal, Typography } from "@mui/material";
import formJson from "./data/input-proveedores.json";
import { Box } from "@mui/system";
import { CustomForm } from "components/CustomForm/CustomForm";
import { deleteProveedorDB, updateProveedorer } from "apis/proveedores";
import AuthContext from "contexts/AuthContext";

const styles = {
  modal: {
    position: "relative",
    width: 600,
    backgroundColor: "aliceblue",
    borderRadius: 5,
    padding: 4,
    border: "1px solid #000",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
};
export const Listaproveedores = () => {
  const {stateProveedores, setProveedores} = useContext(AuthContext);
  const [dataEdit, setDataEdit] = useState({});
  const [modalEditar, setModalEditar] = useState(false);
  const abrirCerrarModalEditar = () => {
    setModalEditar(!modalEditar);
  };
  const columns: GridColDef[] = [
    { field: "_id", hide: true },
    { field: "nombre", headerName: "Nombre del Proveedor", width: 180 },
    { field: "razonSocial", headerName: "Razon Social", width: 220 },
    { field: "fiscal", headerName: "Condicion Fiscal", width: 220 },
    { field: "localidad", headerName: "Localidad", width: 150 },
    { field: "tel", headerName: "telefono", width: 130 },
    { field: "cuit", headerName: "cuit", width: 130 },
    { field: "tipo", headerName: "tipo", width: 130 },
    { field: "contacto", headerName: "Contacto", width: 130 },
    {
      field: "editar",
      headerName: "Editar",
      sortable: false,
      renderCell: (params) => {
        const editProveedor = () => {
          const api: GridApi = params.api;
          const fields = api
            .getAllColumns()
            .map((c) => c.field)
            .filter((c) => c !== "__check__" && !!c);
          const thisRow: any = {};
          fields.forEach((f) => {
            thisRow[f] = params.getValue(params.id, f);
          });
          abrirCerrarModalEditar();
          setDataEdit({thisRow})
        };
        return (
          <Button
            sx={{ backgroundColor: "green", color: "white", fontSize:12}}
            onClick={editProveedor}
          >
            Editar
          </Button>
        );
      },
    },
    {
      field: "eliminar",
      headerName: "Elimnar",
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
          let elemento = thisRow;
          deleteProveedorDB(elemento);
          (() => setTimeout(() => {
            setProveedores()
          },500))();
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

  const bodyEditar = (
    <Box sx={styles.modal}>
      <Typography variant="h3">Editar de Proveedor</Typography>
      <CustomForm data={formJson} cerrar={abrirCerrarModalEditar} dataEdit={dataEdit} enviar={updateProveedorer} />
    </Box>
  );

  return (
    <Card sx={{ margin: 2 }}>
    <CardHeader
      title={<Typography variant="h3">Lista de Proveedores</Typography>}
    />
    <div style={{ height: 800, width: "100%" }}>
      <DataGrid
        sx={{fontSize:16}}
        getRowId={(row) => row._id}
        rows={stateProveedores}
        columns={columns}
        density="comfortable"
      />
      <Modal open={modalEditar} onClose={abrirCerrarModalEditar}>
        {bodyEditar}
      </Modal>
    </div>
    </Card>
  );
};
