import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom"
import GetStarted from "./components/GetStarted/GetStarted"
import Recipes from "./components/Recipes/Recipes"



function App() {

  return (
    <div className="App mx-auto">
      <Router>
        <Routes>
          <Route index path="/" element={<GetStarted />} />
          <Route path="/recipes" element={<Recipes />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App