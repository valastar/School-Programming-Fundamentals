import TopicShell from "../../components/TopicShell";
import CodeBlock from "../../components/CodeBlock";
import ExerciseBlock from "../../components/ExerciseBlock";

const toc = [
  { id: "por-que", label: "¿Por qué necesitamos decidir?" },
  { id: "simple", label: "Condicional simple (if)" },
  { id: "compuesta", label: "Condicional compuesta (if / else)" },
  { id: "operadores", label: "Operadores" },
  { id: "ejercicios", label: "Ejercicios para practicar" },
];

const ejercicios = [
  { numero: "1", enunciado: "Lee dos números por teclado. Si el primero es mayor al segundo, muestra su suma y diferencia; en caso contrario, muestra el producto y la división del primero entre el segundo." },
  { numero: "2", enunciado: "Se ingresan tres notas de un alumno. Si el promedio es mayor o igual a 7, muestra el mensaje \"Promocionado\"." },
  { numero: "3", enunciado: "Se ingresa un número positivo de uno o dos dígitos (1 al 99). Muestra un mensaje indicando si el número tiene uno o dos dígitos." },
];

export default function CondicionalesPage() {
  return (
    <TopicShell toc={toc}>
      <p className="mb-2 font-mono text-xs text-accent">04 · Condicionales</p>
      <h1 className="mb-6 text-3xl font-bold text-foreground">
        Estructuras condicionales
      </h1>
      <p className="mb-10 text-base leading-relaxed text-foreground/80">
        No todos los problemas se resuelven ejecutando pasos uno tras otro.
        A veces el programa tiene que tomar una decisión — y para eso
        existen las estructuras condicionales.
      </p>

      <h2 id="por-que" className="mb-4 mt-12 text-xl font-semibold text-foreground">
        ¿Por qué necesitamos decidir?
      </h2>
      <p className="mb-4 leading-relaxed text-foreground/80">
        En la vida diaria constantemente elegimos entre opciones: ¿me pongo
        este pantalón?, ¿tomo el camino A o el camino B? Un programa
        funciona igual: evalúa una condición y, según el resultado, ejecuta
        un camino u otro.
      </p>

      <h2 id="simple" className="mb-4 mt-12 text-xl font-semibold text-foreground">
        Condicional simple (if)
      </h2>
      <p className="mb-4 leading-relaxed text-foreground/80">
        En una condicional simple, si la condición es verdadera se ejecutan
        una o varias instrucciones; si es falsa, no pasa nada — el programa
        sigue de largo. Ejemplo: mostrar &ldquo;Aprobado&rdquo; solo si la
        calificación es mayor o igual a 70.
      </p>
      <CodeBlock>{`import java.util.Scanner;

public class EstructuraCondicionalSimple {
  public static void main(String[] ar) {
    Scanner teclado = new Scanner(System.in);
    float cal;

    System.out.print("Ingrese la calificación: ");
    cal = teclado.nextFloat();

    if (cal >= 70) {
      System.out.println("Este alumno está APROBADO");
    }
  }
}`}</CodeBlock>
      <p className="mb-4 leading-relaxed text-foreground/80">
        Las instrucciones que se ejecutan si la condición es verdadera van
        siempre entre llaves <code className="font-mono text-accent">{"{ }"}</code>. Si ingresas una calificación menor a 70, el programa
        simplemente no imprime nada.
      </p>

      <h2 id="compuesta" className="mb-4 mt-12 text-xl font-semibold text-foreground">
        Condicional compuesta (if / else)
      </h2>
      <p className="mb-4 leading-relaxed text-foreground/80">
        Aquí sí hay instrucciones para ambos caminos: una rama si la
        condición es verdadera, y otra si es falsa. Nunca se ejecutan las
        dos al mismo tiempo. Ejemplo: mostrar cuál de dos números es mayor.
      </p>
      <CodeBlock>{`import java.util.Scanner;

public class EstructuraCondicionalCompuesta {
  public static void main(String[] ar) {
    Scanner teclado = new Scanner(System.in);
    int num1, num2;

    System.out.print("Ingrese primer valor: ");
    num1 = teclado.nextInt();
    System.out.print("Ingrese segundo valor: ");
    num2 = teclado.nextInt();

    if (num1 > num2) {
      System.out.println(num1);
    } else {
      System.out.println(num2);
    }
  }
}`}</CodeBlock>
      <p className="mb-4 leading-relaxed text-foreground/80">
        Si <code className="font-mono text-accent">num1 &gt; num2</code> es
        verdadero, se imprime <code className="font-mono text-accent">num1</code> y el bloque del <code className="font-mono text-accent">else</code> se ignora por completo — y viceversa.
      </p>

      <h2 id="operadores" className="mb-4 mt-12 text-xl font-semibold text-foreground">
        Operadores
      </h2>
      <p className="mb-4 leading-relaxed text-foreground/80">
        Dentro de una condición solo se usan variables, valores constantes y
        operadores relacionales:
      </p>
      <CodeBlock>{`>   mayor que
<   menor que
>=  mayor o igual que
<=  menor o igual que
==  igual a
!=  distinto de`}</CodeBlock>
      <p className="mb-4 leading-relaxed text-foreground/80">
        Elegir el operador correcto depende de lo que pregunta el problema.
        Por ejemplo: &ldquo;multiplicar por 10 si el número es distinto de
        0&rdquo; usa <code className="font-mono text-accent">!=</code>;
        &ldquo;avisar si dos números son iguales&rdquo; usa{" "}
        <code className="font-mono text-accent">==</code>.
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