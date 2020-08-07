import React from "react";
import "./App.css";
import Main from "./componenets/Main";
import { Drawer } from "react-mdl";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  withTheme,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import PhotoIcon from "@material-ui/icons/Photo";
import ForumIcon from "@material-ui/icons/Forum";

const useStyles = makeStyles((theme) => ({
  drawerPaper: { width: "inherit" },
  link: {
    textDecoration: "none",
    color: theme.palette.text.primary,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div
      className="App"
      style={{ display: "flex", width: "100%", height: "1000px" }}
    >
      <div className="DrawerCard">
        <Drawer
          style={{ width: "220px" }}
          variant="temporary"
          anchor="left"
          open={true}
          classes={{ paper: classes.drawerPaper }}
        >
          <List>
            <Link to="/" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={"Home"} />
              </ListItem>
            </Link>
            <Link to="/Gallery" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <PhotoIcon />
                </ListItemIcon>
                <ListItemText primary={"Gallery"} />
              </ListItem>
            </Link>
  

            <Link to="/ChatZone" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <ForumIcon />
                </ListItemIcon>
                <ListItemText primary={"ChatZone"} />
              </ListItem>
            </Link>

            <Link to="/about" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary={"About"} />
              </ListItem>
            </Link>
            <Link to="/ChatZone" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <ForumIcon />
                </ListItemIcon>
                <ListItemText primary={"Groups"} />
              </ListItem>
            </Link>

            <Link to="/ChatZone" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <ForumIcon />
                </ListItemIcon>
                <ListItemText primary={"My Skill"} />
              </ListItem>
            </Link>

            <Link to="/ChatZone" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <ForumIcon />
                </ListItemIcon>
                <ListItemText primary={"Admin"} />
              </ListItem>
            </Link>

            <Link to="/ChatZone" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <ForumIcon />
                </ListItemIcon>
                <ListItemText primary={"Download"} />
              </ListItem>
            </Link>

            <Link to="/ChatZone" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <ForumIcon />
                </ListItemIcon>
                <ListItemText primary={"Teamwork"} />
              </ListItem>
            </Link>



          <Link to="/Login" className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary={"Login"} />
            </ListItem>
          </Link>

          <Link to="/Register" className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <AccountBoxIcon />
              </ListItemIcon>
              <ListItemText primary={"Register"} />
            </ListItem>
          </Link>
          <Link to="/ChatZone" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <ForumIcon />
                </ListItemIcon>
                <ListItemText primary={"Logout"} />
              </ListItem>
            </Link>
          </List>


        </Drawer>

        
      </div>
      <div
        className="MainCard"
        style={{ justifyContent: "center", flexGrow: 4 }}
      >
        <Main />
      </div>
    </div>
  );
}

export default App;
