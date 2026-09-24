import TopicShell from "../../components/TopicShell";
import CodeBlock from "../../components/CodeBlock";
import ExerciseBlock from "../../components/ExerciseBlock";

const toc = [
  { id: "por-que", label: "¿Para qué sirven los bucles?" },
  { id: "while", label: "El bucle while" },
  { id: "do-while", label: "El bucle do / while" },
  { id: "for", label: "El bucle for" },
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
        Un bucle (o ciclo) ejecuta un bloque de código una y otra vez,
        mientras se cumpla una condición. Ahorran tiempo, reducen errores y
        evitan que repitas la misma instrucción cientos de veces a mano.
      </p>

      <h2 id="por-que" className="mb-4 mt-12 text-xl font-semibold text-foreground">
        ¿Para qué sirven los bucles?
      </h2>
      <p className="mb-4 leading-relaxed text-foreground/80">
        Imagina que necesitas imprimir un mensaje 3000 veces. Escribirlo a
        mano línea por línea no es una opción — para eso existen las
        estructuras repetitivas. Java tiene tres formas principales:{" "}
        <code className="font-mono text-accent">while</code>,{" "}
        <code className="font-mono text-accent">do / while</code> y{" "}
        <code className="font-mono text-accent">for</code>.
      </p>

      <h2 id="while" className="mb-4 mt-12 text-xl font-semibold text-foreground">
        El bucle while
      </h2>
      <p className="mb-4 leading-relaxed text-foreground/80">
        Repite un bloque de código mientras la condición sea verdadera. La
        condición se evalúa <em>antes</em> de cada vuelta — si nunca es
        verdadera, el bloque nunca se ejecuta.
      </p>
      <CodeBlock>{`int i = 0;
while (i < 5) {
  System.out.println(i);
  i++;
}`}</CodeBlock>
      <p className="mb-4 leading-relaxed text-foreground/80">
        Cuidado: si olvidas aumentar la variable de la condición (
        <code className="font-mono text-accent">i++</code>), el ciclo nunca
        termina.
      </p>

      <h2 id="do-while" className="mb-4 mt-12 text-xl font-semibold text-foreground">
        El bucle do / while
      </h2>
      <p className="mb-4 leading-relaxed text-foreground/80">
        Es igual al while, con una diferencia importante: el bloque se
        ejecuta primero, y la condición se revisa después. Esto garantiza
        que el código se ejecute al menos una vez, aunque la condición sea
        falsa desde el principio.
      </p>
      <CodeBlock>{`int i = 5;
do {
  System.out.println(i);
  i++;
} while (i < 15);`}</CodeBlock>

      <h2 id="for" className="mb-4 mt-12 text-xl font-semibold text-foreground">
        El bucle for
      </h2>
      <p className="mb-4 leading-relaxed text-foreground/80">
        Cuando sabes exactamente cuántas veces quieres repetir algo, el{" "}
        <code className="font-mono text-accent">for</code> es más directo
        que el <code className="font-mono text-accent">while</code>: junta
        la inicialización, la condición y el incremento en una sola línea.
      </p>
      <CodeBlock>{`for (int i = 0; i < 5; i++) {
  System.out.println(i);
}`}</CodeBlock>
      <p className="mb-4 leading-relaxed text-foreground/80">
        <code className="font-mono text-accent">int i = 0</code> se ejecuta
        una sola vez al inicio; <code className="font-mono text-accent">i &lt; 5</code> se revisa antes de cada vuelta; y{" "}
        <code className="font-mono text-accent">i++</code> se ejecuta al
        final de cada vuelta. Puedes cambiar el paso, por ejemplo para
        imprimir solo números pares:
      </p>
      <CodeBlock>{`for (int i = 0; i <= 10; i = i + 2) {
  System.out.println(i);
}`}</CodeBlock>

      <h2 id="break-continue" className="mb-4 mt-12 text-xl font-semibold text-foreground">
        break y continue
      </h2>
      <p className="mb-4 leading-relaxed text-foreground/80">
        Dentro de un bucle, <code className="font-mono text-accent">break</code> sale del ciclo por completo, y{" "}
        <code className="font-mono text-accent">continue</code> salta el
        resto de esa vuelta y pasa directo a la siguiente.
      </p>
      <CodeBlock>{`// break: se detiene al llegar a 4
for (int i = 0; i < 10; i++) {
  if (i == 4) {
    break;
  }
  System.out.println(i);
}

// continue: se salta el valor 4, pero sigue el ciclo
for (int i = 0; i < 10; i++) {
  if (i == 4) {
    continue;
  }
  System.out.println(i);
}`}</CodeBlock>

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