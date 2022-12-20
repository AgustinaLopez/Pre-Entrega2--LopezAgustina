import { ChakraProvider } from '@chakra-ui/react'
import './App.css';
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { Routes, Route, Link } from 'react-router-dom';
import Cards from './components/Cards';
import ItemDetail from './components/ItemDetail';
import productos from'./components/productos.json';


function App() {
  return (
    <div className="App">
      <ChakraProvider> 
        <Navbar />
        <Link to= "/">
        <ItemListContainer greeting={"¡Bienvenidos a Limonero!"} />
        </Link>
      </ChakraProvider>
      <Routes>
        <Route path="/" element= {<Cards />}></Route>
        <Route path="comprar/:cardId" element={<ItemDetail productos={productos} />}></Route>
        <Route path="item/:cardId" element={<ItemDetail productos={productos} />}></Route>
      </Routes>
    </div>
);
}

export default App;
