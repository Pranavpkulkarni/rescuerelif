
import { Route, Router, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";

function App() {
  return (
    <>
      <Routes>
        <Route>
          <Route path="/" element={<Navbar />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
