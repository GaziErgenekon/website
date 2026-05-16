import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainLayout from "./layouts/MainLayout";
import Loading from "./components/ui/Loading";

const Home = lazy(() => import("./pages/Home"));
const Idef = lazy(() => import("./pages/Idef"));
const FiveG = lazy(() => import("./pages/FiveG"));
const BizeKatil = lazy(() => import("./pages/BizeKatil"));
const Ekibimiz = lazy(() => import("./pages/Ekibimiz"));
const Error = lazy(() => import("./pages/Error"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/idef" element={<Idef />} />
          <Route path="/5g-konumlandirma" element={<FiveG />} />
          <Route path="/bize-katil" element={<BizeKatil />} />
          <Route path="/ekibimiz" element={<Ekibimiz />} />
          <Route path="/*" element={<Error />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
