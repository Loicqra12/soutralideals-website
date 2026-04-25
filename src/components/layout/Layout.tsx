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
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[9999] bg-white text-black px-3 py-2 rounded-md"
            >
                Aller au contenu principal
            </a>
            <Navbar />

            <main id="main-content" className="flex-1">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};
