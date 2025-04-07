import React from "react"; 
import One from './components/One';
import Two from  './components/Two';
import Three from  './components/Three';
import Four from  './components/Four';
import Header from  './components/Header';
import {BrowserRouter,Routes,Route} from 'react-router-dom';


const App = () =>{
return(
  <>
  <BrowserRouter>
    <Header/>
      <Routes>
          <Route path="/" element={<One/>}/>
          <Route path="/Two" element={<Two/>}/>
          <Route path="/Three" element={<Three/>}/>
          <Route path="/Four" element={<Four/>}/>
      </Routes>
  </BrowserRouter>
  </>
)
}
export default App