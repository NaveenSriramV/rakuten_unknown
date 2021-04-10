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
    
    const onSubmit=async(e)=>{
        e.preventDefault();
        // console.log(FormDetails.phoneNo);
        let recaptcha = await new firebase.auth.RecaptchaVerifier('recaptcha');
        let number ="+91" + FormDetails.phoneNo;
        await firebase.auth().signInWithPhoneNumber(number,recaptcha).then((e)=>{
            let code = prompt('enter the otp','');
            if (code === null) console.log('error');
            e.confirm(code).then(result=>{
                console.log(result)

            })
        })
        .then(()=>{
            
            // console.log(FormDetails);
            axios.post("http://localhost:8000/investorRegister",FormDetails)
            .then((result)=>{
                if (result.data!='success')
                alert('Cannot add user')
                window.location='/login'
            }
            
        
        );
    })
    .catch(error=>{
        console.error(error)
    })
        
        
    }
    // const handleclick=async()=>{
    //     let recaptcha = await new firebase.auth.RecaptchaVerifier('recaptcha');
    //     let number = '+91 6382729213';
    //     await firebase.auth().signInWithPhoneNumber(number,recaptcha).then((e)=>{
    //         let code = prompt('enter the otp','');
    //         if (code === null) console.log('error');
    //         e.confirm(code).then(result=>{
    //             console.log(result)

    //         })
    //     })
    //     .catch(error=>{
    //         console.error(error)
    //     })
    // }

    return (
        <Grid className={classes.body} justify='center' container>
            <Grid container spacing={3} justify='center' className={classes.grid} >
            {/* <Button onClick={handleclick}>click</Button> */}
            <form onSubmit={onSubmit}>
            <Typography className={classes.header} variant='h5' gutterBottom>Register your company Here</Typography>
                
                <TextField name='name' onChange={onchangec} className={classes.textField} label='Name'  color="secondary"  fullWidth required /> 
                <TextField name='phoneNo' onChange={onchangec} className={classes.textField} label='Phone Number'  color="secondary"  fullWidth required type='tel' /> 
                <TextField name='password' onChange={onchangec} className={classes.textField} label='Password'  color="secondary" type='password' fullWidth required/> 
                <div id="recaptcha"></div>                      
                <Button  className={classes.button} color='secondary' type='submit' variant='contained'>Submit</Button>
            </form>

        
            </Grid>
            </Grid>
      
    )
}

export default RegisterInvestor
