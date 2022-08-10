import { useContext } from "react";
import { Box } from "@mui/material";
import { ListVerAcopios } from "./components/ListVerAcopios";
import { useParams } from "react-router-dom";
import AuthContext from "contexts/AuthContext";
import { GroupRetiros } from "./components/GroupRetiros";


const VerAcopios = () => {
  const {stateAcopios,} = useContext(AuthContext);
  const { id } = useParams();

  const acopio = stateAcopios.find(
      ( { _id }) => _id === id            
          
  ) || {materialesAcopio:[], materialesRetirados:[]}

  return (
    <div>
      <h1 style={{ marginLeft: 20}}>Acopios</h1>
      <Box style={{ display: 'flex'}}>      
      <ListVerAcopios acopio={acopio}/>
      <GroupRetiros acopio={acopio}/> 
    </Box>
    </div>
  );
};

export default VerAcopios;