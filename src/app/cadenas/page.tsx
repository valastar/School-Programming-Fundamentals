import TopicShell from "../../components/TopicShell";
import CodeBlock from "../../components/CodeBlock";
import ExerciseBlock from "../../components/ExerciseBlock";

const toc = [
  { id: "leer-caracteres", label: "Leer caracteres" },
  { id: "clase-string", label: "La clase String" },
  { id: "concatenar", label: "Concatenar cadenas" },
  { id: "inmutabilidad", label: "Inmutabilidad" },
  { id: "comparar", label: "Comparar cadenas" },
  { id: "metodos", label: "Métodos útiles de String" },
  { id: "ejercicios", label: "Ejercicios para practicar" },
];

const ejercicios = [
  { numero: "1", enunciado: "Comprueba si una cadena leída por teclado comienza con una subcadena que también se introduce por teclado." },
  { numero: "2", enunciado: "Pide una cadena y un carácter, y muestra cuántas veces aparece ese carácter dentro de la cadena." },
  { numero: "3", enunciado: "Dada una cadena con nombre y apellidos, muestra las iniciales en mayúsculas." },
  { numero: "4", enunciado: "Dada una cadena de caracteres, genera otra cadena que sea el resultado de invertirla." },
  { numero: "5", enunciado: "Pide una cadena y dos caracteres, y sustituye todas las apariciones del primer carácter por el segundo." },
  { numero: "6", enunciado: "Lee una cadena y conviértela: las mayúsculas a minúsculas, y las minúsculas a mayúsculas." },
  { numero: "7", enunciado: "Comprueba si una cadena contiene una subcadena. Ambas se piden por teclado." },
  { numero: "8", enunciado: "Introduce una cadena e indica si es un palíndromo (se lee igual al derecho que al revés)." },
];

export default function CadenasPage() {
  return (
    <TopicShell toc={toc}>
      <p className="mb-2 font-mono text-xs text-accent">09 · Cadenas</p>
      <h1 className="mb-6 text-3xl font-bold text-foreground">
        Manipulación de caracteres y cadenas
      </h1>
      <p className="mb-10 text-base leading-relaxed text-foreground/80">
        Cerramos con uno de los tipos de dato más usados en cualquier
        programa: el texto. Java lo maneja de dos formas relacionadas —
        caracteres individuales (<code className="font-mono text-accent">char</code>) y cadenas de texto completas (
        <code className="font-mono text-accent">String</code>).
      </p>

      <h2 id="leer-caracteres" className="mb-4 mt-12 text-xl font-semibold text-foreground">
        Leer caracteres
      </h2>
      <p className="mb-4 leading-relaxed text-foreground/80">
        Para leer un solo carácter por teclado, se combina{" "}
        <code className="font-mono text-accent">Scanner</code> con{" "}
        <code className="font-mono text-accent">charAt(0)</code>:
      </p>
      <CodeBlock>{`Scanner teclado = new Scanner(System.in);
char caracter = teclado.next().charAt(0);`}</CodeBlock>
      <p className="mb-4 leading-relaxed text-foreground/80">
        También puedes recorrer una cadena carácter por carácter, usando
        su longitud como límite:
      </p>
      <CodeBlock>{`String letras = teclado.nextLine();

for (int i = 0; i < letras.length(); i++) {
  System.out.print(letras.charAt(i));
}`}</CodeBlock>

      <h2 id="clase-string" className="mb-4 mt-12 text-xl font-semibold text-foreground">
        La clase String
      </h2>
      <p className="mb-4 leading-relaxed text-foreground/80">
        Aunque se comporta parecido a un tipo primitivo,{" "}
        <code className="font-mono text-accent">String</code> es en
        realidad una clase. Se puede inicializar de dos formas:
      </p>
      <CodeBlock>{`String cadena = "Bienvenidos al mundo Java"; // forma directa
String cadena2 = new String("Bienvenidos al mundo Java"); // con new`}</CodeBlock>

      <h2 id="concatenar" className="mb-4 mt-12 text-xl font-semibold text-foreground">
        Concatenar cadenas
      </h2>
      <p className="mb-4 leading-relaxed text-foreground/80">
        Hay dos formas comunes de unir cadenas: con el operador{" "}
        <code className="font-mono text-accent">+</code>, o con el método{" "}
        <code className="font-mono text-accent">concat()</code>:
      </p>
      <CodeBlock>{`String nombre = "Jesús";
String apellido = "García";

System.out.println("Me llamo " + nombre + " " + apellido);

System.out.println("Me llamo ".concat(nombre).concat(" ").concat(apellido));`}</CodeBlock>

      <h2 id="inmutabilidad" className="mb-4 mt-12 text-xl font-semibold text-foreground">
        Inmutabilidad
      </h2>
      <p className="mb-4 leading-relaxed text-foreground/80">
        Una vez creado, un <code className="font-mono text-accent">String</code> no se puede modificar. Métodos como{" "}
        <code className="font-mono text-accent">concat()</code> no cambian
        la cadena original — crean y devuelven una cadena{" "}
        <em>nueva</em>, dejando intacta la de partida:
      </p>
      <CodeBlock>{`String saludo = "Hola".concat(" Mundo");
// "Hola" sigue existiendo sin cambios; "saludo" es una cadena distinta`}</CodeBlock>

      <h2 id="comparar" className="mb-4 mt-12 text-xl font-semibold text-foreground">
        Comparar cadenas
      </h2>
      <p className="mb-4 leading-relaxed text-foreground/80">
        Nunca uses <code className="font-mono text-accent">==</code> para
        comparar el contenido de dos Strings — eso compara si son el
        mismo objeto en memoria, no si tienen el mismo texto. Para
        comparar contenido, usa estos métodos:
      </p>
      <div className="mb-6 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-surface">
              <th className="px-4 py-2 font-medium text-foreground">Método</th>
              <th className="px-4 py-2 font-medium text-foreground">Qué hace</th>
            </tr>
          </thead>
          <tbody className="text-foreground/80">
            <tr className="border-b border-border">
              <td className="px-4 py-2 font-mono text-accent">equals(cad)</td>
              <td className="px-4 py-2">true/false, exacto (distingue mayúsculas)</td>
            </tr>
            <tr className="border-b border-border">
              <td className="px-4 py-2 font-mono text-accent">equalsIgnoreCase(cad)</td>
              <td className="px-4 py-2">igual, pero sin distinguir mayúsculas</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-mono text-accent">compareTo(cad)</td>
              <td className="px-4 py-2">compara alfabéticamente, devuelve un entero</td>
            </tr>
          </tbody>
        </table>
      </div>
      <CodeBlock>{`String cad1 = "Sistemas";
String cad2 = "sistemas";

if (cad1.equals(cad2)) {
  System.out.println("Son iguales");
} else {
  System.out.println("No son iguales"); // esta se imprime (distinta mayúscula)
}`}</CodeBlock>

      <h2 id="metodos" className="mb-4 mt-12 text-xl font-semibold text-foreground">
        Métodos útiles de String
      </h2>
      <div className="mb-6 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-surface">
              <th className="px-4 py-2 font-medium text-foreground">Método</th>
              <th className="px-4 py-2 font-medium text-foreground">Qué hace</th>
            </tr>
          </thead>
          <tbody className="text-foreground/80">
            <tr className="border-b border-border">
              <td className="px-4 py-2 font-mono text-accent">length()</td>
              <td className="px-4 py-2">número de caracteres</td>
            </tr>
            <tr className="border-b border-border">
              <td className="px-4 py-2 font-mono text-accent">charAt(i)</td>
              <td className="px-4 py-2">carácter en la posición i</td>
            </tr>
            <tr className="border-b border-border">
              <td className="px-4 py-2 font-mono text-accent">toUpperCase()</td>
              <td className="px-4 py-2">devuelve la cadena en mayúsculas</td>
            </tr>
            <tr className="border-b border-border">
              <td className="px-4 py-2 font-mono text-accent">toLowerCase()</td>
              <td className="px-4 py-2">devuelve la cadena en minúsculas</td>
            </tr>
            <tr className="border-b border-border">
              <td className="px-4 py-2 font-mono text-accent">substring(ini, fin)</td>
              <td className="px-4 py-2">extrae una parte de la cadena</td>
            </tr>
            <tr className="border-b border-border">
              <td className="px-4 py-2 font-mono text-accent">indexOf(x)</td>
              <td className="px-4 py-2">posición de x, o -1 si no aparece</td>
            </tr>
            <tr className="border-b border-border">
              <td className="px-4 py-2 font-mono text-accent">trim()</td>
              <td className="px-4 py-2">quita espacios al inicio y final</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-mono text-accent">replace(a, b)</td>
              <td className="px-4 py-2">reemplaza todas las apariciones de a por b</td>
            </tr>
          </tbody>
        </table>
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