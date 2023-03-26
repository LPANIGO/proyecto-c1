import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import Nav from "./Nav"
import {BrowserRouter} from "react-router-dom"

const App = () => {
  return (
  <BrowserRouter>

    <Header/>
    <Nav/>
    <Main greeting="Welcome to this landing page!"/>
    <Footer/>
    
  </BrowserRouter>//esto es un fragmento
  )
}

export default App;