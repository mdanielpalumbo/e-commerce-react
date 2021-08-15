import NavBar from './components/NavBar/NavBar';
import './styles/styles.scss';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return(
    <>
    <NavBar/>
    <ItemListContainer bienvenida="Bienvenidos!"/>
    </>
  )
}

export default App;
