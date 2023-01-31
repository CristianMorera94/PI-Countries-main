import './App.css';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import LadingPage from './componentes/LadingPage';
import Home from './componentes/Home';
import Detail from './componentes/Detail';
import Create from './componentes/createActivity';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={LadingPage}/>
          <Route exact path='/home' component={Home}/>
          <Route exact path='/home/:id' component={Detail}/>
          <Route exact path='/activities' component={Create}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
