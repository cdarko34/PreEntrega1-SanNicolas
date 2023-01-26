import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Hero from './components/Momo';

function App() {
  return (
    <>
      <NavBar background={"transparent"} />
      <ItemListContainer greeting="Lista de Productos" />
      <Hero title={"Momo Store"} />
    </>
  );
}

export default App;
