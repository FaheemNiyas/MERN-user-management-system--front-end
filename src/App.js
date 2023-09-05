import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './component/Create';
import Edit from './component/EditUser';
import View from './component/View';
import AdminDashboard from './component/AdminDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" home element={<Create />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/view" element={<View />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
