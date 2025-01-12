import Home from './pages/Home.jsx';
import{Routes ,Route} from 'react-router-dom';
import './CSS/App.css';
import Favorites from './pages/Favorites.jsx';
import { MovieProvider } from './contexts/MovieContext.jsx';
import NavBar from './components/NavBar.jsx';

function App() {
 


  return (
   <MovieProvider>
    <NavBar/>
<main className='main-content'>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path="/Favorites" element={<Favorites/>}> </Route>

  </Routes>
</main>
</MovieProvider> 
  ); 
}
export default App;
