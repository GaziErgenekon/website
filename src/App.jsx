import { Route, Routes } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import Home from "./pages/Home"
import BizeKatil from "./pages/BizeKatil"
import Error from "./pages/Error"


function App() {


  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/bize-katil" element={<BizeKatil />} />
        <Route path="/*" element={<Error />} />
      </Route>
    </Routes>
  )
}

export default App
