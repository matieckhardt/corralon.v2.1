/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext } from "react";
import { Card, CardHeader, Divider, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import AuthContext from "contexts/AuthContext";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { v4 as uuidv4  } from 'uuid';
interface Acopio {
  materialesAcopio: String[]
}

export const ListStock = (props:{acopio:Acopio}) => {
    const {stateAcopios} = useContext(AuthContext);

const {acopio} = props
    const columns: GridColDef[] = [
        { field: "mercaderia", headerName: "Material", width: 300 },
        { field: "cantidadFaltante", headerName: "Stock Necesario", width: 300 },
    ];

    const top100Films = [
        { title: 'The Shawshank Redemption', year: 1994 },
        { title: 'The Godfather', year: 1972 },
    ];


    return (
        <Card sx={{ margin: 2, width: "40%" }}>
          <Divider />
          <CardHeader
            title={<Typography variant="h3">Listado De Stock</Typography>}
          />
          <Divider />
          <div style={{ display: 'flex', justifyContent: "end", alignItems: "center"}}>
            <b>Search:</b>
         <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        sx={{ width: 300,  margin: "0 10px" }}
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
          {...params}
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: 'search' }}
          />
          )}
          />
         </div>
   <div style={{ height: 800, width: "100%" }}>
      <DataGrid
        sx={{ fontSize: 20 }}
        getRowId={(row) =>  uuidv4()}
        rows={acopio ? acopio.materialesAcopio : []}
        columns={columns}
        density="comfortable"
      />
    </div>
        </Card>
      );
};