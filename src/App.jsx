import { Route, Routes } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import Home from "./pages/Home"
import Error from "./pages/Error"


function App() {


  return (
    <Routes>
      <Route element={<MainLayout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Error />} />
      </Route>
    </Routes>
  )
}

export default App
