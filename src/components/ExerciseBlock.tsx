export default function ExerciseBlock({
  numero,
  children,
}: {
  numero: string;
  children: React.ReactNode;
}) {
  return (
    <div className="my-8 rounded-lg border border-border bg-surface p-5">
      <p className="mb-3 text-xs font-medium text-accent">Ejercicio {numero}</p>
      <div className="mb-4 text-sm leading-relaxed text-foreground/80">{children}</div>
      <textarea
        placeholder="Escribe o pega tu solución aquí..."
        rows={6}
        className="w-full resize-y rounded-md border border-border bg-background px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent/50"
      />
    </div>
  );
}