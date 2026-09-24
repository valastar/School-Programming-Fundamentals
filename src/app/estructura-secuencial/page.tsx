import TopicShell from "../../components/TopicShell";
import CodeBlock from "../../components/CodeBlock";
import ExerciseBlock from "../../components/ExerciseBlock";

const toc = [
  { id: "que-es", label: "¿Qué es una estructura secuencial?" },
  { id: "ejemplo-resuelto", label: "Ejemplo resuelto: cálculo de sueldo" },
  { id: "ejercicios", label: "Ejercicios para practicar" },
];

const ejercicios = [
  { numero: "1", enunciado: "Escribe un programa que pregunte al usuario su nombre, y luego lo salude." },
  { numero: "2", enunciado: "Calcula el perímetro y área de un rectángulo dada su base y su altura." },
  { numero: "3", enunciado: "Dados los catetos de un triángulo rectángulo, calcula su hipotenusa." },
  { numero: "4", enunciado: "Dados dos números, muestra la suma, resta, división y multiplicación de ambos." },
  { numero: "5", enunciado: "Escribe un programa que convierta un valor dado en grados Fahrenheit a grados Celsius. Fórmula: C = (F-32) * 5/9" },
  { numero: "6", enunciado: "Calcula la media de tres números pedidos por teclado." },
  { numero: "7", enunciado: "Recibe una cantidad de minutos y muestra a cuántas horas y minutos corresponde. Ejemplo: 1000 minutos son 16 horas y 40 minutos." },
  { numero: "8", enunciado: "Un vendedor recibe un sueldo base más 10% extra por comisión de sus ventas. Calcula cuánto obtendrá de comisión por tres ventas del mes, y el total a recibir." },
  { numero: "9", enunciado: "Una tienda ofrece 15% de descuento sobre el total de la compra. Calcula cuánto debe pagar finalmente un cliente." },
  { numero: "10", enunciado: "Calcula la calificación final de un alumno: 55% del promedio de tres parciales, 30% del examen final y 15% de un trabajo final." },
  { numero: "11", enunciado: "Pide al usuario dos números y muestra la distancia entre ellos (el valor absoluto de su diferencia)." },
  { numero: "12", enunciado: "Pide dos pares de números (x1,y1) y (x2,y2) que representen dos puntos en el plano. Calcula la distancia entre ellos." },
  { numero: "13", enunciado: "Lee un número y muestra su raíz cuadrada y su raíz cúbica." },
  { numero: "14", enunciado: "Dado un número de dos cifras, obtén el número invertido. Ejemplo: si se introduce 23, muestra 32." },
  { numero: "15", enunciado: "Dadas dos variables numéricas A y B, intercambia sus valores y muestra cuánto valen al final." },
  { numero: "16", enunciado: "Dos vehículos viajan a distintas velocidades (v1 y v2) separados por una distancia d. Calcula en qué tiempo (minutos) el más rápido alcanza al otro." },
  { numero: "17", enunciado: "Un ciclista parte de una ciudad A a una hora dada (HH:MM:SS). El viaje dura T segundos. Determina la hora de llegada a la ciudad B." },
  { numero: "18", enunciado: "Pide el nombre y los dos apellidos de una persona y muestra sus iniciales." },
  { numero: "19", enunciado: "Calcula la nota final de un examen: 5 puntos por respuesta correcta, -1 por incorrecta, 0 por respuesta en blanco." },
  { numero: "20", enunciado: "Calcula el dinero total (en pesos y centavos) a partir de la cantidad de monedas de cada denominación que tiene una persona." },
];

export default function EstructuraSecuencialPage() {
  return (
    <TopicShell toc={toc}>
      <p className="mb-2 font-mono text-xs text-accent">03 · Estructura secuencial</p>
      <h1 className="mb-6 text-3xl font-bold text-foreground">
        Estructura secuencial
      </h1>
      <p className="mb-10 text-base leading-relaxed text-foreground/80">
        Una estructura secuencial es simplemente eso: una serie de pasos que
        se ejecutan uno detrás de otro, en el mismo orden en que fueron
        escritos, de arriba hacia abajo. Sin decisiones, sin repeticiones —
        solo una línea siguiendo a la otra.
      </p>

      <h2 id="que-es" className="mb-4 mt-12 text-xl font-semibold text-foreground">
        ¿Qué es una estructura secuencial?
      </h2>
      <p className="mb-4 leading-relaxed text-foreground/80">
        Si tienes 3 instrucciones (<code className="font-mono text-accent">accion1</code>,{" "}
        <code className="font-mono text-accent">accion2</code>,{" "}
        <code className="font-mono text-accent">accion3</code>), en una
        estructura secuencial se ejecutan en ese orden exacto: primero{" "}
        <code className="font-mono text-accent">accion1</code>, luego{" "}
        <code className="font-mono text-accent">accion2</code>, y al final{" "}
        <code className="font-mono text-accent">accion3</code>. Es la
        estructura más básica de todo programa, y la base sobre la que se
        construyen las condicionales y los ciclos que veremos más adelante.
      </p>
      <p className="mb-4 leading-relaxed text-foreground/80">
        Una regla importante: si una variable necesita el resultado de otra,
        esa otra variable debe declararse, leerse y calcularse antes.
      </p>

      <h2 id="ejemplo-resuelto" className="mb-4 mt-12 text-xl font-semibold text-foreground">
        Ejemplo resuelto: cálculo de sueldo
      </h2>
      <p className="mb-4 leading-relaxed text-foreground/80">
        El sueldo básico de un empleado se calcula con sus horas trabajadas y
        su tarifa por hora. Luego se le aplica una bonificación del 20% para
        obtener el sueldo bruto, y un descuento del 10% para obtener el
        sueldo neto.
      </p>
      <p className="mb-2 text-sm font-medium text-muted">Pseudocódigo</p>
      <CodeBlock>{`Inicio
   real horasTrab, tarifaHor
   real sueldoBas, montoBoni, sueldoBru, montoDesc, sueldoNet

   Leer horasTrab, tarifaHor

   sueldoBas = horasTrab * tarifaHor
   montoBoni = 0.20 * sueldoBas
   sueldoBru = sueldoBas + montoBoni
   montoDesc = 0.10 * sueldoBru
   sueldoNet = sueldoBru - montoDesc

   Imprimir sueldoBas, montoBoni, sueldoBru, montoDesc, sueldoNet
Fin`}</CodeBlock>
      <p className="mb-2 text-sm font-medium text-muted">La misma lógica en Java</p>
      <CodeBlock>{`import java.util.Scanner;

public class CalculoSueldo {
  public static void main(String[] args) {
    Scanner teclado = new Scanner(System.in);

    System.out.print("Horas trabajadas: ");
    double horasTrab = teclado.nextDouble();
    System.out.print("Tarifa por hora: ");
    double tarifaHor = teclado.nextDouble();

    double sueldoBas = horasTrab * tarifaHor;
    double montoBoni = 0.20 * sueldoBas;
    double sueldoBru = sueldoBas + montoBoni;
    double montoDesc = 0.10 * sueldoBru;
    double sueldoNet = sueldoBru - montoDesc;

    System.out.println("Sueldo básico: " + sueldoBas);
    System.out.println("Sueldo bruto: " + sueldoBru);
    System.out.println("Sueldo neto: " + sueldoNet);
  }
}`}</CodeBlock>
      <p className="mb-4 leading-relaxed text-foreground/80">
        Nota cómo cada variable se calcula en orden: no podríamos calcular{" "}
        <code className="font-mono text-accent">sueldoBru</code> sin antes
        tener <code className="font-mono text-accent">sueldoBas</code> — eso
        es la esencia de la estructura secuencial.
      </p>

      <h2 id="ejercicios" className="mb-4 mt-12 text-xl font-semibold text-foreground">
        Ejercicios para practicar
      </h2>
      <p className="mb-6 leading-relaxed text-foreground/80">
        Intenta resolver cada uno primero en pseudocódigo, y después
        tradúcelo a Java.
      </p>

      {ejercicios.map((ej) => (
        <ExerciseBlock key={ej.numero} numero={ej.numero}>
          {ej.enunciado}
        </ExerciseBlock>
      ))}
    </TopicShell>
  );
}