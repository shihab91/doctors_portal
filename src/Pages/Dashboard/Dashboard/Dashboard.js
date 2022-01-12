import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
// import DashboardHome from '../DashboardHome/DashboardHome';
import { Outlet } from "react-router-dom";
// import MakeAdmin from '../MakeAdmin/MakeAdmin';
// import AddDoctor from '../AddDoctor/AddDoctor';
import { MdOutlineCalendarToday } from "react-icons/md";
import { CgMenuGridR } from "react-icons/cg";
import { MdSupervisorAccount } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";
import useAuth from "../../../hooks/useAuth";
// import AdminRoute from '../../Login/AdminRoute/AdminRoute';

const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { admin } = useAuth();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const style = {
    textDecoration: "none",
    color: "white",
  };
  const dashboardIconStyle = {
    fontSize: "25px",
    margin: "8px 15px 8px 0 ",
  };
  const drawer = (
    <div
      style={{
        height: "100%",
        background: "var(--dashboard-bg)",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Toolbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          ml: -6,
          mt: -40,
          justifyContent: "center",
        }}
      >
        <NavLink style={style} to="/appointment">
          <Button color="inherit">
            <MdOutlineCalendarToday style={dashboardIconStyle} /> Appointment
          </Button>
        </NavLink>
        <NavLink style={style} to="/dashboard">
          <Button color="inherit">
            <CgMenuGridR style={dashboardIconStyle} />
            Dashboard
          </Button>
        </NavLink>
        {admin && (
          <NavLink style={style} to={`/dashboard/makeAdmin`}>
            <Button color="inherit">
              <RiAdminLine style={dashboardIconStyle} /> Make Admin
            </Button>
          </NavLink>
        )}
        {admin && (
          <NavLink style={style} to={`/dashboard/addDoctor`}>
            <Button color="inherit">
              <MdSupervisorAccount style={dashboardIconStyle} /> Add Doctor
            </Button>
          </NavLink>
        )}
      </Box>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          background: "none",
          boxShadow: "none",
          color: "black",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{}}>
            Appointments
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
