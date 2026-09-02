import { Sparkles, Play, Zap, ShieldCheck, Gauge, MousePointerClick } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/ui/Button';
import BeforeAfterSlider from '@/components/ui/BeforeAfterSlider';

const highlights = [
  { icon: Zap, title: 'Rapide', text: 'Traitement en quelques secondes' },
  { icon: ShieldCheck, title: 'Sécurisé', text: 'Vos données sont protégées' },
  { icon: Gauge, title: 'Haute qualité', text: 'Des résultats professionnels' },
  { icon: MousePointerClick, title: 'Facile à utiliser', text: 'Aucune compétence requise' },
];

export default function Hero() {
  const navigate = useNavigate();
  return (
    <section id="accueil" className="relative overflow-hidden bg-white">
      {/* Ambiance douce en fond, sans surcharger */}
      <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-indigo-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 top-40 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-14 lg:grid-cols-2 lg:px-8 lg:pt-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-1.5 text-xs font-medium text-[var(--color-primary-dark)]">
            <Sparkles size={14} />
            Nouveau — l'IA au service de vos images
          </span>

          <h1 className="font-display mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-[var(--color-ink)] sm:text-5xl">
            Éditez, améliorez et créez vos images en toute{' '}
            <span className="brand-gradient-text">simplicité.</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg text-slate-600">
            Easy Work rassemble les meilleurs outils d'intelligence artificielle pour
            transformer vos images en quelques clics, sans compétence technique requise.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button variant="primary" size="lg" onClick={() => navigate('/inscription')}>
              Commencer gratuitement
            </Button>
            <Button variant="secondary" size="lg" icon={<Play size={16} />}>
              Voir la démo
            </Button>
          </div>

          <p className="mt-6 text-sm text-slate-500">
            Plus de 50k+ utilisateurs nous font déjà confiance
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6 border-t border-slate-100 pt-8 sm:grid-cols-4">
            {highlights.map(({ icon: Icon, title, text }) => (
              <div key={title}>
                <Icon size={20} className="text-[var(--color-primary)]" />
                <p className="mt-2 text-sm font-semibold text-[var(--color-ink)]">{title}</p>
                <p className="text-xs text-slate-500">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="rounded-3xl border border-slate-100 bg-white p-3 shadow-2xl shadow-indigo-200/50">
            <BeforeAfterSlider
              beforeSrc="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=600&q=80"
              afterSrc="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=600&q=80&fm=png"
              beforeLabel="Original"
              afterLabel="Fond supprimé"
            />
          </div>
          <div className="absolute -right-6 top-6 flex items-center gap-2 rounded-xl border border-slate-100 bg-white px-4 py-2.5 text-xs font-medium shadow-lg">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-50 text-[var(--color-primary)]">
              <Sparkles size={13} />
            </span>
            Suppression d'arrière-plan
            <span className="text-emerald-500">✓</span>
          </div>
        </div>
      </div>
    </section>
  );
}
