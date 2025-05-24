import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import { Badge } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";


const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

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
          <Toolbar
            disableGutters
            sx={{
              px: { xs: 2, sm: 3, md: 4 }, 
              flexDirection: { xs: "row", sm: "row" },
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* Logo/Title */}
            <Typography
              variant="h6"
              sx={{
                flexGrow: { xs: 1, sm: 1 },
                pl: { xs: 2, sm: 4, md: 7 },
                fontWeight: "bold",
                fontFamily: `'Brush Script MT', cursive`,
                fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.8rem" }, 
              }}
            >
              Rescue & Relief
            </Typography>

            {/* Desktop Menu */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" }, 
                mr: { md: 7 },
                gap: { xs: 0.5, md: 1 },
                alignItems: "center",
              }}
            >
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
                    sx={{ fontSize: { xs: "0.75rem", md: "0.875rem" } }} 
                  >
                    Donate
                  </Button>
                </Badge>
              </Link>
            </Box>

            {/* Mobile Menu Icon */}
            <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuOpen}
                sx={{ mr: 1 }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
                PaperProps={{
                  sx: {
                    width: "100%",
                    maxWidth: "250px",
                    backgroundColor: "#009e5a",
                    color: "white",
                  },
                }}
              >
                <MenuItem onClick={handleMenuClose}>
                  <Link
                    component={RouterLink}
                    to="/"
                    color="inherit"
                    underline="none"
                    sx={{ width: "100%" }}
                  >
                    Home
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <Link
                    component={RouterLink}
                    to="/about"
                    color="inherit"
                    underline="none"
                    sx={{ width: "100%" }}
                  >
                    About
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <Link
                    component={RouterLink}
                    to="/contact"
                    color="inherit"
                    underline="none"
                    sx={{ width: "100%" }}
                  >
                    Contact
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  <Link
                    component={RouterLink}
                    to="/donate"
                    color="inherit"
                    underline="none"
                    sx={{ width: "100%" }}
                  >
                    <Badge badgeContent="10+" color="error">
                      Donate
                    </Badge>
                  </Link>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

    </>
  );
};

export default Navbar;