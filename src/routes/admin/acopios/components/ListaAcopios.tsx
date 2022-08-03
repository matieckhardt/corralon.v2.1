import { useState, useEffect } from "react";
import { DataGrid, GridApi, GridColDef } from "@mui/x-data-grid";
import { Button, Modal } from "@mui/material";
import {  getAllAcopios } from "apis";

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
export const ListaAcopios = () => {
  const [stateAcopios, setStateAcopios] = useState<any>([]);
  const [modalEditar, setModalEditar] = useState(false);
  const abrirCerrarModalEditar = () => {
    setModalEditar(!modalEditar);
  };
  const columns: GridColDef[] = [
    { field: "_id", hide: true },
    { field: "createdAt", headerName: "Fecha Venta", width: 130 },
    { field: "cliente", headerName: "Cliente", width: 130 },
    { field: "updatedAt", headerName: "Ultimo Retiro", width: 130 },
    { field: "editar",
      headerName: "Acciones",
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
    }
  ];

  

  useEffect(() => {
    getAllAcopios().then((resp) => {
      setStateAcopios(resp.data);
    });
  }, []);
  return (
    <div style={{ height: 800, width: "100%" }}>
      <DataGrid
        getRowId={(row) => row._id}
        rows={stateAcopios}
        columns={columns}
      />
      
    </div>
  );
};
