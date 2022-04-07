import "bootstrap/dist/css/bootstrap.min.css";
import{Routes, Route, Link} from 'react-router-dom';
import Home from "./Components/home";
import Login from "./Components/login";
import Dashboard from "./Components/dashboard";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <ul className="navbar-nav">
             <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
             </li>
             <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
             </li>
             <li className="nav-item">
                <Link className="nav-link" to="/dashboard">Dashboard</Link>
             </li>
        </ul>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
