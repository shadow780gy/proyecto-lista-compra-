function ItemList({ productos, onDelete }) {
  return (
    <div className="flex flex-col  gap-6">
      {productos.map((item, index) => (
        <div
          key={index}
          className="border border-black-700 rounded-md px-4 py-4 flex justify-between items-center shadow-sm"
        >
          <span className="text-base">
            {item.nombre} - ${item.precio.toLocaleString()}
          </span>
          <button
            onClick={() => onDelete(index)}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded-md text-sm font-medium transition-colors"
          >
            Eliminar
          </button>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
