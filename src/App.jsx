import React from "react";
import "./App.css";
import Main from "./componenets/Main";
import { Drawer } from "react-mdl";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import PhotoIcon from "@material-ui/icons/Photo";
import ForumIcon from "@material-ui/icons/Forum";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import MenuIcon from "@material-ui/icons/Menu";
import Divider from "@material-ui/core/Divider";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const drawerWidth = 200;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "flex",
  },

  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "center",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

function App() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div
      className={classes.root}
      className={classes.root}
      style={{ display: "flex", width: "100%", height: "1000px" }}
    >
      <CssBaseline />
      <AppBar
        position="absolute"
        color="#fff"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography  variant="h6" noWrap>
            Messenger Tribe
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="DrawerCard">
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <Drawer
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton
                size="medium"
                color="inherit"
                onClick={handleDrawerClose}
              >
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </div>
            <Divider />
            <List>
              <Link to="/">
                <ListItem button>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Home"} />
                </ListItem>
              </Link>

              <Link to="/about">
                <ListItem button>
                  <ListItemIcon>
                    <InfoIcon />
                  </ListItemIcon>
                  <ListItemText primary={"About"} />
                </ListItem>
              </Link>

              <Link to="/Login">
                <ListItem button>
                  <ListItemIcon>
                    <AccountCircleIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Login"} />
                </ListItem>
              </Link>

              <Link to="/Register">
                <ListItem button>
                  <ListItemIcon>
                    <AccountBoxIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Register"} />
                </ListItem>
              </Link>

              <Link to="/Gallery">
                <ListItem button>
                  <ListItemIcon>
                    <PhotoIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Gallery"} />
                </ListItem>
              </Link>

              <Link to="/ChatZone">
                <ListItem button>
                  <ListItemIcon>
                    <ForumIcon />
                  </ListItemIcon>
                  <ListItemText primary={"ChatZone"} />
                </ListItem>
              </Link>

              <Link to="/ChatZone">
                <ListItem button>
                  <ListItemIcon>
                    <ForumIcon />
                  </ListItemIcon>
                  <ListItemText primary={"ChatZone"} />
                </ListItem>
              </Link>

              <Link to="/ChatZone">
                <ListItem button>
                  <ListItemIcon>
                    <ForumIcon />
                  </ListItemIcon>
                  <ListItemText primary={"ChatZone"} />
                </ListItem>
              </Link>

              <Link to="/ChatZone">
                <ListItem button>
                  <ListItemIcon>
                    <ForumIcon />
                  </ListItemIcon>
                  <ListItemText primary={"ChatZone"} />
                </ListItem>
              </Link>

              <Link to="/ChatZone">
                <ListItem button>
                  <ListItemIcon>
                    <ForumIcon />
                  </ListItemIcon>
                  <ListItemText primary={"USA"} />
                </ListItem>
              </Link>

              <Link to="/ChatZone">
                <ListItem button>
                  <ListItemIcon>
                    <ForumIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Asia"} />
                </ListItem>
              </Link>

              <Link to="/ChatZone">
                <ListItem button>
                  <ListItemIcon>
                    <ForumIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Iran"} />
                </ListItem>
              </Link>
            </List>
          </Drawer>
          <div className={classes.drawerHeader} />
        </main>
      </div>
      <div
        className="MainCard"
        style={{
          justifyContent: "center",
          marginTop: "5%",
          flexGrow: 4,
          padding: "5%",
          textAlign: "center",
        }}
      >
        <Main />
      </div>
    </div>
  );
}

export default App;
