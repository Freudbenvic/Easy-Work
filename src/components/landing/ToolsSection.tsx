import {
  Eraser,
  Wand2,
  Sparkles,
  Maximize2,
  History,
  ImagePlus,
  Palette,
  ScanEye,
} from 'lucide-react';

const categories = [
  {
    label: 'Retouche',
    tools: [
      { icon: ScanEye, name: "Supprimer l'arrière-plan", desc: 'Détoure votre sujet automatiquement.' },
      { icon: Eraser, name: 'Effacer un objet', desc: "Repeignez un élément indésirable d'un coup de pinceau." },
      { icon: Wand2, name: 'Déflouter', desc: 'Améliore la netteté des photos légèrement floues.' },
    ],
  },
  {
    label: 'Amélioration',
    tools: [
      { icon: Sparkles, name: 'Améliorer la qualité', desc: 'Augmente la netteté et réduit les artefacts.' },
      { icon: Maximize2, name: "Agrandir l'image", desc: 'Upscaling x2 ou x4 sans perte de détail.' },
      { icon: History, name: 'Restaurer une photo', desc: 'Redonne vie à vos anciens clichés.' },
    ],
  },
  {
    label: 'Création',
    tools: [
      { icon: ImagePlus, name: 'Générer une image', desc: "Créez une image à partir d'une simple description." },
      { icon: Palette, name: 'Transformer une image', desc: 'Appliquez un style artistique en un clic.' },
    ],
  },
];

export default function ToolsSection() {
  return (
    <section id="outils" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-[var(--color-primary)]">
            Boîte à outils
          </span>
          <h2 className="font-display mt-3 text-3xl font-bold text-[var(--color-ink)] sm:text-4xl">
            Un outil pour chaque besoin
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Choisissez simplement ce que vous voulez faire — Easy Work s'occupe du reste.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-3">
          {categories.map((cat) => (
            <div key={cat.label}>
              <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-slate-400">
                {cat.label}
              </h3>
              <div className="mt-4 space-y-3">
                {cat.tools.map(({ icon: Icon, name, desc }) => (
                  <div
                    key={name}
                    className="group flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-100"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-[var(--color-primary)] transition-colors group-hover:brand-gradient group-hover:text-white">
                      <Icon size={20} />
                    </span>
                    <div>
                      <p className="font-medium text-[var(--color-ink)]">{name}</p>
                      <p className="mt-0.5 text-sm text-slate-500">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
