import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Main from './pages/Main';

function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/app" element={<Main />}/>
      </Routes>
    </Router>
  );
}

export default App;