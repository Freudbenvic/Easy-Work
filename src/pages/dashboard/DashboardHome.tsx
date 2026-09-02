import { Search, ImageOff } from 'lucide-react';
import { Link } from 'react-router-dom';
import { popularTools } from '@/data/tools';

const recentCreations: { label: string }[] = [];

export default function DashboardHome() {
  return (
    <div className="mx-auto max-w-5xl px-8 py-10">
      <header>
        <h1 className="font-display text-2xl font-bold text-ink">
          Bonjour, Joslin 👋
        </h1>
        <p className="mt-1 text-sm text-ink/60">
          Que souhaitez-vous créer aujourd'hui ?
        </p>
      </header>

      <div className="relative mt-6">
        <Search
          size={18}
          className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-ink/40"
        />
        <input
          type="text"
          placeholder="Rechercher un outil..."
          className="w-full rounded-xl border border-ink/10 bg-white py-3 pr-4 pl-11 text-sm outline-none placeholder:text-ink/40 focus:border-primary"
        />
      </div>

      <section className="mt-8">
        <h2 className="text-sm font-semibold text-ink/70">Outils populaires</h2>
        <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {popularTools.map(({ slug, name, description, icon: Icon }) => (
            <Link
              key={slug}
              to={`/dashboard/outils/${slug}`}
              className="group rounded-xl border border-ink/10 bg-white p-4 transition-colors hover:border-primary/40"
            >
              <div className="brand-gradient flex h-10 w-10 items-center justify-center rounded-lg">
                <Icon size={18} className="text-white" strokeWidth={2} />
              </div>
              <p className="mt-3 text-sm font-semibold text-ink">{name}</p>
              <p className="mt-1 text-xs text-ink/50">{description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold text-ink/70">Mes dernières créations</h2>
          <Link
            to="/dashboard/mes-images"
            className="text-xs font-medium text-primary hover:underline"
          >
            Voir tout
          </Link>
        </div>

        {recentCreations.length === 0 ? (
          <div className="mt-3 flex flex-col items-center justify-center rounded-xl border border-dashed border-ink/15 bg-white py-14 text-center">
            <ImageOff size={28} className="text-ink/25" strokeWidth={1.5} />
            <p className="mt-3 text-sm font-medium text-ink/70">
              Aucune création pour le moment
            </p>
            <p className="mt-1 text-xs text-ink/45">
              Choisissez un outil ci-dessus pour commencer
            </p>
          </div>
        ) : null}
      </section>
    </div>
  );
}
