
import './App.css';
import Principal from './components/principal';
import Origin from './components/Origin';
import Characters from './components/Characters';
import OificalPage from './components/OificalPage';
import Family from './components/Family';
import Footer from './components/Footer';
import TopBar from './components/TopBar';

function App() {
  return (
    <div className="App">
    <TopBar/>
     <Principal/>
     <Origin/>
    
     <h1 className='charactertitle'>Principal Characters of Sanrio</h1> 
     <Characters className='personajes'/>
   <OificalPage/>
   <Family/>
   <Footer/>
    </div>
  );
}

export default App;
