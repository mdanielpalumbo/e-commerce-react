import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/styles.scss';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'

function App() {
  return(
    <>
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <ItemListContainer/>
          </Route>
          <Route exact path="/category/:catId">
            <ItemListContainer/>
          </Route>
          <Route exact path="/detail/:itemId">
            <ItemDetailContainer/>
          </Route>
          <Route exact path="/build">
            <h2 className="prox">Próximamente...</h2>
          </Route>
          <Route path="*">
            <h2 className="prox">404</h2>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App;

 