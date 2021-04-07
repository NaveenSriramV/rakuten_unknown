import { makeStyles } from "@material-ui/core";

export default makeStyles((theme)=>({
 avatar:{
     color:'#ffebee',
     backgroundColor:'#ff1744',
     width:60,
     height:60,
     margin:20,
     marginLeft: 'auto',
     marginRight: 'auto',
    //  marginTop:-20,
 },
 card:{
     heigh:200,
     width:'70%',
     margin:20,
     backgroundColor:'#212121',
     color:'#bbdefb'
     
 },
 subheading:{
     margin:15,
     color:'#ff1744',
 },
 contents:{
     margin:5,
     marginLeft:15,
     color:'#ede7f6',
     
 },
 button:{
     width:'100%',
     
     borderRadius:30,
     margin:10,
     padding:10,
     backgroundColor:'#ff1744'

 }

}))

