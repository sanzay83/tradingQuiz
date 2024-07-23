import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Quiz from "./Quiz";
import Result from "./Result";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/results" element={<Result />} />
      </Routes>
    </>
  );
}

export default App;
