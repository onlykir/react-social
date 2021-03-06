import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Contact from './components/Contact/Contact';
import Dialogs from './components/Dialogs/Dialogs';
import { Routes, Route } from 'react-router-dom';


const App = (props) => {
  return (
    <div className="app_wrapper">
      <Header />
      <Sidebar />
      <div className ="app_wrapper_content">
        <div className="app_wrapper_container">
          <Routes>
            <Route path="/profile" element={<Profile state={props.state.profilePage} addPost={props.addPost} />}/>
            <Route path="/dialogs" element={<Dialogs state={props.state.messagesPage} />}/>
          </Routes>
        </div>
      </div>
      <Contact />
    </div>
  );
}

export default App;
