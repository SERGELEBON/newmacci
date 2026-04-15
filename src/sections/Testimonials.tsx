import { useEffect, useRef, useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
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

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const testimonials = [
    {
      quote: "Grâce à MAC.CI, j'ai appris à lire et écrire à 45 ans. Aujourd'hui, je peux aider mes enfants avec leurs devoirs et gérer mon petit commerce. Cette formation a changé ma vie.",
      name: 'Aminata Traoré',
      role: 'Bénéficiaire du programme d\'alphabétisation',
      image: '/testimonial-1.jpg',
      rating: 5,
    },
    {
      quote: "Les formations en agriculture durable de MAC.CI ont doublé ma production de cacao. Les techniques modernes qu'ils nous ont enseignées respectent l'environnement et augmentent nos revenus.",
      name: 'Kouadio Jean-Baptiste',
      role: 'Agriculteur, Coopérative de Yamoussoukro',
      image: '/testimonial-2.jpg',
      rating: 5,
    },
    {
      quote: "Le partenariat avec MAC.CI a permis d'améliorer significativement l'accès aux soins dans notre région. Leurs campagnes de sensibilisation ont un impact réel sur la santé communautaire.",
      name: 'Dr. Marie Koffi',
      role: 'Directrice Centre de Santé, Bouaké',
      image: '/testimonial-3.jpg',
      rating: 5,
    },
    {
      quote: "Le microcrédit de MAC.CI m'a permis de lancer mon atelier de couture. Aujourd'hui, j'emploie 8 femmes de mon quartier. Nous créons ensemble un cercle vertueux de développement.",
      name: 'Fatou Ouattara',
      role: 'Entrepreneure, Programme Microfinance',
      image: '/testimonial-4.jpg',
      rating: 5,
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50 overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-100/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-100/50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-4">
            Témoignages
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Ce que disent nos bénéficiaires
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Découvrez l&apos;impact réel de nos actions à travers les voix de ceux 
            qui en bénéficient au quotidien.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div
          className={`relative max-w-4xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Main Card */}
          <div className="relative bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 lg:p-12 overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center">
              <Quote className="w-8 h-8 text-emerald-500" />
            </div>

            {/* Content */}
            <div className="relative">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ${
                    index === activeIndex
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 absolute inset-0 translate-x-10'
                  }`}
                >
                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xl lg:text-2xl text-slate-700 leading-relaxed mb-8 font-light">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-emerald-100"
                    />
                    <div>
                      <div className="font-semibold text-slate-800 text-lg">
                        {testimonial.name}
                      </div>
                      <div className="text-slate-500 text-sm">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="absolute bottom-8 right-8 flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="w-10 h-10 rounded-full border-slate-200 hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-600 transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="w-10 h-10 rounded-full border-slate-200 hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-600 transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'w-8 bg-emerald-500'
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* All Testimonials Grid (Mobile/Preview) */}
        <div
          className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`p-4 rounded-2xl border transition-all duration-300 text-left ${
                index === activeIndex
                  ? 'bg-emerald-50 border-emerald-200'
                  : 'bg-white border-slate-100 hover:border-emerald-200 hover:bg-emerald-50/50'
              }`}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover mb-3"
              />
              <div className="font-semibold text-slate-800 text-sm">
                {testimonial.name}
              </div>
              <div className="text-slate-500 text-xs line-clamp-1">
                {testimonial.role}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
