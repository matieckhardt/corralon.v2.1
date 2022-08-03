import { useState, useEffect } from "react";
import { DataGrid, GridApi, GridColDef } from "@mui/x-data-grid";
import { Button, Modal } from "@mui/material";
import {  getAllMateriales } from "apis";

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
export const ListaStock = () => {
  const [stateMateriales, setStateMateriales] = useState<any>([]);
  const [modalEditar, setModalEditar] = useState(false);
  const abrirCerrarModalEditar = () => {
    setModalEditar(!modalEditar);
  };
  const columns: GridColDef[] = [
    { field: "_id", hide: true },
    { field: "nombre", headerName: "Material", width: 130 },
    { field: "razonSocial", headerName: "Stock Necesario", width: 130 },
    
  ];


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
    </div>
  );
};
