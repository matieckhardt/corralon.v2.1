import { useState, useEffect } from "react";
import { DataGrid, GridApi, GridColDef } from "@mui/x-data-grid";
import { Button, Modal } from "@mui/material";
import formJson from "./data/input-materiales.json";
import { Box } from "@mui/system";
import { CustomForm } from "components/CustomForm/CustomForm";
import { deleteMaterialDB, getAllMateriales } from "apis";

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
export const Lista = () => {
  const [stateMateriales, setStateMateriales] = useState<any>([]);
  const [modalEditar, setModalEditar] = useState(false);
  const abrirCerrarModalEditar = () => {
    setModalEditar(!modalEditar);
  };
  const columns: GridColDef[] = [
    { field: "_id", hide: true },
    { field: "nombre", headerName: "Material", width: 130 },
    { field: "stock", headerName: "Stock", width: 130 },
    { field: "precio", headerName: "Precio", width: 130 },
    { field: "rubro", headerName: "Rubro", width: 130 },
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
        };
        return (
          <Button
            sx={{ backgroundColor: "green", color: "white", fontSize:14}}
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
          return console.log(thisRow);
        };

        return (
          <Button
            sx={{ backgroundColor: "#f53535", color: "white", fontSize:14 }}
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
      <h3>Editar Material</h3>
      <CustomForm data={formJson} cerrar={abrirCerrarModalEditar}/>
    </Box>
  );

  useEffect(() => {
    getAllMateriales().then((resp) => {
      setStateMateriales(resp.data);
    });
  }, []);
  return (
    <div style={{ height: 800, width: "100%" }}>
      <DataGrid
        getRowId={(row) => row._id}
        rows={stateMateriales}
        columns={columns}
      />
      <Modal open={modalEditar} onClose={abrirCerrarModalEditar}>
        {bodyEditar}
      </Modal>
    </div>
  );
};
