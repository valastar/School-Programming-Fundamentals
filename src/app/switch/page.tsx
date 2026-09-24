import TopicShell from "../../components/TopicShell";
import CodeBlock from "../../components/CodeBlock";
import ExerciseBlock from "../../components/ExerciseBlock";

const toc = [
  { id: "sintaxis", label: "Sintaxis del switch" },
  { id: "programa-1", label: "Ejemplo: rangos de edad" },
  { id: "programa-2", label: "Ejemplo: calculadora" },
  { id: "ejercicio", label: "Ejercicio para practicar" },
];

export default function SwitchPage() {
  return (
    <TopicShell toc={toc}>
      <p className="mb-2 font-mono text-xs text-accent">05 · Switch</p>
      <h1 className="mb-6 text-3xl font-bold text-foreground">
        Switch — case
      </h1>
      <p className="mb-10 text-base leading-relaxed text-foreground/80">
        Cuando tienes muchas opciones posibles para una misma variable,
        encadenar varios <code className="font-mono text-accent">if</code>{" "}
        se vuelve difícil de leer. El <code className="font-mono text-accent">switch</code> resuelve justo eso: compara un valor contra
        varios casos posibles, de forma más ordenada.
      </p>

      <h2 id="sintaxis" className="mb-4 mt-12 text-xl font-semibold text-foreground">
        Sintaxis del switch
      </h2>
      <CodeBlock>{`switch (expresion) {
  case valor1:
    // código si expresion == valor1
    break;
  case valor2:
    // código si expresion == valor2
    break;
  default:
    // código si no coincide con ningún caso
}`}</CodeBlock>
      <p className="mb-4 leading-relaxed text-foreground/80">
        La expresión se evalúa una sola vez y se compara contra cada{" "}
        <code className="font-mono text-accent">case</code>. En cuanto hay
        una coincidencia, se ejecuta ese bloque.
      </p>
      <p className="mb-4 leading-relaxed text-foreground/80">
        El <code className="font-mono text-accent">break</code> es clave:
        le dice a Java &ldquo;ya terminé, sal del switch&rdquo;. Si lo
        olvidas, el programa sigue ejecutando los casos siguientes aunque no
        coincidan — un error muy común al empezar. El{" "}
        <code className="font-mono text-accent">default</code> es opcional
        y se ejecuta cuando ningún caso coincide; si va al final, no
        necesita <code className="font-mono text-accent">break</code>.
      </p>

      <h2 id="programa-1" className="mb-4 mt-12 text-xl font-semibold text-foreground">
        Ejemplo: rangos de edad
      </h2>
      <CodeBlock>{`import java.util.Scanner;

public class Edad {
  public static void main(String[] ar) {
    Scanner teclado = new Scanner(System.in);
    int edad;

    System.out.print("Ingrese tu edad: ");
    edad = teclado.nextInt();

    switch (edad) {
      case 0:
        System.out.println("Acaba de nacer hace poco. No ha cumplido el año");
        break;
      case 18:
        System.out.println("Está justo en la mayoría de edad");
        break;
      case 65:
        System.out.println("Está en la edad de jubilación");
        break;
      default:
        System.out.println("La edad no es crítica");
        break;
    }
  }
}`}</CodeBlock>

      <h2 id="programa-2" className="mb-4 mt-12 text-xl font-semibold text-foreground">
        Ejemplo: calculadora con operador
      </h2>
      <p className="mb-4 leading-relaxed text-foreground/80">
        El switch también funciona con caracteres, no solo con números:
      </p>
      <CodeBlock>{`import java.util.Scanner;

public class Operacion {
  public static void main(String[] ar) {
    Scanner teclado = new Scanner(System.in);
    int n1, n2, res;
    char signo;

    System.out.print("Ingrese el número 1: ");
    n1 = teclado.nextInt();
    System.out.print("Ingrese el número 2: ");
    n2 = teclado.nextInt();
    System.out.print("Ingrese el signo de la operación [+, -, *, /]: ");
    signo = teclado.next().charAt(0);

    switch (signo) {
      case '+':
        res = n1 + n2;
        System.out.println("El resultado de la suma es: " + res);
        break;
      case '-':
        res = n1 - n2;
        System.out.println("El resultado de la resta es: " + res);
        break;
      case '*':
        res = n1 * n2;
        System.out.println("El resultado de la multiplicación es: " + res);
        break;
      case '/':
        res = n1 / n2;
        System.out.println("El resultado de la división es: " + res);
        break;
      default:
        System.out.println("Signo equivocado");
    }
  }
}`}</CodeBlock>
      <p className="mb-4 leading-relaxed text-foreground/80">
        Nota que este <code className="font-mono text-accent">default</code> no lleva <code className="font-mono text-accent">break</code> — al ser el último caso, no hace falta.
      </p>

      <h2 id="ejercicio" className="mb-4 mt-12 text-xl font-semibold text-foreground">
        Ejercicio para practicar
      </h2>
      <ExerciseBlock numero="1">
        Elabora un programa que use switch para lo siguiente, según el tipo
        de motor ingresado: 0 → &ldquo;No hay establecido un valor definido
        para el tipo de bomba&rdquo;. 1 → &ldquo;La bomba es una bomba de
        agua&rdquo;. 2 → &ldquo;La bomba es una bomba de gasolina&rdquo;.
        3 → &ldquo;La bomba es una bomba de hormigón&rdquo;. 4 →
        &ldquo;La bomba es una bomba de pasta alimenticia&rdquo;. Cualquier
        otro valor → &ldquo;No existe un valor válido para tipo de
        bomba&rdquo;.
      </ExerciseBlock>
    </TopicShell>
  );
}