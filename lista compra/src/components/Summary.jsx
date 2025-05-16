function Summary({ productos, nombreCliente, setNombreCliente }) {
  const total = productos.reduce((sum, p) => sum + p.precio, 0);

  return (
    <div>
      <h2>Resumen de la compra</h2>
      <p>Total: ${total.toFixed(2)}</p>
      <input 
        value={nombreCliente}
        onChange={(e) => setNombreCliente(e.target.value)}
        placeholder="Nombre del cliente"
        className="w-full px-3 py-2 border rounded-md mt-2"
        required
      />
    </div>
  );
}

export default Summary;
