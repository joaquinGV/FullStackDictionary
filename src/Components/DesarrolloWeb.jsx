import { Concept } from "./Concept";
import { Enlace } from "./Enlace";
import { Section } from "./Section";

export function DesarrolloWeb() {
  return (
    <Section
      id="DesarrolloWeb"
      title={"Desarrollo Web"}
      experiencia={
        "El curso planta las bases del desarrollo Web, conocimiento y practica de gran variedad de las diferentes etiquetas HTML, paso a paso de un proceso de diseño y maquetado, conocimiento CSS de básico a intermedio, creando una pagina web sin JavaScript, aplicando principios de diseños responsive y subida a servidor. Uso basico de librerias como Bootstrap."
      }
      url={
        "https://joaquingv.github.io/yiyinails/PreEntrega3-GonzalezVazquez/index.html"
      }
      proyectTitle={"Pagina de Citas para agencia de uñas"}
      proyectDescription={
        "Es un proyecto vanilla que cuenta solo con la estructura HTML y CSS, para mostar servicios de una pagina de uñas, promociones y agendar citas. Con enfoque principal de aplicar en almenos una vez la mayoria de conceptos aprendidos. No es optima y hay muchas areas de mejora. "
      }
    >
      <Concept number={1} titulo={"Prototipado y conceptos básicos de HTML."}>
        <li className="contenedor-li">
          <strong>Sketch: </strong>Es un dibujo rápido o bosquejo guía, que
          reproduce de manera muy sencilla un concepto, una idea o generalidad
          de un proyecto.
          <Enlace
            url={
              "https://www.crehana.com/blog/estilo-vida/que-es-sketch/#google_vignette"
            }
          />
        </li>
        <li>
          <strong>Wireframe: </strong>Es la representación estática, en baja
          calidad de un diseño.
          <Enlace url={"https://miro.com/es/wireframe/que-es-wireframe/"} />
        </li>
        <li>
          <strong>Mockup: </strong>Es la representación estática de un diseño,
          en calidad media o alta.
          <Enlace url={"https://www.arimetrics.com/glosario-digital/mockup"} />
        </li>
        <li>
          <strong>HTML: </strong>Es un <i>lenguaje</i> de marcado de etiquetas,
          que permite crear documentos para web.
          <Enlace url={"https://www.arimetrics.com/glosario-digital/mockup"} />
        </li>
        <li>
          <strong>Doctype: </strong>Cuando escribes tu documento HTML, lo
          primero que debes hacer es escribir el DOCTYPE, el cual declara el
          tipo de documento. Es decir, sirve para indicar que tu documento está
          escrito siguiendo la estructura determinada por un DTD concreto. Un
          DTD es la definición del tipo de documento.
          <Enlace url={"https://www.arimetrics.com/glosario-digital/mockup"} />
        </li>
      </Concept>
      <Concept number={2} titulo={"Primeros pasos con HTML."}>
        <li>
          <strong>Listas: </strong>HTML permite agrupar elementos que tienen más
          significado de forma conjunta. Aunque cada palabra por separado tiene
          sentido, de forma conjunta constituyen el menú de navegación de la
          página, por lo que su significado conjunto es mayor que por separado.
          Esto se denomina listas.
        </li>
        <li>
          <strong>Tablas: </strong>Son un conjunto de celdas organizadas, dentro
          del cual es posible alojar distintos contenidos. Sirven para
          representar información tabulada, en filas y columnas.
        </li>
        <li>
          <strong>Formularios: </strong>Son etiquetas donde el usuario ingresaá
          o seleccionará valores, que serán enviados a un archivo encargado de
          procesar la información.
        </li>
        <li>
          <strong>Enlaces: </strong>También conocidos como links o anchors, se
          utilizan para relacionar partes del mismo documento. Por defecto, se
          visualizan azules y subrayados.
        </li>
      </Concept>
      <Concept number={3} titulo={"Incluyendo CSS a nuestro proyecto."}>
        <li>
          <strong>Etiqueta IFRAME: </strong>Es un elemento HTML que permite
          insertar o incrustar un documento HTML dentro de un documento HTML
          principal.
        </li>
        <li>
          <strong>CSS (Cascading Style Sheets): </strong>Es un lenguaje web para
          aplicar formato visual (color, tamaño, separación y ubiación) al HTML.
          Con él puedes cambiar por completo el aspecto de cualquier etiqueta
          HTML.
        </li>
        <li>
          <strong>Padres e hijos: </strong>Es un concepto que se aplica cuando
          tienes una etiqueta <i>dentro</i> de otra. Esto se habilita a agregar
          atributos específicos a <i>hijos</i>, sin alterar los del <i>padre</i>
          .
        </li>
        <li>
          <strong>Class: </strong>Generalmente se utiliza para darles estilos a
          cierta parte del código.
        </li>
        <li>
          <strong>Atributo ID: </strong>Suele usarse para nombrar porciones de
          codigo y sectores, como por ejemplo cuando quieres nombrar distintas
          secciones.
        </li>
        <li>
          <strong>Joroba de camello: </strong>Permite que se puedan leer de
          forma más simple palabras compuestas.
        </li>
        <li>
          <strong>Reset CSS: </strong>Contiene en su código fuente definiciones
          para propiedades problemáticas, que los diseñadores necesitan unificar
          desde un principio.
        </li>
        <li>
          <strong> Unidades de medidas: </strong>
          <ul>
            <strong>- Absolutas: </strong>

            <li>
              <strong>Px (Pixels): </strong> Es la unidad que usan las
              pantallas.
            </li>
            <strong>- Relativas: </strong>
            <li>
              <strong>Rem: </strong> Relativa a la configuración de tamaño de la
              raíz (etiqueta html).
            </li>
            <li>
              <strong>Procentaje: </strong> Tomando en cuenta que 16px es 100%.
            </li>
          </ul>
          <li>
            <strong>Viewport: </strong> Se utilizan para layouts responsivos.
          </li>
        </li>
      </Concept>
      <Concept number={4} titulo={"CSS + Box Modeling."}>
        <li>
          <strong>Box model: </strong>El concepto de que <i>todo es una caja</i>
          , da lugar a algo llamado en web como box model. Sin importar si son
          de línea o de bloque (pero tiene su incidencia en lo que sean), todas
          las etiquetas tienen propiedades en común.
        </li>
        <li>
          <strong>Width: </strong>Es la propiedad CSS que controla la anchura de
          la caja de los elementos.
        </li>
        <li>
          <strong>Height: </strong>Es la propiedad CSS que controla la altura de
          la caja de los elementos.
        </li>
        <li>
          <strong>Overflow: </strong>Es una propiedad que tiene 4 valores
          posibles. Ellos son: visible, hidden, scroll y auto.
        </li>
        <li>
          <strong>Espacio exterior Margin (márgenes): </strong>Las propiedades
          margin-top, margin-right, margin-bottom y margin-left, se utilizan
          para definir los márgenes de cada uno de los lados del elemento por
          separado.
        </li>
        <li>
          <strong>Padding (relleno): </strong>Las propiedades padding-top,
          padding-right, padding-bottom y padding-left, se utilizan para definir
          los espacios internos de cada uno de los lados del elemento, por
          separado.
        </li>
        <li>
          <strong>Border: </strong>Las propiedades border-top, border-right,
          border-bottom, y border-left, se utilizan para definir los border de
          cada lado del elemento por separado.
        </li>
      </Concept>
      <Concept number={5} titulo={"Flexbox."}>
        <li>
          <strong>Flexbox: </strong>Es un modo de diseño que nos permite crear
          estructuras para sitios web de una forma más fácil. No se trata de una
          propiedad de CSS, sino de un conjunto de ellas. Se basa sobre un
          contenedor (padre) para ordenar a sus ítems (hijos).
        </li>
        <ul>
          <li>
            <strong>Row (flex-direction): </strong>Esta propiedad nos va a
            permitir especificar si queremos que los flex items se dispongan en
            filas o columnas.
          </li>
          <li>
            <strong>Row-reverse (flex-direction): </strong>Con el valor
            row-reverse (fila inversa) los flex items se apilan de derecha a
            izquierda.
          </li>
          <li>
            <strong>Column (flex-direction): </strong>Con este valor, los flex
            items se apilan en una columna de arriba hacia abajo.
          </li>
          <li>
            <strong>Column-reverse: </strong>Con este valor, los flex items se
            apilan en una columna de abajo hacia arriba.
          </li>
          <li>
            <strong>Flex-wrap: </strong>Permite especificar si queremos que los
            ítems puedan saltar a una nueva línea, cuando el contenedor flexible
            se quede sin espacio.
          </li>
          <li>
            <strong>Wrap (flex-wrap): </strong>Los flex items (hijos) pueden
            romper la línea del eje horizontal, si les es necesario para
            conservar las características de sus dimensiones. Esto es de
            izquierda a derecha, y de arriba a abajo.
          </li>
          <li>
            <strong>Wrap-reverse (flex-wrap): </strong>Esta vez el orden es de
            izquierda a derecha, y de abajo a arriba.
          </li>
          <li>
            <strong>Flex-flow: </strong>Es la forma abreviada (shorhand) o
            rápida para las propiedades: flex-direction y flex-wrap. Se pone
            primero la propiedad de flex-direction, y luego la de flex-wrap.
          </li>
          <li>
            <strong>Justify-content: </strong>Nos va a permitir alinear los
            elementos. Esto puede ser de forma vertical u horizontal, según lo
            especifiquemos con flex-direction. Nos va a ayudar a distribuir los
            flex items (hijos) en el contenedor (padre), cuando los ítems no
            utilicen todo el espacio disponible en su eje principal actual.
          </li>
          <li>
            <strong>Flex-start (justify-content): </strong>Consiste en alinear
            los flex items (hijos) al lado izquierdo.
          </li>
          <li>
            <strong>Flex-end (justify-content): </strong>Consiste en alinear los
            flex items (hijos) al lado derecho.
          </li>
          <li>
            <strong>Center (justify-content): </strong>Consiste en alinear los
            flex items (hijos) al centro.
          </li>
        </ul>
      </Concept>
      <Concept number={"6 & 7"} titulo={"Grids."}>
        <li>
          <strong>CSS Grid: </strong>Es el sistema de maquetación más potente
          que hay disponible. Se trata de un sistema en 2D que permite definir
          filas y columnas (a diferencia de por ejemplo, Flexbox, el cual
          funciona en una única dimensión).
        </li>
        <li>
          <strong>Mobile First: </strong>Significa crear el código primero para
          los dispositivos más pequeños que los usuarios probablemente tengan,
          como teléfonos o tabletas. Implica trabajar en el dispositivo más
          pequeño, y luego acumular desde allí todo en el mismo código y el
          mismo proyecto, en lugar de hacer uno nuevo para cada tamaño de
          pantalla.
        </li>
        <li>
          <strong>Meta viewport: </strong>Una etiqueta {"<meta>"} viewport da al
          navegador las instrucciones sobre cómo controlar las dimensiones, y el
          ajuste a aescala de la página.
        </li>
        <li>
          <strong>Diseño responsive: </strong>Se refiere a la idea de que un
          sitio web debería mostrarse igual de bien en todo dispositivo, desde
          monitores de pantalla panorámica hasta teléfonos móviles.
          <br />
          El diseño responsive se logra a través de &quot;Media Queries&quot; de
          CSS. Pensamos en las Media Queries como una forma de aplicar
          condiciones a las reglas de CSS.
        </li>
      </Concept>
      <Concept
        number={8}
        titulo={"Animaciones, tranformaciones y transiciones."}
      >
        <li>
          <strong>Servidor: </strong>Cuando hablamos de servidores, nos
          referimos al ordenador que pone recursos a disposición a través de una
          red, o al programa que funciona en dicho ordenador.
          <br />
          En consecuencia, aparecen dos definiciones de servidor: hardware y
          software.
        </li>
        <li>
          <strong>Servidor hardware: </strong>Es una máquina física integrada en
          una red informática en la que, además del sistema operativo, funciona
          uno o varios servidores basados en software.
        </li>
        <li>
          <strong>Servidor software: </strong>Es un programa que ofrece un
          servicio especial que otros programas, denominados clientes
          (&quot;clients&quot;), pueden usar a nivel local o a través de una
          red. El tipo de servicio depende del tipo de software del servidor.
        </li>
        <li>
          <strong>Seguridad: </strong>Es la acción o práctica de proteger sitios
          web del acceso, uso, modificación, destrucción o interrupción no
          autorizados.
        </li>
        <li>
          <strong>SVG: </strong>Es una imagen vectorial en formato XML, que
          funciona muy bien para los logotipos, iconos, texto e imágenes
          sencillas.
        </li>
        <li>
          <strong>SEO: </strong>Significa &quot;Search Engine
          Optimization&quot;, es de Búsqueda. El objetivo general del SEO es
          mejorar la posición de un sitio web, en los motores de búsqueda.
        </li>
        <li>
          <strong>Metaetiquetas de descripción: </strong>Ofrece a Google y a
          otros buscadores un resumen del contenido de la misma.
        </li>
        <li>
          <strong>Ruta de exploración: </strong>Es una fila de enlaces internos,
          situada en la parte superior de una página, que permite a los
          visitantes volver rápidamente a una sección anterior, o a la página de
          inicio.
        </li>
        <li>
          <strong>Mapa de sitio: </strong>Es una página sencilla de un sitio web
          que muestra su estructura, y normalmente consiste en una lista
          jerárquica de las páginas que se incluyen en éste.
        </li>
      </Concept>
      <Concept number={9} titulo={"Git."}>
        <li>
          <strong>Git: </strong>Es un sistema de control de versiones gratuito y
          de código abierto, diseñado para manejar desde pequeños a grandes
          proyectos de manera rápida y eficaz. Se entiende como control de
          versiones a todas las herramientas que nos permiten hacer
          modificaciones en nuestro proyecto. Este sistema registra los cambios
          realizados sobre un archivo o conjunto de archivos a lo largo del
          tiempo.
        </li>
        <li>
          <strong>Comandos básicos de la terminal: </strong>
          <ul>
            <li>
              <strong>/?: </strong>Si quieres saber más de un comando añade /?
              para ver la ayuda relacionada. Te será muy útil para ver las
              muchas opciones de cada comando.
            </li>
            <li>
              <strong>HELP: </strong>Te mostrará una lista de comandos
              disponibles.
            </li>
            <li>
              <strong>DIR: </strong>Es el comando más conocido de DOS y sirve
              para ver el contenido de una carpeta(En MAC-OS usar LS)
            </li>
            <li>
              <strong>CD: </strong>Sirve para entrar en una carpeta o salir de
              ella (CD..).
            </li>
            <li>
              <strong>CLEAR: </strong>Limpia la consola.
            </li>
            <li>
              <strong>MKDIR: </strong>Con este comando crearás una carpeta
              nueva. Con RMDIR podrás elimnarla.
            </li>
            <li>
              <strong>MOVE y COPY: </strong>Son los comandos para mover y copiar
              archivos respectivamente. Deberás indicar el nombre del archivo
              con su ruta (si está en otra carpeta en la que te encuentras) y la
              ruta de destino.
            </li>
            <li>
              <strong>RENAME: </strong>Sirve para renombrar un archivo o
              carpeta. Hay que indicar el nombre original y el definitivo.
            </li>
          </ul>
        </li>
        <li>
          <strong>Repositorio: </strong>Es un espacio centralizado donde se
          almacena, organiza, mantiene y difunde información.
          <ul>
            <li>
              <strong>Git Init: </strong>Este comando se usa para crear un nuevo
              repositorio en Git.
            </li>
            <li>
              <strong>Git Add: </strong>Se utiliza para agregar el o los
              archivos al Staging Area.
            </li>
            <li>
              <strong>Git Commit: </strong>Una vez que nuestros archivos están
              en el Staging Area debemos pasarlos a nuestro repositorio local y
              para eso debemos usar el git commit, que es el comando que nos va
              a permitir comprender nuestro archivos.
            </li>
          </ul>
        </li>
        <li>
          <strong>CSS: </strong>Es
        </li>
      </Concept>
      <Concept number={10} titulo={"Github."}>
        <li>
          <strong>Github: </strong>Es un excelente servicio de alojamiento de
          repositorios de software con este sistema. Con este sitio podemos
          subir nuestros proyectos y lograr que otras personas.
          <br />
          <a href="https://juancadh.medium.com/conectar-carpeta-local-con-repositorio-de-github-8d983798998e">
            Guia de Conexión de carpeta local con repositorio de Github.
          </a>
        </li>
      </Concept>
      <Concept number={11} titulo={"Frameworks CSS + Bootstrap."}>
        <li>
          <strong>Librería: </strong>Colección de elementos que suelen tener un
          propósito concreto.
        </li>
        <li>
          <strong>Framework: </strong>Conjunto de herramientas y código, para
          trabajar de acuerdo con una metodología, utilizando determinados
          patrones.
        </li>
        <li>
          <strong>Bootstrap: </strong>Es un framework que permite crear
          interfaces web con CSS y JavaScript. Es responsive.
        </li>
        <li>
          <strong>Responsive Design: </strong>Que adapta la interfaz del sitio
          web al tamaño del dispositivo en que se visualice.
        </li>
      </Concept>
      <Concept number={12} titulo={"@Media + Pseudoclases."}>
        <li>
          <strong>JavaScript: </strong>Es un lenguaje con muchas posibilidades.
          Se utiliza para crear pequeños programas que luego son insertados en
          una página web, y en programas más grandes, orientados a objetos mucho
          más complejos. Con JavaScript podemos crear diferentes efectos e
          interactuar con nuestros usuarios.
        </li>
        <li>
          <strong>Bootstrap themes: </strong>Son marcos construidos por
          expertos, que permiten tener un diseño base como una extensión de
          Bootstrap, especialmente para un conjunto específico de problemas.
        </li>
        <li>
          <strong>Página responsive: </strong>El sistema detecta automáticamente
          el ancho de la pantalla y a partir del mismo, adapta todos los
          elementos de la página, desde el tamaño de letra hasta las imágenes y
          los menús, ofreciendo al usuario la mejor experiencia posible.
        </li>
        <li>
          <strong>Pseudo Clase: </strong>En CSS es un selector que se aplica a
          elementos basado en su estado o relación con el documento, como por
          ejemplo :hover que se aplica cuando el usuario mueve el cursor sobre
          un elemento.
        </li>
      </Concept>
      <Concept number={13} titulo={"SASS."}>
        <li>
          <strong>SASS: </strong>Es un prepocesador de CSS que te permite
          escribir un código, el cual luego se transforma (compila) en un
          archivo de CSS puro. Esto genera un código más limipo y sencillo de
          mantener y editar a través de una estructura ordenada, usando un
          lenguaje de estilos.
        </li>
        <ul>
          <li>
            <strong>Sintaxis: </strong>En Sass cuentas con dos diferentes tipos
            de sintaxis: SCSS y SASS. La primera y más popular, es conocida domo
            SCSS (Sassy CSS). Es muy similar a la sintaxis nativa de CSS, tanto
            así que te permite importar hojas de estilos CSS (copiar y pegar)
            directamente en un archivo SCSS, y obtener un resultado válido.
          </li>
        </ul>
        <li>
          <strong>Nesting o anidación: </strong>Con la anidación de SASS, puedes
          organizar tu hoja de estilo de una manera que se asemaja a la de HTML,
          lo que reduce la posibilidad de conflictos en el CSS.
        </li>
        <li>
          <strong>Import: </strong>Te permite incluir la fuente de tus archivos
          individuales en una hoja de estilo maestra.
        </li>
        <li>
          <strong>Vars(variables): </strong>Son una manera de guardar
          información que necesites reutilizar en tus hojas de estilos: colores,
          dimensiones, fuentes o cualquier otro valor. SASS utiliza el símbolo
          dólar ($) al principio de la palabra clave para crear una variable.
        </li>
        <li>
          <strong>BEM: </strong>Significa Modificador de Bloques de Elementos
          (Block Element Modifier) por sus siglas en inglés. Sugiere una manera
          estructurada de nombrar tus clases, basada en las propiedades del
          elemento en cuestión.
        </li>
        <ul>
          <li>
            <strong>Bloque: </strong>Es un contenedor o contexto donde el
            elemento se encuentra presente.
          </li>
          <li>
            <strong>Modificador: </strong>Permite modificar el estilo de un
            elemento específico.
          </li>
          <li>
            <strong>Elemento: </strong>Es una de las piezas que compondrán la
            estructura de un bloque. El bloque es el todo, y los elementos son
            las piezas de este bloque.
          </li>
        </ul>
      </Concept>
      <Concept number={14} titulo={"SASS II."}>
        <li>
          <strong>Condicionales: </strong>Permiten establecer reglas para
          validar si se aplica o no una acción, cambio o asiganación en el
          atributo de un elemento.
        </li>
        <li>
          <strong>Bucle: </strong>Es una secuencia que repite más de una vez una
          porción de código, dada cierta condición. Cuando la misma deja de
          cumplirse, el bucle finaliza.
        </li>
        <li>
          <strong>Each: </strong>Esta regla facilita la emisión de estilos, o la
          evaluación del código para cada elemento de una lista, o cada par en
          un mapa.
        </li>
        <li>
          <strong>Maps: </strong>Los mapas son variables cuyo valor es una
          colección de variables. Se definen con un nombre que los identifica.
          Las claves suelen ser cadenas o números, mientras que los valores
          pueden ser cualquier tipo de dato.
        </li>
        <li>
          <strong>Extend: </strong>A menudo, al diseñar una página una clase
          debe tener todos los estilos de otra clase, así como sus propios
          estilos específicos. En esos casos usamos @extend, para traer los
          estilos de otra clase.
        </li>
        <li>
          <strong>Mixins: </strong>Te permiten definir estilos que pueden ser
          reutilizados en tu proyecto.
        </li>
      </Concept>
      <Concept number={15} titulo={"Servidores y SEO para tu sitio."}>
        <li>
          <strong>Protocolo https: </strong>HTTP es un protocolo de comuncación
          de internet, que protege la integridad y la confidencialidad de los
          datos de los usuarios entre sus ordenadores y el sitio web. A través
          del protocolo TLS, Seguridad en la capa de tranporte, se brindan estas
          tres cpas clave de seguridad:
          <ul>
            <li>
              <strong>Cifrado: </strong>Se cifran los datos intercambiados, para
              mantenerlos a salvo de miradas indiscretas.
            </li>
            <li>
              <strong>Integridad de los datos: </strong>Los datos no se pueden
              modificar ni dañar durante las transferencias, ni de forma
              intencionada ni de otros modos. sin que sea detectado.
            </li>
            <li>
              <strong>Autentificación: </strong>Demuestra que tus usuarios se
              comunican con el sitio web previsto. Proporciona protección frente
              a los ataque &quote;man-in-the-middle&quote; y contribuye a la
              confianza de los usuarios, lo que se traduce en otros beneficios
              empresariales.
            </li>
          </ul>
        </li>
      </Concept>
      <Concept number={16} titulo={"Subida al servidor."}>
        <li>
          <strong>Dominio: </strong>El dominio en internet es la dirección
          (nombre) que ingresas en el navegador para acceder al sitio web
          deseado. Ejemplo:{" "}
          <a href="https://css-tricks.com/">https://css-tricks.com/</a>
        </li>
        <li>
          <strong>Hosting: </strong>Es necesario contratar un servicio de
          hosting que cubra con los requerimentos de tu web. Los servidores son
          empresas que almacenan computadoras con discos rígidos (en donde son
          alojados los sitios web), y cada una está equipada con distinto
          hardware.
        </li>
      </Concept>
      <Concept number={17} titulo={"Conociendo a nuestro cliente."}>
        <li>
          <strong>Cliente: </strong>Es quien compra (o tiene interés en comprar)
          nuestro producto o servicio, a cambio de una rumuneración.
        </li>
        <li>
          <strong>Percepción del cliente: </strong>La percepción es el proceso
          mediante el cual un individuo selecciona, organiza e interpreta la
          información que recibe para crear una imagen del mundo con
          significado. La percepción del cliente se basa en su valoración de
          nuestro servicio, según el grado de satisfación de sus necesidades y
          expectativas.
        </li>
        <li>
          <strong>Usuario: </strong>Es a quien tiene en mente las empresas
          desarrolladoras de hardware y software informático, cada vez que
          diseñan un nuevo dispositivo o aplicación.
        </li>
        <li>
          <strong>Presupuesto: </strong>Es un plan de operaciones y recursos de
          una empresa, que se formula para lograr los objetivos en un cierto
          periodo de tiempo y se expresa en términos monetarios.
        </li>
      </Concept>
      <Concept number={18} titulo={"Resumen general."}>
        <li>
          <strong>HTML Y CSS: </strong>
          <ul>
            <li>Prototipar una web.</li>
            <li>Establecer estructuras de una web.</li>
            <li>Darle estilo a las estructuras.</li>
            <li>Dar estilo a fuentes, fondos y animaciones.</li>
          </ul>
          <strong>Modelado y Grids</strong>
          <ul>
            <li>Box Modeling.</li>
            <li>Flex.</li>
            <li>Grids.</li>
            <li>Mobile First.</li>
          </ul>
          <strong>Framework y SASS</strong>
          <ul>
            <li>¿Qué es un framework?</li>
            <li>¿Cómo se usa?</li>
            <li>Bootstrap</li>
            <li>Procesadores de CSS</li>
            <li>SASS</li>
            <li>Operadores y Maps en SASS.</li>
          </ul>
          <strong>Servidores, SEO y controlador de versiones</strong>
          <ul>
            <li>Servidores. </li>
            <li>Seguridad para la Web.</li>
            <li>SEO.</li>
            <li>Git.</li>
            <li>Gitub.</li>
          </ul>
          <strong>Web online y conocer al cliente</strong>
          <ul>
            <li>Hosting.</li>
            <li>Dominio.</li>
            <li>Subir la web a un Hosting.</li>
            <li>FTP.</li>
            <li>Conocer al cliente.</li>
            <li>Presupuesto.</li>
          </ul>
        </li>
      </Concept>
    </Section>
  );
}
