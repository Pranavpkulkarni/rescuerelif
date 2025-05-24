// src/components/Navbar.tsx
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import { Badge } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ContentSection from "./Template";
import CardRow from "./NewsTemplate";

const Navbar: React.FC = () => {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <AppBar
          position="static"
          sx={{
            backgroundColor: "#009e5a",
            boxShadow: 0,
          }}
        >
          <Toolbar disableGutters sx={{ px: 2 }}>
            <Typography
              variant="h6"
              sx={{
                flexGrow: 1,
                pl: 7,
                fontWeight: "bold",
                fontFamily: `'Brush Script MT', cursive`,
                fontSize: "1.8rem",
              }}
            >
              Rescue & Relief
            </Typography>

            <Box sx={{ mr: 7, display: "flex", gap: 1, alignItems: "center" }}>
              <Link
                component={RouterLink}
                to="/"
                color="inherit"
                underline="none"
              >
                <Button color="inherit">Home</Button>
              </Link>
              <Link
                component={RouterLink}
                to="/about"
                color="inherit"
                underline="none"
              >
                <Button color="inherit">About</Button>
              </Link>
              <Link
                component={RouterLink}
                to="/contact"
                color="inherit"
                underline="none"
              >
                <Button color="inherit">Contact</Button>
              </Link>
              <Link
                component={RouterLink}
                to="/donate"
                color="inherit"
                underline="none"
              >
                <Badge badgeContent="10+" color="error" sx={{ ml: 1 }}>
                  <Button
                    variant="contained"
                    color="error"
                    startIcon={<FavoriteIcon />}
                  >
                    Donate
                  </Button>
                </Badge>
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <ContentSection />
      <CardRow/>
    </>
  );
};

export default Navbar;
