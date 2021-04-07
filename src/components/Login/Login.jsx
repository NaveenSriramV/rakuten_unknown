import React, { useState } from "react";
import { Button, Grid, Typography, TextField, Divider , useMediaQuery} from "@material-ui/core";
import makeStyles from "./LoginStyle";
import axios from "axios";
import { useTheme } from '@material-ui/core/styles';


function Login({setInvestorLogin}) {
  const classes = makeStyles();
  const [FormDetailsCompany, setFormDetailsCompany] = useState({});

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('lg'));

  const onchangeCompany = (e) => {
    setFormDetailsCompany({ ...FormDetailsCompany, [e.target.name]: e.target.value });
  };

  const onSubmitCompany = (e) => {
      e.preventDefault();
      // console.log(FormDetails);
      axios.post('http://localhost:8000/login',FormDetailsCompany)
        .then((res)=>{
          // console.log(res.data)
          if(res.data){


            const id= res.data._id;
            window.location=`/dashboard/${id}`
          }
          else{
            alert('Wrong Email or Password')
          }
        })
      
    
  };
  const [FormDetailsInvestor, setFormDetailsInvestor] = useState({});

  const onchangeInvestor = (e) => {
    setFormDetailsInvestor({ ...FormDetailsInvestor, [e.target.name]: e.target.value });
  };

  const onSubmitInvestor = (e) => {
      e.preventDefault();
      // console.log(FormDetails);
      axios.post('http://localhost:8000/loginInvestor',FormDetailsInvestor)
        .then((res)=>{
          setInvestorLogin(true)
          // console.log(res.data)
          if(res.data){


            // const id= res.data._id;
            window.location=`/home`
          }
          else{
            alert('Wrong Email or Password')
          }
        })
      
    
  };

  return (
    <Grid className={classes.body} justify="center" container>
      <Grid container spacing={3} justify="center" className={classes.grid}>
        <form onSubmit={onSubmitCompany}>
          <Typography className={classes.header} variant="h5" gutterBottom>
            Login as company
          </Typography>
          <TextField
            name="Email"
            onChange={onchangeCompany}
            className={classes.textField}
            label="E-mail"
            color="secondary"
            fullWidth
            required
            type="email"
          />
          <TextField
            name="Password"
            onChange={onchangeCompany}
            className={classes.textField}
            label="Password"
            color="secondary"
            type="password"
            fullWidth
            required
          />
          <Button
            className={classes.button}
            onChange={onchangeCompany}
            color="secondary"
            type="submit"
            variant="contained"
          >
            Login
          </Button>
        </form>
        <Typography>Want to register your company? <a href="/register">Click to register</a></Typography> 
      </Grid>
      {matches?
      <Divider orientation='vertical' className={classes.line} flexItem></Divider>:<></>
    }

      <Grid container spacing={3} justify="center" className={classes.grid}>
        <form onSubmit={onSubmitInvestor}>
          <Typography className={classes.header} variant="h5" gutterBottom>
            Login as Investor
          </Typography>
          <TextField
            name="Phone"
            onChange={onchangeInvestor}
            className={classes.textField}
            label="Phone"
            color="secondary"
            fullWidth
            required
            type="tel"
          />
          <TextField
            name="Password"
            onChange={onchangeInvestor}
            className={classes.textField}
            label="Password"
            color="secondary"
            type="password"
            fullWidth
            required
          />
          <Button
            className={classes.button}
            onChange={onchangeInvestor}
            color="secondary"
            type="submit"
            variant="contained"
          >
            Login
          </Button>
        </form>
        <Typography>Dont have an account yet? <a href="/register/investor">Click to register</a></Typography> 
      </Grid>
    </Grid>
  );
}
export default Login;
