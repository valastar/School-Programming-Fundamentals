import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <p className="mb-4 font-mono text-xs text-accent">{"// bienvenido"}</p>
      <h1 className="mb-6 text-4xl font-bold text-foreground">
        Sistemas Computacionales
      </h1>
      <p className="mb-4 text-base leading-relaxed text-foreground/80">
        Esta página fue creada para el grupo S1A, para los alumnos del ITH,
        para que podamos aprender Java de una mejor manera.
      </p>
      <p className="mb-10 text-base leading-relaxed text-foreground/80">
        Cualquier duda o recomendación que tengan, me mandan mensaje.
      </p>

      <div className="mb-12 flex items-center gap-3 border-t border-border pt-6">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-surface font-mono text-sm text-accent">
          IM
        </div>
        <div>
          <p className="text-sm text-foreground">Iván Martínez</p>
          <p className="text-xs text-muted">Creador de esta guía</p>
        </div>
      </div>

      <Link
        href="/fundamentos"
        className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-accent-dark"
      >
        Comenzar por Fundamentos
      </Link>
    </div>
  );
}