import { useState, useContext } from "react";
import { DataGrid, GridApi, GridColDef } from "@mui/x-data-grid";
import { Button, Card, CardHeader, Modal, Typography } from "@mui/material";
import formJson from "./data/input-materiales.json";
import { Box } from "@mui/system";
import { CustomForm } from "components/CustomForm/CustomForm";
import { deleteMaterialDB, updateMaterial } from "apis/materiales";
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
export const ListaMateriales = () => {
  const { stateMateriales, setMateriales } = useContext(AuthContext);
  const [dataEdit, setDataEdit] = useState({});
  const [modalEditar, setModalEditar] = useState(false);
  const abrirCerrarModalEditar = () => {
    setModalEditar(!modalEditar);
  };
  const columns: GridColDef[] = [
    { field: "_id", hide: true },
    { field: "nombre", headerName: "Nombre del Material", width: 300 },
    { field: "precio", headerName: "Precio", width: 160 },
    { field: "rubro", headerName: "Rubro", width: 160 },
    { field: "stock", headerName: "Stock", width: 120 },
    {
      field: "editar",
      headerName: "Editar",
      sortable: false,
      renderCell: (params) => {
        const editMaterial = () => {
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
            sx={{ backgroundColor: "green", color: "white", fontSize: 12 }}
            onClick={editMaterial}
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
        const deleteMaterial = () => {
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
          deleteMaterialDB(elemento);
          (() =>
            setTimeout(() => {
              setMateriales();
            }, 500))();
        };

        return (
          <Button
            sx={{ backgroundColor: "#f53535", color: "white", fontSize: 12 }}
            onClick={deleteMaterial}
          >
            Eliminar
          </Button>
        );
      },
    },
  ];

  const bodyEditar = (
    <Box sx={styles.modal}>
      <Typography variant="h3">Editar Material</Typography>
      <CustomForm
        data={formJson}
        cerrar={abrirCerrarModalEditar}
        dataEdit={dataEdit}
        enviar={updateMaterial}
      />
    </Box>
  );

  return (
    <Card sx={{ margin: 2 }}>
      <CardHeader
        title={<Typography variant="h3">Lista de Materiales</Typography>}
      />
      <div style={{ height: 800, width: "100%" }}>
        <DataGrid
        sx={{fontSize:20}}
          getRowId={(row) => row._id}
          rows={stateMateriales}
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
