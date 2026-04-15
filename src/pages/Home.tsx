import { useEffect, useState } from 'react';
import { ArrowRight, Play, ChevronDown, TrendingUp, Users, MapPin, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const programs = [
    {
      title: 'Gens de Métiers',
      description: 'Formation, entrepreneuriat et autonomisation des artisans',
      image: '/agriculture.jpg',
      stat: '3,000+',
      link: '/services/education',
    },
    {
      title: 'Veuves & Vulnérables',
      description: 'Autonomisation économique et accompagnement psycho-social',
      image: '/femmes.jpg',
      stat: '1,200+',
      link: '/services/femmes',
    },
    {
      title: 'Orphelins',
      description: 'Parrainage scolaire, apprentissage et insertion professionnelle',
      image: '/slide11.jpeg',
      stat: '500+',
      link: '/services/logement',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {['/slide12.png', '/slide13.png', '/slide1.png'].map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100' : 'opacity-0'
                }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110"
                style={{ backgroundImage: `url(${image})` }}
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/80" />

          {/* Carousel Navigation */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev === 0 ? 2 : prev - 1))}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/40 border border-white/40 text-white transition-all duration-300"
          >
            ←
          </button>

          <button
            onClick={() => setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1))}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/40 border border-white/40 text-white transition-all duration-300"
          >
            →
          </button>

          {/* Carousel Indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${currentSlide === index
                    ? 'bg-emerald-400 w-8'
                    : 'bg-white/40 w-2 hover:bg-white/60'
                  }`}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-white/90 text-sm font-medium">
                Œuvrant pour un développement durable depuis 2015
              </span>
            </div>

            <h1
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
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

            <p
              className={`text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            >
              Nous œuvrons pour garantir l&apos;accès à une éducation de qualité,
              soutenir les personnes vulnérables et créer des opportunités
              durables pour les communautés ivoiriennes.
            </p>

            <div
              className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            >
              <Link to="/services">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white px-8 py-6 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  Découvrir nos actions
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:border-white/50 px-8 py-6 rounded-full text-lg font-semibold transition-all duration-300 group"
                >
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  En savoir plus
                </Button>
              </Link>
            </div>

            <div
              className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto transition-all duration-1000 delay-800 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
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
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <a
            href="#programs"
            className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors duration-300 group"
          >
            <span className="text-sm font-medium">Scroll</span>
            <ChevronDown className="w-5 h-5 animate-bounce group-hover:text-emerald-400 transition-colors" />
          </a>
        </div>
      </section>

      {/* Programs Preview */}
      <section id="programs" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-4">
              Nos programmes
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              Nos axes d&apos;intervention
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Six programmes stratégiques pour répondre aux besoins essentiels
              des communautés ivoiriennes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Link
                key={index}
                to={program.link}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-emerald-400 font-bold text-lg">{program.stat}</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-emerald-600 transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-slate-600 text-sm">{program.description}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white px-8 py-6 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                Voir tous nos programmes
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/agriculture.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/90 to-slate-900/80" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-emerald-400 text-sm font-semibold mb-4">
              <TrendingUp className="w-4 h-4" />
              Notre impact
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Des résultats concrets
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, value: '5,000+', label: 'Bénéficiaires directs' },
              { icon: MapPin, value: '25', label: 'Communautés partenaires' },
              { icon: Award, value: '98%', label: 'Taux de réussite' },
              { icon: TrendingUp, value: '50+', label: 'Bénévoles actifs' },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center"
              >
                <stat.icon className="w-10 h-10 text-emerald-400 mx-auto mb-4" />
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-emerald-600 to-emerald-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Rejoignez notre mission
          </h2>
          <p className="text-xl text-emerald-100 mb-10">
            Ensemble, nous pouvons créer un impact encore plus grand pour les communautés ivoiriennes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate">
              <Button
                size="lg"
                className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-6 rounded-full text-lg font-semibold shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                Faire un don
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 rounded-full text-lg font-semibold transition-all duration-300"
              >
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
