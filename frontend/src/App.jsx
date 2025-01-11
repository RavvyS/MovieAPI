import Home from './pages/Home.jsx';
import{Routes ,Route} from 'react-router-dom';
import './App.css'
import Favorites from './pages/Favorites.jsx';
import NavBar from './components/NavBar.jsx';

function App() {
 


  return (
   <div>
    <NavBar/>
<main className='main-content'>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path="/Favorites" element={<Favorites/>}> </Route>

  </Routes>
</main>
</div> 
  ); 
}
export default App;
