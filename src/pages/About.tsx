import { useEffect, useRef, useState } from 'react';
import { Target, Eye, Heart, Users, Lightbulb, Shield, Award, Calendar, MapPin, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const values = [
    { icon: Heart, title: 'Compassion', description: 'Nous agissons avec cœur et empathie pour ceux qui en ont le plus besoin.' },
    { icon: Users, title: 'Communauté', description: 'Nous croyons en la force du collectif et de la solidarité.' },
    { icon: Lightbulb, title: 'Innovation', description: 'Nous recherchons constamment des solutions créatives et durables.' },
    { icon: Shield, title: 'Intégrité', description: 'Nous agissons avec transparence et éthique dans tout ce que nous faisons.' },
  ];

  const team = [
    {
      name: 'Dr. Kouassi Adjoumani',
      role: 'Fondateur & Directeur Exécutif',
      description: 'Expert en développement international avec 15 ans d\'expérience en Afrique de l\'Ouest.',
      image: '/fondateur.jpeg',
    },
    {
      name: 'Marie Koffi',
      role: 'Directrice des Programmes',
      description: 'Spécialiste en gestion de projets de développement et autonomisation des femmes.',
      image: '/testimonial-3.jpg',
    },
    {
      name: 'Jean-Baptiste Yao',
      role: 'Responsable Partenariats',
      description: 'Expert en mobilisation de ressources et développement de partenariats stratégiques.',
      image: '/testimonial-2.jpg',
    },
  ];

  const milestones = [
    { year: '2015', title: 'Création de MAC.CI', description: 'Naissance de l\'ONG avec une vision claire du développement communautaire.' },
    { year: '2017', title: 'Premier programme', description: 'Lancement du programme d\'alphabétisation dans 5 communautés.' },
    { year: '2019', title: 'Expansion', description: 'Extension de nos activités à 15 communautés partenaires.' },
    { year: '2021', title: 'Reconnaissance', description: 'Prix de l\'excellence sociale pour notre impact sur le terrain.' },
    { year: '2023', title: 'Certification ISO', description: 'Obtention de la certification pour nos processus de gestion.' },
    { year: '2025', title: 'Nouveaux horizons', description: 'Lancement de programmes innovants en agriculture durable.' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-semibold mb-6">
              À propos de nous
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Notre histoire, <span className="text-emerald-400">notre mission</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Depuis 2015, MAC.CI œuvre pour un développement durable et inclusif en Côte d&apos;Ivoire.
              Notre engagement : transformer des vies et bâtir des communautés résilientes.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section ref={sectionRef} className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold mb-6">
                Notre histoire
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
                Une vision née d&apos;un constat simple
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  L&apos;ONG MAC.CI est née d&apos;une conviction profonde : chaque Ivoirien mérite
                  l&apos;opportunité de s&apos;épanouir pleinement. Fondée en 2015 par le Dr. Kouassi
                  Adjoumani, notre organisation est le fruit d&apos;une expérience de plus de 15 ans
                  dans le développement communautaire.
                </p>
                <p>
                  Face aux défis de pauvreté, d&apos;illettrisme et d&apos;exclusion sociale rencontrés
                  par de nombreuses communautés, nous avons décidé d&apos;agir. Notre approche
                  holistique vise à accompagner les populations vulnérables sur tous les fronts :
                  éducation, santé, économie et inclusion sociale.
                </p>
                <p>
                  Aujourd&apos;hui, MAC.CI compte plus de 50 bénévoles actifs et travaille en étroite
                  collaboration avec 25 communautés partenaires à travers la Côte d&apos;Ivoire.
                  Notre impact se mesure en vies transformées et en espoirs ravivés.
                </p>
              </div>
            </div>
            <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative">
                <img
                  src="/fondateur.jpeg"
                  alt="Dr. Kouassi - Fondateur"
                  className="rounded-3xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center">
                      <Calendar className="w-7 h-7 text-emerald-600" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-slate-800">10+</div>
                      <div className="text-slate-500">Années d&apos;expérience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-10 shadow-xl shadow-slate-200/50">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Notre Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                Nous rêvons d&apos;un avenir où chaque homme et chaque femme de métier dispose de
                conditions de travail dignes, stables et valorisantes. Nous œuvrons pour une
                véritable professionnalisation des activités artisanales, afin que chaque artisan
                puisse s&apos;épanouir, développer pleinement son potentiel et vivre de son savoir-faire.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-10 shadow-xl shadow-slate-200/50">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Notre Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                La mission de l&apos;ONG MAC.CI est de redonner espoir et dignité aux personnes
                vulnérables en améliorant concrètement leurs conditions de vie. Nous nous engageons
                à promouvoir leurs droits et leurs devoirs, afin qu&apos;elles puissent s&apos;affirmer
                pleinement au sein de leurs communautés.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-4">
              Nos valeurs
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
              Les principes qui nous guident
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group text-center p-8 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-white group-hover:bg-emerald-50 flex items-center justify-center mx-auto mb-6 shadow-sm transition-all duration-300">
                  <value.icon className="w-8 h-8 text-slate-600 group-hover:text-emerald-600 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{value.title}</h3>
                <p className="text-slate-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-32 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-semibold mb-4">
              Notre parcours
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Les étapes clés de notre histoire
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="text-emerald-400 font-bold text-2xl mb-2">{milestone.year}</div>
                <h4 className="text-white font-semibold text-lg mb-2">{milestone.title}</h4>
                <p className="text-slate-400 text-sm">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
              Notre équipe
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
              Des professionnels passionnés
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-3xl mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-[3/4] object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">{member.name}</h3>
                <p className="text-emerald-600 font-medium mb-2">{member.role}</p>
                <p className="text-slate-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-emerald-600 to-emerald-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: '5,000+', label: 'Bénéficiaires directs', icon: Users },
              { value: '25', label: 'Communautés partenaires', icon: MapPin },
              { value: '15', label: 'Projets actifs', icon: TrendingUp },
              { value: '98%', label: 'Taux de réussite', icon: Award },
            ].map((stat, index) => (
              <div key={index} className="text-white">
                <stat.icon className="w-10 h-10 mx-auto mb-4 opacity-80" />
                <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-emerald-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
            Rejoignez notre mission
          </h2>
          <p className="text-xl text-slate-600 mb-10">
            Ensemble, nous pouvons créer un impact encore plus grand pour les communautés ivoiriennes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 rounded-full text-lg">
                Devenir bénévole
              </Button>
            </Link>
            <Link to="/donate">
              <Button size="lg" variant="outline" className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-6 rounded-full text-lg">
                Faire un don
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
