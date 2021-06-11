import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Services } from './components/Service/';
import { PrimarySearchAppBar } from './components/Header/index'
import { Register } from './components/Register';
import { Login } from './components/Login';
function App() {
  return (
    <div className="App">
      <Router>
        <PrimarySearchAppBar></PrimarySearchAppBar>
        <Switch>
          <Route path="/register" component={Register} exact />
          <Route path="/" component={Services} exact />
          <Route path="/login" component={Login} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
