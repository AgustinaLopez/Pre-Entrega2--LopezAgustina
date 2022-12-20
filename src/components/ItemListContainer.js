import Cards from './Cards';
import { Text, } from '@chakra-ui/react';


function ItemListContainer({greeting}) {
  return (
    <div className="home">
      <Text fontSize='3xl' className='titulosPrincipales'>{greeting}</Text>
      {/* <Cards /> */}
    </div>
  );
}

export default ItemListContainer;