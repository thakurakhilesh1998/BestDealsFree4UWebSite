import React from 'react';
import {NavBar} from './NavBar/NavBar';
import {Earning_Offers} from './Earning_Offers/Earning_Offers';
import {About} from './About/About';
import {Footer} from './Footer/Footer';
import {Deals} from './Deals';
import {Switch,Route} from 'react-router-dom';


const App=()=>{

  return(<>
    <NavBar/>
    <Switch>
      <Route exact path="/" component={Deals}/>
      <Route exact path="/earning_offers" component={Earning_Offers}/>
      <Route exact path="/about" component={About}/>
    </Switch>
    <Footer/>
  </>);
}

export default App;