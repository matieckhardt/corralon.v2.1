import { Card, CardHeader } from "@mui/material";
import { ListRetiros } from "./ListRetiros";
import { v4 as uuidv4  } from 'uuid';

interface Retirado {
    cantidadFaltante: number,
    cantidadRetirada: number,
    mercaderia: string,
  }
interface Acopio {
  materialesRetirados: Retirado[]
}

export const GroupRetiros = (props:{acopio:Acopio}) => {
  const {acopio} = props

    return (
        <Card sx={{ margin: 2, width: "50%" }}>
          <CardHeader
            sx={{ backgroundColor: "#20c997", color: "white" }}
            title="Listado De Retiros"
          />
   <div style={{ height: 800, width: "100%", overflow: "auto" }}>
    <table style={{ width:'100%'}}>
    <thead > 
        <tr>
            <th style={{ width:'30%'}}>Fecha De Retiro</th>
            <th style={{ width:'30%'}}>Material Retirado</th>
            <th style={{ width:'30%'}}>Cantidad Retirada</th>
        </tr>
        </thead> 
    </table>
      {acopio.materialesRetirados.map( (retirado: any, index) => {
        return(      
            <ListRetiros   key={uuidv4()} retirado={retirado}/>  
        )
      })}
    </div>
        </Card>
      );
};