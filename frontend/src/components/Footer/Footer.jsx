import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { AppBar, Button, Toolbar,Grid } from '@material-ui/core';
import { Facebook, GitHub, Help, Instagram, LinkedIn, LocationCity, LocationOn, MailRounded, PhoneAndroidOutlined, SupervisedUserCircle } from '@material-ui/icons';
import makeStyles from './FooterStyle';

export default function Footer() {
    const classes =makeStyles();

  return (
    <AppBar position="static" className={classes.footer}>
    <Grid container justify="center" >
      <Toolbar>
        <Typography variant="body1" color="inherit">
            <Grid container justify="center" direction='column'>
                <Button color="primary" style={{color:"#616161"}}>
                    <u>Customer Support </u>
                    <Help style={{margin:'10px', color:"#616161"}} />
                </Button>
                <Button color="secondary" >
                    <PhoneAndroidOutlined style={{margin:'10px',color:"#a7ffeb" }} />
                    Contact us : +91 635246528
                </Button>
                <Button color="secondary">
                    <MailRounded style={{margin:'10px',color:"#b71c1c" }} />
                    Email : Startup@support.com
                </Button>
                <Button color="secondary">
                    <LocationOn style={{margin:'10px',color:"#ff1744" }} />
                    Headquarters : New Delhi, India
                </Button>
                <br/>
                <Grid container justify="center" >
                    <Button style={{color:'pink'}} >
                        <Instagram/>
                    </Button>
                    <Button style={{color:"#0d47a1"}}>
                        <Facebook/>
                    </Button>
                    <Button style={{color:'#01579b'}}>
                        <LinkedIn/>
                    </Button>

                
                </Grid>
            </Grid>
            

        </Typography>
      </Toolbar>
    </Grid>
  </AppBar>
  );
}