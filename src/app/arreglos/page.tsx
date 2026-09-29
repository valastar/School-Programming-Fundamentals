import TopicShell from "../../components/TopicShell";
import CodeBlock from "../../components/CodeBlock";
import ExerciseBlock from "../../components/ExerciseBlock";

const toc = [
  { id: "que-es", label: "¿Qué es un arreglo?" },
  { id: "declarar-crear", label: "Declarar y crear un arreglo" },
  { id: "recorrer", label: "Recorrer un arreglo" },
  { id: "matrices", label: "Matrices (arreglos bidimensionales)" },
  { id: "ordenar", label: "Ordenar un arreglo" },
  { id: "ejercicios", label: "Ejercicios para practicar" },
];

const ejercicios = [
  {
    numero: "1",
    enunciado:
      "Define un vector llamado vector_numeros de 10 enteros, inicialízalo con valores aleatorios del 1 al 10, y muestra cada elemento junto con su cuadrado y su cubo.",
  },
  {
    numero: "2",
    enunciado:
      "Crea un vector de 5 cadenas leídas por teclado. Copia sus elementos en otro vector pero en orden inverso, y muéstralo.",
  },
  {
    numero: "3",
    enunciado:
      "Lee por teclado las 5 notas de un alumno (0 a 10). Muestra todas las notas, la nota media, la más alta y la más baja.",
  },
  {
    numero: "4",
    enunciado:
      "Declara un vector de diez enteros. Pide números para llenarlo hasta que se llene o se introduzca un número negativo. Imprime solo los elementos que sí se introdujeron.",
  },
  {
    numero: "5",
    enunciado:
      "Inicializa un vector con valores aleatorios y ordénalo de menor a mayor.",
  },
  {
    numero: "6",
    enunciado:
      "Pide un número de mes (ej. 4) y di cuántos días tiene (ej. 30) y su nombre, usando un vector. Para simplificar, febrero tiene 28 días.",
  },
  {
    numero: "7",
    enunciado:
      "Declara tres vectores de 5 enteros: vector1, vector2 y vector3. Pide valores para vector1 y vector2, y calcula vector3 = vector1 + vector2 (elemento por elemento).",
  },
  {
    numero: "8",
    enunciado:
      "Guarda el nombre y edad de varios alumnos hasta que se introduzca '*' como nombre. Al final muestra todos los alumnos mayores de edad, y quién es el de mayor edad.",
  },
  {
    numero: "9",
    enunciado:
      "Guarda la temperatura mínima y máxima de 5 días. Muestra la temperatura media de cada día y cuál fue el día con menor temperatura.",
  },
  {
    numero: "10",
    enunciado:
      "Crea una matriz 5x5 llamada 'matriz', llénala con valores enteros, y muestra la suma de cada fila y de cada columna.",
  },
  {
    numero: "11",
    enunciado:
      "Crea una matriz 5x5 llamada 'diagonal', donde los elementos de la diagonal valgan 1 y el resto 0. Muestra el contenido de la tabla.",
  },
  {
    numero: "12",
    enunciado:
      "Crea una matriz 5x15 llamada 'marco', donde los bordes externos valgan 1 y el resto 0 (como un marco). Muestra el contenido de la matriz.",
  },
];

export default function ArreglosPage() {
  return (
    <TopicShell toc={toc}>
      <p className="mb-2 font-mono text-xs text-accent">07 · Arreglos</p>
      <h1 className="mb-6 text-3xl font-bold text-foreground">
        Arreglos (arrays)
      </h1>
      <p className="mb-10 text-base leading-relaxed text-foreground/80">
        Hasta ahora, cada variable guarda un solo valor. Pero, ¿qué pasa si
        necesitas guardar las 30 calificaciones de un grupo? Declarar 30
        variables sería absurdo — para eso existen los arreglos.
      </p>

      <h2
        id="que-es"
        className="mb-4 mt-12 text-xl font-semibold text-foreground"
      >
        ¿Qué es un arreglo?
      </h2>
      <p className="mb-4 leading-relaxed text-foreground/80">
        Un arreglo es un grupo de elementos finito, homogéneo y ordenado:
      </p>
      <ul className="mb-6 flex flex-col gap-2 pl-5 text-foreground/80">
        <li className="list-disc leading-relaxed">
          <span className="text-foreground">Finito:</span> tiene un tamaño
          definido, que no cambia una vez creado.
        </li>
        <li className="list-disc leading-relaxed">
          <span className="text-foreground">Homogéneo:</span> todos sus
          elementos son del mismo tipo de dato.
        </li>
        <li className="list-disc leading-relaxed">
          <span className="text-foreground">Ordenado:</span> cada elemento tiene
          una posición fija, llamada índice — y en Java siempre empieza en 0, no
          en 1.
        </li>
      </ul>
      <p className="mb-4 leading-relaxed text-foreground/80">
        Si intentas acceder a una posición que no existe (por ejemplo, la
        posición 10 en un arreglo de 10 elementos — recuerda que el último
        índice válido es 9), Java lanza un error en tiempo de ejecución llamado{" "}
        <code className="font-mono text-accent">
          ArrayIndexOutOfBoundsException
        </code>
        .
      </p>

      <h2
        id="declarar-crear"
        className="mb-4 mt-12 text-xl font-semibold text-foreground"
      >
        Declarar y crear un arreglo
      </h2>
      <p className="mb-4 leading-relaxed text-foreground/80">
        En Java, un arreglo es un objeto — por eso, para crearlo (reservar su
        espacio en memoria), se usa la palabra{" "}
        <code className="font-mono text-accent">new</code>, indicando cuántos
        elementos va a tener:
      </p>
      <CodeBlock>{`int[] numeros;          // declaración
numeros = new int[10];  // creación: reserva espacio para 10 enteros

// o ambas cosas en una sola línea:
int[] numeros = new int[10];`}</CodeBlock>
      <p className="mb-4 leading-relaxed text-foreground/80">
        Al crearse, cada elemento toma un valor por defecto: 0 para números,{" "}
        <code className="font-mono text-accent">false</code> para booleanos, y{" "}
        <code className="font-mono text-accent">null</code> para objetos (como
        String).
      </p>
      <p className="mb-4 leading-relaxed text-foreground/80">
        Para asignar o leer un valor, se usa el índice entre corchetes. También
        puedes inicializar un arreglo directamente con sus valores, entre
        llaves:
      </p>
      <CodeBlock>{`numeros[0] = 100;
numeros[1] = 200;
System.out.println(numeros[0]); // imprime 100

// inicialización directa (aquí el tamaño se deduce solo)
int[] edades = { 15, 16, 17, 18 };
String[] ciudades = { "Hermosillo", "Guaymas", "Nogales" };`}</CodeBlock>

      <h2
        id="recorrer"
        className="mb-4 mt-12 text-xl font-semibold text-foreground"
      >
        Recorrer un arreglo
      </h2>
      <p className="mb-4 leading-relaxed text-foreground/80">
        La propiedad <code className="font-mono text-accent">.length</code> te
        da el tamaño del arreglo — muy útil para recorrerlo con un{" "}
        <code className="font-mono text-accent">for</code> sin importar cuántos
        elementos tenga:
      </p>
      <CodeBlock>{`int[] numeros = { 100, 200, 300, 400, 500 };

for (int i = 0; i < numeros.length; i++) {
  System.out.println("Elemento " + i + ": " + numeros[i]);
}`}</CodeBlock>
      <p className="mb-4 leading-relaxed text-foreground/80">
        Cuando solo necesitas leer los valores (sin usar el índice), el{" "}
        <code className="font-mono text-accent">for-each</code> es más corto:
      </p>
      <CodeBlock>{`for (int n : numeros) {
  System.out.println("Elemento: " + n);
}`}</CodeBlock>
      <p className="mb-4 leading-relaxed text-foreground/80">
        La desventaja del for-each es que no tienes acceso al índice, así que no
        puedes usarlo para modificar el arreglo mientras lo recorres.
      </p>

      <h2
        id="matrices"
        className="mb-4 mt-12 text-xl font-semibold text-foreground"
      >
        Matrices (arreglos bidimensionales)
      </h2>
      <p className="mb-4 leading-relaxed text-foreground/80">
        Una matriz es un arreglo con dos índices: uno para la fila y otro para
        la columna. Es útil para tablas de datos — por ejemplo, calificaciones
        de varios alumnos en varias materias.
      </p>
      <CodeBlock>{`int[][] matriz = new int[4][4]; // 4 filas, 4 columnas

int num = 1;
for (int fila = 0; fila < 4; fila++) {
  for (int columna = 0; columna < 4; columna++) {
    matriz[fila][columna] = num;
    num++;
  }
}

System.out.println(matriz[2][3]); // fila 2, columna 3`}</CodeBlock>
      <p className="mb-4 leading-relaxed text-foreground/80">
        Para recorrer una matriz completa siempre se usan dos ciclos{" "}
        <code className="font-mono text-accent">for</code> anidados: uno externo
        para las filas y uno interno para las columnas.
      </p>

      <h2
        id="ordenar"
        className="mb-4 mt-12 text-xl font-semibold text-foreground"
      >
        Ordenar un arreglo
      </h2>
      <p className="mb-4 leading-relaxed text-foreground/80">
        El algoritmo de ordenamiento por selección es el más sencillo de
        entender: busca el elemento más pequeño y lo coloca en la primera
        posición, luego busca el siguiente más pequeño entre los restantes, y
        así sucesivamente.
      </p>
      <CodeBlock>{`int[] datos = { 50, 26, 7, 9, 15, 27 };

for (int i = 0; i < datos.length - 1; i++) {
  for (int j = i + 1; j < datos.length; j++) {
    if (datos[j] < datos[i]) {
      int aux = datos[i];
      datos[i] = datos[j];
      datos[j] = aux;
    }
  }
}`}</CodeBlock>
      <p className="mb-4 leading-relaxed text-foreground/80">
        El intercambio de valores siempre necesita una variable auxiliar (
        <code className="font-mono text-accent">aux</code>) — si haces{" "}
        <code className="font-mono text-accent">datos[i] = datos[j]</code>{" "}
        directamente, pierdes el valor original de{" "}
        <code className="font-mono text-accent">datos[i]</code> antes de poder
        guardarlo en <code className="font-mono text-accent">datos[j]</code>.
      </p>

      <h2
        id="ejercicios"
        className="mb-4 mt-12 text-xl font-semibold text-foreground"
      >
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
