import './App.css';
import Login from './screens/Login'
import Nav from './components/Nav'

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen transition duration-500">
      <Nav />
      <Login />
    </div>
  );
}

export default App;
