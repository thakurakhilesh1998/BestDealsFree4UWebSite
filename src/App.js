import React from 'react';
import {NavBar} from './NavBar/NavBar';
import {Sliding} from './Sliding_Images/Sliding';
import {CardLayout} from './CardLayout/CardLayout';
import {Footer} from './Footer/Footer';

const App=()=>{

  return(<>
    <NavBar/>
    <Sliding/>
    <CardLayout/>
    <Footer/>
  </>);
}

export default App;