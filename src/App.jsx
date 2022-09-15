import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login'
import Home from './pages/landing/Home';
import Create from './pages/create/Create';
import ProtectedRoute from './route/ProtectedRoute'

function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<Navigate to='/home'/>}/>
      <Route element={<ProtectedRoute/>}>
        <Route path='/home' element={<Home/>}/>
        <Route path='/create' element={<Create/>}/>
      </Route>
    </Routes>
  );
}

export default App;
