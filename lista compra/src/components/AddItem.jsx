import { useEffect, useState } from 'react';

function AddItem({ onAdd }) {
  const [productosAPI, setProductosAPI] = useState([]);
  const [seleccionado, setSeleccionado] = useState('');

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(' Productos desde API:', data);
        setProductosAPI(data);
      })
      .catch((err) => console.error(' Error al cargar productos:', err));
  }, []);

  const handleAgregar = () => {
    const producto = productosAPI.find(p => p.name === seleccionado);
    if (producto) {
      onAdd({
        nombre: producto.name,
        precio: producto.price
      });
    }
  };

  return (
    <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
      <select
        value={seleccionado}
        onChange={(e) => setSeleccionado(e.target.value)}
        style={{ flex: 1 }}
      >
        <option value="">Selecciona un producto</option>
        {productosAPI.map((prod) => (
          <option key={prod.id} value={prod.name}>
            {prod.name} - ${prod.price.toLocaleString()}
          </option>
        ))}
      </select>
      <button className='bg-sky-600 hover:bg-sky-700
       text-white px-5 py-2 rounded-md text-sm font-medium'
        onClick={handleAgregar}
        
      >
        Agregar
      </button>
    </div>
  );
}

export default AddItem;
