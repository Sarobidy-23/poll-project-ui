import { Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login'
import Home from './pages/landing/Home';

function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>
  );
}

export default App;
