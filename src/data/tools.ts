import {
  Scissors,
  Eraser,
  Sparkles,
  Maximize2,
  History as HistoryIcon,
  Wand2,
  Palette,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type ToolCategory = 'retouche' | 'amelioration' | 'creation';

export interface Tool {
  slug: string;
  name: string;
  description: string;
  category: ToolCategory;
  icon: LucideIcon;
  credits: number;
  available: boolean;
}

export const tools: Tool[] = [
  {
    slug: 'suppression-arriere-plan',
    name: "Suppression d'arrière-plan",
    description: 'Détoure le sujet et supprime le fond automatiquement',
    category: 'retouche',
    icon: Scissors,
    credits: 1,
    available: true,
  },
  {
    slug: 'effacer-objet',
    name: 'Effacer un objet',
    description: 'Sélectionne une zone et reconstruit le fond',
    category: 'retouche',
    icon: Eraser,
    credits: 1,
    available: false,
  },
  {
    slug: 'ameliorer-qualite',
    name: 'Améliorer la qualité',
    description: 'Augmente la netteté et la résolution',
    category: 'amelioration',
    icon: Sparkles,
    credits: 1,
    available: false,
  },
  {
    slug: 'agrandir-image',
    name: "Agrandir l'image",
    description: 'Upscaling x2 ou x4 sans perte de détails',
    category: 'amelioration',
    icon: Maximize2,
    credits: 1,
    available: false,
  },
  {
    slug: 'restaurer-photo',
    name: 'Restaurer une photo',
    description: 'Redonne vie à une ancienne photographie',
    category: 'amelioration',
    icon: HistoryIcon,
    credits: 2,
    available: false,
  },
  {
    slug: 'generer-image',
    name: 'Générer une image',
    description: "Crée une image à partir d'une description",
    category: 'creation',
    icon: Wand2,
    credits: 3,
    available: false,
  },
  {
    slug: 'transformer-image',
    name: "Transformer l'image",
    description: 'Applique un style artistique à une photo',
    category: 'creation',
    icon: Palette,
    credits: 2,
    available: false,
  },
];

export const popularTools = tools.slice(0, 3);
