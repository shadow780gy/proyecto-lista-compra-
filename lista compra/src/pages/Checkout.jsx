import { useState, useEffect } from 'react';
import Summary from '../components/Summary';
import SavePurchase from '../components/SavePurchase';

function Checkout() {
  const [productos, setProductos] = useState([]);
  const [nombreCliente, setNombreCliente] = useState('');

  useEffect(() => {
    const datos = localStorage.getItem('productos');
    if (datos) {
      setProductos(JSON.parse(datos));
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-200 flex items-center justify-center p-4">
      <div className="bg-indigo-200 rounded-xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Resumen</h1>
        
        <Summary
          productos={productos}
          nombreCliente={nombreCliente}
          setNombreCliente={setNombreCliente}
        />

        <div className="mt-4 bg-blue-400 hover:bg-blue-500 px-5 py-2
        rounded-md text-white font-medium">
          <SavePurchase
            productos={productos}
            nombreCliente={nombreCliente}
          />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
