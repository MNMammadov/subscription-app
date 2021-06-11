import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Services } from './components/Service/Service';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Services} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
