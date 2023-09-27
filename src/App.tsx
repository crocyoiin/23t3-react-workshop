import { Route, Routes } from "react-router-dom"
import ExamplePage from "./pages/ExamplePage/ExamplePage"
import LandingPage from "./pages/LandingPage/LandingPage"
import { ExercisePage } from "./pages/ExercisePage/ExercisePage"
import SolutionPage from "./pages/SolutionPage/SolutionPage"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/example" element={<ExamplePage/>}/>
      <Route path="/exercise" element={<ExercisePage/>}/>
      <Route path="/solution" element={<SolutionPage/>}/>
    </Routes>
  )
}
