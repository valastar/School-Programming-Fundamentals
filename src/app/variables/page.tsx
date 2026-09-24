import CodeBlock from "../../components/CodeBlock";
import ExerciseBlock from "../../components/ExerciseBlock";
import TopicShell from "../../components/TopicShell";

const toc = [
  { id: "como-declarar", label: "Cómo declarar una variable" },
  { id: "ejemplo-completo", label: "Un ejemplo completo" },
  { id: "tipos-variables", label: "Tipos según dónde viven" },
  { id: "constantes", label: "Constantes" },
  { id: "nombrar-variables", label: "Reglas para nombrar variables" },
];

export default function VariablesPage() {
  return (
    <TopicShell toc={toc}>
      <p className="mb-2 font-mono text-xs text-accent">02 · Variables</p>
      <h1 className="mb-6 text-3xl font-bold text-foreground">
        Declaración y tipos de variables en Java
      </h1>
      <p className="mb-10 text-base leading-relaxed text-foreground/80">
        Una variable es un espacio en memoria al que le damos un nombre, para
        poder guardar y usar un dato dentro de nuestro programa. Su valor
        puede cambiar mientras el programa se ejecuta — de ahí el nombre.
      </p>

      <h2 className="mb-4 mt-12 text-xl font-semibold text-foreground">
        Cómo declarar una variable
      </h2>
      <p className="mb-4 leading-relaxed text-foreground/80">
        Java es de tipado estático: toda variable debe declararse con un tipo
        de dato antes de poder usarse. La forma general es:
      </p>
      <CodeBlock>{`tipo_dato nombre_variable = valor;`}</CodeBlock>
      <p className="mb-4 leading-relaxed text-foreground/80">
        Algunos ejemplos con distintos tipos primitivos:
      </p>
      <CodeBlock>{`float simpleInterest;          // declarada, sin valor inicial
int hora = 10, velocidad = 20; // declaradas e inicializadas
char letra = 'h';              // un solo carácter
String mensaje = "Hola Java";  // texto (no es primitivo, es una clase)
boolean activo = true;         // solo true o false`}</CodeBlock>

      <h2 className="mb-4 mt-12 text-xl font-semibold text-foreground">
        Un ejemplo completo
      </h2>
      <CodeBlock>{`class PrimeraVariable {
  public static void main(String[] args) {
    String mensaje = "Valor inicial";
    System.out.println(mensaje);

    mensaje = "Valor modificado";
    System.out.println(mensaje);
  }
}`}</CodeBlock>
      <p className="mb-4 leading-relaxed text-foreground/80">
        Este programa imprime primero{" "}
        <code className="font-mono text-accent">Valor inicial</code>, y
        después de reasignar la variable, imprime{" "}
        <code className="font-mono text-accent">Valor modificado</code>. El
        nombre de la variable no cambia — lo que cambia es lo que guarda.
      </p>

      <h2 className="mb-4 mt-12 text-xl font-semibold text-foreground">
        Tipos de variables según dónde viven
      </h2>
      <p className="mb-4 leading-relaxed text-foreground/80">
        En Java, además del tipo de dato, una variable también se clasifica
        según en qué parte de la clase se declara:
      </p>
      <ul className="mb-6 flex flex-col gap-2 pl-5 text-foreground/80">
        <li className="list-disc leading-relaxed">
          <span className="text-foreground">Local:</span> declarada dentro de
          un método o bloque. Solo existe mientras ese método se está
          ejecutando, y solo se puede usar ahí dentro.
        </li>
        <li className="list-disc leading-relaxed">
          <span className="text-foreground">De instancia:</span> declarada
          dentro de una clase, pero fuera de cualquier método. Cada objeto
          que se crea de esa clase tiene su propia copia.
        </li>
        <li className="list-disc leading-relaxed">
          <span className="text-foreground">Estática:</span> se declara con
          la palabra <code className="font-mono text-accent">static</code>.
          Existe una sola copia compartida entre todos los objetos de la
          clase, y se puede acceder sin necesidad de crear un objeto:{" "}
          <code className="font-mono text-accent">NombreClase.variable</code>.
        </li>
      </ul>

      <h2 className="mb-4 mt-12 text-xl font-semibold text-foreground">
        Constantes
      </h2>
      <p className="mb-4 leading-relaxed text-foreground/80">
        Cuando un valor no debe cambiar nunca durante la ejecución del
        programa, se declara como constante usando la palabra clave{" "}
        <code className="font-mono text-accent">final</code>. Por convención,
        las constantes se escriben en mayúsculas:
      </p>
      <CodeBlock>{`final int CONSTANTE1 = 6;
final int CONSTANTE2 = 1;

int total = 4 * CONSTANTE1 + 3 * CONSTANTE2;
System.out.println("Resultado: " + total);`}</CodeBlock>
      <p className="mb-4 leading-relaxed text-foreground/80">
        Si intentas asignarle un nuevo valor a una variable{" "}
        <code className="font-mono text-accent">final</code> después de
        inicializarla, el programa no compilará.
      </p>

      <h2 className="mb-4 mt-12 text-xl font-semibold text-foreground">
        Reglas para nombrar variables
      </h2>
      <ul className="mb-6 flex flex-col gap-2 pl-5 text-foreground/80">
        <li className="list-disc leading-relaxed">
          Solo se permiten letras, números, <code className="font-mono">$</code> y{" "}
          <code className="font-mono">_</code> — no espacios ni acentos.
        </li>
        <li className="list-disc leading-relaxed">
          No pueden empezar con un número (ej.{" "}
          <code className="font-mono text-red-400/80">123java</code> no es
          válido).
        </li>
        <li className="list-disc leading-relaxed">
          Java distingue mayúsculas de minúsculas:{" "}
          <code className="font-mono text-accent">edad</code> y{" "}
          <code className="font-mono text-accent">Edad</code> son variables
          distintas.
        </li>
        <li className="list-disc leading-relaxed">
          No se puede usar una palabra reservada de Java (como{" "}
          <code className="font-mono">class</code>,{" "}
          <code className="font-mono">int</code> o{" "}
          <code className="font-mono">static</code>).
        </li>
        <li className="list-disc leading-relaxed">
          Por convención, se usa camelCase para variables normales (ej.{" "}
          <code className="font-mono text-accent">nombrePersona</code>) y
          mayúsculas con guión bajo para constantes (ej.{" "}
          <code className="font-mono text-accent">LETRA_PI</code>).
        </li>
      </ul>

      <ExerciseBlock numero="1">
        Declara variables para guardar tu nombre, tu edad y si eres estudiante
        de tiempo completo (true o false). Imprime los tres valores en
        pantalla con <code className="font-mono">System.out.println</code>.
      </ExerciseBlock>
    </TopicShell>
  );
}