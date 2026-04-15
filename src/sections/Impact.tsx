import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Users, MapPin, Award, Heart, Globe } from 'lucide-react';

const Impact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    beneficiaries: 0,
    communities: 0,
    successRate: 0,
    volunteers: 0,
  });
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (!hasAnimated.current) {
            hasAnimated.current = true;
            animateCounts();
          }
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounts = () => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const targets = {
      beneficiaries: 5000,
      communities: 25,
      successRate: 98,
      volunteers: 50,
    };

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCounts({
        beneficiaries: Math.floor(targets.beneficiaries * easeOut),
        communities: Math.floor(targets.communities * easeOut),
        successRate: Math.floor(targets.successRate * easeOut),
        volunteers: Math.floor(targets.volunteers * easeOut),
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts(targets);
      }
    }, interval);
  };

  const stats = [
    {
      icon: Users,
      value: counts.beneficiaries.toLocaleString(),
      suffix: '+',
      label: 'Bénéficiaires directs',
      description: 'Personnes touchées par nos programmes',
    },
    {
      icon: MapPin,
      value: counts.communities.toString(),
      suffix: '',
      label: 'Communautés partenaires',
      description: 'Villages et quartiers accompagnés',
    },
    {
      icon: Award,
      value: counts.successRate.toString(),
      suffix: '%',
      label: 'Taux de réussite',
      description: 'De nos programmes de formation',
    },
    {
      icon: Heart,
      value: counts.volunteers.toString(),
      suffix: '+',
      label: 'Bénévoles actifs',
      description: 'Engagés sur le terrain',
    },
  ];

  return (
    <section
      id="impact"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/agriculture.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/90 to-slate-900/80" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-emerald-400 text-sm font-semibold mb-4">
            <TrendingUp className="w-4 h-4" />
            Notre impact
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Des résultats concrets
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Chaque chiffre représente une vie transformée, une famille soutenue, 
            une communauté renforcée. Voici l&apos;impact de votre soutien.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 flex items-center justify-center mb-6 group-hover:from-emerald-500/30 group-hover:to-emerald-600/30 transition-all duration-300">
                <stat.icon className="w-7 h-7 text-emerald-400" />
              </div>

              {/* Value */}
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                {stat.value}
                <span className="text-emerald-400">{stat.suffix}</span>
              </div>

              {/* Label */}
              <div className="text-lg font-semibold text-white/90 mb-1">
                {stat.label}
              </div>

              {/* Description */}
              <div className="text-sm text-white/60">
                {stat.description}
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-3xl bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div
          className={`mt-16 grid md:grid-cols-3 gap-8 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center flex-shrink-0">
              <Globe className="w-6 h-6 text-orange-400" />
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">Présence nationale</h4>
              <p className="text-white/60 text-sm">
                Active dans 4 régions de Côte d&apos;Ivoire avec des partenaires locaux.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
              <Award className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">Reconnaissance</h4>
              <p className="text-white/60 text-sm">
                Prix de l&apos;excellence sociale 2023 et certification ISO.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
              <Heart className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">Transparence</h4>
              <p className="text-white/60 text-sm">
                90% des dons directement investis dans nos programmes sur le terrain.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
