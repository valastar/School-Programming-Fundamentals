import TopicShell from "../../components/TopicShell";
import CodeBlock from "../../components/CodeBlock";
import ExerciseBlock from "../../components/ExerciseBlock";

const toc = [
  { id: "que-es", label: "¿Qué es un método?" },
  { id: "crear-llamar", label: "Crear y llamar un método" },
  { id: "parametros", label: "Parámetros y argumentos" },
  { id: "return", label: "Valores de retorno" },
  { id: "sobrecarga", label: "Sobrecarga de métodos" },
  { id: "recursion", label: "Recursión" },
  { id: "ejercicios", label: "Ejercicios para practicar" },
];

const ejercicios = [
  { numero: "1", enunciado: "Escribe un método llamado esPar que reciba un entero y devuelva true si es par, false si es impar. Pruébalo desde main con varios números." },
  { numero: "2", enunciado: "Crea un método areaCirculo que reciba el radio (double) y devuelva el área del círculo. Recuerda: área = π × radio²." },
  { numero: "3", enunciado: "Escribe un método saludar sobrecargado: una versión sin parámetros que imprima \"Hola\", y otra que reciba un nombre (String) e imprima \"Hola, [nombre]\"." },
  { numero: "4", enunciado: "Implementa un método recursivo potencia(base, exponente) que calcule una potencia sin usar el operador **, llamándose a sí mismo." },
  { numero: "5", enunciado: "Crea un método mayorDeTres que reciba tres enteros y devuelva el mayor de los tres, usando comparaciones (sin arreglos)." },
];

export default function FuncionesPage() {
  return (
    <TopicShell toc={toc}>
      <p className="mb-2 font-mono text-xs text-accent">08 · Funciones</p>
      <h1 className="mb-6 text-3xl font-bold text-foreground">
        Funciones y métodos
      </h1>
      <p className="mb-10 text-base leading-relaxed text-foreground/80">
        Cuando un bloque de código se repite en varias partes de tu
        programa, lo correcto no es copiarlo y pegarlo una y otra vez —
        es convertirlo en un método: lo defines una sola vez, y lo usas
        cuantas veces necesites.
      </p>

      <h2 id="que-es" className="mb-4 mt-12 text-xl font-semibold text-foreground">
        ¿Qué es un método?
      </h2>
      <p className="mb-4 leading-relaxed text-foreground/80">
        Un método es un bloque de código que solo se ejecuta cuando se
        llama. Ya has usado varios sin crearlos tú:{" "}
        <code className="font-mono text-accent">System.out.println()</code>{" "}
        es un método predefinido de Java. La gran ventaja de crear los
        tuyos es la reutilización: escribes la lógica una vez, y la
        invocas donde la necesites.
      </p>

      <h2 id="crear-llamar" className="mb-4 mt-12 text-xl font-semibold text-foreground">
        Crear y llamar un método
      </h2>
      <p className="mb-4 leading-relaxed text-foreground/80">
        Un método se declara dentro de una clase, con un nombre seguido de
        paréntesis:
      </p>
      <CodeBlock>{`public class MiClase {
  static void miMetodo() {
    System.out.println("¡Acabo de ser ejecutado!");
  }

  public static void main(String[] args) {
    miMetodo(); // llamada al método
    miMetodo(); // se puede llamar varias veces
  }
}`}</CodeBlock>
      <p className="mb-4 leading-relaxed text-foreground/80">
        <code className="font-mono text-accent">static</code> indica que
        el método pertenece a la clase, no a un objeto específico de esa
        clase — es lo mismo que usa{" "}
        <code className="font-mono text-accent">main</code>, por eso puede
        llamarlo directamente.{" "}
        <code className="font-mono text-accent">void</code> indica que
        este método no devuelve ningún valor.
      </p>

      <h2 id="parametros" className="mb-4 mt-12 text-xl font-semibold text-foreground">
        Parámetros y argumentos
      </h2>
      <p className="mb-4 leading-relaxed text-foreground/80">
        No son lo mismo, aunque se confunden seguido:
      </p>
      <ul className="mb-6 flex flex-col gap-2 pl-5 text-foreground/80">
        <li className="list-disc leading-relaxed">
          <span className="text-foreground">Parámetro:</span> la variable
          que aparece en la definición del método (recibe el valor).
        </li>
        <li className="list-disc leading-relaxed">
          <span className="text-foreground">Argumento:</span> el valor real
          que se envía cuando llamas al método.
        </li>
      </ul>
      <CodeBlock>{`public class MiClase {
  static void miMetodo(String nombre) { // "nombre" es el parámetro
    System.out.println(nombre + " Picapiedra");
  }

  public static void main(String[] args) {
    miMetodo("Pedro"); // "Pedro" es el argumento
    miMetodo("Wilma");
  }
}`}</CodeBlock>
      <p className="mb-4 leading-relaxed text-foreground/80">
        Puedes tener varios parámetros separados por coma — y al llamar al
        método, debes enviar la misma cantidad de argumentos, en el mismo
        orden:
      </p>
      <CodeBlock>{`static void miMetodo(String nombre, int edad) {
  System.out.println(nombre + " tiene " + edad + " años");
}

miMetodo("Leonor", 18);`}</CodeBlock>

      <h2 id="return" className="mb-4 mt-12 text-xl font-semibold text-foreground">
        Valores de retorno
      </h2>
      <p className="mb-4 leading-relaxed text-foreground/80">
        Si quieres que el método te devuelva un resultado (en vez de solo
        imprimir algo), cambias{" "}
        <code className="font-mono text-accent">void</code> por el tipo de
        dato que va a devolver, y usas{" "}
        <code className="font-mono text-accent">return</code>:
      </p>
      <CodeBlock>{`static int sumar(int x, int y) {
  return x + y;
}

public static void main(String[] args) {
  int resultado = sumar(5, 3); // guardamos lo que devuelve
  System.out.println(resultado); // 8
}`}</CodeBlock>
      <p className="mb-4 leading-relaxed text-foreground/80">
        Importante: en cuanto se ejecuta{" "}
        <code className="font-mono text-accent">return</code>, el método
        termina ahí mismo — cualquier línea después de ese{" "}
        <code className="font-mono text-accent">return</code> no se
        ejecuta. Y si el método no es{" "}
        <code className="font-mono text-accent">void</code>, debe
        garantizar que siempre devuelve algo, en todos los caminos
        posibles (por ejemplo, en cada rama de un{" "}
        <code className="font-mono text-accent">if / else</code>).
      </p>

      <h2 id="sobrecarga" className="mb-4 mt-12 text-xl font-semibold text-foreground">
        Sobrecarga de métodos
      </h2>
      <p className="mb-4 leading-relaxed text-foreground/80">
        Java permite que varios métodos compartan el mismo nombre, siempre
        y cuando tengan distinta cantidad o tipo de parámetros. Java
        elige automáticamente cuál usar según lo que le mandes:
      </p>
      <CodeBlock>{`static int mayor(int x, int y) {
  return x > y ? x : y;
}

static int mayor(int x, int y, int z) {
  return mayor(mayor(x, y), z);
}

// mayor(3, 7)     usa la primera versión
// mayor(3, 7, 5)  usa la segunda`}</CodeBlock>

      <h2 id="recursion" className="mb-4 mt-12 text-xl font-semibold text-foreground">
        Recursión
      </h2>
      <p className="mb-4 leading-relaxed text-foreground/80">
        Un método puede llamarse a sí mismo — esto se llama recursión.
        Es útil cuando un problema se puede definir en términos de una
        versión más pequeña de sí mismo, como el factorial:
      </p>
      <CodeBlock>{`static long factorial(int n) {
  if (n == 0) {
    return 1; // caso base: aquí se detiene la recursión
  } else {
    return n * factorial(n - 1); // se llama a sí mismo
  }
}`}</CodeBlock>
      <p className="mb-4 leading-relaxed text-foreground/80">
        El &ldquo;caso base&rdquo; (aquí,{" "}
        <code className="font-mono text-accent">n == 0</code>) es
        esencial: sin él, el método se llamaría a sí mismo para siempre y
        el programa se rompería.
      </p>

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