import { useState, useEffect, useContext } from "react";
import { DataGrid, GridApi, GridColDef } from "@mui/x-data-grid";
import { Button, Card, CardHeader, Modal } from "@mui/material";
import formJson from "./data/input-usuarios.json";
import { Box } from "@mui/system";
import { CustomForm } from "components/CustomForm/CustomForm";
import { deleteUsuarioDB, updateUsuario } from "apis/usuarios";
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
export const ListaUsuarios = () => {
  const { stateUsuarios, setUsuarios } = useContext(AuthContext);
  const [dataEdit, setDataEdit] = useState({});
  const [modalEditar, setModalEditar] = useState(false);
  const abrirCerrarModalEditar = () => {
    setModalEditar(!modalEditar);
  };
  const columns: GridColDef[] = [
    { field: "_id", hide: true },
    { field: "nombre", headerName: "Nombre del Usuario", width: 130 },
    { field: "email", headerName: "Razon Social", width: 130 },
    { field: "rol", headerName: "Condicion Fiscal", width: 130 },
    {
      field: "editar",
      headerName: "Editar",
      sortable: false,
      renderCell: (params) => {
        const editUsuario = () => {
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
            onClick={editUsuario}
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
        const deleteUsuario = () => {
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
          deleteUsuarioDB(elemento);
          (() =>
            setTimeout(() => {
              setUsuarios();
            }, 500))();
        };

        return (
          <Button
            sx={{ backgroundColor: "#f53535", color: "white", fontSize: 14 }}
            onClick={deleteUsuario}
          >
            Eliminar
          </Button>
        );
      },
    },
  ];

  const bodyEditar = (
    <Box sx={styles.modal}>
      <h3>Editar Proveedor</h3>
      <CustomForm
        data={formJson}
        cerrar={abrirCerrarModalEditar}
        dataEdit={dataEdit}
        enviar={updateUsuario}
      />
    </Box>
  );

  useEffect(() => {
    setUsuarios();
  }, []);
  return (
    <Card sx={{ margin: 2 }}>
      <CardHeader
        sx={{ backgroundColor: "#1976d2", color: "white" }}
        title="Lista de Usuarios"
      />
      <div style={{ height: 800, width: "100%" }}>
        <DataGrid
          getRowId={(row) => row._id}
          rows={stateUsuarios}
          columns={columns}
        />
        <Modal open={modalEditar} onClose={abrirCerrarModalEditar}>
          {bodyEditar}
        </Modal>
      </div>
    </Card>
  );
};
