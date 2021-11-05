import Navbar from './components/Navbar/Navbar';
import Home from '../src/Home';
import Footer from './components/Footer/Footer';
import {Route, Routes} from 'react-router-dom';
import AnimeList from './components/Pages/AnimeList';
import Contact from './components/Pages/Contact';
import About from './components/Pages/About';
function App() {


  return (
    
    <div>
      <Navbar />
      
      <Routes>
      <Route exact path='/' element={ <Home/> } />
      <Route path='/animelist' element={ <AnimeList/> } />
      <Route path='/contact' element={ <Contact/> } />
      <Route path='/about' element={ <About/> } />
      </Routes>
      <Footer/>
    </div>
    
  );
}

export default App;

