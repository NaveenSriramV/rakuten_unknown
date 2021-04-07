import React,{useState} from 'react'
import { Button, Grid, Typography,TextField, } from '@material-ui/core'
import makeStyles from './ContactStyle'
import axios from 'axios'


function Contact() {
    const [messages, setMessages] = useState([])
    const id=window.location.pathname.slice(9)
    // console.log(id);

    
    const onChange=(e)=>{
        setMessages({...messages,[e.target.name]:e.target.value})
    }
    
    const onSubmit=(e)=>{
        e.preventDefault();
        console.log(messages);

        axios.post(`http://localhost:8000/message/${id}`,messages)
            .then((res)=>{
                // console.log(res.data);
                alert('Message Sent');
                window.location='/home'
            })

    }


    const classes= makeStyles();
    return (
        <Grid className={classes.body} container justify='center'>

        <Grid className={classes.paper} container justify='center'>
            <form onSubmit={onSubmit}>

                <Typography  className={classes.heading} variant='h5' gutterBottom>Contact This Company</Typography>
                <TextField onChange={onChange} name='InvestorName'  className={classes.input} label='Name'  color="secondary"  fullWidth required variant='outlined' />
                <TextField onChange={onChange} name='InvestorContact' className={classes.input} label='Contact Number'  color="secondary"  fullWidth required variant='outlined' />
                <TextField onChange={onChange} name='Message' className={classes.input} label='Your Message'  color="secondary" multiline rows={4}  fullWidth require variant='outlined' required />
                <Button type='submit' color='secondary' variant='contained' className={classes.button}>Send</Button>
                <Button href='/home' color='secondary' variant='outlined' className={classes.button}>Cancel</Button>
            </form>
                
    
        </Grid>
        </Grid>
    )
}

export default Contact
