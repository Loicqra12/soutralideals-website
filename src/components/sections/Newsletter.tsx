import { SectionWrapper } from '../ui/SectionWrapper';
import { Mail, ArrowRight } from 'lucide-react';

export const Newsletter = () => {
    return (
        <SectionWrapper id="newsletter" bg="gradient-brand" className="py-20">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-3xl p-8 md:p-16 shadow-2xl text-center relative overflow-hidden">
                    {/* Decorative Circles */}
                    <div className="absolute top-0 left-0 w-32 h-32 bg-primary-orange/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary-blue/20 rounded-full translate-x-1/2 translate-y-1/2 blur-2xl"></div>

                    <div className="relative z-10">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-50 rounded-full mb-6">
                            <Mail className="w-8 h-8 text-gray-900" />
                        </div>

                        <h2 className="text-3xl md:text-4xl font-heading font-black text-gray-900 mb-4 uppercase">
                            Newsletter <span className="text-primary-blue">Soutrali Deals</span>
                        </h2>

                        <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
                            Inscris-toi pour recevoir nos meilleurs deals, les actualités tech d'Abidjan et des conseils exclusifs pour booster ton activité.
                        </p>

                        <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Ton adresse email"
                                className="flex-1 px-6 py-4 rounded-full bg-gray-100 border border-gray-200 focus:outline-none focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 text-gray-900 placeholder-gray-500"
                            />
                            <button className="bg-black hover:bg-gray-900 text-primary-orange font-bold uppercase tracking-wider py-4 px-8 rounded-full transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-lg">
                                S'inscrire <ArrowRight className="w-5 h-5" />
                            </button>
                        </form>

                        <p className="text-xs text-gray-400 mt-4">
                            Nous respectons ta vie privée. Désinscription à tout moment.
                        </p>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};
