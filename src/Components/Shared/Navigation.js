import * as React from "react";
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
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
     <AppBar position="fixed" className="bgColor text-white" sx={{ boxShadow: 0, py: 1 }}>
          <Container maxWidth="xl">
               <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                    <Avatar src="https://i.ibb.co/dm8Qchx/2.png" alt="Logo" draggable="false" sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                         variant="h5"
                         noWrap
                         sx={{
                              mr: 2,
                              display: { xs: "none", md: "flex" },
                              fontWeight: 600,
                              fontSize: "1.8rem",
                              letterSpacing: ".1rem",
                              color: "white",
                              textDecoration: "none",
                              fontFamily: 'Macondo, cursive'
                         }}
                    >
                         <Link to="/" className="title">Tunex</Link>
                    </Typography>
                    <Box
                         sx={{
                              flexGrow: 1,
                              display: { xs: "none", md: "flex" },
                              justifyContent: "flex-end",
                              alignItems: "center",
                         }}
                    >
                         <Link to="/" style={{ textDecoration: 'none' }}>
                              <Button className="navBtn" sx={{ fontFamily: 'Macondo, cursive' }}>Home</Button>
                         </Link>
                         <Link to="/explore" style={{ textDecoration: "none" }}>
                              <Button className="navBtn">Explore</Button>
                         </Link>
                    </Box>               

                    <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                         <Avatar src="https://i.ibb.co/dm8Qchx/2.png" alt="Logo" sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                         <Typography
                              variant="h5"
                              noWrap
                              sx={{
                                   mr: 2,
                                   display: { xs: "flex", md: "none" },
                                   fontWeight: 600,
                                   fontSize: "1.7rem",
                                   letterSpacing: ".1rem",
                                   color: "white",
                                   textDecoration: "none",
                                   justifyContent: 'center',
                                   fontFamily: 'Macondo, cursive'
                              }}
                              className="title"
                         >
                              <Link to="/">Tunex</Link>
                         </Typography>
                    </Box>

                    <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" }, justifyContent: 'flex-end' }}>
                         <IconButton
                              size="large"
                              aria-label="menu bar"
                              aria-controls="menu-appbar"
                              aria-haspopup="true"
                              color="inherit"
                              onClick={handleOpenNavMenu}
                         >
                              <MenuIcon />
                         </IconButton>
                         <Menu
                              id="menu-appbar"
                              anchorEl={anchorElNav}
                              anchorOrigin={{
                                   vertical: "bottom",
                                   horizontal: "left",
                              }}
                              keepMounted
                              transformOrigin={{
                                   vertical: "top",
                                   horizontal: "left",
                              }}
                              open={Boolean(anchorElNav)}
                              onClose={handleCloseNavMenu}
                              sx={{ display: { xs: "block", md: "none" } }}
                         >
                              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                   <MenuItem>
                                        <Link to="/" style={{ textDecoration: 'none', color: '#282c34', fontWeight: 600, padding: '0 10px' }}>
                                             Home
                                        </Link>
                                   </MenuItem>
                                   <MenuItem>
                                        <Link to="/explore" style={{ textDecoration: 'none', color: '#282c34', fontWeight: 600, padding: '0 10px' }}>
                                             Explore
                                        </Link>
                                   </MenuItem>
                              </Box>                              
                         </Menu>
                    </Box>
               </Toolbar>
          </Container>
     </AppBar>
  );
};

export default Navigation;