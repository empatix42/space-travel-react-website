import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Destination from './pages/destination/Destination';
import Crew from './pages/crew/Crew';
import Technology from './pages/technology/Technology';
import NotFound from './pages/not-found/NotFound';
import Header from './components/Header';
import Background from './components/Background';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/destination/:planet?' element={<Destination />}></Route>
        <Route path='/crew/:member?' element={<Crew />}></Route>
        <Route path='/technology/:tech?' element={<Technology />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Background />
    </div>
  );
}

export default App;
