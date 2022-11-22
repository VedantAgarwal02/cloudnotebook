// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import NoteState from './context/notes/noteState';

function App() {
  return (
    <>
      {/* <Home/> */}
      <NoteState>
        <Router>
        <Navbar/>
          <Routes>
            <Route path='/' exact element={<Home/>}></Route>
            <Route path='/About' exact element={<About/>}></Route>
          </Routes>
        </Router>
      </NoteState>

      {/* <Router>
        <Route path='/Navbar' element={<Navbar/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/About' element={<About/>}></Route>
      </Router> */}
    </>
  );
}

export default App;
