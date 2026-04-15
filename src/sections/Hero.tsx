import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronDown, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const carouselImages = [
    {
      src: '/slide12.png',
      title: 'Formation en Gestion',
      description: 'Capacitation des artisans et gens de métiers',
    },
    {
      src: '/slide13.png',
      title: 'Engagement Communautaire',
      description: 'Accompagnement et organisation des bénéficiaires',
    },
    {
      src: '/slide1.png',
      title: 'Impact Collectif',
      description: 'Autonomisation à large échelle en Côte d\'Ivoire',
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="accueil"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentSlide === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/80" />
        
        {/* Carousel Image Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 z-10 p-6 sm:p-8 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent">
          <div className="max-w-7xl mx-auto">
            {carouselImages.map((image, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  currentSlide === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                }`}
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  {image.title}
                </h3>
                <p className="text-white/80 text-sm sm:text-base">
                  {image.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white/90 text-sm font-medium">
              MACCI - Mouvement des Artisans de Côte d&apos;Ivoire et à l&apos;International
            </span>
          </div>

          {/* Main Title */}
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 transition-all duration-1000 delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="block">Ensemble pour un</span>
            <span className="block mt-2">
              <span className="bg-gradient-to-r from-emerald-400 via-orange-400 to-emerald-400 bg-clip-text text-transparent">
                avenir meilleur
              </span>
            </span>
            <span className="block mt-2 text-white">en Côte d&apos;Ivoire</span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed transition-all duration-1000 delay-400 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Nous œuvrons pour garantir l&apos;accès à une éducation de qualité, 
            soutenir les personnes vulnérables et créer des opportunités 
            durables pour les communautés ivoiriennes.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-600 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Button
              onClick={() => scrollToSection('#actions')}
              size="lg"
              className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white px-8 py-6 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
            >
              Découvrir nos actions
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => scrollToSection('#about')}
              variant="outline"
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:border-white/50 px-8 py-6 rounded-full text-lg font-semibold transition-all duration-300 group"
            >
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              En savoir plus
            </Button>
          </div>

          {/* Stats Preview */}
          <div
            className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto transition-all duration-1000 delay-800 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {[
              { value: '5,000+', label: 'Bénéficiaires' },
              { value: '25', label: 'Communautés' },
              { value: '98%', label: 'Taux de réussite' },
              { value: '10 ans', label: "D'expérience" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div
            className={`flex justify-center gap-2 mt-12 transition-all duration-1000 delay-900 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'bg-emerald-400 w-8'
                    : 'bg-white/40 w-2 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Carousel Navigation Buttons */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1))}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/40 border border-white/40 text-white transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={() => setCurrentSlide((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1))}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/40 border border-white/40 text-white transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 transition-all duration-1000 delay-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <button
          onClick={() => scrollToSection('#about')}
          className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors duration-300 group"
        >
          <span className="text-sm font-medium">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce group-hover:text-emerald-400 transition-colors" />
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-emerald-500/20 blur-2xl animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-orange-500/20 blur-3xl animate-pulse delay-1000" />
    </section>
  );
};

export default Hero;
