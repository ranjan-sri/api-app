import './App.css';
import {Routes, Route} from 'react-router-dom'
import UserList from './components/user-list-component';
import User from './components/user-component';



function App() {
  return (
    <div className="App">
      <Routes>
      <Route  exact path='/' element={<UserList />} />
      <Route path='/user/:id' element={<User />} />
      </Routes>
      
    </div>
  );
}

export default App;
