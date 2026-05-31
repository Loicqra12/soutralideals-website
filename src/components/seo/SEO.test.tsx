import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { SEO } from './SEO';

// Fonction waitFor personnalisée pour éviter les dépendances et erreurs de typage externes
const waitFor = async (callback: () => void, timeout = 1000): Promise<void> => {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const check = () => {
      try {
        callback();
        resolve();
      } catch (err) {
        if (Date.now() - start > timeout) {
          reject(err);
        } else {
          setTimeout(check, 20);
        }
      }
    };
    check();
  });
};

describe('SEO', () => {
  it('expose une balise canonical basée sur le chemin courant', async () => {
    render(
      <HelmetProvider>
        <MemoryRouter initialEntries={['/contact']}>
          <SEO title="Contact" description="Page contact" />
        </MemoryRouter>
      </HelmetProvider>
    );

    await waitFor(() => {
      const link = document.querySelector('link[rel="canonical"]');
      expect(link).toBeTruthy();
      expect(link?.getAttribute('href')).toMatch(/\/contact$/);
    });
  });

  it('définit og:image et twitter:image en absolu', async () => {
    render(
      <HelmetProvider>
        <MemoryRouter initialEntries={['/']}>
          <SEO title="Accueil" description="Desc" />
        </MemoryRouter>
      </HelmetProvider>
    );

    await waitFor(() => {
      const og = document.querySelector('meta[property="og:image"]');
      const tw = document.querySelector('meta[name="twitter:image"]');
      expect(og?.getAttribute('content')).toMatch(/^https?:\/\//);
      expect(tw?.getAttribute('content')).toMatch(/^https?:\/\//);
    });
  });
});
