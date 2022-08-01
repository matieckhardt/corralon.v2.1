import { useState, useEffect } from "react";
import { DataGrid, GridApi, GridColDef } from "@mui/x-data-grid";
import { Button, Modal } from "@mui/material";
import formJson from "./data/input-proveedores.json";
import { Box } from "@mui/system";
import { CustomForm } from "components/CustomForm/CustomForm";
import { deleteProveedorDB, getAllProveedores } from "apis";

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
  const [stateProveedores, setStateProveedores] = useState<any>([]);
  const [modalEditar, setModalEditar] = useState(false);
  const abrirCerrarModalEditar = () => {
    setModalEditar(!modalEditar);
  };
  const columns: GridColDef[] = [
    { field: "_id", hide: true },
    { field: "nombre", headerName: "Nombre del Proveedor", width: 130 },
    { field: "razonSocial", headerName: "Razon Social", width: 130 },
    { field: "localidad", headerName: "Localidad", width: 130 },
    { field: "tel", headerName: "telefono", width: 130 },
    { field: "cuit", headerName: "cuit", width: 130 },
    { field: "tipo", headerName: "tipo", width: 130 },
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
        };
        return (
          <Button
            sx={{ backgroundColor: "green", color: "white", fontSize:14}}
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
          return console.log(thisRow);
        };

        return (
          <Button
            sx={{ backgroundColor: "#f53535", color: "white", fontSize:14 }}
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
      <h3>Editar Proveedor</h3>
      <CustomForm data={formJson} cerrar={abrirCerrarModalEditar}/>
    </Box>
  );

  useEffect(() => {
    getAllProveedores().then((resp) => {
      setStateProveedores(resp.data);
    });
  }, []);
  return (
    <div style={{ height: 800, width: "100%" }}>
      <DataGrid
        getRowId={(row) => row._id}
        rows={stateProveedores}
        columns={columns}
      />
      <Modal open={modalEditar} onClose={abrirCerrarModalEditar}>
        {bodyEditar}
      </Modal>
    </div>
  );
};