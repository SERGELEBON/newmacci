import { useEffect, useRef, useState } from 'react';
import { ArrowRight, BookOpen, HeartPulse, Sprout, Users, Home, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
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
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: BookOpen,
      title: 'Les Gens de Métiers',
      shortDesc: 'Formation et autonomisation des artisans',
      description: 'MACCI encadre les gens de petits métiers pour développer leurs compétences en gestion, marketing et techniques. Nous offrons alphabétisation fonctionnelle, formations pratiques et accompagnement entrepreneurial pour transformer leurs activités en véritables entreprises.',
      image: '/education.jpg',
      stat: '3,500+',
      statLabel: 'artisans autonomisés',
      link: '/services/education',
      color: 'from-blue-500 to-blue-600',
      features: [
        'Formation technique métiers',
        'Gestion financière et marketing',
        'Alphabétisation fonctionnelle',
        'Accompagnement entrepreneurial',
      ],
    },
    {
      icon: HeartPulse,
      title: 'Veuves & Orphelins',
      shortDesc: 'Autonomisation et accompagnement holistique',
      description: 'MACCI offre un programme complet aux veuves et orphelins incluant soutien psycho-social, formation professionnelle, activités génératrices de revenus et appuis juridiques. Nous créons des opportunités pour leur dignité et leur indépendance.',
      image: '/sante.jpg',
      stat: '2,200+',
      statLabel: 'veuves et orphelins aidés',
      link: '/services/sante',
      color: 'from-rose-500 to-rose-600',
      features: [
        'Soutien psycho-social personnalisé',
        'Formation professionnelle',
        'Activités génératrices de revenus',
        'Appuis juridiques et administratifs',
      ],
    },
    {
      icon: Sprout,
      title: 'Agriculture Durable',
      shortDesc: 'Promotion de pratiques agricoles durables',
      description: 'MACCI accompagne les agriculteurs vers des pratiques durables et rentables. Nous proposons formation aux techniques modernes, gestion durable des ressources, accès aux intrants de qualité et connexion aux marchés pour augmenter les revenus.',
      image: '/agriculture.jpg',
      stat: '800+',
      statLabel: 'agriculteurs formés',
      link: '/services/agriculture',
      color: 'from-emerald-500 to-emerald-600',
      features: [
        'Techniques agricoles modernes',
        'Gestion durable des ressources',
        'Accès aux intrants de qualité',
        'Commercialisation des produits',
      ],
    },
    {
      icon: Users,
      title: 'Autonomisation des Femmes',
      shortDesc: 'Empowerment économique et social',
      description: 'MACCI crée des opportunités pour les femmes à devenir autonomes économiquement. Nous offrons formation en gestion d\'entreprise, accès aux microcrédits, activités génératrices de revenus et soutien pour accéder à des marchés formels.',
      image: '/femmes.jpg',
      stat: '1,500+',
      statLabel: 'femmes autonomisées',
      link: '/services/femmes',
      color: 'from-purple-500 to-purple-600',
      features: [
        'Formation gestion d\'entreprise',
        'Accès aux microcrédits',
        'Activités génératrices de revenus',
        'Accès aux marchés formels',
      ],
    },
    {
      icon: Home,
      title: 'Entrepreneuriat',
      shortDesc: 'Création et développement d\'entreprises',
      description: 'MACCI accompagne les porteurs de projets à créer et développer leurs entreprises. Nous offrons formation en business plan, accès aux financements, mentorat entrepreneurial et connexion avec des réseaux commerciaux pour assurer la viabilité.',
      image: '/hero-bg.jpg',
      stat: '600+',
      statLabel: 'entreprises créées',
      link: '/services/logement',
      color: 'from-orange-500 to-orange-600',
      features: [
        'Formation business plan',
        'Accès aux microfinances',
        'Mentorat entrepreneurial',
        'Réseautage commercial',
      ],
    },
    {
      icon: Briefcase,
      title: 'Insertion Professionnelle',
      shortDesc: 'Accès à l\'emploi et développement de carrière',
      description: 'MACCI facilite l\'insertion professionnelle des jeunes et adultes en situation de vulnérabilité. Nous offrons formation professionnelle qualifiante, mise en relation avec employeurs et accompagnement pour accéder à l\'emploi durable.',
      image: '/emploi.jpg',
      stat: '450+',
      statLabel: 'personnes insérées',
      link: '/services/emploi',
      color: 'from-cyan-500 to-cyan-600',
      features: [
        'Formation professionnelle',
        'Mise en relation employeurs',
        'Coaching carrière',
        'Suivi post-insertion',
      ],
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/hero-bg.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-900/80" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-semibold mb-6">
              Nos programmes
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Nos axes d&apos;<span className="text-emerald-400">action</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              MACCI intervient à travers plusieurs axes pour autonomiser les gens de métiers, 
              les veuves et les orphelins en Côte d&apos;Ivoire. Formation, entrepreneuriat, 
              accompagnement psycho-social et appuis juridiques.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={sectionRef} className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-2xl transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="grid md:grid-cols-2">
                  {/* Image */}
                  <div className="relative h-64 md:h-full overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-60`} />
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3">
                        <span className="text-2xl font-bold text-slate-800">{service.stat}</span>
                        <span className="text-slate-600 text-sm ml-2">{service.statLabel}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-emerald-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 mb-4">{service.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link
                      to={service.link}
                      className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors group/btn"
                    >
                      En savoir plus
                      <ArrowRight className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-emerald-600 to-emerald-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Vous souhaitez contribuer à nos programmes ?
          </h2>
          <p className="text-xl text-emerald-100 mb-10">
            Chaque don compte et nous permet d&apos;aller plus loin dans notre mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate">
              <button className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold hover:bg-emerald-50 transition-all duration-300 hover:-translate-y-1 shadow-xl">
                Faire un don
              </button>
            </Link>
            <Link to="/contact">
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
                Devenir partenaire
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
