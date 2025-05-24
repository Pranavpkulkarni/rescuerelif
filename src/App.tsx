
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";

function App() {
  return (
    <>
      <Routes>
        <Route>
          <Route path="/" element={<Navbar />}></Route>
          <Route path="*" element={<div>404: Page not found</div>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
