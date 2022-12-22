import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AccountsSuggestion } from './pages/accounts-suggestion/AccountsSuggestion';
import { Login } from './pages/authentication/Login';
import { Signup } from './pages/authentication/Signup';
import { Bookmarks } from './pages/bookmarks/Bookmarks';
import { Homepage } from './pages/homepage/Homepage';
import { Profile } from './pages/profile/Profile';
import { RequiresAuth } from "./utils/RequiresAuth";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/bookmarks" element={
          <RequiresAuth>
            <Bookmarks />
            </RequiresAuth>
          } />
        <Route path="/accounts" element={
          <RequiresAuth>
            <AccountsSuggestion />
            </RequiresAuth>
          } />
        <Route path="/profile" element={
          <RequiresAuth>
            <Profile />
            </RequiresAuth>
          } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
