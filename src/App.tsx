
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import ReadingView from "./components/ReadingView";

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Navbar />}></Route>
          <Route path="/reading/:id" element={<ReadingView />} />
      </Routes>
    </>
  );
}

export default App;
