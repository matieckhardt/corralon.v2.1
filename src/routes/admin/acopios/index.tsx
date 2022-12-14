import { useContext } from "react";
import { Box } from "@mui/material";
import { ListAcopios } from "./components/ListAcopios";
import { ListStock } from "./components/ListStock";
import { useParams } from "react-router-dom";
import AuthContext from "contexts/AuthContext";

const Acopios = () => {
  const {stateAcopios,} = useContext(AuthContext);
  const { id } = useParams();

  const acopio = stateAcopios.find(
      ( { _id }) => _id === id            
          
  ) || {materialesAcopio:[]}
  return (
    <div>
      <h1 style={{ marginLeft: 20}}>Acopios</h1>
      <Box style={{ display: 'flex'}}>      
      <ListAcopios /> 
      <ListStock acopio={acopio}/>
    </Box>
    </div>
  );
};

export default Acopios;