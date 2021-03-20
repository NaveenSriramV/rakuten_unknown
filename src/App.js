import { Grid } from '@material-ui/core';
import './App.css';
import Cards from './components/Card';
import Contact from './components/Contact';
import Dashboard from './components/Dashboard/Dashboard';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Register from './components/Register.jsx';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Login from './components/Login/Login';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  const [startUp, setstartUp] = useState([]);
  const getStartUp = async () => {
    await axios.get("http://localhost:8000/getStartup").then((res) => {
      var startUpRes = res.data;
      setstartUp(startUpRes);
      console.log("st", startUpRes);
    });
  };

  useEffect(() => {
    getStartUp();
  }, []);

  // const details={CompanyName:'Company Name',Field:'field of work', Linkedin:'linked in link', Website:'company website', Ppt:'google link',InvestorContent:'content of investor', Domain:'domain contents'}

  return (
    <Router>

    <div>
      <Navbar />
      <Grid direction='row'  container justify='center'>
        <Route exact path='/home' >
        {startUp.map((data, index) => (
              <Cards id={data._id} key={data._id} heading={data.CompanyName} body={data.InvestorContent} />
            ))}
        </Route>
        <Route exact path='/register' ><Register/></Route>
        <Route exact path='/login'><Login/></Route>
        <Route exact path='/contact/:id' ><Contact/></Route>
        <Route exact path='/profile/:id' ><Profile/></Route>
        <Route exact path='/dashboard/:id' ><Dashboard details={startUp}  /></Route>
      </Grid>
    </div>
    </Router>
  );
}

export default App;
