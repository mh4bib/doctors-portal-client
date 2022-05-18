import { Route, Routes } from 'react-router-dom';
import './App.css';
import Appointments from './Pages/Appointments/Appointments';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import RequireAuth from './Pages/Login/RequireAuth';
import Header from './Pages/Shared/Header/Header';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/appointments' element={<RequireAuth><Appointments></Appointments></RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
