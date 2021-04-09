import React,{useState} from 'react';
import { Button, Grid, Typography,TextField } from "@material-ui/core";
import makeStyles from './RegisterStyle'
import firebase from '../fire';
import axios from 'axios';


function RegisterInvestor() {
    const classes=makeStyles();
    const [FormDetails, setFormDetails] = useState({})

    const onchangec=(e)=>{
        // var name=console.log(e.target.name);
        setFormDetails({...FormDetails,[e.target.name]:e.target.value})
        
    }
    
    const onSubmit=(e)=>{
        e.preventDefault();
        // console.log(FormDetails);
        axios.post("http://localhost:8000/registerInvestor",FormDetails)
            .then(window.location='/home');

        
    }
    const handleclick=async()=>{
        let recaptcha = await new firebase.auth.RecaptchaVerifier('recaptcha');
        let number = '+91 6382729213';
        await firebase.auth().signInWithPhoneNumber(number,recaptcha).then((e)=>{
            let code = prompt('enter the otp','');
            if (code === null) console.log('error');
            e.confirm(code).then(result=>{
                console.log(result)

            })
        })
        .catch(error=>{
            console.error(error)
        })
    }

    return (
        <Grid className={classes.body} justify='center' container>
            <Grid container spacing={3} justify='center' className={classes.grid} >
            <Button onClick={handleclick}>click</Button>
            <form onSubmit={onSubmit}>
            <Typography className={classes.header} variant='h5' gutterBottom>Register your company Here</Typography>
                
                <TextField name='CompanyName' onChange={onchangec} className={classes.textField} label='Name'  color="secondary"  fullWidth required /> 
                <TextField name='CompanyRegNumber' onChange={onchangec} className={classes.textField} label='Phone Number'  color="secondary"  fullWidth required type='tel' /> 
                <TextField name='Password' onChange={onchangec} className={classes.textField} label='OTP'  color="secondary" type='password' fullWidth required/> 
                <Button  className={classes.button} color='secondary' type='submit' variant='contained'>Submit</Button>
            </form>

        
            </Grid>
            </Grid>
      
    )
}

export default RegisterInvestor
