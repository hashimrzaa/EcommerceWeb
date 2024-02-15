import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const drawerWidth = 240;
const navItems = ["Home", "Products", ""];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const selector = useSelector((state) => state.CardSlice);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // navigate
  const navigate = useNavigate();

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, index) => {
          return index === 0 ? (
            <ListItem key={index} disablePadding onClick={() => navigate("/")}>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ) : index === 1 ? (
            <ListItem
              key={index}
              disablePadding
              onClick={() => navigate("/products")}
            >
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ) : (
            <ListItem
              key={index}
              disablePadding
              onClick={() => navigate("/yourproducts")}
            >
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText
                  primary={
                    index === 2
                      ? [
                          "Your's",
                          <LocalGroceryStoreOutlinedIcon key={index} />,
                          selector.length > 0 ? selector.length : null,
                        ]
                      : item
                  }
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
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
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            HR
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item, index) => {
              return index === 0 ? (
                <Button
                  key={item}
                  sx={{ color: "#fff" }}
                  onClick={() => navigate("/")}
                >
                  {item}
                </Button>
              ) : index === 1 ? (
                <Button
                  key={item}
                  sx={{ color: "#fff" }}
                  onClick={() => navigate("products")}
                >
                  {item}
                </Button>
              ) : (
                <Button
                  key={item}
                  sx={{ color: "#fff" }}
                  onClick={() => navigate("yourproducts")}
                >
                  {index === 2
                    ? [
                        "Your's",
                        <LocalGroceryStoreOutlinedIcon key={index} />,
                        selector.length > 0 ? selector.length : null,
                      ]
                    : item}
                </Button>
              );
            })}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
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
      </nav>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
