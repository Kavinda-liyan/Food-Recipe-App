import MidNavigation from "./Components/Navigation/MidNavigation"
import Home from "./Pages/Home"

import RecipeHeader from "./Pages/RecipeHeader"
import Wrapper from "./Pages/Wrapper"
import "./Style.css"

function App() {


  return (
    <>
    <Wrapper>
      <Home/>
      <RecipeHeader/>
      <MidNavigation/>
    </Wrapper>
    
      
    </>
  )
}

export default App
