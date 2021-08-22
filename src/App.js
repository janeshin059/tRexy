import logo from './logo.svg';
import './App.css';
import Main from './components/Game/Main';
import DrawingPage from './components/pages/DrawingPage';
import Routes from '../../tRexy/src/route/Route';

function App() {
  return (
    <div className="App">
    {/* <Main></Main> */}
    <Routes></Routes>
    </div>
  );
}

export default App;
