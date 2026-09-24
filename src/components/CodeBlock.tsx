export default function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="my-6 overflow-x-auto rounded-lg border border-border bg-surface px-5 py-4 text-sm leading-relaxed text-foreground/90">
      <code className="font-mono">{children}</code>
    </pre>
  );
}