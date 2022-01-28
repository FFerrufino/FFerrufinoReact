import Item from "./Item";

const ItemList = ({ data }) => {
  return (
    <ul className="listbox">
      {data.map((elemento, indice) => {
        <div>{elemento.titulo}</div>;
        return <Item datos={elemento.titulo} id={elemento.id} />;
      })}
    </ul>
  );
};
export default ItemList;
