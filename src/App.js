import React from 'react';
import {NavBar} from './NavBar/NavBar';
import {Sliding} from './Sliding_Images/Sliding';
import {CardLayout} from './CardLayout/CardLayout';

const App=()=>{

  return(<>
    <NavBar/>
    <Sliding/>
    <CardLayout/>
  </>);
}

export default App;