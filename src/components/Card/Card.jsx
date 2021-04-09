import React, { useEffect, useState } from 'react';
import { Button, Card, CardActionArea, CardActions, CardContent, Grid, Link, Typography } from "@material-ui/core";
import makeStyles from './CardStyle.js'
import Rating from '@material-ui/lab/Rating';
import { LocationOn, VerifiedUser } from '@material-ui/icons';

function Cards({heading, body,id,city,messages,InvestorLogin}) {
    console.log(messages);
    const classes = makeStyles();

    const [rating, setrating] = useState(messages)

    console.log(window.localStorage.getItem("login"));
    useEffect(() => {
        if(messages<=1)
            setrating(1)
        if(messages>1&&messages<3)
            setrating(2)
        else if(messages>3&&messages<6)
            setrating(3)
        else if(messages>6&&messages<9)
            setrating(4)
        if(messages>9)
            setrating(3)
    }, [])

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardContent>
                    <Typography className={classes.heading} gutterBottom variant='h4' component='h2'>
                        {`${heading.toUpperCase()}        `}
                        {id!=="60563540704f484700fe0fa2"&&id!=="60563438704f484700fe0fa0"?<VerifiedUser style={{color:'lightgreen'}} />:null}
                    {/* <VerifiedUser style={{color:'lightgreen'}} /> */}
                    </Typography>
                    <Typography variant='body2'  component='p' >
                        {body}
                    </Typography>
                    
                </CardContent>
               
                    {messages<=1?
                    <Rating name="half-rating-read" defaultValue={1}  readOnly size="large" />:
                    
                    <Rating name="half-rating-read" defaultValue={rating}  readOnly size="large" />
                    }
                    
            </CardActionArea>

                <CardActions >
                    <Grid container justify="space-between" >
                   
                        <Button href={window.localStorage.getItem("login")==1?`/profile/${id}`:'/login'} size='small' color='secondary' >
                            Know More
                        </Button >
                        
                        <Button  className={classes.location}>
                        <LocationOn />
                        {city}
                        </Button>
                    </Grid>

                </CardActions>

        </Card>
    )
}

export default Cards
