import React from 'react';
import { Button, Card, CardActionArea, CardActions, CardContent, Typography } from "@material-ui/core";
import makeStyles from './CardStyle.js'
import Rating from '@material-ui/lab/Rating';
import { LocationCity, LocationOn, VerifiedUser } from '@material-ui/icons';

function Cards({heading, body,id,InvestorLogin,city}) {
    const classes = makeStyles();

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
                    <Rating name="half-rating-read" defaultValue={3.5 } precision={0.5} readOnly size="large" />
            </CardActionArea>
                <CardActions >
                    <Button href={InvestorLogin?`/profile/${id}`:'/login'} size='small' color='secondary' >
                        Know More
                    </Button >
                    <Button  className={classes.location}>
                    <LocationOn />
                    {city}
                    </Button>

                </CardActions>

        </Card>
    )
}

export default Cards
