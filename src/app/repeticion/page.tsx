import TopicShell from "../../components/TopicShell";
import CodeBlock from "../../components/CodeBlock";
import ExerciseBlock from "../../components/ExerciseBlock";

const toc = [
  { id: "por-que", label: "¿Para qué sirven los bucles?" },
  { id: "while", label: "El bucle while" },
  { id: "do-while", label: "El bucle do / while" },
  { id: "for", label: "El bucle for" },
  { id: "resumen-comparativo", label: "¿Cuándo usar cuál?" },
  { id: "break-continue", label: "break y continue" },
  { id: "ejercicios", label: "Ejercicios para practicar" },
];

const ejercicios = [
  { numero: "1", enunciado: "Pide un número y calcula su factorial (5! = 1×2×3×4×5 = 120)." },
  { numero: "2", enunciado: "Genera un número aleatorio del 1 al 100 y deja adivinarlo. Indica si es mayor o menor, y cuántos intentos quedan (10 en total). Al acertar, di en cuántos intentos fue; si se acaban, muestra el número." },
  { numero: "3", enunciado: "Pide números hasta que se introduzca un 0. Imprime la suma y la media de todos los números introducidos." },
  { numero: "4", enunciado: "Pide cuántos números vas a introducir, luego pídelos. Informa cuántos son mayores que 0, menores que 0 e iguales a 0." },
  { numero: "5", enunciado: "Pide caracteres e imprime 'VOCAL' o 'NO VOCAL' según corresponda. Termina cuando se introduce un espacio." },
  { numero: "6", enunciado: "Imprime todos los números pares entre dos números que pida al usuario." },
  { numero: "7", enunciado: "Muestra la tabla de multiplicar de un número introducido por teclado." },
  { numero: "8", enunciado: "Pide el límite inferior y superior de un intervalo (si el inferior es mayor, vuelve a pedirlo). Luego introduce números hasta un 0, y al final informa: la suma de los números dentro del intervalo, cuántos están fuera, y si alguno coincidió con los límites." },
  { numero: "9", enunciado: "Dados una base (real) y un exponente (entero positivo), calcula la potencia sin usar el operador de potencia." },
  { numero: "10", enunciado: "Determina si un número introducido por teclado es primo (solo divisible entre sí mismo y 1). Basta con probar hasta la raíz cuadrada del número." },
  { numero: "11", enunciado: "Calcula cuánto ahorrará una persona en un año si al final de cada mes deposita cantidades variables de dinero, mostrando también cuánto lleva ahorrado cada mes." },
  { numero: "12", enunciado: "Con el registro de horas trabajadas por un empleado durante 6 días, calcula el total de horas y el sueldo correspondiente." },
  { numero: "13", enunciado: "Dos personas están en los kilómetros 70 y 150 de una carretera, viajando en sentido opuesto a la misma velocidad. Determina en qué kilómetro se encontrarán." },
  { numero: "14", enunciado: "Un producto se paga en 20 meses: $100 el primer mes, $200 el segundo, $400 el tercero, y así sucesivamente. Calcula cuánto se paga cada mes y el total pagado." },
  { numero: "15", enunciado: "Calcula el sueldo semanal de N trabajadores según sus horas trabajadas, y cuánto pagó la empresa en total." },
  { numero: "17", enunciado: "Haz un programa que muestre un cronómetro, indicando horas, minutos y segundos." },
  { numero: "18", enunciado: "Haz un menú donde puedas escoger distintas opciones, hasta que selecciones \"Salir\"." },
  { numero: "19", enunciado: "Muestra en pantalla los N primeros números primos. N se pide por teclado." },
];

export default function RepeticionPage() {
  return (
    <TopicShell toc={toc}>
      <p className="mb-2 font-mono text-xs text-accent">06 · Repetición</p>
      <h1 className="mb-6 text-3xl font-bold text-foreground">
        Estructuras de repetición
      </h1>
      <p className="mb-10 text-base leading-relaxed text-foreground/80">
        Un bucle (o ciclo) ejecuta un mismo bloque de código múltiples veces.
        En lugar de copiar y pegar la misma línea 100 veces, le das una regla a la computadora:
        <em>"Repite esto hasta que te diga lo contrario"</em>.
      </p>

      <h2 id="por-que" className="mb-4 mt-12 text-xl font-semibold text-foreground">
        ¿Para qué sirven los bucles?
      </h2>
      <p className="mb-4 leading-relaxed text-foreground/80">
        Sirven para automatizar tareas repetitivas: procesar listas de datos, pedir la contraseña al usuario hasta que sea correcta o contar cuántos intentos quedan. Java nos da tres herramientas según lo que necesitemos:
      </p>

      {/* WHILE */}
      <h2 id="while" className="mb-4 mt-12 text-xl font-semibold text-foreground">
        1. El bucle <code>while</code> (Mientras...)
      </h2>
      <p className="mb-4 leading-relaxed text-foreground/80">
        <strong>Uso clave:</strong> Cuando <em>no sabes</em> cuántas veces se repetirá el ciclo (depende de una condición externa).
      </p>
      <p className="mb-4 leading-relaxed text-foreground/80">
        <strong>Analogía:</strong> Como un semáforo. <em>Mientras</em> la luz esté en rojo, te quedas esperando. Si al llegar ya está en verde, ni siquiera te detienes.
      </p>
      <CodeBlock>{`int contador = 0;

// Revisa la condición ANTES de entrar
while (contador < 3) {
    System.out.println("Vuelta número: " + contador);
    contador++; // IMPORTANTE: Cambia la condición para evitar un bucle infinito
}`}</CodeBlock>
      <div className="mb-6 rounded-lg bg-amber-500/10 p-4 text-sm text-amber-200">
        ⚠️ <strong>Ojo:</strong> Si la condición es falsa desde el inicio (ej. <code>contador = 5</code>), el bloque <strong>nunca</strong> se ejecutará.
      </div>

      {/* DO WHILE */}
      <h2 id="do-while" className="mb-4 mt-12 text-xl font-semibold text-foreground">
        2. El bucle <code>do / while</code> (Hacer... mientras)
      </h2>
      <p className="mb-4 leading-relaxed text-foreground/80">
        <strong>Uso clave:</strong> Cuando necesitas que el código se ejecute <strong>al menos una vez</strong>, sin importar si la condición es cierta o no al principio.
      </p>
      <p className="mb-4 leading-relaxed text-foreground/80">
        <strong>Analogía:</strong> Probarse un par de zapatos. Primero te los pones (se ejecuta la acción) y <em>luego</em> decides si te quedan bien o necesitas probarte otros.
      </p>
      <CodeBlock>{`int opcion;

do {
    System.out.println("--- MENÚ ---");
    System.out.println("1. Jugar  2. Salir");
    opcion = pedirOpcionAlUsuario();
} while (opcion != 2); // Revisa la condición AL FINAL de la vuelta`}</CodeBlock>

      {/* FOR */}
      <h2 id="for" className="mb-4 mt-12 text-xl font-semibold text-foreground">
        3. El bucle <code>for</code> (Para...)
      </h2>
      <p className="mb-4 leading-relaxed text-foreground/80">
        <strong>Uso clave:</strong> Cuando <em>sabes exactamente</em> cuántas veces quieres repetir el proceso (ej. 10 veces, 100 veces, o la longitud de una lista).
      </p>
      <p className="mb-4 leading-relaxed text-foreground/80">
        Junta en una sola línea las tres partes que necesita todo contador:
      </p>
      <CodeBlock>{`// for ( Inicio ; Condición ; Paso )
for (int i = 0; i < 5; i++) {
    System.out.println("Número: " + i);
}`}</CodeBlock>
      <ul className="mb-6 ml-6 list-disc space-y-2 text-sm text-foreground/80">
        <li><code>int i = 0</code> ➔ <strong>Inicio:</strong> Se crea la variable (solo ocurre una vez).</li>
        <li><code>i &lt; 5</code> ➔ <strong>Condición:</strong> Se evalúa antes de cada vuelta. Si es <code>true</code>, entra.</li>
        <li><code>i++</code> ➔ <strong>Paso:</strong> Se ejecuta automáticamente al <em>terminar</em> cada vuelta.</li>
      </ul>

      {/* TABLA COMPARATIVA */}
      <h2 id="resumen-comparativo" className="mb-4 mt-12 text-xl font-semibold text-foreground">
        💡 Resumen: ¿Cuál debo usar?
      </h2>
      <div className="mb-8 overflow-x-auto">
        <table className="w-full text-left text-sm text-foreground/80 border-collapse border border-foreground/10">
          <thead className="bg-foreground/5 text-foreground">
            <tr>
              <th className="p-3 border border-foreground/10">Bucle</th>
              <th className="p-3 border border-foreground/10">¿Cuándo usarlo?</th>
              <th className="p-3 border border-foreground/10">Ejecución mínima</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border border-foreground/10 font-mono text-accent">for</td>
              <td className="p-3 border border-foreground/10">Sabes el número exacto de repeticiones.</td>
              <td className="p-3 border border-foreground/10">0 veces</td>
            </tr>
            <tr>
              <td className="p-3 border border-foreground/10 font-mono text-accent">while</td>
              <td className="p-3 border border-foreground/10">No sabes cuántas veces se repetirá y depende de una condición.</td>
              <td className="p-3 border border-foreground/10">0 veces</td>
            </tr>
            <tr>
              <td className="p-3 border border-foreground/10 font-mono text-accent">do / while</td>
              <td className="p-3 border border-foreground/10">Necesitas mostrar o procesar algo al menos una vez (ej. menús).</td>
              <td className="p-3 border border-foreground/10"><strong>1 vez</strong></td>
            </tr>
          </tbody>
        </table>
      </div>

{/* BREAK Y CONTINUE */}
<h2 id="break-continue" className="mb-4 mt-12 text-xl font-semibold text-foreground">
  Control de flujo: <code>break</code> y <code>continue</code>
</h2>
<p className="mb-6 leading-relaxed text-foreground/80">
  Te permiten alterar el comportamiento normal de cualquier bucle:
</p>

<div className="flex flex-col gap-6 mb-8">
  {/* Bloque break */}
  <div className="rounded-lg border border-foreground/10 p-5 bg-foreground/5">
    <h3 className="font-mono text-lg text-accent font-semibold mb-1">
      break (Romper)
    </h3>
    <p className="text-sm text-foreground/80 mb-4">
      Detiene y <strong>sale por completo</strong> del bucle de inmediato.
    </p>
    <CodeBlock>{`for (int i = 1; i <= 10; i++) {
  if (i == 4) break; // Se detiene al llegar a 4
  System.out.println(i); // Imprime 1, 2, 3
}`}</CodeBlock>
  </div>

  {/* Bloque continue */}
  <div className="rounded-lg border border-foreground/10 p-5 bg-foreground/5">
    <h3 className="font-mono text-lg text-accent font-semibold mb-1">
      continue (Saltar)
    </h3>
    <p className="text-sm text-foreground/80 mb-4">
      Interrumpe la vuelta actual y <strong>pasa directamente a la siguiente</strong>.
    </p>
    <CodeBlock>{`for (int i = 1; i <= 5; i++) {
  if (i == 3) continue; // Salta el número 3
  System.out.println(i); // Imprime 1, 2, 4, 5
}`}</CodeBlock>
  </div>
</div>

      <h2 id="ejercicios" className="mb-4 mt-12 text-xl font-semibold text-foreground">
        Ejercicios para practicar
      </h2>
      {ejercicios.map((ej) => (
        <ExerciseBlock key={ej.numero} numero={ej.numero}>
          {ej.enunciado}
        </ExerciseBlock>
      ))}
    </TopicShell>
  );
}