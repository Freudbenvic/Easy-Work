import { NavLink } from 'react-router-dom';
import {
  Home,
  Grid3x3,
  History,
  Star,
  CreditCard,
  Settings,
  UserRound,
  LogOut,
} from 'lucide-react';

const navItems = [
  { to: '/dashboard', label: 'Accueil', icon: Home, end: true },
  { to: '/dashboard/outils', label: 'Outils', icon: Grid3x3 },
  { to: '/dashboard/historique', label: 'Historique', icon: History },
  { to: '/dashboard/favoris', label: 'Favoris', icon: Star },
  { to: '/dashboard/credits', label: 'Crédits', icon: CreditCard },
];

const bottomItems = [
  { to: '/dashboard/parametres', label: 'Paramètres', icon: Settings },
  { to: '/dashboard/profil', label: 'Profil', icon: UserRound },
];

const CREDITS_RESTANTS = 25;

export default function Sidebar() {
  return (
    <aside className="flex h-full w-64 shrink-0 flex-col bg-ink text-white">
      <div className="flex items-center gap-2 px-6 py-6">
        <div className="brand-gradient flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold text-white">
          E
        </div>
        <span className="font-display text-lg font-semibold">
          Easy Work
        </span>
      </div>

      <nav className="flex-1 space-y-1 px-3">
        {navItems.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                isActive
                  ? 'bg-primary text-white'
                  : 'text-white/70 hover:bg-white/5 hover:text-white'
              }`
            }
          >
            <Icon size={18} strokeWidth={2} />
            {label}
            {label === 'Crédits' && (
              <span className="ml-auto rounded-full bg-white/10 px-2 py-0.5 text-xs font-medium">
                {CREDITS_RESTANTS}
              </span>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="space-y-1 border-t border-white/10 px-3 py-3">
        {bottomItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                isActive
                  ? 'bg-primary text-white'
                  : 'text-white/70 hover:bg-white/5 hover:text-white'
              }`
            }
          >
            <Icon size={18} strokeWidth={2} />
            {label}
          </NavLink>
        ))}
        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white">
          <LogOut size={18} strokeWidth={2} />
          Déconnexion
        </button>
      </div>

      <div className="m-3 rounded-xl bg-white/5 p-4">
        <p className="text-xs text-white/60">Crédits restants</p>
        <p className="font-display mt-1 text-2xl font-bold">
          {CREDITS_RESTANTS}
        </p>
        <p className="mt-1 text-xs text-white/40">
          Renouvellement le 01/09/2026
        </p>
        <button className="brand-gradient mt-3 w-full rounded-lg py-2 text-sm font-medium text-white">
          Obtenir plus de crédits
        </button>
      </div>
    </aside>
  );
}
