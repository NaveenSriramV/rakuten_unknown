import { Avatar, Card, CardActionArea, CardContent, Button,CardActions,Grid, Typography } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import makeStyles from './ProfileStyle';
import { CircularProgress } from '@material-ui/core';
import { Web, LinkedIn, Slideshow, MailOutline, PhoneAndroid } from '@material-ui/icons';



function Profile() {
    
    const [Company, setCompany] = useState(null)
    const id= window.location.pathname.slice(9);
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
        // console.log(id);
        
        
        const classes=makeStyles();

        const copy=()=>{
            var text = Company.Contact;
          navigator.clipboard.writeText(text).then(function() {
            // e.preventDefault()
            alert('Number Copied to Clipboard')
          }, function(err) {
          console.error('Async: Could not copy text: ', err);
          });}
        
        if (!Company) return <CircularProgress/>
        // if(InvestorLogin===false){
        //     window.location='/login'
        // }
        
    return (
        <Card className={classes.card} elevation={3} >
            
                <CardContent>

                <Avatar className={classes.avatar}>{Company.CompanyName.slice(0,1).toUpperCase()}</Avatar>
                <Grid container justify='center' alignItems='center' direction='column' >
                    <Typography  variant='h4'>{Company.CompanyName.toUpperCase()}</Typography>
                    <Typography variant='h6' gutterBottom>CEO: {Company.NameofCeo.toUpperCase()}</Typography>
                </Grid>
                    <Typography className={classes.subheading} variant='h6'><u>Our Area Of Work :</u></Typography>
                    <Typography className={classes.contents} variant='body1'>{Company.FeildOfWork}</Typography>

                    <Typography className={classes.subheading} variant='h6'><u>Our Company is Based in :</u></Typography>
                    <Typography className={classes.contents} variant='body1'>{`${Company.Country},${Company.State},${Company.City}`}</Typography>

                    <Typography className={classes.subheading} variant='h6'><u>We Like to say That:</u></Typography>
                    <Typography className={classes.contents} variant='body1'>{Company.InvestorContent}</Typography>

                    <Typography className={classes.subheading} variant='h6'><u>Our Domain:</u></Typography>
                    <Typography className={classes.contents} variant='body1'>{Company.Domain}</Typography>

                    <Typography className={classes.subheading} variant='h6'><u>Our Links :</u></Typography>
                    <Grid container direction='row'>
                        <a href={Company.Linkedin}><LinkedIn style={{height:'30px',width:'30px',margin:'10px'}}/></a>
                        <Typography  variant='button' style={{marginTop:'15px'}} >Linked in</Typography>
                    </Grid>
                    <Grid container direction='row'>
                        <a href={Company.CompanyWebsite}><Web style={{color:'#1de9b6', height:'30px',width:'30px',margin:'10px'}}/></a>
                        <Typography  variant='button' style={{marginTop:'15px'}} >Our Website</Typography>
                    </Grid>
                    <Grid container direction='row'>
                        <a href={Company.SlideLink}><Slideshow style={{ color:'#ef6c00', height:'30px',width:'30px',margin:'10px'}}/></a>
                        <Typography  variant='button' style={{marginTop:'15px'}} >Our Presentation</Typography>
                    </Grid>

                    <Typography className={classes.subheading} variant='h6'><u>Like Our Profile Lets get in Touch:</u></Typography>
                    <Grid container direction='row'>
                        <a href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${Company.Email}`}><MailOutline style={{ color:'#d50000', height:'30px',width:'30px',margin:'10px'}}/></a>
                        <Typography  variant='button' style={{marginTop:'15px'}} >Email</Typography>
                    </Grid>
                    <Grid container direction='row'>
                        <a href='' onClick={copy}><PhoneAndroid style={{ color:'#6200ea', height:'30px',width:'30px',margin:'10px'}}/></a>
                        <Typography  variant='button' style={{marginTop:'15px'}} >Phone</Typography>
                    </Grid>
                    
                    {/* <Typography className={classes.contents} variant='body1'>{Company.Email}</Typography> */}

                </CardContent>
            
            <CardActions>
                    <Button href={`/contact/${id}`} className={classes.button}  size='small' color='secondary' variant='contained'>
                        Send a Message
                    </Button>
            </CardActions> 
        </Card>
    )
}

export default Profile
