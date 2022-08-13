import { useContext } from "react";
import { Button, Card, CardHeader, Typography } from "@mui/material";
import { DataGrid, GridApi, GridColDef } from "@mui/x-data-grid";
import VisibilityIcon from '@mui/icons-material/Visibility';
import AuthContext from "contexts/AuthContext";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Link } from "react-router-dom";


export const ListAcopios = () => {
    const {stateAcopios,} = useContext(AuthContext);

    const columns: GridColDef[] = [
      { field: "_id", hide: true },
      {
        field: "createdAt",
        headerName: "fecha ventas",
        width: 140,
        renderCell: (params) => {
          return (
            <Typography sx={{ fontSize: 16, minWidth: "100px" }}>
              {new Date(params.formattedValue).toLocaleDateString()}
            </Typography>
          );
        },
      },
      { field: "cliente", headerName: "cliente", width: 180 },
      { field: "", headerName: "ultimo retiro", width: 180 },
      {
        field: "acciones",
        headerName: "Acciones",
        sortable: false,
        width: 120,
        renderCell: (params) => {
          return (
            <Link
              style={{ textDecoration: "none" }}
              to={`/admin/verAcopios/${params.id}`}
            >
              <Button
                sx={{
                  backgroundColor: "#20c997",
                  color: "white",
                  fontSize: 12,
                  minWidth: "100px",
                }}
              >
                Ver Acopio
                <VisibilityIcon sx={{ fontSize: 12, marginLeft: 1 }} />
              </Button>
            </Link>
          );
        },
      },
    ];
    const top100Films = [
        { title: 'The Shawshank Redemption', year: 1994 },
        { title: 'The Godfather', year: 1972 },]
    return (
        <Card sx={{ margin: 2, width: "60%" }}>
          <CardHeader
            sx={{ backgroundColor: "#20c997", color: "white" }}
            title="Listado De Acopios"
          />
         <div style={{ display: 'flex', justifyContent: "end", alignItems: "center"}}>
            <b>Search:</b>
         <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        sx={{ width: 300,   margin: "0 10px" }}
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
      sx={{ fontSize: 16 }}
        getRowId={(row) => row._id}
        rows={stateAcopios}
        columns={columns}
      />
    </div>
        </Card>
      );
};