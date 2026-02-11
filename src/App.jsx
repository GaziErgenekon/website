import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainLayout from "./layouts/MainLayout";
import Loading from "./components/ui/Loading";

const Home = lazy(() => import("./pages/Home"));
const Idef = lazy(() => import("./pages/Idef"));
const Error = lazy(() => import("./pages/Error"));

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/idef" element={<Idef />} />
        <Route path="/*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
