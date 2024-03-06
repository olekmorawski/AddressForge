import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dapp from "./pages/Dapp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dapp" element={<Dapp />} />
      </Routes>
    </Router>
  );
}

export default App;
