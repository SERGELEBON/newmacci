import { useState } from 'react';
import { Heart, CheckCircle, Shield, Users, TrendingUp, CreditCard, Wallet, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';

const Donate = () => {
  const [amount, setAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const predefinedAmounts = [5000, 10000, 25000, 50000, 100000];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const impacts = [
    { amount: '5,000 FCFA', description: 'Fournit des fournitures scolaires à un enfant pour un an' },
    { amount: '10,000 FCFA', description: 'Finance une consultation médicale pour 5 personnes' },
    { amount: '25,000 FCFA', description: 'Permet à un adulte de suivre un cours d\'alphabétisation' },
    { amount: '50,000 FCFA', description: 'Offre un microcrédit à une entrepreneure' },
    { amount: '100,000 FCFA', description: 'Finance la formation d\'un jeune à un métier qualifiant' },
  ];

  const stats = [
    { value: '90%', label: 'Des dons vont directement aux programmes', icon: TrendingUp },
    { value: '5,000+', label: 'Donateurs nous font confiance', icon: Users },
    { value: '100%', label: 'Sécurisé et transparent', icon: Shield },
  ];

  const paymentMethods = [
    { icon: CreditCard, name: 'Carte bancaire', description: 'Visa, Mastercard' },
    { icon: Wallet, name: 'Mobile Money', description: 'Orange Money, MTN Money, Wave' },
    { icon: Building2, name: 'Virement bancaire', description: 'Compte bancaire MAC.CI' },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-br from-rose-900 to-rose-800 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/20 text-rose-300 text-sm font-semibold mb-6">
              <Heart className="w-4 h-4" />
              Faire un don
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Chaque don <span className="text-rose-400">compte</span>
            </h1>
            <p className="text-xl text-rose-100 leading-relaxed">
              Votre générosité nous permet de transformer des vies et de bâtir 
              un avenir meilleur pour les communautés ivoiriennes.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-rose-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <stat.icon className="w-10 h-10 mx-auto mb-3 opacity-80" />
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-rose-100 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              {isSubmitted ? (
                <div className="bg-emerald-50 rounded-3xl p-12 text-center">
                  <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-emerald-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800 mb-4">Merci pour votre générosité !</h2>
                  <p className="text-slate-600 mb-8">
                    Votre don de {amount?.toLocaleString() || customAmount} FCFA va nous aider à continuer 
                    notre mission. Un reçu vous sera envoyé par email.
                  </p>
                  <Link to="/">
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full">
                      Retour à l&apos;accueil
                    </Button>
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <Label className="text-slate-700 text-lg mb-4 block">Choisissez un montant</Label>
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                      {predefinedAmounts.map((amt) => (
                        <button
                          key={amt}
                          type="button"
                          onClick={() => {
                            setAmount(amt);
                            setCustomAmount('');
                          }}
                          className={`py-3 px-4 rounded-xl font-semibold transition-all ${
                            amount === amt
                              ? 'bg-rose-600 text-white'
                              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                          }`}
                        >
                          {amt.toLocaleString()}
                        </button>
                      ))}
                    </div>
                    <div className="mt-4">
                      <Label className="text-slate-600 text-sm mb-2 block">Ou entrez un montant personnalisé</Label>
                      <div className="relative">
                        <Input
                          type="number"
                          value={customAmount}
                          onChange={(e) => {
                            setCustomAmount(e.target.value);
                            setAmount(null);
                          }}
                          placeholder="Montant personnalisé"
                          className="rounded-xl pl-4 pr-16"
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500">FCFA</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Label className="text-slate-700 text-lg block">Vos informations</Label>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-slate-600 text-sm mb-2 block">Prénom *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          required
                          className="rounded-xl"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-slate-600 text-sm mb-2 block">Nom *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          required
                          className="rounded-xl"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-slate-600 text-sm mb-2 block">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="rounded-xl"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-slate-600 text-sm mb-2 block">Téléphone</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="rounded-xl"
                      />
                    </div>
                  </div>

                  <div>
                    <Label className="text-slate-700 text-lg mb-4 block">Mode de paiement</Label>
                    <div className="space-y-3">
                      {paymentMethods.map((method, index) => (
                        <label
                          key={index}
                          className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 hover:border-rose-300 cursor-pointer transition-all"
                        >
                          <input type="radio" name="payment" className="w-5 h-5 text-rose-600" defaultChecked={index === 0} />
                          <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center">
                            <method.icon className="w-6 h-6 text-slate-600" />
                          </div>
                          <div>
                            <div className="font-semibold text-slate-800">{method.name}</div>
                            <div className="text-slate-500 text-sm">{method.description}</div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-rose-600 hover:bg-rose-700 text-white rounded-xl py-6 text-lg"
                    disabled={!amount && !customAmount}
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    Faire un don de {(amount || parseInt(customAmount) || 0).toLocaleString()} FCFA
                  </Button>

                  <p className="text-center text-slate-500 text-sm">
                    Votre don est sécurisé et déductible des impôts. 
                    Un reçu fiscal vous sera envoyé par email.
                  </p>
                </form>
              )}
            </div>

            {/* Impact Info */}
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-4">
                Votre impact
              </span>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                Ce que votre don permet de réaliser
              </h2>

              <div className="space-y-4">
                {impacts.map((impact, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50">
                    <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0">
                      <Heart className="w-5 h-5 text-rose-600" />
                    </div>
                    <div>
                      <div className="font-bold text-rose-600">{impact.amount}</div>
                      <div className="text-slate-600 text-sm">{impact.description}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl text-white">
                <h3 className="font-bold text-lg mb-2">Don régulier</h3>
                <p className="text-emerald-100 text-sm mb-4">
                  Devenez donateur mensuel et bénéficiez de mises à jour exclusives 
                  sur l&apos;impact de vos contributions.
                </p>
                <button className="bg-white text-emerald-600 px-6 py-3 rounded-full font-semibold text-sm hover:bg-emerald-50 transition-colors">
                  En savoir plus
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="py-24 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              D&apos;autres façons d&apos;aider
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Au-delà des dons financiers, il existe de nombreuses façons de contribuer à notre mission.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Devenir bénévole',
                description: 'Donnez de votre temps et de vos compétences pour nos programmes sur le terrain.',
                link: '/contact',
              },
              {
                title: 'Devenir partenaire',
                description: 'Entreprises et organisations, collaborez avec nous pour maximiser notre impact.',
                link: '/contact',
              },
              {
                title: 'Partager notre cause',
                description: 'Parlez de MAC.CI autour de vous et sur les réseaux sociaux.',
                link: '/',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all">
                <h3 className="font-semibold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{item.description}</p>
                <Link to={item.link} className="text-emerald-600 font-medium text-sm hover:underline">
                  En savoir plus →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
