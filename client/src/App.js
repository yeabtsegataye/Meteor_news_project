import './App.css';
import {   BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/Home'
import AddNews from './components/AddNews';
import NewsDitaile from './components/NewsDitail';
import Nopage from './components/404';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/AddNews" element={<AddNews />} />
         <Route path='/NewsDitail/:id' element={<NewsDitaile />} />
         <Route path='*' element={<Nopage />} />
       </Routes>
  </BrowserRouter>
)}

export default App;
