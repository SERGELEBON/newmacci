import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      lines: ['Abidjan, Côte d\'Ivoire', 'Plateau, Rue des Jardins'],
    },
    {
      icon: Phone,
      title: 'Téléphone',
      lines: ['+225 07 07 64 63 61', '+225 07 05 06 07 08'],
    },
    {
      icon: Mail,
      title: 'Email',
      lines: ['contact@mac.ci', 'info@mac.ci'],
    },
    {
      icon: Clock,
      title: 'Heures d\'ouverture',
      lines: ['Lundi - Vendredi: 8h00 - 17h00', 'Samedi: 9h00 - 12h00'],
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
            Contactez-nous
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Prêt à faire la différence ?
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Contactez-nous pour discuter de partenariats, dons ou collaborations. 
            Ensemble, nous pouvons créer un impact durable.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div
            className={`lg:col-span-2 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h3 className="text-xl font-bold text-slate-800 mb-6">
              Informations de contact
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">
                      {info.title}
                    </h4>
                    {info.lines.map((line, i) => (
                      <p key={i} className="text-slate-600 text-sm">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Card */}
            <div className="mt-8 p-6 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl text-white">
              <h4 className="font-bold text-lg mb-2">
                Rejoignez notre mission
              </h4>
              <p className="text-emerald-100 text-sm mb-4">
                Ensemble, nous pouvons créer un impact durable dans les communautés ivoiriennes.
              </p>
              <Button
                variant="secondary"
                className="w-full bg-white text-emerald-600 hover:bg-emerald-50"
              >
                Devenir bénévole
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`lg:col-span-3 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8">
              <h3 className="text-xl font-bold text-slate-800 mb-6">
                Envoyez-nous un message
              </h3>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">
                    Message envoyé !
                  </h4>
                  <p className="text-slate-600">
                    Nous vous répondrons dans les plus brefs délais.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-slate-700">
                        Nom complet <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Votre nom"
                        required
                        className="rounded-xl border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-slate-700">
                        Email <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="votre@email.com"
                        required
                        className="rounded-xl border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-slate-700">
                      Sujet <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Objet de votre message"
                      required
                      className="rounded-xl border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-slate-700">
                      Message <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Votre message..."
                      required
                      rows={5}
                      className="rounded-xl border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white rounded-xl py-6 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Envoyer le message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
