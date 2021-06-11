import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Services } from './components/Service/';
import { PrimarySearchAppBar } from './components/Header/index'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <PrimarySearchAppBar></PrimarySearchAppBar>
          </Route>
          <Route path="/" component={Services} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
