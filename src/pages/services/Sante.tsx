import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, HeartPulse, Users, Stethoscope, Baby, Activity, CheckCircle, Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Sante = () => {
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

  const programs = [
    {
      title: 'Consultations mobiles',
      description: 'Des équipes médicales se déplacent dans les villages pour offrir des soins de proximité.',
      duration: 'Chaque semaine',
      location: '25 communautés',
    },
    {
      title: 'Campagnes de vaccination',
      description: 'Vaccination contre les maladies infantiles et la COVID-19.',
      duration: 'Sessions régulières',
      location: 'Centres de santé partenaires',
    },
    {
      title: 'Santé maternelle et infantile',
      description: 'Suivi des femmes enceintes et des nourrissons pour réduire la mortalité.',
      duration: 'Continu',
      location: 'Toute la Côte d\'Ivoire',
    },
    {
      title: 'Prévention du paludisme',
      description: 'Distribution de moustiquaires et sensibilisation aux méthodes de prévention.',
      duration: 'Saison des pluies',
      location: 'Zones à risque',
    },
  ];

  const impacts = [
    { value: '10,000+', label: 'Consultations', icon: Stethoscope },
    { value: '5,000+', label: 'Vaccinations', icon: Activity },
    { value: '1,200+', label: 'Femmes accompagnées', icon: Users },
    { value: '3,000+', label: 'Moustiquaires distribuées', icon: Baby },
  ];

  const testimonials = [
    {
      quote: 'Le partenariat avec MAC.CI a permis d\'améliorer significativement l\'accès aux soins dans notre région. Leurs campagnes de sensibilisation ont un impact réel sur la santé communautaire.',
      name: 'Dr. Marie Koffi',
      role: 'Directrice Centre de Santé, Bouaké',
      image: '/testimonial-3.jpg',
    },
    {
      quote: 'Grâce aux consultations mobiles de MAC.CI, ma fille a pu être vaccinée alors que nous vivons loin du centre de santé.',
      name: 'Yao Aminata',
      role: 'Bénéficiaire, village de Katiola',
      image: '/testimonial-1.jpg',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/sante.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-rose-900/95 via-rose-900/85 to-rose-800/70" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Link to="/services" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour aux programmes
          </Link>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/20 text-rose-300 text-sm font-semibold mb-6">
              <HeartPulse className="w-4 h-4" />
              Programme essentiel
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Santé <span className="text-rose-400">Communautaire</span>
            </h1>
            <p className="text-xl text-rose-100 leading-relaxed mb-8">
              L&apos;accès aux soins de santé est un droit fondamental. Nos campagnes de sensibilisation, 
              nos consultations mobiles et nos programmes de prévention sauvent des vies chaque jour 
              dans les communautés les plus vulnérables.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/donate">
                <Button size="lg" className="bg-white text-rose-600 hover:bg-rose-50 px-8 rounded-full">
                  Soutenir ce programme
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 rounded-full">
                  Devenir bénévole médical
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-rose-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {impacts.map((impact, index) => (
              <div key={index} className="text-center text-white">
                <impact.icon className="w-10 h-10 mx-auto mb-3 opacity-80" />
                <div className="text-4xl font-bold mb-1">{impact.value}</div>
                <div className="text-rose-100 text-sm">{impact.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Detail */}
      <section ref={sectionRef} className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-rose-100 text-rose-700 text-sm font-semibold mb-4">
              Nos activités
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
              Programmes de santé
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Des interventions ciblées pour améliorer la santé des communautés 
              et prévenir les maladies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className={`bg-slate-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-rose-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-rose-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{program.title}</h3>
                    <p className="text-slate-600">{program.description}</p>
                  </div>
                </div>
                <div className="flex gap-6 mt-6 pt-6 border-t border-slate-200">
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Calendar className="w-4 h-4" />
                    {program.duration}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <MapPin className="w-4 h-4" />
                    {program.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Priority Areas */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-6">
                Nos priorités
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
                Axes prioritaires de santé
              </h2>
              <div className="space-y-6">
                {[
                  { title: 'Santé maternelle et infantile', desc: 'Réduire la mortalité maternelle et infantile par un suivi de qualité.' },
                  { title: 'Prévention des maladies tropicales', desc: 'Lutte contre le paludisme, la dengue et autres maladies vectorielles.' },
                  { title: 'Vaccination et immunisation', desc: 'Assurer la couverture vaccinale complète des populations.' },
                  { title: 'Hygiène et assainissement', desc: 'Promouvoir les bonnes pratiques d\'hygiène pour prévenir les maladies.' },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0">
                      <span className="text-rose-600 font-bold text-sm">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">{item.title}</h4>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src="/sante.jpg" alt="Santé communautaire" className="rounded-3xl shadow-2xl w-full" />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="text-4xl font-bold text-rose-600 mb-1">98%</div>
                <div className="text-slate-600 text-sm">Satisfaction des patients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-4">
              Témoignages
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
              Des vies sauvées grâce à l&apos;accès aux soins
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-50 rounded-3xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover" />
                  <div>
                    <div className="font-semibold text-slate-800">{testimonial.name}</div>
                    <div className="text-slate-500 text-sm">{testimonial.role}</div>
                  </div>
                </div>
                <blockquote className="text-slate-600 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-rose-600 to-rose-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Sauvez des vies avec nous
          </h2>
          <p className="text-xl text-rose-100 mb-10">
            Votre don permet d&apos;offrir des soins de santé essentiels aux populations 
            les plus vulnérables de Côte d&apos;Ivoire.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate">
              <Button size="lg" className="bg-white text-rose-600 hover:bg-rose-50 px-8 py-6 rounded-full text-lg">
                Faire un don
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 rounded-full text-lg">
                En savoir plus
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sante;
