
import Sidebar from './Components/Sidebar';
import { BrowserRouter as Router } from 'react-router-dom';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <Router>
      <div>
        <Sidebar />
      </div>
    </Router>
  );
}

export default App;