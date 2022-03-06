import { useEffect, useState,useContext } from "react"
import {HashRouter as Router,Routes, Route} from "react-router-dom";
import { ContextProvider } from "./Contexts/Context";
import AddFeedback from "./components/AddFeedack"
import Feedbacks from "./components/Feedbacks"
import Header from "./components/Header"
import Data from "./data/data"
import About from "./pages/About"



const App = () => {
    
    // const [data, setData] = useState(Data)
    
    
  
    
    return(
        <ContextProvider>
            <Router>
            <Header />
            
            <Routes>
            <Route exact path="/" element={
                <>
                 <AddFeedback/>
                 <Feedbacks/> 
                 </>
            } />
            <Route path="/About" element={<About/>} /> 
            </Routes>
            
        </Router>
         </ContextProvider> 
        
       
    )
}

export default App