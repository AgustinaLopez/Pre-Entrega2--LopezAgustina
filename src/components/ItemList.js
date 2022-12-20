import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <>
      {productos.map((producto) => {
        return <Item key={producto.id} product={producto} />;
      })}
    </>
  );
};

export default ItemList;