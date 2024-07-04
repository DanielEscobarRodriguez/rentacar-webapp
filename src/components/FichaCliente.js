import React from 'react';

const FichaCliente = ({ cliente }) => {
    return (
        <div className="ficha-cliente">
            <p>Nombre: {cliente.nombre}</p>
            <p>Número de Alquileres: {cliente.numeroAlquileres}</p>
        </div>
    );
}

export default FichaCliente;
