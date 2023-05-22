import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages & Components
import Main from './pages/Main'
import Navbar from './components/NavBar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <div className='pages'>
          <Routes>
            <Route
             path='/' element={<Main />}
             />
          </Routes>

        </div>     
      </BrowserRouter>
    </div>
  );
}

export default App;
