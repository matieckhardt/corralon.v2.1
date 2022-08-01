import { styled } from "@mui/material";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";

const Container = styled("div")({
  minHeight: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export default function AdminNotFound() {
  return (
    <Container>
      <div>
        <Typography variant="h1">404</Typography>
        <Typography gutterBottom>Página no encontrada.</Typography>
        <Link component={RouterLink} to="/admin">
          Volver al Dashboard
        </Link>
      </div>
    </Container>
  );
}
