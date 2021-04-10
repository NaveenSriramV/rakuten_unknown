import React,{useState} from 'react';
import { Button, Grid, Typography,TextField } from "@material-ui/core";
import makeStyles from './RegisterStyle'
import axios from 'axios';


function Register() {
    const classes=makeStyles();
    const [FormDetails, setFormDetails] = useState({})
    const [fileName, setfileName] = useState(null);
    const [imageData, setimageData] = useState({});
    const onchangec=(e)=>{
        var file = e.target.files;
        if(file){
        var fileName=file.item(0).name;
        console.log("http://localhost:8000/"+fileName)
        setFormDetails({...FormDetails,["companyCertificate"]:"http://localhost:8000/"+fileName})
        }
        if(e.target.name!=" " && e.target.name!=null){
        setFormDetails({...FormDetails,[e.target.name]:e.target.value})
        }
    }
    const fileUpload = (event)=>{
        var file = event.target.files;
        setfileName(file.item(0).name);
        setimageData(event.target.files[0])
    }
    const getFormData = (object) =>{
        var formData = new FormData();
        Object.keys(object).forEach(key => formData.append(key, object[key]));
        formData.append("companyImageName","http://localhost:8000/"+fileName)
        formData.append("companyCertificate",imageData)
        return formData;
    }
    const onSubmit=(e)=>{
        e.preventDefault();
    var form_data=getFormData(FormDetails);
    axios.post("http://localhost:8000/addstartup",form_data).then((res)=>{
           window.location="/login";
        }).catch((err)=>{
        console.log(err)
        })
            

        
    }

    return (
        <Grid className={classes.body} justify='center' container>
            <Grid container spacing={3} justify='center' className={classes.grid} >
        
            <form onSubmit={onSubmit}>
            <Typography className={classes.header} variant='h5' gutterBottom>Register your company Here</Typography>
                
                <TextField name='CompanyName' onChange={onchangec} className={classes.textField} label='Company Name'  color="secondary"  fullWidth required /> 
                <TextField name='CompanyRegNumber' onChange={onchangec} className={classes.textField} label='Company RegNo'  color="secondary"  fullWidth required /> 
                <TextField name='Password' onChange={onchangec} className={classes.textField} label='Password'  color="secondary" type='password' fullWidth required/> 
                {/* <label>upload your company's registeration certificate</label><br/><br/> 
                 <Button variant="contained" component="label">Upload Image<input type="file" accept="image/*" hidden /></Button> */}
                <TextField name='NameofCeo' onChange={onchangec} className={classes.textField} label='Name of CEO'  color="secondary"  fullWidth required/>
                <TextField name='FeildOfWork' onChange={onchangec} className={classes.textField} label='Field of work'  color="secondary"  fullWidth required multiline rows={3}/>
                <TextField name='Linkedin' onChange={onchangec} className={classes.textField} label='Linkedin Link'  color="secondary"  fullWidth required/>
                <TextField name='CompanyWebsite' onChange={onchangec} className={classes.textField} label='Company Website'  color="secondary"  fullWidth />
                <TextField name='Email' onChange={onchangec} className={classes.textField} label='E-mail'  color="secondary"  fullWidth required type='email' />
                <TextField name='Contact' onChange={onchangec} className={classes.textField} label='Contact Number'  color="secondary"  fullWidth required type='tel'/>
                <TextField name='Country' onChange={onchangec} className={classes.textField} label='Country'  color="secondary"  fullWidth required/>
                <TextField name='State' onChange={onchangec} className={classes.textField} label='State'  color="secondary"  fullWidth required/>
                <TextField name='City' onChange={onchangec} className={classes.textField} label='City'  color="secondary"  fullWidth required/>
                <TextField name='SlideLink' onChange={onchangec} className={classes.textField} label='Google Slide Link'  color="secondary"  fullWidth/>
                <TextField name='InvestorContent' onChange={onchangec} className={classes.textField} label='Would you like to say something to your investors'  color="secondary"  fullWidth multiline rows={3}/><br/>
                <TextField name='Domain' onChange={onchangec} className={classes.textField} label='Domain'  color="secondary"  fullWidth required/>

                <Button color="secondary"  variant="contained" className={classes.button}>
                        Upload your Company's Regestration Certificate 
                        <input
                            name="image"
                            accept="image/*"
                            type="file"
                            onChange={fileUpload}
                            />
                </Button>

                <Button  className={classes.button} color='secondary' type='submit' variant='contained'>Submit</Button>
            </form>

        
            </Grid>
            </Grid>
      
    )
}

export default Register
