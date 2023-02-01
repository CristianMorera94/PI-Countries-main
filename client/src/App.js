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
          <Route path='/home/:id' component={Detail}/>
          <Route path='/home' component={Home}/>
          <Route path='/activities' component={Create}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
