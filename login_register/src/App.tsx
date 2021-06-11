import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Register } from './components/Auth/Register';
import { Home } from './components/Home';
import { Login } from './components/Auth/Login';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="*" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
