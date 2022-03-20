import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Profile from './components/Profile';
import Contact from './components/Contact';


const App = () => {
  return (
    <div className="app-wrapper">
      <Header />

      <Sidebar />

      <Profile />

      <Contact />
    </div>
  );
}

export default App;
