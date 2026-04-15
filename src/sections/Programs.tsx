import { useEffect, useRef, useState } from 'react';
import { ArrowRight, BookOpen, HeartPulse, Sprout, Users, Home, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Programs = () => {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const programs = [
    {
      icon: BookOpen,
      title: 'Les Gens de Métiers',
      description: 'Formation technique et accompagnement entrepreneurial pour développer les compétences des artisans.',
      image: '/education.jpg',
      stat: '3,500+',
      statLabel: 'artisans autonomisés',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: HeartPulse,
      title: 'Veuves & Orphelins',
      description: 'Autonomisation holistique incluant soutien psycho-social, formation et activités génératrices de revenus.',
      image: '/sante.jpg',
      stat: '2,200+',
      statLabel: 'veuves et orphelins aidés',
      color: 'from-rose-500 to-rose-600',
      bgColor: 'bg-rose-50',
    },
    {
      icon: Sprout,
      title: 'Agriculture Durable',
      description: 'Promotion de pratiques agricoles durables et techniques modernes pour augmenter les rendements.',
      image: '/agriculture.jpg',
      stat: '800+',
      statLabel: 'agriculteurs formés',
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50',
    },
    {
      icon: Users,
      title: 'Autonomisation des Femmes',
      description: 'Création d\'opportunités économiques par formation en gestion et accès aux microcrédits.',
      image: '/femmes.jpg',
      stat: '1,500+',
      statLabel: 'femmes autonomisées',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Home,
      title: 'Entrepreneuriat',
      description: 'Accompagnement complet de la création à la croissance d\'entreprises viables et rentables.',
      image: '/hero-bg.jpg',
      stat: '600+',
      statLabel: 'entreprises créées',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
    },
    {
      icon: Briefcase,
      title: 'Insertion Professionnelle',
      description: 'Formation professionnelle et mise en relation avec employeurs pour accès à l\'emploi durable.',
      image: '/emploi.jpg',
      stat: '450+',
      statLabel: 'personnes insérées',
      color: 'from-cyan-500 to-cyan-600',
      bgColor: 'bg-cyan-50',
    },
  ];

  return (
    <section
      id="actions"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-100 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-100 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold mb-4">
            Nos programmes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Nos axes d&apos;action
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            MACCI intervient sur plusieurs axes pour transformer les vies des artisans, 
            veuves et orphelins en Côte d&apos;Ivoire. Formation, entrepreneuriat, 
            autonomisation et soutien holistique.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-2xl transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${program.color} opacity-60`} />
                <div className="absolute top-4 left-4">
                  <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <program.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                {/* Stat Badge */}
                <div className="absolute bottom-4 right-4">
                  <div className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm">
                    <span className="text-sm font-bold text-slate-800">{program.stat}</span>
                    <span className="text-xs text-slate-600 ml-1">{program.statLabel}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                  {program.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {program.description}
                </p>
                <button className="inline-flex items-center text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors duration-300 group/btn">
                  En savoir plus
                  <ArrowRight className="w-4 h-4 ml-1 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white px-8 py-6 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            Voir tous nos programmes
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Programs;
