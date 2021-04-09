import { Grid } from '@material-ui/core';
import './App.css';
import Cards from './components/Card/Card';
import Contact from './components/Contact/Contact';
import Dashboard from './components/Dashboard/Dashboard';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Register from './components/Register/Register';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Login from './components/Login/Login';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Message from './components/Messages';
import SimpleSlider from './components/Slider';
import RegisterInvestor from './components/Register/RegisterInvestor';
import Footer from './components/Footer/Footer';


function App() {

  const [InvestorLogin, setInvestorLogin] = useState(false);


  const [startUp, setstartUp] = useState([]);
  const getStartUp = async () => {
    await axios.get("http://localhost:8000/getStartup").then((res) => {
      var startUpRes = res.data;
      setstartUp(startUpRes);
      // console.log("st", startUpRes);
      // console.log(startUpRes[0].messages.length);
    });
  };

  useEffect(() => {
    getStartUp();
  }, []);

  // const details={CompanyName:'Company Name',Field:'field of work', Linkedin:'linked in link', Website:'company website', Ppt:'google link',InvestorContent:'content of investor', Domain:'domain contents'}

  return (
    <Router>

    <div>
      <Navbar InvestorLogin={InvestorLogin} setInvestorLogin={setInvestorLogin}/>
      <Grid direction='row'  container justify='center'>
        <Route exact path='/home' >
          <SimpleSlider/>
        {startUp.map((data) => (
              <Cards 
                InvestorLogin={InvestorLogin}
                id={data._id} key={data._id}
                heading={data.CompanyName}
                body={data.InvestorContent} 
                country={data.Country}
                state={data.State}
                messages={data.messages.length}  
                city={data.City}/>
            ))}
        </Route>
        <Route exact path='/messages/:id' ><Message/></Route>
        <Route exact path='/register' ><Register/></Route>
        <Route exact path='/register/investor' ><RegisterInvestor/></Route>
        <Route exact path='/login'><Login setInvestorLogin={setInvestorLogin} /></Route>
        <Route exact path='/contact/:id' ><Contact/></Route>
        <Route exact path='/profile/:id' ><Profile/></Route>
        <Route exact path='/dashboard/:id' ><Dashboard details={startUp}  /></Route>
      </Grid>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
