import { Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/ui/Button';

const plans = [
  {
    name: 'Gratuit',
    price: '0',
    cta: 'Commencer',
    variant: 'secondary' as const,
    featured: false,
    features: [
      '10 crédits par jour',
      'Accès à 5 outils de base',
      'Résultats standards',
      'Support communautaire',
    ],
  },
  {
    name: 'Pro',
    price: '5 000',
    cta: 'Choisir Pro',
    variant: 'primary' as const,
    featured: true,
    features: [
      'Crédits illimités',
      'Accès à tous les outils',
      'Résultats HD',
      'Traitement prioritaire',
      'Support prioritaire',
    ],
  },
  {
    name: 'Premium',
    price: '15 000',
    cta: 'Choisir Premium',
    variant: 'secondary' as const,
    featured: false,
    features: ['Tout le plan Pro', 'Génération illimitée', 'API privée', 'Support 24/7'],
  },
];

export default function PricingSection() {
  const navigate = useNavigate();
  return (
    <section id="tarifs" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-[var(--color-primary)]">
            Tarifs
          </span>
          <h2 className="font-display mt-3 text-3xl font-bold text-[var(--color-ink)] sm:text-4xl">
            Des tarifs adaptés à vos besoins
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Commencez gratuitement, passez à la vitesse supérieure quand vous en avez besoin.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl border p-8 ${
                plan.featured
                  ? 'border-transparent bg-[var(--color-ink)] text-white shadow-2xl shadow-indigo-200 lg:-translate-y-4'
                  : 'border-slate-200 bg-white'
              }`}
            >
              {plan.featured && (
                <span className="brand-gradient absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-semibold text-white">
                  Le plus populaire
                </span>
              )}

              <h3
                className={`font-display text-lg font-semibold ${
                  plan.featured ? 'brand-gradient-text' : 'text-[var(--color-ink)]'
                }`}
              >
                {plan.name}
              </h3>

              <p className="mt-4 flex items-baseline gap-1">
                <span className="font-display text-4xl font-bold">{plan.price}</span>
                <span className={plan.featured ? 'text-slate-300' : 'text-slate-500'}>
                  {' '}
                  FCFA /mois
                </span>
              </p>

              <ul className="mt-8 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm">
                    <Check
                      size={16}
                      className={plan.featured ? 'text-indigo-300' : 'text-[var(--color-primary)]'}
                    />
                    <span className={plan.featured ? 'text-slate-200' : 'text-slate-600'}>{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.featured ? 'primary' : 'secondary'}
                onClick={() => navigate('/inscription')}
                className={`mt-8 w-full ${plan.featured ? '' : ''}`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
