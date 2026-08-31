import { Link } from 'react-router-dom';
import { LogoMark } from '@/components/ui/Logo';

interface Props {
  title: string;
}

/**
 * Page de repère temporaire — sera remplacée au fur et à mesure
 * de l'avancement de la roadmap (Phase 3 : Authentification, Phase 4 : Dashboard...).
 */
export default function NotBuiltYet({ title }: Props) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-50 px-6 text-center">
      <LogoMark size={48} />
      <h1 className="font-display text-2xl font-bold text-[var(--color-ink)]">{title}</h1>
      <p className="max-w-sm text-sm text-slate-500">
        Cette page arrive dans une prochaine étape de la roadmap.
      </p>
      <Link to="/" className="text-sm font-medium text-[var(--color-primary)] hover:underline">
        ← Retour à l'accueil
      </Link>
    </div>
  );
}
