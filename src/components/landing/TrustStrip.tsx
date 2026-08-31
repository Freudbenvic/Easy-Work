import { Sparkles, ShieldCheck, Gauge, MousePointerClick, Smartphone } from 'lucide-react';

const items = [
  { icon: Sparkles, title: '+20', text: 'Outils IA puissants' },
  { icon: ShieldCheck, title: 'Sécurisé', text: 'Confidentialité garantie' },
  { icon: Gauge, title: 'Rapide', text: 'Résultats en quelques secondes' },
  { icon: MousePointerClick, title: 'Facile', text: 'Interface simple et intuitive' },
  { icon: Smartphone, title: 'Accessible', text: 'Sur tous vos appareils' },
];

export default function TrustStrip() {
  return (
    <section className="border-t border-slate-100 bg-slate-50 py-14">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 sm:grid-cols-3 lg:grid-cols-5 lg:px-8">
        {items.map(({ icon: Icon, title, text }) => (
          <div key={title} className="flex items-start gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-[var(--color-primary)] shadow-sm">
              <Icon size={17} />
            </span>
            <div>
              <p className="text-sm font-semibold text-[var(--color-ink)]">{title}</p>
              <p className="text-xs text-slate-500">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
