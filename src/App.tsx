import { Route, Routes } from "react-router-dom"
import ExamplePage from "./pages/ExamplePage/ExamplePage"
import LandingPage from "./pages/LandingPage/LandingPage"
import { ExercisePage } from "./pages/ExercisePage.tsx/ExercisePage"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/example" element={<ExamplePage/>}/>
      <Route path="/exercise" element={<ExercisePage/>}/>
    </Routes>
  )
}
