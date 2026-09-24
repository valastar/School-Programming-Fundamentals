"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const temas = [
  { numero: "01", nombre: "Fundamentos", ruta: "/fundamentos" },
  { numero: "02", nombre: "Variables", ruta: "/variables" },
  { numero: "03", nombre: "Estructura secuencial", ruta: "/estructura-secuencial" },
  { numero: "04", nombre: "Condicionales", ruta: "/condicionales" },
  { numero: "05", nombre: "Switch", ruta: "/switch" },
  { numero: "06", nombre: "Repetición", ruta: "/repeticion" },
  // { numero: "07", nombre: "Arreglos", ruta: "/arreglos" },
  // { numero: "08", nombre: "Funciones", ruta: "/funciones" },
  // { numero: "09", nombre: "Cadenas", ruta: "/cadenas" },
];

export default function Sidebar() {
  const [abierto, setAbierto] = useState<boolean>(true);
  const pathname = usePathname();

  return (
    <>
      <button
        onClick={() => setAbierto(!abierto)}
        aria-label={abierto ? "Ocultar menú" : "Mostrar menú"}
        className={`fixed top-6 z-50 flex h-9 w-9 items-center justify-center rounded-full bg-surface text-foreground shadow-lg shadow-black/40 transition-all duration-300 ease-in-out hover:bg-surface-hover ${
          abierto ? "left-[17.5rem]" : "left-6"
        }`}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          className={`transition-transform duration-300 ${abierto ? "rotate-180" : ""}`}
        >
          <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <aside
        className={`fixed top-0 left-0 z-40 h-screen w-72 overflow-y-auto border-r border-border bg-surface px-6 pb-8 pt-10 transition-transform duration-300 ease-in-out ${
          abierto ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Link href="/" className="mb-1 flex items-baseline gap-2">
          <span className="font-mono text-accent text-sm">{"</>"}</span>
          <span className="font-display text-base font-semibold text-foreground">
            Fundamentos
          </span>
        </Link>
        <p className="mb-10 text-xs text-muted">
          Sistemas Computacionales · Primer semestre
        </p>

        <p className="mb-3 text-xs font-medium text-muted">Contenidos</p>
        <nav className="flex flex-col gap-0.5">
          {temas.map((tema) => {
            const activo = pathname === tema.ruta;
            return (
              <Link
                key={tema.ruta}
                href={tema.ruta}
                className={`group relative flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors ${
                  activo
                    ? "bg-surface-hover text-foreground"
                    : "text-muted hover:bg-surface-hover hover:text-foreground"
                }`}
              >
                <span
                  className={`absolute left-0 h-4 w-0.5 rounded-full transition-colors ${
                    activo ? "bg-accent" : "bg-transparent"
                  }`}
                />
                <span className="font-mono text-xs text-muted/50 group-hover:text-muted">
                  {tema.numero}
                </span>
                {tema.nombre}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}