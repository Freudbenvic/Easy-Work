import Button from '@/components/ui/Button';

export default function CtaSection() {
  return (
    <section id="a-propos" className="py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="brand-gradient relative overflow-hidden rounded-3xl px-8 py-16 text-center sm:px-16">
          <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-white/10" />
          <div className="pointer-events-none absolute -bottom-16 -left-10 h-56 w-56 rounded-full bg-white/10" />

          <h2 className="font-display relative text-3xl font-bold text-white sm:text-4xl">
            Prêt à simplifier vos images ?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-indigo-100">
            Rejoignez des milliers d'utilisateurs qui éditent déjà leurs images sans effort
            grâce à l'intelligence artificielle.
          </p>
          <div className="relative mt-8 flex justify-center">
            <Button
              variant="secondary"
              size="lg"
              className="border-0 bg-white text-[var(--color-primary-dark)] hover:bg-indigo-50"
            >
              Commencer gratuitement
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
