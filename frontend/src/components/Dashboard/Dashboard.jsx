import React,{useEffect, useState} from 'react';
import { Button, Grid, Typography,TextField, CircularProgress } from "@material-ui/core";
import makeStyles from './DashboardStyle'
import axios from 'axios';

function Dashboard() {
    const classes=makeStyles();
    const [FormDetails, setFormDetails] = useState(null)

    const [Company, setCompany] = useState(null)
    const id= window.location.pathname.slice(11);
    const getCompany=async()=>{
        await axios.get(`http://localhost:8000/getStartupId/${id}`)
            .then((res)=>{
                setCompany(res.data)
                // console.log(res.data);
            
            })
            // .catch(console.log('unable to load data'))
    }

    useEffect(() => {
        getCompany();
      }, []);
    

    const onchangec=(e)=>{
        // var name=console.log(e.target.name);
        e.preventDefault();
        setFormDetails({...FormDetails,[e.target.name]:e.target.value})
        
    }
    
    const onSubmit=(e)=>{
        e.preventDefault();
        // console.log(FormDetails);

        axios.put(`http://localhost:8000/updateStartup/${id}`,FormDetails)
            .then((res)=>{
                // console.log(res.data);
                alert('Update Successful')
            })

        
    }

    if (!Company) return <CircularProgress/>

    return (
        <Grid className={classes.body} justify='center' direction='column' container>
                <Button href={`/messages/${id}`} style={{margin:'20px'}} color='secondary' variant='contained'>View Messages</Button>
            <Grid container spacing={3} justify='center' className={classes.grid} >
        
            <form onSubmit={onSubmit}>
            <Typography className={classes.header} variant='h5' gutterBottom>{`${Company.CompanyName.toUpperCase()}'s Dashboard`}</Typography>
                
                <TextField defaultValue={Company.FeildOfWork} name='FeildOfWork' onChange={onchangec} className={classes.textField} label='Field of work'  color="secondary" variant='filled' fullWidth  multiline rows={3}/>
                <TextField defaultValue={Company.Linkedin} name='Linkedin' onChange={onchangec} className={classes.textField} label='Linkedin Link'  color="secondary"  fullWidth  variant='filled' multiline  />
                <TextField defaultValue={Company.CompanyWebsite} name='CompanyWebsite' onChange={onchangec} className={classes.textField} label='Company Website'  color="secondary"  fullWidth variant='filled' multiline  />
                <TextField defaultValue={Company.SlideLink} name='SlideLink' onChange={onchangec} className={classes.textField} label='Google Slide Link'  color="secondary" variant='filled'  fullWidth multiline />
                <TextField defaultValue={Company.InvestorContent} name='InvestorContent' onChange={onchangec} className={classes.textField} label='Would you like to say something to your investors' variant='filled'  color="secondary"  fullWidth multiline rows={3}/><br/>
                <TextField defaultValue={Company.Domain} name='Domain' onChange={onchangec} className={classes.textField} label='Domain'  color="secondary"  fullWidth variant='filled' multiline />
                <Button  className={classes.Cbutton} color='primary' type='submit' variant='contained'>Change</Button>
                <Button href='/home' className={classes.button} color='secondary'  variant='contained'>Cancel</Button>
            </form>

            </Grid>
            </Grid>
    )
}

export default Dashboard
