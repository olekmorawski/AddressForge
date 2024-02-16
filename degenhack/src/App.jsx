import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
      <IPFSDataProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </IPFSDataProvider>
    </BrowserRouter>
  );
};

export default App;