import * as React from "react";
import { NavLink } from "react-router-dom"; // Added
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import logoImg from "../assets/logo/logo circle.png";

// Pages Menu
const pages = [
  { name: "Home", path: "/" },
  { name: "Pet Listing", path: "/petListing" },
  { name: "Donation Campaigns", path: "/donationCampaigns" },
];
const authButtons = [
  { name: "Login", path: "/login" },
  { name: "Register", path: "/register" },
];

// User Settings Menu
const settings = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Logout", path: "/logout" },
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed z-10">
      <Container maxWidth="xl ">
        <Toolbar disableGutters>
          {/* LOGO */}
          <img
            src={logoImg}
            alt="Logo"
            className="hidden md:flex mr-2 w-10 h-10"
          />
          <Typography
            variant="h6"
            noWrap
            component={NavLink} // Edited: Changed to NavLink for routing
            to="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            POWTOPIA
          </Typography>

          {/* Mobile Menu Button */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            {/* Mobile Dropdown Menu */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography
                    component={NavLink} // Added: NavLink for navigation
                    to={page.path}
                    sx={{ textDecoration: "none", color: "inherit" }}
                  >
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Mobile LOGO */}
          <img
            src={logoImg}
            alt="Logo"
            className="flex md:hidden mr-2 w-10 h-10"
          />
          <Typography
            variant="h5"
            noWrap
            component={NavLink} // Edited: Changed to NavLink for routing
            to="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            POWTOPIA
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                component={NavLink} // Added: NavLink for navigation
                to={page.path}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  "&.active": {
                    fontWeight: "bold",
                    textDecoration: "underline",
                  }, // Added: Active link styling
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* login/register buttons */}
          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "flex" } }}>
            {authButtons.map((authButton) => (
              <Button
                key={authButton.name}
                component={NavLink} // Added: NavLink for navigation
                to={authButton.path}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  "&.active": {
                    fontWeight: "bold",
                    textDecoration: "underline",
                  }, // Added: Active link styling
                }}
              >
                {authButton.name}
              </Button>
            ))}
          </Box>

          {/* User Settings Dropdown */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting.name} onClick={handleCloseUserMenu}>
                  <Typography
                    component={NavLink} // Added: NavLink for navigation
                    to={setting.path}
                    sx={{ textDecoration: "none", color: "inherit" }}
                  >
                    {setting.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
