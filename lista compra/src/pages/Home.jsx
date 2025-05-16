import { useState, useEffect } from 'react';
import AddItem from '../components/AddItem';
import ItemList from '../components/ItemList';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [productos, setProductos] = useState(() => {
    const saved = localStorage.getItem('productos');
    return saved ? JSON.parse(saved) : [];
  });

  const navigate = useNavigate();

  const addProducto = (producto) => {
    const nuevaLista = [...productos, producto];
    setProductos(nuevaLista);
    localStorage.setItem('productos', JSON.stringify(nuevaLista));
  };

  const eliminarProducto = (index) => {
    const nuevaLista = productos.filter((_, i) => i !== index);
    setProductos(nuevaLista);
    localStorage.setItem('productos', JSON.stringify(nuevaLista));
  };

  return (
    <div className='min-h-screen bg-indigo-200 p-4 py-2'>
      <h1 className='text-2xl  p-1'>Lista de Compras</h1>
      <AddItem onAdd={addProducto} />
      <ItemList productos={productos} onDelete={eliminarProducto} />
      <button className='bg-sky-400 hover:bg-sky-700
       text-white px-4 py-2 rounded-md text-sm font-medium'
      onClick={() => navigate('/checkout')}>Ir al resumen</button>
    </div>
  );
}

export default Home;

      