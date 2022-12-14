/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useContext } from "react";
import { DataGrid, GridApi, GridColDef } from "@mui/x-data-grid";
import { Button, Card, CardHeader, Modal, Typography } from "@mui/material";
import formJson from "./data/input-clientes.json";
import { Box } from "@mui/system";
import { CustomForm } from "components/CustomForm/CustomForm";
import { deleteClienteDB, updateCliente } from "apis/clientes";
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
export const ListaClientes = () => {
  const { stateClientes, setClientes } = useContext(AuthContext);
  const [dataEdit, setDataEdit] = useState({});
  const [modalEditar, setModalEditar] = useState(false);
  const abrirCerrarModalEditar = () => {
    setModalEditar(!modalEditar);
  };
  const columns: GridColDef[] = [
    { field: "_id", hide: true },
    { field: "nombre", headerName: "Nombre del Cliente", width: 160 },
    { field: "razonSocial", headerName: "Razon Social", width: 160 },
    { field: "fiscal", headerName: "Condicion Fiscal", width: 180 },
    { field: "localidad", headerName: "Localidad", width: 180 },
    { field: "tel", headerName: "telefono", width: 150 },
    { field: "dni", headerName: "dni/cuit", width: 150 },
    { field: "observaciones", headerName: "observaciones", width: 180 },
    {
      field: "editar",
      headerName: "Editar",
      sortable: false,
      renderCell: (params) => {
        const editCliente = () => {
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
          setDataEdit({ thisRow });
        };
        return (
          <Button
            sx={{ backgroundColor: "#1976d2", color: "white", fontSize: 14 }}
            onClick={editCliente}
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
        const deleteCliente = () => {
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
          deleteClienteDB(elemento);
          (() =>
            setTimeout(() => {
              setClientes();
            }, 500))();
        };

        return (
          <Button
            sx={{ backgroundColor: "#f53535", color: "white", fontSize: 14 }}
            onClick={deleteCliente}
          >
            Eliminar
          </Button>
        );
      },
    },
  ];

  const bodyEditar = (
    <Box sx={styles.modal}>
      <Typography variant="h2" gutterBottom>Editar Clientes</Typography>
      <CustomForm
        data={formJson}
        cerrar={abrirCerrarModalEditar}
        dataEdit={dataEdit}
        enviar={updateCliente}
      />
    </Box>
  );

  useEffect(() => {
    setClientes();
  }, []);
  return (
    <Card sx={{ margin: 2 }}>
      <CardHeader
        sx={{ color: "black" }}
        title={ <Typography variant="h3" gutterBottom>Lista de Cliente</Typography>}
      />
      <div style={{ height: 800, width: "100%" }}>
        <DataGrid
         sx={{ fontSize: 18 }}
          getRowId={(row) => row._id}
          rows={stateClientes}
          columns={columns}
        />
        <Modal open={modalEditar} onClose={abrirCerrarModalEditar}>
          {bodyEditar}
        </Modal>
      </div>
    </Card>
  );
};
