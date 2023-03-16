import { Brand,Cta,Navbar, } from "./Components";
import { Footer,Blog,Header, Possiblities, WhatGPT3,Features } from "./Pages";
import './App.css';


function App() {
  return (
    <div>
      <div>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possiblities/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
   
   )
}

export default App;
