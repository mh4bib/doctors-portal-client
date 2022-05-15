import { Route, Routes } from 'react-router-dom';
import './App.css';
import Appointments from './Pages/Appointments/Appointments';
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header/Header';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/appointments' element={<Appointments></Appointments>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
