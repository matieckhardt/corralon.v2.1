import {  Card, CardHeader } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import TextField from '@mui/material/TextField';
import { v4 as uuidv4  } from 'uuid';

interface Acopio {
    materialesAcopio: String[]
}
export const ListVerAcopios = (props:{acopio:Acopio}) => {

    const {acopio} = props
    const columns: GridColDef[] = [
    
        { field: "mercaderia", headerName: "Material", width: 200 },
        { field: "cantidadFaltante", headerName: "Faltante", width: 100 },
        {
            field: "cantidadRetirada",
            headerName: "Cantidad Retirada",
            sortable: false,
            width: 150,
            renderCell: () => {
              return (
                <TextField  placeholder="0"  size="small" />
              );
            },
          },
    ];

    return (
        <Card sx={{ margin: 2, width: "50%" }}>
          <CardHeader
            sx={{ backgroundColor: "#20c997", color: "white" }}
            title="Listado De Acopios"
          />
   <div style={{ height: 800, width: "100%" }}>
      <DataGrid
      sx={{ fontSize: 16 }}
        getRowId={(row) => uuidv4()}
        rows={acopio ? acopio.materialesAcopio : []}
        columns={columns}
        checkboxSelection
      />
    </div>
        </Card>
      );
};