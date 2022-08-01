import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";

export default function AdminNotFound() {
  return (
    <Box
      sx={{
        minHeight: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box>
        <Typography variant="h1">404</Typography>
        <Typography gutterBottom>Página no encontrada.</Typography>
        <Link component={RouterLink} to="/admin">
          Volver al Dashboard
        </Link>
      </Box>
    </Box>
  );
}
