import { useState } from "react"
import HomePage from "./Components/HomePage/HomePage"
import StartPage from "./Components/StartPage/StartPage"

const App = () => {

const [atHomePage, setAtHomePage]=useState(false)

const handleAtHomePage=()=>{
  setAtHomePage(true);
}


  return (
    <>
    {atHomePage?
      <HomePage />:
      <StartPage onHomePage={handleAtHomePage}/>} 
    </>
  )
}

export default App