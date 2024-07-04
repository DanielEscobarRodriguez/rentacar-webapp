
import React from 'react';

const FichaVehiculo = ({ vehiculo }) => {
    return (
        <div className="ficha-vehiculo">
            <p>Modelo: {vehiculo.modelo}</p>
            <p>Tipo de Combustible: {vehiculo.tipoCombustible}</p>
        </div>
    );
}

export default FichaVehiculo;
