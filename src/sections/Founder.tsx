import { useEffect, useRef, useState } from 'react';
import { Quote, Linkedin, Mail, Award } from 'lucide-react';

const Founder = () => {
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

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-300/50">
                <img
                  src="/fondateur.jpeg"
                  alt="Mme Kouassi Gisèle Gbohi - Présidente Fondatrice de MACCI"
                  className="w-full aspect-[3/4] object-cover"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                
                {/* Name Badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                    <div className="font-bold text-slate-800 text-lg">Mme Kouassi Gisèle Gbohi</div>
                    <div className="text-emerald-600 text-sm font-medium">
                      Présidente Fondatrice - MACCI
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl -z-10" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full -z-10 opacity-80" />

              {/* Experience Badge */}
              <div className="absolute top-6 right-6 bg-white rounded-xl p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                    <Award className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-800">15+</div>
                    <div className="text-xs text-slate-500">Années d&apos;expérience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-4">
              Mot du fondateur
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              Rencontrez notre
              <span className="block text-emerald-600">Fondatrice</span>
            </h2>

            <div className="prose prose-slate max-w-none">
              <p className="text-slate-600 leading-relaxed mb-4">
                <strong>Mme Kouassi Gisèle Gbohi</strong>, Présidente Fondatrice de MACCI, 
                est une entrepreneuse passionnée et visionnaire. Après avoir travaillé comme 
                opératrice de saisie à la SGS à San Pedro, elle a créé sa propre entreprise 
                dans la mercerie.
              </p>
              
              <p className="text-slate-600 leading-relaxed mb-4">
                Visitée par une vision divine pour une mission d&apos;encadrement, elle a 
                décidé de dédier sa vie à aider les gens de petits métiers, les veuves et 
                les orphelins à s&apos;autonomiser et à réaliser leur potentiel. Ce qui a 
                commencé à San Pedro s&apos;est développé pour impacter toute la nation.
              </p>

              <blockquote className="relative pl-6 border-l-4 border-emerald-500 my-8">
                <Quote className="absolute -left-3 -top-2 w-6 h-6 text-emerald-500 bg-white" />
                <p className="text-lg text-slate-700 italic font-light">
                  &ldquo;Chaque personne en situation de vulnérabilité mérite l&apos;opportunité 
                  de s&apos;épanouir et de contribuer pleinement au développement de son pays. 
                  C&apos;est la conviction qui anime chaque action de MACCI.&rdquo;
                </p>
              </blockquote>

              <p className="text-slate-600 leading-relaxed">
                Avec un expertise en entrepreneuriat et autonomisation, Mme Gbohi guide MACCI 
                dans sa mission de redynamiser les secteurs d&apos;activités et de transformer 
                des milliers de vies en Côte d&apos;Ivoire et au-delà.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-emerald-100 hover:text-emerald-600 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@mac.ci"
                className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-emerald-100 hover:text-emerald-600 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
