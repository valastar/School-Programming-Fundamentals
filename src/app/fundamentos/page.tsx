import CodeBlock from "../../components/CodeBlock";
import ExerciseBlock from "../../components/ExerciseBlock";
import TopicShell from "@/components/TopicShell";

const toc = [
  { id: "como-entiende", label: "Cómo entiende una computadora" },
  { id: "etapas-desarrollo", label: "Etapas del desarrollo" },
  { id: "que-es-algoritmo", label: "¿Qué es un algoritmo?" },
  { id: "por-que-java", label: "¿Por qué Java?" },
];

export default function FundamentosPage() {
  return (
    <TopicShell toc={toc}>
      <p className="mb-2 font-mono text-xs text-accent">01 · Fundamentos</p>
      <h1 className="mb-6 text-3xl font-bold text-foreground">
        Fundamentos de programación
      </h1>
      <p className="mb-10 text-base leading-relaxed text-foreground/80">
        Antes de escribir una sola línea de Java, hay ideas que son comunes a
        cualquier lenguaje de programación. Entender esto primero hace que
        aprender Java (o cualquier otro lenguaje después) sea mucho más
        sencillo.
      </p>

      <h2 className="mb-4 mt-12 text-xl font-semibold text-foreground">
        Cómo &ldquo;entiende&rdquo; una computadora
      </h2>
      <p className="mb-4 leading-relaxed text-foreground/80">
        Una computadora es una máquina eléctrica que solo entiende dos estados:
        hay corriente (1) o no hay corriente (0). A esto se le llama código
        binario. Para representar letras, números y símbolos, se usa un código
        llamado ASCII, donde cada carácter equivale a una combinación de 8 ceros
        y unos (un byte). La letra A, por ejemplo, se representa como{" "}
        <code className="font-mono text-accent">01100001</code>.
      </p>
      <p className="mb-4 leading-relaxed text-foreground/80">
        Comunicarnos directamente en binario es prácticamente imposible, así que
        existen los lenguajes de programación. Se dividen en dos grandes grupos
        según qué tan cerca están del &ldquo;idioma&rdquo; de la computadora:
      </p>
      <ul className="mb-6 flex flex-col gap-2 pl-5 text-foreground/80">
        <li className="list-disc leading-relaxed">
          <span className="text-foreground">Bajo nivel:</span> muy cercanos al
          lenguaje máquina, difíciles de leer y poco usados directamente (ej.
          ensamblador).
        </li>
        <li className="list-disc leading-relaxed">
          <span className="text-foreground">Alto nivel:</span> se parecen más a
          un idioma humano, casi siempre en inglés (Java, Python, C++,
          JavaScript...). Un compilador o intérprete se encarga de traducirlos a
          lenguaje máquina.
        </li>
      </ul>
      <p className="mb-4 leading-relaxed text-foreground/80">
        Java pertenece a este segundo grupo, y es de tipo interpretado: sus
        instrucciones se analizan y ejecutan sin que tengas que preocuparte por
        el código binario que hay detrás.
      </p>

      <h2 className="mb-4 mt-12 text-xl font-semibold text-foreground">
        Etapas del desarrollo de un programa
      </h2>
      <p className="mb-4 leading-relaxed text-foreground/80">
        Escribir código no es el primer paso. Todo programa pasa por cuatro
        etapas:
      </p>
      <ol className="mb-6 flex flex-col gap-2 pl-5 text-foreground/80">
        <li className="list-decimal leading-relaxed">
          <span className="text-foreground">Análisis:</span> entender bien qué
          problema se quiere resolver.
        </li>
        <li className="list-decimal leading-relaxed">
          <span className="text-foreground">Diseño:</span> crear el algoritmo,
          generalmente en pseudocódigo.
        </li>
        <li className="list-decimal leading-relaxed">
          <span className="text-foreground">Codificación:</span> traducir ese
          algoritmo a un lenguaje de programación (el código fuente).
        </li>
        <li className="list-decimal leading-relaxed">
          <span className="text-foreground">Ejecución y validación:</span>{" "}
          comprobar que el programa realmente resuelve el problema.
        </li>
      </ol>

      <h2 className="mb-4 mt-12 text-xl font-semibold text-foreground">
        ¿Qué es un algoritmo?
      </h2>
      <p className="mb-4 leading-relaxed text-foreground/80">
        Un algoritmo es una secuencia finita de pasos, sin ambigüedades, para
        resolver un problema. Tiene una entrada, un proceso y una salida. Antes
        de programar, hay que ser capaz de resolver el problema &ldquo;a
        mano&rdquo; — si no sabes cómo resolverlo tú, no podrás explicárselo a
        la computadora.
      </p>
      <p className="mb-4 leading-relaxed text-foreground/80">
        Para expresar un algoritmo se puede usar un diagrama de flujo
        (representación gráfica con símbolos) o pseudocódigo: una forma de
        escribir los pasos en un idioma cercano al humano, pero con la
        estructura de un lenguaje de programación. Por ejemplo:
      </p>
      <CodeBlock>{`Inicio
   Escribir "¿Cuál es tu nombre?"
   Leer nombre
   Escribir "Hola, " + nombre
Fin`}</CodeBlock>
      <p className="mb-4 leading-relaxed text-foreground/80">
        Dominar el pseudocódigo es clave: una vez que sabes resolver un problema
        en pseudocódigo, pasarlo a Java (o a cualquier otro lenguaje) es solo
        cuestión de aprender la sintaxis equivalente.
      </p>

      <h2 className="mb-4 mt-12 text-xl font-semibold text-foreground">
        ¿Por qué Java?
      </h2>
      <p className="mb-4 leading-relaxed text-foreground/80">
        Java es uno de los lenguajes más usados en la industria, y uno de los
        mejor pagados. Se usa en desarrollo web, apps móviles, sistemas
        bancarios y mucho más — empresas como Google, Amazon y bancos lo
        prefieren por ser seguro, portable y fácil de mantener.
      </p>
      <p className="mb-4 leading-relaxed text-foreground/80">
        Algunas razones concretas:
      </p>
      <ul className="mb-6 flex flex-col gap-2 pl-5 text-foreground/80">
        <li className="list-disc leading-relaxed">
          <span className="text-foreground">Multiplataforma:</span>{" "}
          &ldquo;escribe una vez, ejecuta donde sea&rdquo; — el mismo código
          corre en distintos sistemas operativos.
        </li>
        <li className="list-disc leading-relaxed">
          <span className="text-foreground">Código abierto:</span> gran parte de
          su tecnología es libre, lo que permite a cualquiera aprender de código
          real y contribuir a mejorarlo.
        </li>
        <li className="list-disc leading-relaxed">
          <span className="text-foreground">Alta demanda laboral:</span>{" "}
          aprenderlo bien amplía bastante las oportunidades de trabajo.
        </li>
      </ul>

      <ExerciseBlock numero="1">
        Investiga cuáles son los lenguajes de programación más comunes
        actualmente y para qué se usa cada uno (por ejemplo: ¿para qué se usa
        Python?, ¿y JavaScript?, ¿y C++?).
      </ExerciseBlock>
    </TopicShell>
  );
}
