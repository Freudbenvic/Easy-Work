import { useCallback, useRef, useState } from 'react';
import { UploadCloud } from 'lucide-react';

interface UploadDropzoneProps {
  onFileSelected: (file: File) => void;
  accept?: string;
  hint?: string;
}

export default function UploadDropzone({
  onFileSelected,
  accept = 'image/jpeg,image/png,image/webp',
  hint = 'JPG, PNG ou WEBP — 10 Mo maximum',
}: UploadDropzoneProps) {
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFiles = useCallback(
    (files: FileList | null) => {
      const file = files?.[0];
      if (file) onFileSelected(file);
    },
    [onFileSelected],
  );

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
        setDragActive(true);
      }}
      onDragLeave={() => setDragActive(false)}
      onDrop={(e) => {
        e.preventDefault();
        setDragActive(false);
        handleFiles(e.dataTransfer.files);
      }}
      onClick={() => inputRef.current?.click()}
      className={`flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed px-6 py-16 text-center transition-colors ${
        dragActive
          ? 'border-primary bg-primary/5'
          : 'border-ink/15 bg-white hover:border-primary/40'
      }`}
    >
      <div className="brand-gradient flex h-14 w-14 items-center justify-center rounded-full">
        <UploadCloud size={24} className="text-white" strokeWidth={2} />
      </div>
      <p className="mt-4 text-sm font-semibold text-ink">
        Glissez une image ici, ou cliquez pour parcourir
      </p>
      <p className="mt-1 text-xs text-ink/45">{hint}</p>

      <input
        ref={inputRef}
        type="file"
        accept={accept}
        className="hidden"
        onChange={(e) => handleFiles(e.target.files)}
      />
    </div>
  );
}
