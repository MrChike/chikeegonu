import './App.css';
import Navbar, {externalFunction} from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile />
    </div>
  );
}

export default App;
