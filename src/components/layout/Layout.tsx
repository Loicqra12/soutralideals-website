import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

/**
 * Layout wrapper pour toutes les pages
 * Utilise Outlet de react-router-dom pour injecter le contenu des routes
 */
export const Layout = () => {
    return (
        <div className="min-h-screen bg-dark-bg flex flex-col">
            <Navbar />

            <main className="flex-1">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};
