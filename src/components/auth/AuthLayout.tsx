import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/components/ui/Logo';

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  children: ReactNode;
  footer: ReactNode;
}

export default function AuthLayout({ title, subtitle, children, footer }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-surface px-4 py-12">
      <div className="w-full max-w-sm">
        <Link to="/" className="mb-8 flex justify-center">
          <Logo />
        </Link>

        <div className="rounded-2xl border border-ink/10 bg-white p-8 shadow-sm">
          <h1 className="font-display text-xl font-bold text-ink">{title}</h1>
          <p className="mt-1 text-sm text-ink/50">{subtitle}</p>

          <div className="mt-6">{children}</div>
        </div>

        <p className="mt-6 text-center text-sm text-ink/50">{footer}</p>
      </div>
    </div>
  );
}
