import { Navbar } from './components/layout/Navbar'
import { Hero } from './components/sections/Hero'
import { Ecosystem } from './components/sections/Ecosystem'
import { Services } from './components/sections/Services'

function App() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Navbar />

      <main>
        <Hero />

        {/* Stats Section moved below Hero */}
        <section className="section-padding container-custom -mt-20 relative z-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="card-glass text-center">
              <div className="text-3xl font-bold text-primary-green">400+</div>
              <div className="text-sm text-text-secondary mt-1">Membres</div>
            </div>
            <div className="card-glass text-center">
              <div className="text-3xl font-bold text-primary-blue">150+</div>
              <div className="text-sm text-text-secondary mt-1">Services</div>
            </div>
            <div className="card-glass text-center">
              <div className="text-3xl font-bold text-primary-orange">10</div>
              <div className="text-sm text-text-secondary mt-1">Zones Abidjan</div>
            </div>
            <div className="card-glass text-center">
              <div className="text-3xl font-bold text-gold-premium">50+</div>
              <div className="text-sm text-text-secondary mt-1">Missions</div>
            </div>
          </div>
        </section>



        <Ecosystem />

        <Services />

        {/* Placeholder for other sections */}

        <section className="section-padding container-custom">
          <div className="text-center">
            <h2 className="text-4xl font-heading font-bold mb-4">
              🚀 En Construction
            </h2>
            <p className="text-text-secondary">
              Les autres sections seront ajoutées progressivement...
            </p>
          </div>
        </section>
      </main>
    </div >
  )
}

export default App
