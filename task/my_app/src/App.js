import React from 'react'
import First from "./components/One"
import Second from "./components/Two"
import { BrowserRouter,Routes,Route } from 'react-router-dom'
const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes> 
      <Route path='/' element={<First/>}/>
        <Route path='/One' element={<First/>}/>
        <Route path='/Two' element={<Second/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App