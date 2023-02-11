import './App.css';
import AppRouter from './router/AppRouter';
import HeaderNavbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <HeaderNavbar />
      <AppRouter />
    </div>
  );
}

export default App;
