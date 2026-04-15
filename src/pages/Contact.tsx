import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
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

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-br from-emerald-900 to-emerald-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-semibold mb-6">
              Contactez-nous
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Parlons de votre <span className="text-emerald-400">projet</span>
            </h1>
            <p className="text-xl text-emerald-100 leading-relaxed">
              Que vous souhaitiez devenir bénévole, partenaire ou simplement en savoir plus 
              sur nos programmes, nous sommes là pour vous écouter.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 border border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">{info.title}</h3>
                {info.lines.map((line, i) => (
                  <p key={i} className="text-slate-600 text-sm">{line}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
                Envoyez-nous un message
              </span>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                Comment pouvons-nous vous aider ?
              </h2>

              {isSubmitted ? (
                <div className="bg-emerald-50 rounded-3xl p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Message envoyé !</h3>
                  <p className="text-slate-600">Nous vous répondrons dans les plus brefs délais.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-slate-700">Nom complet *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Votre nom"
                        required
                        className="rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-slate-700">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="votre@email.com"
                        required
                        className="rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-slate-700">Téléphone</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+225 XX XX XX XX"
                        className="rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-slate-700">Sujet *</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Objet de votre message"
                        required
                        className="rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-slate-700">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Votre message..."
                      required
                      rows={6}
                      className="rounded-xl resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl py-6"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Envoyer le message
                  </Button>
                </form>
              )}
            </div>

            {/* Info & Social */}
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-4">
                Rejoignez-nous
              </span>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                Plusieurs façons de nous rejoindre
              </h2>

              <div className="space-y-8">
                <div className="bg-slate-50 rounded-2xl p-6">
                  <h3 className="font-semibold text-slate-800 mb-2">Devenir bénévole</h3>
                  <p className="text-slate-600 mb-4">
                    Rejoignez notre équipe de bénévoles et contribuez directement à nos programmes sur le terrain.
                  </p>
                  <Link to="/services" className="text-emerald-600 font-medium hover:underline">
                    En savoir plus →
                  </Link>
                </div>

                <div className="bg-slate-50 rounded-2xl p-6">
                  <h3 className="font-semibold text-slate-800 mb-2">Devenir partenaire</h3>
                  <p className="text-slate-600 mb-4">
                    Entreprises, organisations, institutions : collaborez avec nous pour maximiser notre impact.
                  </p>
                  <Link to="/contact" className="text-emerald-600 font-medium hover:underline">
                    En savoir plus →
                  </Link>
                </div>

                <div className="bg-slate-50 rounded-2xl p-6">
                  <h3 className="font-semibold text-slate-800 mb-2">Faire un don</h3>
                  <p className="text-slate-600 mb-4">
                    Chaque contribution, petite ou grande, nous permet d&apos;aller plus loin dans notre mission.
                  </p>
                  <Link to="/donate" className="text-emerald-600 font-medium hover:underline">
                    En savoir plus →
                  </Link>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800 mb-4">Suivez-nous</h3>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-emerald-100 hover:text-emerald-600 transition-all"
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Où nous trouver</h2>
            <p className="text-slate-600">Notre siège social est situé au cœur d&apos;Abidjan</p>
          </div>
          <div className="bg-slate-200 rounded-3xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-slate-400 mx-auto mb-4" />
              <p className="text-slate-500">Carte interactive</p>
              <p className="text-slate-400 text-sm">Abidjan, Côte d&apos;Ivoire</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
