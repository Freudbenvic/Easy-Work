import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '@/components/auth/AuthLayout';
import FormField from '@/components/auth/FormField';

interface FormState {
  email: string;
  motDePasse: string;
}

export default function ConnexionPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState<FormState>({ email: '', motDePasse: '' });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitting, setSubmitting] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function validate(): boolean {
    const next: Partial<FormState> = {};
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Adresse e-mail invalide';
    if (!form.motDePasse) next.motDePasse = 'Le mot de passe est requis';
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    // TODO Phase 3 : remplacer par POST /api/users/login/ (Django REST Framework)
    await new Promise((resolve) => setTimeout(resolve, 700));
    setSubmitting(false);
    navigate('/dashboard');
  }

  return (
    <AuthLayout
      title="Se connecter"
      subtitle="Retrouvez vos images et vos créations."
      footer={
        <>
          Pas encore de compte ?{' '}
          <Link to="/inscription" className="font-medium text-primary hover:underline">
            Créer un compte
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <FormField
          label="Adresse e-mail"
          type="email"
          placeholder="vous@exemple.com"
          autoComplete="email"
          value={form.email}
          error={errors.email}
          onChange={(e) => update('email', e.target.value)}
        />
        <FormField
          label="Mot de passe"
          type="password"
          placeholder="Votre mot de passe"
          autoComplete="current-password"
          value={form.motDePasse}
          error={errors.motDePasse}
          onChange={(e) => update('motDePasse', e.target.value)}
        />

        <button
          type="submit"
          disabled={submitting}
          className="brand-gradient mt-2 w-full rounded-lg py-2.5 text-sm font-medium text-white disabled:opacity-60"
        >
          {submitting ? 'Connexion…' : 'Se connecter'}
        </button>
      </form>
    </AuthLayout>
  );
}
