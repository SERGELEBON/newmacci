import { useEffect, useRef, useState } from 'react';
import { Quote, Star, TrendingUp, Users, Award, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
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

  const stats = [
    { value: '5,000+', label: 'Témoignages collectés', icon: Users },
    { value: '98%', label: 'Satisfaction', icon: Award },
    { value: '25', label: 'Communautés', icon: TrendingUp },
  ];

  const testimonials = [
    {
      quote: 'Grâce à MAC.CI, j\'ai appris à lire et écrire à 45 ans. Aujourd\'hui, je peux aider mes enfants avec leurs devoirs et gérer mon petit commerce. Cette formation a changé ma vie et m\'a redonné confiance en moi.',
      name: 'Aminata Traoré',
      role: 'Bénéficiaire du programme d\'alphabétisation',
      program: 'Éducation & Formation',
      image: '/testimonial-1.jpg',
      rating: 5,
    },
    {
      quote: 'Les formations en agriculture durable de MAC.CI ont doublé ma production de cacao. Les techniques modernes qu\'ils nous ont enseignées respectent l\'environnement et augmentent nos revenus. Ma famille vit mieux maintenant.',
      name: 'Kouadio Jean-Baptiste',
      role: 'Agriculteur, Coopérative de Yamoussoukro',
      program: 'Agriculture Durable',
      image: '/testimonial-2.jpg',
      rating: 5,
    },
    {
      quote: 'Le partenariat avec MAC.CI a permis d\'améliorer significativement l\'accès aux soins dans notre région. Leurs campagnes de sensibilisation ont un impact réel sur la santé communautaire.',
      name: 'Dr. Marie Koffi',
      role: 'Directrice Centre de Santé, Bouaké',
      program: 'Santé Communautaire',
      image: '/testimonial-3.jpg',
      rating: 5,
    },
    {
      quote: 'Le microcrédit de MAC.CI m\'a permis de lancer mon atelier de couture. Aujourd\'hui, j\'emploie 8 femmes de mon quartier. Nous créons ensemble un cercle vertueux de développement.',
      name: 'Fatou Ouattara',
      role: 'Entrepreneure, Programme Microfinance',
      program: 'Autonomisation des Femmes',
      image: '/testimonial-4.jpg',
      rating: 5,
    },
    {
      quote: 'Grâce aux consultations mobiles de MAC.CI, ma fille a pu être vaccinée alors que nous vivons loin du centre de santé. Leur engagement pour la santé des communautés rurales est remarquable.',
      name: 'Yao Aminata',
      role: 'Mère de famille, village de Katiola',
      program: 'Santé Communautaire',
      image: '/testimonial-1.jpg',
      rating: 5,
    },
    {
      quote: 'La formation en mécanique de MAC.CI m\'a permis d\'ouvrir mon propre garage. Aujourd\'hui, j\'emploie trois jeunes de mon quartier et je gagne dignement ma vie.',
      name: 'Kouamé Koffi',
      role: 'Mécanicien, Abidjan',
      program: 'Insertion Professionnelle',
      image: '/testimonial-2.jpg',
      rating: 5,
    },
  ];

  const videoTestimonials = [
    {
      title: 'L\'histoire d\'Aminata',
      description: 'Comment l\'alphabétisation a transformé sa vie',
      thumbnail: '/education.jpg',
    },
    {
      title: 'Le parcours de Jean-Baptiste',
      description: 'De petit agriculteur à entrepreneur agricole',
      thumbnail: '/agriculture.jpg',
    },
    {
      title: 'La réussite de Fatou',
      description: 'Son atelier de couture emploie 8 femmes',
      thumbnail: '/femmes.jpg',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-br from-purple-900 to-purple-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/20 text-purple-300 text-sm font-semibold mb-6">
              Témoignages
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Leurs <span className="text-purple-400">histoires</span>, notre fierté
            </h1>
            <p className="text-xl text-purple-100 leading-relaxed">
              Découvrez l&apos;impact réel de nos actions à travers les voix de ceux 
              qui en bénéficient au quotidien. Chaque témoignage est une vie transformée.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <stat.icon className="w-10 h-10 mx-auto mb-3 opacity-80" />
                <div className="text-4xl font-bold mb-1">{stat.value}</div>
                <div className="text-purple-100 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section ref={sectionRef} className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-4">
              Témoignages écrits
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
              Des récits authentiques
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Des histoires vraies qui montrent comment nos programmes transforment des vies 
              dans les communautés ivoiriennes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-slate-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-purple-200 mb-4" />
                <blockquote className="text-slate-600 mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-4 pt-6 border-t border-slate-200">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-slate-800">{testimonial.name}</div>
                    <div className="text-slate-500 text-sm">{testimonial.role}</div>
                    <div className="text-purple-600 text-xs mt-1">{testimonial.program}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-rose-100 text-rose-700 text-sm font-semibold mb-4">
              Témoignages vidéo
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
              Écoutez leurs histoires
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {videoTestimonials.map((video, index) => (
              <div key={index} className="group relative rounded-3xl overflow-hidden shadow-lg cursor-pointer">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full aspect-video object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/50 flex items-center justify-center group-hover:bg-slate-900/60 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-purple-600 ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-900/90 to-transparent">
                  <h3 className="text-white font-semibold mb-1">{video.title}</h3>
                  <p className="text-white/70 text-sm">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Share Your Story */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-3xl p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Vous avez bénéficié de nos programmes ?
                </h2>
                <p className="text-purple-100 text-lg mb-8">
                  Partagez votre histoire et inspirez d&apos;autres personnes à transformer leur vie. 
                  Votre témoignage peut faire la différence.
                </p>
                <Link to="/contact">
                  <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-6 rounded-full text-lg">
                    Partager mon histoire
                  </Button>
                </Link>
              </div>
              <div className="hidden lg:block">
                <img
                  src="/testimonial-1.jpg"
                  alt="Partagez votre histoire"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
            Devenez vous aussi une histoire de réussite
          </h2>
          <p className="text-xl text-slate-600 mb-10">
            Rejoignez nos programmes et transformez votre vie comme des milliers d&apos;autres 
            bénéficiaires avant vous.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 rounded-full text-lg">
                Découvrir nos programmes
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-6 rounded-full text-lg">
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
