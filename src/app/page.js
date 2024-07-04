import React from 'react';
import styles from './page.module.css';

export default function Home() {
    return (
        <div>
            <header className={styles.header}>
                <h1>Bienvenido a Rent-A-Car</h1>
            </header>
            <section className={styles.section}>
                <p>¡Explora, gestiona y más!</p>
                <p>Navega a través del menú para comenzar a gestionar los vehículos, clientes y alquileres.</p>
            </section>
            <footer className={styles.footer}>
                <div>© 2024 Rent-A-Car. Todos los derechos reservados.</div>
                <div>Contacto: info@rentacar.com</div>
            </footer>
        </div>
    );
}
