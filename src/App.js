import './App.css';
import NavBar from './shared/components/NavBar';
import Users from './users/pages/Users';

function App() {
  return (
    <div className="App">
      <>
      <NavBar />
      <br/>
        <Users />
      </>
    </div>
  );
}

export default App;
