import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Home from './Pages/Home';
import AppRutes from './AppRutes';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <AppRutes/>
        <Home/>
    
    </div>
    </BrowserRouter>
  );
}

export default App;
