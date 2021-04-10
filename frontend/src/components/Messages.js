import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CircularProgress,
  Typography,
} from "@material-ui/core";
import makeStyles from "./Card/CardStyle";
import axios from "axios";



function Message() {
  const classes = makeStyles();

  const [Company, setCompany] = useState(null)
    const id= window.location.pathname.slice(10);
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

      if (!Company) return <CircularProgress/>
      
      
      return(
        <>
        <Button style={{width:'100%',margin:10}} href={`/dashboard/${id}`} color='secondary' variant='contained'>Dashboard</Button>
      {Company.messages.map((data,index)=>
          <Card key={data._id} className={classes.card}>
      <CardActionArea>
        <CardContent>
          <Typography

            className={classes.heading}
            gutterBottom
            variant="h4"
            component="h2"
            style={{color:'#ff1744'}}
          >
            {`Mr.${data.InvestorName.toUpperCase()}`}
          </Typography>
          
          <Typography variant="body2" component="p">
            <h3>Message: </h3>
            <div style={{ color: "white" }}>{data.Message}</div>
          </Typography>
          <Typography variant="body2" component="p">
            <h3>Contact No: </h3>
            <p style={{ color: "white" }}>{data.InvestorContact}</p>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
      )}
      </>
      )
  
}

export default Message;
