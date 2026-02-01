import { Route, Routes } from "react-router-dom"
import { lazy, Suspense } from "react"
import MainLayout from "./layouts/MainLayout"
import Loading from "./components/ui/Loading"

const Home = lazy(() => import("./pages/Home"))
const Error = lazy(() => import("./pages/Error"))


function App() {


  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        } />
        <Route path="/*" element={
          <Suspense fallback={<Loading />}>
            <Error />
          </Suspense>
        } />
      </Route>
    </Routes>
  )
}

export default App
