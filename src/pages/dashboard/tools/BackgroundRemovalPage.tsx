import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Pencil,
  Download,
  ZoomIn,
  ZoomOut,
  Maximize,
  RotateCcw,
  Lock,
} from 'lucide-react';
import UploadDropzone from '@/components/dashboard/UploadDropzone';
import BeforeAfterSlider from '@/components/ui/BeforeAfterSlider';
import { simulateBackgroundRemoval } from '@/lib/mockProcessing';

type Step = 'upload' | 'processing' | 'done';
type BrushMode = 'conserver' | 'effacer';

const backgroundOptions = [
  { id: 'transparent', label: 'Transparent', swatchClass: 'checkerboard' },
  { id: 'white', label: 'Blanc', swatchClass: 'bg-white' },
  { id: 'dark', label: 'Sombre', swatchClass: 'bg-ink' },
] as const;

const TOOL_CREDITS = 1;
const CREDITS_RESTANTS = 25;

export default function BackgroundRemovalPage() {
  const [step, setStep] = useState<Step>('upload');
  const [originalUrl, setOriginalUrl] = useState<string | null>(null);
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [fileName, setFileName] = useState('');
  const [background, setBackground] =
    useState<(typeof backgroundOptions)[number]['id']>('transparent');
  const [brushMode, setBrushMode] = useState<BrushMode>('conserver');
  const [brushSize, setBrushSize] = useState(50);
  const [zoom, setZoom] = useState(100);

  async function handleFile(file: File) {
    setFileName(file.name);
    const url = URL.createObjectURL(file);
    setOriginalUrl(url);
    setStep('processing');
    const result = await simulateBackgroundRemoval(file);
    setResultUrl(result);
    setStep('done');
  }

  function handleReset() {
    setStep('upload');
    setOriginalUrl(null);
    setResultUrl(null);
    setBackground('transparent');
    setBrushMode('conserver');
    setBrushSize(50);
    setZoom(100);
  }

  function handleDownload() {
    if (!resultUrl) return;
    const a = document.createElement('a');
    a.href = resultUrl;
    a.download = `easywork-${fileName || 'resultat'}.png`;
    a.click();
  }

  const activeBg = backgroundOptions.find((b) => b.id === background)!;

  return (
    <div className="flex h-full flex-col">
      {/* Barre du haut */}
      <div className="flex items-center justify-between border-b border-ink/10 bg-white px-6 py-4">
        <div className="flex items-center gap-3">
          <Link
            to="/dashboard"
            className="flex items-center gap-1.5 text-sm text-ink/60 hover:text-ink"
          >
            <ArrowLeft size={16} />
            Retour
          </Link>
          <span className="text-ink/20">|</span>
          <h1 className="flex items-center gap-2 text-sm font-semibold text-ink">
            Suppression d'arrière-plan
            <Pencil size={13} className="text-ink/30" />
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            {TOOL_CREDITS} crédit · {CREDITS_RESTANTS} restants
          </span>
          <button
            disabled={step !== 'done'}
            onClick={handleDownload}
            className="brand-gradient flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Download size={15} />
            Télécharger
          </button>
        </div>
      </div>

      {step === 'upload' && (
        <div className="flex flex-1 items-center justify-center p-10">
          <div className="w-full max-w-lg">
            <UploadDropzone onFileSelected={handleFile} />
          </div>
        </div>
      )}

      {step !== 'upload' && originalUrl && (
        <div className="flex flex-1 overflow-hidden">
          {/* Panneau gauche */}
          <aside className="w-64 shrink-0 space-y-6 overflow-y-auto border-r border-ink/10 bg-white p-5">
            <div>
              <p className="mb-2 text-xs font-semibold text-ink/50">Arrière-plan</p>
              <div className="grid grid-cols-3 gap-2">
                {backgroundOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setBackground(opt.id)}
                    className={`h-9 rounded-lg border-2 ${opt.swatchClass} ${
                      background === opt.id ? 'border-primary' : 'border-ink/10'
                    }`}
                    title={opt.label}
                  />
                ))}
              </div>
            </div>

            <div>
              <p className="mb-2 text-xs font-semibold text-ink/50">Outils</p>
              <div className="space-y-2">
                <button
                  onClick={() => setBrushMode('conserver')}
                  className={`w-full rounded-lg border px-3 py-2 text-left text-sm font-medium transition-colors ${
                    brushMode === 'conserver'
                      ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                      : 'border-ink/10 text-ink/60 hover:border-ink/20'
                  }`}
                >
                  Conserver
                </button>
                <button
                  onClick={() => setBrushMode('effacer')}
                  className={`w-full rounded-lg border px-3 py-2 text-left text-sm font-medium transition-colors ${
                    brushMode === 'effacer'
                      ? 'border-rose-500 bg-rose-50 text-rose-700'
                      : 'border-ink/10 text-ink/60 hover:border-ink/20'
                  }`}
                >
                  Effacer
                </button>
              </div>
            </div>

            <div>
              <p className="mb-2 text-xs font-semibold text-ink/50">
                Taille du pinceau — {brushSize}px
              </p>
              <input
                type="range"
                min={10}
                max={100}
                value={brushSize}
                onChange={(e) => setBrushSize(Number(e.target.value))}
                className="w-full accent-primary"
              />
            </div>

            <button
              onClick={handleReset}
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-ink/10 py-2 text-sm text-ink/60 hover:bg-ink/5"
            >
              <RotateCcw size={14} />
              Réinitialiser
            </button>
          </aside>

          {/* Zone centrale */}
          <div className="flex flex-1 flex-col">
            <div className="flex flex-1 items-center justify-center overflow-auto p-8">
              {step === 'processing' ? (
                <div className="flex flex-col items-center gap-3">
                  <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary/20 border-t-primary" />
                  <p className="text-sm text-ink/60">Suppression du fond en cours…</p>
                </div>
              ) : (
                <div
                  style={{ width: `${zoom}%`, maxWidth: '32rem' }}
                  className="transition-[width] duration-150"
                >
                  <div className={activeBg.swatchClass === 'checkerboard' ? 'checkerboard rounded-2xl' : ''}>
                    <BeforeAfterSlider
                      beforeSrc={originalUrl}
                      afterSrc={resultUrl ?? originalUrl}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Barre de zoom */}
            <div className="flex items-center justify-center gap-3 border-t border-ink/10 bg-white py-3">
              <button
                onClick={() => setZoom((z) => Math.max(40, z - 10))}
                className="rounded-lg p-2 text-ink/50 hover:bg-ink/5"
              >
                <ZoomOut size={16} />
              </button>
              <span className="w-12 text-center text-xs text-ink/50">{zoom}%</span>
              <button
                onClick={() => setZoom((z) => Math.min(160, z + 10))}
                className="rounded-lg p-2 text-ink/50 hover:bg-ink/5"
              >
                <ZoomIn size={16} />
              </button>
              <button
                onClick={() => setZoom(100)}
                className="rounded-lg p-2 text-ink/50 hover:bg-ink/5"
              >
                <Maximize size={16} />
              </button>
            </div>
          </div>

          {/* Panneau résultat */}
          {step === 'done' && (
            <aside className="w-64 shrink-0 space-y-3 overflow-y-auto border-l border-ink/10 bg-white p-5">
              <p className="text-xs font-semibold text-ink/50">Résultat</p>
              <div className="checkerboard overflow-hidden rounded-xl">
                <img src={resultUrl ?? undefined} alt="Résultat" className="w-full" />
              </div>
              <button
                onClick={handleDownload}
                className="brand-gradient flex w-full items-center justify-center gap-2 rounded-lg py-2 text-sm font-medium text-white"
              >
                <Download size={15} />
                Télécharger
              </button>
              <button
                disabled
                title="Disponible avec un abonnement Pro"
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-ink/10 py-2 text-sm text-ink/40"
              >
                <Lock size={13} />
                Télécharger HD
              </button>
            </aside>
          )}
        </div>
      )}
    </div>
  );
}
