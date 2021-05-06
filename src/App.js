import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import FormAdd from './pages/FormAdd';
import FormEdit from './pages/FormEdit';

function App() {
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/add-user">
          <FormAdd/>
        </Route>
        <Route exact path="/edit-user/:id">
          <FormEdit/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
