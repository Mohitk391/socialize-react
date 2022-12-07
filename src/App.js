import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './pages/authentication/Login';
import { Signup } from './pages/authentication/Signup';
import { Bookmarks } from './pages/bookmarks/Bookmarks';
import { Homepage } from './pages/homepage/Homepage';
import { Profile } from './pages/profile/Profile';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
