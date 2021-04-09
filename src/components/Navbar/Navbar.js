import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import {  PowerSettingsNew } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  appbar: {
    backgroundColor: "#ff1744",
    
  },
  button: {
    textTransform: "none",
    fontFamily: "Poppins, sans-serif",
    fontSize: "16px",
  },
}));

function Navbar({InvestorLogin}) {
  const logout=()=>{
    // setInvestorLogin(false);
    window.localStorage.setItem("login",0)
    window.location='/home'
  }
  
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position="sticky">
        <Toolbar>
          <Link to='/home'>
          <img
            src="https://www.collegeinnovators.com/wp-content/uploads/2018/10/startup-png-22-300x223.png"
            alt="StartUP"
            width="80px"
            height="64px"
            id="image"
            
            />
            </Link>
            <Typography variant="h6" className={classes.title}></Typography>
          {InvestorLogin==1?<Avatar/>:
          <Button href='/login' className={classes.button} color="inherit">
            Login  
          </Button>
          }
            
          {InvestorLogin==1?<Button onClick={logout}><PowerSettingsNew/></Button>:
            <Button href='/register' className={classes.button} color="inherit">
              Register
            </Button>}

        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;