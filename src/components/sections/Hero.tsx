import { Button } from '../ui/Button';
import { Smartphone, Apple, Play } from 'lucide-react';
import heroBg from '../../assets/images/hero.png';

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-primary-green">

      {/* Background Gradient/Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Soutrali Deals Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-green/90 via-primary-green/80 to-transparent"></div>
      </div>

      <div className="container-custom relative z-10 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div className="space-y-8 text-white">
          <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight">
            Transformez <br />
            Votre <span className="text-cyan-300">Avenir Digital !</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 font-medium max-w-xl">
            L'écosystème 100% ivoirien pour les indépendants, artisans et entrepreneurs.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button className="bg-cyan-400 hover:bg-cyan-500 text-white border-none rounded-md px-8">
              Découvrir nos services
            </Button>
            <Button className="bg-cyan-400 hover:bg-cyan-500 text-white border-none rounded-md px-8">
              Rejoindre la communauté
            </Button>
          </div>

          <div className="pt-4 space-y-4">
            <Button className="bg-primary-orange hover:bg-orange-600 text-white rounded-md px-8 flex items-center gap-2">
              <Smartphone className="w-5 h-5" />
              Découvrir l'app
            </Button>

            <div className="flex items-center gap-4">
              <button className="bg-black/80 text-white px-4 py-1.5 rounded-lg flex items-center gap-2 hover:bg-black transition text-xs">
                <Apple className="w-5 h-5" />
                <div className="text-left">
                  <div className="text-[10px]">Download on the</div>
                  <div className="font-bold text-sm leading-none">App Store</div>
                </div>
              </button>
              <button className="bg-black/80 text-white px-4 py-1.5 rounded-lg flex items-center gap-2 hover:bg-black transition text-xs">
                <Play className="w-5 h-5 fill-current" />
                <div className="text-left">
                  <div className="text-[10px]">GET IT ON</div>
                  <div className="font-bold text-sm leading-none">Google Play</div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Right Content - Visuals are in the background image */}
        <div className="relative hidden md:block h-full">
          {/* Placeholder removed as visual is in background */}
        </div>

      </div>

      {/* Bottom Curve Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" className="fill-dark-bg w-full h-auto block">
          <path d="M0,32L80,42.7C160,53,320,75,480,80C640,85,800,75,960,64C1120,53,1280,43,1360,37.3L1440,32L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
        </svg>
      </div>
    </section>
  );
};
