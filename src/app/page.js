import React from 'react';
import Layout from '../layout'; // Asegúrate de que la ruta del import es correcta

export default function Home() {
    return (
        <Layout>
            <header>
                <h1>Bienvenido a Rent-A-Car</h1>
            </header>
            <section>
                <p>¡Explora, gestiona y más!</p>
                <p>Navega a través del menú para comenzar a gestionar los vehículos, clientes y alquileres.</p>
            </section>
            <footer>
                <div>© 2024 Rent-A-Car. Todos los derechos reservados.</div>
                <div>Contacto: info@rentacar.com</div>
            </footer>
        </Layout>
    );
}

