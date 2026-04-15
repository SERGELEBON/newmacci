import { useEffect, useRef, useState } from 'react';
import { Target, Eye, Heart, Users, Lightbulb, Shield } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: "Nous agissons avec cœur et empathie pour ceux qui en ont le plus besoin.",
    },
    {
      icon: Users,
      title: 'Communauté',
      description: "Nous croyons en la force du collectif et de la solidarité.",
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: "Nous recherchons constamment des solutions créatives et durables.",
    },
    {
      icon: Shield,
      title: 'Intégrité',
      description: "Nous agissons avec transparence et éthique dans tout ce que nous faisons.",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-4">
            Qui sommes-nous
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            MACCI : Mouvement des Artisans de Côte d&apos;Ivoire
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            L&apos;ONG MACCI crée des opportunités pour les artisans, les veuves et les orphelins 
            en Côte d&apos;Ivoire, leur permettant de réaliser leur potentiel par 
            l&apos;entrepreneuriat, la formation et l&apos;accompagnement.
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* Vision Card */}
          <div
            className={`group relative bg-white rounded-3xl p-8 lg:p-10 shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:shadow-emerald-100/50 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-bl-full opacity-50" />
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center mb-6 shadow-lg shadow-emerald-200 group-hover:scale-110 transition-transform duration-300">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Notre Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                Une vision née d&apos;un constat : chaque personne en situation de vulnérabilité 
                mérite l&apos;opportunité de s&apos;épanouir. Nous croyons en une Côte d&apos;Ivoire 
                où les gens de métiers, les veuves et les orphelins disposent de conditions 
                dignes pour contribuer pleinement au développement économique et social.
              </p>
              <p className="text-slate-600 leading-relaxed mt-4">
                Nous rêvons d&apos;une communauté autonome, organisée, responsable et ancrée 
                dans des valeurs morales solides, capable de transformer ses défis en opportunités.
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div
            className={`group relative bg-white rounded-3xl p-8 lg:p-10 shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:shadow-orange-100/50 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-orange-100 to-orange-50 rounded-br-full opacity-50" />
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-6 shadow-lg shadow-orange-200 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Notre Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                Notre mission est d&apos;encadrer et d&apos;autonomiser les gens de petits métiers, 
                les veuves et les orphelins pour qu&apos;ils bénéficient pleinement du fruit de 
                leur travail. Nous travaillons pour faire émerger une nouvelle génération de 
                personnes autonomes, responsables et organisées.
              </p>
              <p className="text-slate-600 leading-relaxed mt-4">
                À travers la formation en gestion finance et marketing, l&apos;accompagnement 
                psycho-social, les appuis juridiques et l&apos;insertion professionnelle, nous 
                redynamisons les secteurs d&apos;activités et transformons les vies.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-2xl font-bold text-slate-800 text-center mb-10">
            Nos valeurs fondamentales
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-100 to-slate-50 flex items-center justify-center mb-4 group-hover:from-emerald-100 group-hover:to-emerald-50 transition-all duration-300">
                  <value.icon className="w-6 h-6 text-slate-600 group-hover:text-emerald-600 transition-colors duration-300" />
                </div>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">
                  {value.title}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
