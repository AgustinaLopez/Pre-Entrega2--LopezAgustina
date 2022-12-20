import './Cards.css';
import Item from './Item';
import productos from'./productos.json'

function Cards() {
    return (
      <div className='contenedor-principal'>
         {productos.map ((producto) => (
          <Item key={producto.id} producto ={producto} />
         ))};
      </div>
    );
}
  
export default Cards;
  