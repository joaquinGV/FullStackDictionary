import { Concept } from "./Concept";
import { Section } from "./Section";

export function React() {
  return (
    <Section
      id="React"
      title={"React JS"}
      experiencia={
        "El curso abarca diferentes herramientas y conceptos de React, funcionamiento, rendimiento, componetización, hooks, routing y navegación, eventos, context, adición y uso de librerias como axios, yup, formik, sweet-alert. Uso de componentes de Material UI. Uso de Firebase con Firestore como base de datos, manejo de usuarios y añadir login con Google. El material no esta del todo relacionado con lo realmente visto en cada clase pues React a cambiado mucho en los ultimos 2 años, desde su forma de instalar y mejores practicas."
      }
      url={"https://joaquingv.github.io/Ecommerce-StarJewerly/"}
      proyectTitle={"Ecommerce Mooncy"}
      proyectDescription={
        "Ecommerce con React desde 0, haciendo uso de librerias, tecnicas de rendering, routing, context, creación de componentes y custom hooks conectado a base de datos con Firebase. Proyecto poco más profesional con muchas areas de mejora en estilos y features a añadir, componentes no accionables, pero funcional, ejemplo de uso ➪ "
      }
      proyectUrl={
        "https://github.com/joaquinGV/Ecommerce-StarJewerly/blob/main/React-StarJewerlyProject/3erP2EntregaGif.gif"
      }
      proyectText={"Ejemplo.Gif"}
    >
      <Concept number={1} titulo={"Conceptos generales: Sintaxis y variables"}>
        <li>
          <strong>Introducción a React JS: </strong>Es una biblioteca para
          desarrollo web, por lo cual debemos contar con conocimientos mínimos
          sobre los lenguajes que el navegador web interpreta.
        </li>
        <li>
          <strong>HTML: </strong>Es un lenguaje de etiquetas, el cual dará la
          estructura para nuestras páginas web.
        </li>
        <li>
          <strong>DOCTYPE: </strong>No es una etiqueta, sino una instrucción
          para indicar al navegador qué versión de HTML vamos a utilizar.
        </li>
        <li>
          <strong>DOM (Document Object Model): </strong>Nos sirve para acceder a
          cualquiera de los componentes que hay dentro de una página.
        </li>
        <li>
          <strong>HTML 5 : </strong>Es una nueva versión de diversas
          especificaciones, entre las que se encuentran: HTML 4 - XHTML 1 - CSS
          nivel 2 - DOM nivel 2.
        </li>
        <li>
          <strong>JavaScript : </strong>Es el lenguaje de programación por
          excelencia. Decimos que se trata de un lenguaje de programación
          interpretado.
        </li>
        <li>
          <strong>CSS (Cascading Style Sheets): </strong>Es un lenguaje de
          diseño gráfico con el cual podremos dar estilos (diseño, colores,
          márgenes) a nuestras webs desarrolladas con HTML.
        </li>
      </Concept>
      <Concept number={2} titulo={"Instalación y configuración del entorno"}>
        <li>
          <strong>Virtual DOM: </strong>Es un patrón de comportamiento y React
          lo implementa con una tecnología llamada &quot;Fiber&quot;. En sí,
          resulta ser todo lo que React sabe de tu aplicación y cada nodo o
          fibra.
        </li>
        <li>
          <strong>CLI: </strong>La interfaz de línea de comandos o interfaz de
          línea de órdenes es un método que permite a los usuarios dar
          instrucciones a algún programa informático por medio de una línea de
          texto simple.
        </li>
        <li>
          <strong>Node.js: </strong>Es un entorno de ejecución de JavaScript que
          le permite al código en JS ser ejecutado en nuestra computadora.
        </li>
        <li>
          <strong>NPM (Node Package Manager): </strong>Cuando usamos Node.js
          rápidamente tenemos que instalar módulos nuevos (librerías), ya que al
          ser un sistema fuertemente modular viene prácticamente
          &quot;vacío&quot;. Por lo tanto, para utilizar una funcionalidad de
          alguna librería publicada, deberemos instalar módulos adicionales.
          Esta operación se realiza de forma muy sencilla con esta herramienta.
        </li>
      </Concept>
      <Concept number={3} titulo={"JSX y transpling"}>
        <li>
          <strong>Sugar Syntax: </strong>Refiere a la sintaxis agregada a un
          lenguaje de programación con el objetivo de hacer más facil y
          eficiente su utilización. Favorece su escritura, lectura y
          comprensión.
        </li>
        <li>
          <strong>Webpack: </strong>Es un module bundler o empaquetador de
          módulos.
        </li>
        <li>
          <strong>Eject: </strong>Es una acción permanente, que permite tener un
          control más específico del bundling, a costa de que de ahora en
          adelante tendremos que encargarnos de mantenerlo.
        </li>
        <li>
          <strong>Transpling: </strong>Es el proceso de convertir código escrito
          en un lenguaje, a su representación en otro lenguaje.
        </li>
        <li>
          <strong>JSX: </strong>Es una extensión de sintaxis de JavaScript que
          se parece a HTML. Oficialmente, es una extensión hacer llamadas a
          funciones y a construcción de objetos. No es ni una cadena de
          caracteres, ni HTML.
        </li>
      </Concept>
      <Concept number={4} titulo={"Componentes I"}>
        <li>
          <strong>Componentes: </strong>Básicamente, las aplicaciones en React
          básicamente se contruyen mediante los mismos. Permiten separar la
          interfaz de usuario en piezas independientes, reutilizables y pensar
          en cada pieza de forma aislada.
        </li>
        <li>
          <strong>Propiedades: </strong>Son la forma que tiene React para pasar
          parámetros de un componente superior a sus hijos.
        </li>
        <li>
          <strong>Estados: </strong>Se utilizan para representar la información
          que puede cambiar durante la vida útil del componente y afectar su
          representación en la interfaz de usuario.
        </li>
        <li>
          <strong>Componentes contenedores: </strong>Tienen como propósito
          encapsular a otros componentes y proporcionarles las propiedades que
          necesitan. Además se encargan de modificar el estado de la aplicación
          para que el usuario vea el cambio en los datos (por eso también
          llamados state components).
        </li>
        <li>
          <strong>Componentes de presentación: </strong>Son aquellos que
          simplemente se limitan a mostrar datos y tienen poca o nula lógica
          asociada a manipulación del estado (por eso son también llamados
          stateless components).
        </li>
      </Concept>
      <Concept number={5} titulo={"Components II."}>
        <li>
          <strong>Ciclo de vida: </strong>No es más que una serie de estados por
          los cuales pasa todo componente a lo largo de su existencia. Esos
          estados tienen correspondencia en diversos métodos, que podemos
          implementar para realizar acciones cuando se van produciendo.
        </li>
        <li>
          <strong>Métodos de ciclos de vida(class based): </strong>
          <ul>
            <li>
              <strong>componentWillMount()*: </strong>Este método del ciclo de
              vida es de tipo montaje. Se ejecuta justo antes del primer
              renderizado del componente.
            </li>
            <li>
              <strong>componentDidMount(): </strong>Método de montaje, que solo se
              ejecuta en el lado del cliente. Se produce inmediatamente después
              del primer renderizado. Una vez que se invoca este método ya están
              disponibles los elementos asociados al componente en el DOM.
            </li>
            <li>
              <strong>componentWillReceiveProps(): </strong>Método de
              actualización que se invoca cuando las propiedades se van a
              actualizar, aunque no en el primer renderizado del componente, por
              lo tanto no se invocará antes de inicializar las propiedades por
              primera vez.
            </li>
          </ul>
        </li>
      </Concept>
      <Concept number={6} titulo={"Promises, asincronía y MAP"}>
        <li>
          <strong>Promise: </strong>Es un objeto que permite representar y
          seguir el ciclo de vida de una tarea/operación (función).
        </li>
        <li>
          <strong>Map: </strong>Es un método que nos permite generar un nuevo
          array, tomando de base otro, y utilizando una función transformadora.
        </li>
      </Concept>
      <Concept number={7} titulo={"Consumiendo API's"}>
        <li>
          <strong>Modelo cliente-servidor(MVC): </strong>Este modelo establece
          que los distintos consumidores se identifican entre ellos, y acuerdan
          una manera de tranferir la información.
        </li>
        <ul>
          <strong>Extras: </strong>
          <li>Push</li>
          <li>Polling</li>
          <li>URL y verb</li>
          <li>Query params</li>
          <li>Body</li>
          <li>Headers</li>
          <li>Fetch</li>
        </ul>
      </Concept>
      <Concept number={8} titulo={"Workshop: Hooks, Children y Patrones."}>
        <li>
          <strong>Hooks: </strong>Es una función especial que permite a los
          desarrolladores utilizar el estado y otras características de React.
          Hooks integrados:
          <ul>
            <li>useState</li>
            <li>useEffect</li>
            <li>useContext</li>
            <li>useRef</li>
            <li>Custom Hooks</li>
          </ul>
        </li>
        <li>
          <strong>Children: </strong>Es la forma en que React nos permite
          incluir un componente dentro de otro sin que al padre le importe
          exactamente qué componente o componentes hijos están siendo incluidos.
          Los hijos son aquellos que colocan dentro de la etiqueta de aperta y
          cierre del componente y la prop &quot;children&quot; se utiliza para
          acceder y manipular estos elementos hijos desde dentro del componente
          padre.
        </li>
        <li>
          <strong>Custom Hooks: </strong>Es una función JavaScript que utiliza
          el prefijo &quot;use&quot; y que permite encapsular lógica
          reutilizable en componentes funcionales de React. Estas funciones
          personalizadas pueden contener estado, efectos secundarios y lógica de
          suscripción, permitiendo modularizar y reutilizar código de manera más
          eficiente en aplicaciones React.
        </li>
        <li>
          <strong>Patrones: </strong>Formas de crear componentes que nos ayudan
          a reutilizar y mantener código.
          <ul>
            <li>
              <strong>High Order Components (HOC): </strong>Es una función que
              toma un componente como argumento y devuelve un nuevo componente
              con una funcionalidad adicional.
            </li>
            <li>
              <strong>Render Props: </strong>Este patrón implica pasar una función
              como una prop al componente hijo con el propósito de permitir al
              componente hijo renderizar su contenido a través de la función.
            </li>
          </ul>
        </li>
      </Concept>
      <Concept number={9} titulo={"Routing y navegación"}>
        <li>
          <strong>NavLink: </strong>Es un link con un estilo, está siempre
          detectando la ruta actual, y si coincide con la suya nos activa la
          clase que le demos para que el user sepa qué ítem de la lista
          corresponde con la vista actual.
        </li>
        <li>
          <strong>useParams: </strong>Lo podemos utilzar para leer en JS los
          parámetros de la ruta. En combinación con un useEffect, nos sirve para
          obtener actualizaciones sobre los parámetros.
        </li>
      </Concept>
      <Concept number={10} titulo={"Eventos"}>
        <li>
          <strong>Evento: </strong>Es un estímulo programático, que puede ser
          provocado de manera automática, o ser el resultado de una interacción
          del usuario con la UI.
        </li>
        <li>
          <strong>Event Listeners: </strong>Es un patrón de diseño que sirve,
          como su nombre lo indica, para escuchar cuando un algo ocurre en algún
          elemento, librería o API, y poder realizar una acción en consecuencia
        </li>
      </Concept>
      <Concept number={11} titulo={"Context."}>
        <li>
          <strong>Context: </strong>Es una característica que permite pasar
          datos a través del árbol de componentes sin tener que pasar
          explícitamente props a cada nivel. Es útil para compartir datos que
          son considerados &quot;globales&quot; para un árbol de componentes,
          como la autenticación del usuario, el tema de la aplicación, etc.
        </li>
        <li>
          <strong>Provider: </strong> Es un componente que acepta un prop
          llamado &quot;value&quot; y pasa ese valor a todos los componentes
          descendientes. Todos los componentes que están dentro del árbol de un
          Provider pueden acceder al valor proporcionado.
        </li>
        <li>
          <strong>Consumer: </strong> Es un componente que permite consumir el
          valor proporcionado por un Provider en el árbol de componentes. Puede
          acceder al valor usando una función de renderizado como hijo o usando
          el hook &quot;useContext&quot;.
        </li>
        <li>
          <strong>useContext: </strong>Es un hook que permite acceder al valor
          proporcionado por un Context dentro de un componente funcional.
          Simplifica la forma en que los componentes funcionales pueden consumir
          el valor del Context.
        </li>
        <li>
          <strong>createContext: </strong>Es una función que crea un nuevo
          objeto Context. Toma un argumento opcional que es el valor
          predeterminado que se utilizará si no hay un Provider que envuelva el
          componente.
        </li>
      </Concept>
      <Concept number={12} titulo={"Técnicas de rendeing."}>
        <li>
          <strong>Rendering condicional: </strong>En ciclos de render permite
          decidir que quiero hacer rendering de sólo algunos nodos de un árbol,
          o de otros.
        </li>
        <li>
            <strong>Ejemplos:</strong>
          <ul>
            <li>Conditional props: Styling</li>
            <li>Conditional props</li>
            <li>Conditional Attributes: Classes</li>
            <li>Conditional Attributes: Multi-class</li>
            <li>Conditional Attributes: Multi-class anti-pattern</li>
          </ul>
          <li>
            <strong>Memoization: </strong>Es guardar y reutilizar resultados
            previamente calculados para evitar tener que volver a calcularlos.
            Esto mejora la eficiencia de las funciones al evitar repeticiones
            innecesarias de cálculos.
          </li>
        </li>
      </Concept>
      <Concept number={"13 & 14"} titulo={"Firebase I & II."}>
        <li>
          <strong>Firebase: </strong>Es un servicio provisto por google para
          satisfacer las distintas necesidades que puede tener una aplicacion y
          su ciclo de desarrollo.
        </li>
        <li>
          <strong>Colecciones(Firestore): </strong>Son contenedores de
          documentos, los cuales se agrupan obligatoriamente dentro de ellas.
          Dichos documentos pueden, a su vez, tener colecciones dentro.
        </li>
        <li>
          <strong>Temas vistos: </strong>
          <ul>
            <li>Registro.</li>
            <li>Creación de proyecto.</li>
            <li>Creación de Firestore.</li>
            <li>Inicialzación y creación de colección.</li>
            <li>Integración con webapp.</li>
            <li>Intalación de firebase en proyecto.</li>
            <li>Configurar el client con api key.</li>
            <li>Configurar client factory.</li>
            <li>CRUD con FireStore.</li>
          </ul>
        </li>
      </Concept>
      <Concept number={15} titulo={"Optimización."}>
        <li>
          <strong>Código optimizado: </strong>
          <ul>
            <li>Ayuda a la escalabilidad.</li>
            <li>Mejora la legibilidad.</li>
            <li>Genera code-bases más compactas.</li>
            <li>Recude trabajo innecesarios de cómputo.</li>
          </ul>
        </li>
        <li>
          <strong>Principios de optimización: </strong>
          <ul>
            <li>
              <strong>KISS: </strong>Keep It Simple, Stupid! / Mantenlo simple.
            </li>
            <li>
              <strong>DRY: </strong>Don´t Repeat Yourself / No te repitas.
            </li>
            <li>
              <strong>YAGNI: </strong>You Aren´t Gonna Need It / No lo
              necesitarás.
            </li>
          </ul>
        </li>
        <li>
          <strong>Documentar: </strong>En programación significa agregar
          comentarios al código para explicar su funcionamiento y facilitar su
          comprensión y mantenimiento.
        </li>
        <li>
          <strong>Markdown language: </strong>Es una forma sencilla de formatear
          texto usando una sintaxis fácil de leer y escribir, comúnmente
          utilizada para crear documentos en plataformas web y aplicaciones de
          escritura. Usualmente archivos readme.md.
        </li>
      </Concept>
    </Section>
  );
}
