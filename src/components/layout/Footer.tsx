import Logo from '@/components/ui/Logo';

const columns = [
  {
    title: 'Produit',
    links: ['Outils', 'Tarifs', 'Blog', 'Nouveautés'],
  },
  {
    title: 'Entreprise',
    links: ['À propos', 'Contact', 'Mentions légales'],
  },
  {
    title: 'Ressources',
    links: ['FAQ', 'Documentation', 'Support'],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo withTagline />
            <p className="mt-4 max-w-xs text-sm text-slate-500">
              La boîte à outils intelligente pour vos images. Éditez, améliorez et créez en
              quelques clics.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-[var(--color-ink)]">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-slate-500 hover:text-[var(--color-primary)]">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-8 sm:flex-row">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Easy Work. Tous droits réservés.
          </p>
          <p className="text-xs text-slate-400">L'édition d'images en quelques clics.</p>
        </div>
      </div>
    </footer>
  );
}
