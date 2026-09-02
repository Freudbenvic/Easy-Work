import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '@/components/auth/AuthLayout';
import FormField from '@/components/auth/FormField';

interface FormState {
  nom: string;
  email: string;
  motDePasse: string;
  confirmation: string;
}

const initialState: FormState = { nom: '', email: '', motDePasse: '', confirmation: '' };

export default function InscriptionPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitting, setSubmitting] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function validate(): boolean {
    const next: Partial<FormState> = {};
    if (!form.nom.trim()) next.nom = 'Le nom est requis';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Adresse e-mail invalide';
    if (form.motDePasse.length < 8) next.motDePasse = '8 caractères minimum';
    if (form.confirmation !== form.motDePasse) next.confirmation = 'Les mots de passe ne correspondent pas';
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    // TODO Phase 3 : remplacer par POST /api/users/register/ (Django REST Framework)
    await new Promise((resolve) => setTimeout(resolve, 700));
    setSubmitting(false);
    navigate('/dashboard');
  }

  return (
    <AuthLayout
      title="Créer un compte"
      subtitle="Commencez à éditer vos images en quelques secondes."
      footer={
        <>
          Déjà un compte ?{' '}
          <Link to="/connexion" className="font-medium text-primary hover:underline">
            Se connecter
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <FormField
          label="Nom"
          placeholder="Votre nom"
          autoComplete="name"
          value={form.nom}
          error={errors.nom}
          onChange={(e) => update('nom', e.target.value)}
        />
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
          placeholder="8 caractères minimum"
          autoComplete="new-password"
          value={form.motDePasse}
          error={errors.motDePasse}
          onChange={(e) => update('motDePasse', e.target.value)}
        />
        <FormField
          label="Confirmation du mot de passe"
          type="password"
          placeholder="Ressaisissez le mot de passe"
          autoComplete="new-password"
          value={form.confirmation}
          error={errors.confirmation}
          onChange={(e) => update('confirmation', e.target.value)}
        />

        <button
          type="submit"
          disabled={submitting}
          className="brand-gradient mt-2 w-full rounded-lg py-2.5 text-sm font-medium text-white disabled:opacity-60"
        >
          {submitting ? 'Création du compte…' : 'Créer mon compte'}
        </button>
      </form>
    </AuthLayout>
  );
}
