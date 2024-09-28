import './App.css';
import Navbar, {externalFunction} from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

function App() {
  console.log(externalFunction)
  return (
    <div className="App">
      <Navbar />
      <Profile data={externalFunction} />
    </div>
  );
}

export default App;
