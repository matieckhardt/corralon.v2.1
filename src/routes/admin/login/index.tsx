import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";

import LoginForm from "./components/LoginForm";

const loginBackground = require("./images/loginBackground.png");

export default function Login() {
 
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ maxWidth: "500px" }}>
        <Card>
          <img
            style={{ display: "block", width: "100%" }}
            src={loginBackground}
            alt="Bulldozer."
          />
          <Box sx={{ padding: "48px" }}>
            <Typography gutterBottom>Login Administrador</Typography>
            <LoginForm />
          </Box>
        </Card>
        <Box sx={{ marginTop: "12px" }}>
          <Link component={RouterLink} to="/">
            Home
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
