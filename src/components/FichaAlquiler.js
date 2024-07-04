import React from 'react';

const FichaAlquiler = ({ alquiler }) => {
    return (
        <div className="ficha-alquiler">
            <p>Cliente: {alquiler.cliente}</p>
            <p>Vehículo: {alquiler.vehiculo}</p>
            <p>Tiempo de Alquiler: {alquiler.tiempo}</p>
        </div>
    );
}

export default FichaAlquiler;
