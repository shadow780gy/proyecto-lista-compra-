function SavePurchase({ productos, nombreCliente }) {
  const handleGuardar = async () => {
    // Validate client name
    if (typeof nombreCliente !== 'string' || nombreCliente.trim() === '') {
      alert("El nombre del cliente no puede estar vacío");
      return;
    }

    const total = productos.reduce((sum, p) => sum + p.precio, 0);

    try {
      const response = await fetch(import.meta.env.VITE_API_URL2, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          clientName: nombreCliente.trim(), // Changed from 'cliente' to 'clientName'
          total,
          products: productos // Changed from 'productos' to 'products' for consistency
        }),
      });

      const data = await response.json();
      
      if (response.ok) {
        alert(' Compra enviada con éxito.');
      } else {
        alert(` Error: ${data.message || 'Error al guardar la compra'}`);
      }
    } catch (error) {
      alert(` Error de red: ${error.message}`);
    }
  };

  return (
    <button onClick={handleGuardar}>Guardar compra</button>
  );
}

export default SavePurchase;
