import "./backoffice.css";
import Link from 'next/link';

const Layout = ({ children }) => {
    return (
        <div className="container">
            <div className="sidebar">
                <h1>Menú Backoffice</h1>
                <ul>
                    <li><Link href="/backoffice"><a>Inicio</a></Link></li>
                    <li><Link href="/backoffice/vehiculos"><a>Vehículos</a></Link></li>
                    <li><Link href="/backoffice/clientes"><a>Clientes</a></Link></li>
                    <li><Link href="/backoffice/alquileres"><a>Alquileres</a></Link></li>
                    <li><Link href="/backoffice/ver-disponibles"><a>Ver Disponibles</a></Link></li>
                </ul>
            </div>
            <div className="main-content">
                {children}
            </div>
        </div>
    );
}

export default Layout;

