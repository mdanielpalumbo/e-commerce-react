import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/styles.scss';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'

function App() {
  return(
    <>
      <BrowserRouter>
      <NavBar/>
        <Switch>
          <Route exact path="/">
            <ItemListContainer/>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App;

