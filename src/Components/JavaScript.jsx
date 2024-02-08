import { Concept } from "./Concept";
import { Section } from "./Section";

export function JavaScript() {
  return (
    <Section
      id="JavaScript"
      title={"JavaScript"}
      experiencia={
        "El curso se enfoca en explicar el funcionamiento de JavaScript de basico a avanzado, sus variables, tipos de datos, metodos y funciones, control de flujo, operadores, interacción con el DOM y sus eventos, tipos de almacenamiento, funcionamiento de asincronía, promesas, fetch, manejo de librerias como sweetAlert, Tostify, Luxon, entre otros, manejo de dependencias y expliación de Frameworks. "
      }
      url={
        "https://joaquingv.github.io/starsjewerly/PreEntrega3-GonzalezVazquez/paginas/cita.html#"
      }
      proyectTitle={"Logica de Citas, en pagina de uñas"}
      proyectDescription={
        "Proyecto realizado al final del curso tratando añadir parte de la lógica necesaria para crear citas, usuarios, logica de login, actualización de datos en HTML en base a decisiones, renderización de botones disponibles en base a datos de citas disponibles. En la actualización de datos se eliminaron estilos css que afectaban las ventanas emergentes. Funcionamiento descrito en ➪ "
      }
      proyectUrl={
        "https://github.com/joaquinGV/starsjewerly/tree/main/PreEntrega3-GonzalezVazquez#readme"
      }
      proyectText={"Readme"}
    >
      <Concept number={1} titulo={"Conceptos generales: Sintaxis y variables"}>
        <li>
          <strong>JavaScript: </strong>Es un lenguaje de programación que se
          utiliza para aportar dinamismo a los sitios web.
        </li>
        <li>
          <strong>Variable: </strong>Es un espacio reservado en la memoria que,
          como su nombre indica, puede cambiar de contenido. Podemos almacenar
          un número, un texto, un listado de números, etcétera.
        </li>
        <li>
          <strong>Algoritmo: </strong>En programación, es un conjunto de
          procedimientos o funciones que se necesitan para realizar cierta
          operación o acción.
        </li>
        <li>
          <strong>Operadores lógicos: </strong>Permiten agrupar expresiones
          lógicas. Las expresiones lógicas son todas aquellas expresiones que
          obtienen como resultado verdadero o falso. Los operadores lógicos son
          aquellos que hacen de nexo de este tipo de expresiones.
        </li>
        <li>
          <strong>Anidar: </strong>En programación, se refiere a escribir una
          sentencia junto a una subsiguiente dentro de la misma estructura
          sintáctica. Es decir, que no hay un salto de línea en el medio.
        </li>
        <li>
          <strong>Parsear: </strong>Es una palabra devengada del inglés
          &quote;parse&quote;. Refiere en programación, a una actividad que
          consiste en el análisis de texto para determinar si cumple o no reglas
          o patrones y en base a esto tomar alguna determinación.
        </li>
        <li>
          <strong>Script: </strong>Un script es una secuencia de instrucciones
          que realizan una o más tareas.
        </li>
      </Concept>

      <Concept number={2} titulo={"Control de flujos."}>
        <li>
          <strong>Conditionales: </strong>Cuando en progamación hablamos de
          condicionales, hablamos de una estructura sintáctica que sirve para
          tomar una decisión a partir de una condición.
        </li>
        <li>
          <strong>Estructura IF: </strong>Es la más utilizada en la mayoría de
          los lenguajes. Si la condición se cumple (es decir, si su valor es
          true) se ejecutan todas las instrucciones que se encuentran dentro del {"{...}"}. Si la condición no se cumple (es decir, si su valor es false) no se ejecuta ninguna instrucción contenida en {"{...}"} y el
          programa continúa ejecutando el resto de instrucciones del script.
        </li>
        <li>
          <strong>IF... ELSE: </strong>En ocasiones, las decisiones que se deben
          realizar no son del tipo &quot;Si se cumple la condición, hazlo; si no
          se cumple, no hagas nada&quot;. Normalmente las condiciones suelen ser
          del tipo &quot;Si se cumple esta condición, hazlo; si no se cumple,
          haz esto otro&quot;.
        </li>
      </Concept>

      <Concept number={3} titulo={"Ciclos e iteraciones."}>
        <li>
          <strong>Ciclos en JavaScript: </strong>En programación se refiere a un
          conjunto de indicaciones que se repiten bajo ciertas condiciones. Las
          estructuras de ciclo o cíclicas son las que debemos utilizar cuando
          necesitamos repetir ciertas operaciones de la misma manera durante N
          cantidad de veces.
        </li>
        <li>
          <strong>sentencia break: </strong>A veces, cuando escribimos una
          estructura for, necesitamos que bajo cierta condición el ciclo se
          interrumpa. Para eso se utiliza esta sencentia.
        </li>
        <li>
          <strong>Sentencia continue: </strong>A veces, cuando escribimos una
          estructura for, necesitamos que bajo cierta condición, el ciclo salte
          esa repetición y siga con la próxima. Para eso se utiliza esta
          sentencia.
        </li>
        <li>
          <strong>Estructura while: </strong>Permite crear bucles que se
          ejecutan ninguna o más veces, dependiendo de la condición indicada.
        </li>
        <li>
          <strong>Declarar función: </strong>Se dice declarar cuando uno define
          una función en el código.
        </li>
      </Concept>
      <Concept number={4} titulo={"Funciones."}>
        <li>
          <strong>Parámetros: </strong>Cuando necesitamos enviarle a la función
          algún valor o data para que luego la misma lo utilice en sus
          operaciones, estamos hablando de los parámetros de la función.
        </li>
        <li>
          <strong>Ámbito de una varialbe(Scope): </strong>Es la zona del
          programa en la que se define la variable, el contexto al que pertenece
          la misma dentro de un algoritmo. JavaScriptdefine dos ámbitos para las
          variables: global y local.
          <ul>
            <li>
              <strong>Variables locales: </strong>Se crean y se usan siempre en
              las funciones.
            </li>
            <li>
              <strong>Variables globales: </strong>Se definen fuera de las
              funciones, y se pueden usar en cualquier lugar del código.
            </li>
          </ul>
        </li>
      </Concept>
      <Concept number={5} titulo={"Objetos."}>
        <li>
          <strong>Objeto: </strong>En programación, y tambien en JS, un objeto
          es una collección de datos relacionados y/o funcinalidad, que
          generalmente consta de variables y funciones, denominadas propiedades
          y métodos cuando están dentro de objectos. Cuando necesitamos enviarle
          a la función algun valor o dato para que luego la misma lo utilice en
          sus operaciones, estamos hablando de los parámetros de la función.
          <ul>
            <li>
              <strong>Constructor de un objeto: </strong>En JS, es una función
              donde se inicializa el mismo y todas sus propiedades.
            </li>
            <li>
              <strong>Método de un objeto: </strong>Es técnicamente una fucnión,
              sólo que se limita a poder ser ejecutada únicamente desde el mismo
              objeto.
            </li>
          </ul>
          <li>
            <strong>Invocar: </strong>En programación, una invocación o llamada
            a una función, implica pasarle el control de la ejecución del
            programa, así como los argumento o parámetros que requiere para
            realizar su tarea.
          </li>
        </li>
      </Concept>
      <Concept number={6} titulo={"Arrays."}>
        <li>
          <strong>Operar: </strong>En programación, cuando hablamos de operar
          sobre las variables, nos referimos a utilizarlas en funciones,
          métodos, o a lo largo del código. Consiste en desarrollar los
          algoritmos a partir, y en fucnión del valor de estas variables.
        </li>
        <li>
          <strong>Propiedad length: </strong>Nos permite saber el largo de una
          cadena String, es decir, cuántos caracteres tiene.
        </li>
        <li>
          <strong>Método replace(): </strong>Permite reemplazar un carácter o
          grupo de caracteres por otros.
        </li>
        <li>
          <strong>Método trim(): </strong>Permite quitar los espacios ubicados
          al principio y al final de la cadena.
        </li>
        <li>
          <strong>Array: </strong>Es una variable que almacena una lista de
          elementos. Puede ser una lista de números, una lista de números y
          palabras o hasta una lista de listas.
        </li>
        <li>
          <strong>Método slice: </strong>Devuelve una copia de una parte del
          array dentro de un nuevo array, empezando por inicio hasta fin (fin no
          incluido). El array original no se modificará.
        </li>
        <li>
          <strong>Método toString: </strong>Convierte un Array a un String,
          compuesto por cada uno de los elementos del Array separados por comas.
        </li>
        <li>
          <strong>Método push: </strong>Se utiliza para sumar un elemento a un
          Array ya existente.
        </li>
        <li>
          <strong>Método join: </strong>Permite juntar todos los elementos de un
          Array en una cadena String.
        </li>
        <li>
          <strong>Método concat: </strong>Combinar dos arrays en un único array
          resultante.
        </li>
      </Concept>
      <Concept number={"7 & 8"} titulo={"High Order Functions I & II."}>
        <li>
          <strong>Operar: </strong>Abstracción: Resumen de un grupo complejo de
          instrucciones bajo una palabra clave (function) que sugiere cuál es el
          problema a resolver por la misma.
        </li>
        <li>
          <strong>Función de orden superior: </strong>Es aquella que bien
          retorna una función, o recibe una función por parámetro. También es
          conocida como función de alto orden o high-order functions.
        </li>
        <li>
          <strong>Objeto Math: </strong>Contenedor de herrramientas y serie de
          métodos propio de JavaScript para realizar funciones matemáticas
          complejas.
        </li>
        <li>
          <strong>Clase Date: </strong>Clase propia de JavaScript que nos
          permite representar y manipular fechas.
        </li>
      </Concept>
      <Concept number={9} titulo={"DOM."}>
        <li>
          <strong>DOM o Modelo de Objetos del Documento: </strong>Es lo que
          permite interactuar a JS con los diferentes elementos HTML de una web,
          como también poder operar sobre ellos y modificarlos.
        </li>
        <li>
          <strong>JavaScript Object Notations (JSON): </strong>Es un formato
          basado en texto plano, para representar datos estructurados en la
          sintaxis de objetos de JavaScript. Es comúnmente utilizados para
          transmitir datos en aplicaciones web.
        </li>
      </Concept>
      <Concept number={10} titulo={"Eventos."}>
        <li>
          <strong>Evento: </strong>Es la manera que tenemos en JavaScript de
          controlar las acciones de los usuarios, y definir un comportamiento de
          la página o aplicación cuando se produzcan. Hay distintos tipos de
          eventos.
          <ul>
            <li>Eventos de mouse.</li>
            <li>Eventos de teclado.</li>
            <li>Eventos change.</li>
            <li>Eventos submit.</li>
          </ul>
        </li>
      </Concept>
      <Concept number={11} titulo={"Storage & JSON."}>
        <li>
          <strong>Storage: </strong>Es un medio de almacenamiento en el cliente,
          lo cual implica que podemos utilizarlo para guardar información de la
          aplicación en el navegador del usuario. La información almacenada en
          el storage tiene la estructura clave-valor.
          <ul>
            <li>
              <strong>LocalStorage: </strong>Se almacena en el navegador de
              forma indefinida, o hasta que se borren los datos de navegación
              del browser.
            </li>
            <li>
              <strong>SessionStorage: </strong>Permanece en el navegador hasta
              que el usuario cierra la ventana. Los datos sólo existen dentro de
              la sesión acutal.
            </li>
          </ul>
        </li>
        <li>
          <strong>JavaScript Object Notation (JSON): </strong>Es un formato de
          texto plano, que sirve para representar datos estructurados con la
          sintaxis de objetos de JavaScript.
        </li>
      </Concept>
      <Concept number={"12 & 13"} titulo={"Operadores avanzados."}>
        <li>
          <strong>Sugar Syntax: </strong>Es el nombre que se le da a los
          operadores avanzados que funcionan como simplificaciones de tareas más
          complejas. El operador ++ es un ejemplo de esto.
        </li>
        <li>
          <strong>Operador ternario: </strong>Es una simplificación de la
          estructura condicional if... else. Es un condicional que consta sí o
          sí de tres partes: la condición, el caso de ejecucion en caso de que
          se cumpla, y el caso else si no se cumple.
        </li>
        <li>
          <strong>Operador Lógico AND (&&): </strong>Es una reducción de un
          condicional, pero trata de ejecutar (o retornar) algo sólo si la
          condición es verdadera, reduce un if sencillo con un solo bloque de
          ejecución.
        </li>
        <li>
          <strong>Operador lógico OR (||): </strong>Es sintácticamente similar
          al anterior, con la diferencia que consta de dos operandos y no de una
          condición explícita: Operando1 || Operando2.
        </li>
        <li>
          <strong>Desestructuración: </strong>Es una técnica que nos permite
          declarar variables donde guardar propiedades de un objeto de forma
          rapida y directa.
        </li>
      </Concept>
      <Concept number={14} titulo={"Librerías."}>
        <li>
          <strong>Librerías: </strong>Códigos pre-escrito que facilitan el
          desarrollo de aplicaciones. Funcionan como cajas de herrramientas que
          resuelven problemas recurrentes de forma rápida y eficiente.
        </li>
        <li>
          <strong>Implementación: </strong>Las librarías se incorporan como
          archivos. Se vinculan como cualquier otro script de JS. Pueden
          realizarse por descargas de otros archivos o a travéz de CND.
        </li>
        <li>
          <strong>Documentación: </strong>Es el manual de instrucciones para la
          implementación y el manejo de librerías.
        </li>
        <li>
          <strong>Sweet Alert: </strong>Es una librería que permite crear
          alertas personalizadas, atractivas, sencillas, customizables e
          interactivas.
        </li>
        <li>
          <strong>Toastify: </strong>Es una librería que permite crear
          notificaciones personalizadas.
        </li>
        <li>
          <strong>Luxon: </strong>Es una librería que permite trabajar con
          fechas y horas de forma sencilla. Se puede sumar, formatear, parsear y
          restar fechas, entre otras funciones.{" "}
        </li>
      </Concept>
      <Concept number={15} titulo={"Asincronía y promesa."}>
        <li>
          <strong>Programación sincrónica: </strong>Permite que múltiples cosas
          sucedan a la vez. Al comenzar un acción, nuestro programa sigue en
          ejecución; y cuando la acción termina nuestro programa es informado de
          ésto y tiene acceso al resultado.
        </li>
        <li>
          <strong>setTimeout: </strong>La función recibe dos parámetros: primero
          una función de callback, y segundo un valor numérico que representa
          milisegundos.
        </li>
        <li>
          <strong>Event Loop: </strong>Es la herramienta que permite la
          sincronización entre nuestro <i>callstack</i>, y segundo un valor
          numérico que representa milisegundos.
        </li>
        <li>
          <strong>Promesa: </strong>Una promesa es un objeto de JavaScript que
          representa un evento a futuro. Es una acción asincrónica que se puede
          completar en algún momento y producir un valor, y notificar cuando
          esto suceda.
        </li>
        <li>
          <strong>.then(): </strong>Si la promesa es resulta, es decir se llama
          al resolve() en ella, su valor de retorno se captura dentro del
          .then(), recibiendo por parámetro de su función ese valor.
        </li>
        <li>
          <strong>.catch(): </strong>Si la promesa es rechazada, su valor se
          captura dentro de un .catch() siguiendo la misma lógica.
        </li>
        <li>
          <strong>finally(): </strong>Las promesas nos ofrecen un método
          finally() que recibe una función la cual se ejecutará siempre al
          finalizar la secuencia, sin importar si se haya resuelto o no la
          promesa.
        </li>
      </Concept>
      <Concept number={16} titulo={"Ajax & Fetch."}>
        <li>
          <strong>AJAX: </strong>Un conjunto de técnicas de desarrollo que
          permiten que las aplicaciones web funcionen de forma asincrónica para
          procesar tareas en segundo plano. Cualquier APP o Web que emplee AJAX
          puede enviar y recibir datos sin volver a cargar toda la pagina.
        </li>
        <li>
          <strong>Peticiones HTTP: </strong>Están definidas por varias partes:
          URL, método (Get, Post, Put, Delete), headers, body y parámetros
          (Query Params o URL Params).
        </li>
        <li>
          <strong>Fetch: </strong>JavaScript nos ofrece el método fetch() para
          hacer peticiones HTTP a algún servicio externo. Como estas peticiones
          son asincrónicas, convenientemente el método fetch() trabaja con
          promesas.
        </li>
      </Concept>
      <Concept number={17} titulo={"Frameworks & NodeJS."}>
        <li>
          <strong>Frameworks: </strong>Un framework es un conjunto de
          herramientas, bibliotecas y convenciones que proporcionan una
          estructura básica para desarrollar software de manera más eficiente.
          Ayuda a los desarrolladores al ofrecer soluciones predefinidas para
          tareas comunes, permitiendo así concentrarse en aspectos específicos
          del desarrollo en lugar de reescribir código genérico.
        </li>
        <li>
          <strong>NodeJS: </strong>Es un entorno adicional de ejecución para
          JavaScript. Es un programa que permite ejecutar código JavaScript por
          fuera del navegador. Con él podemos contruir desde aplicaciones de
          línea de comando (consola) hasta servidores HTTP para potenciar
          aplicaciones web.
        </li>
        <li>
          <strong>NPM(Node Pack Manager): </strong>Es un repositorio de módulos
          de Node. En NPM se listan y alojan proyectos escritos como paquetes, o
          módulos para descargarlos e integrarlos a las APPs de forma sencilla.
        </li>
        <li>
          <strong>SPA: </strong>Una SPA (Simple Page Application), o aplicación
          de una sola página, es una web app que consiste de un único archivo
          html que se carga al ingresar al sitio, y el resto de la navegación y
          cambios de página se da mediante modificación dinámica del DOM con
          JavaScript.
        </li>
        <li>
          <strong>Extras:</strong>
          <ul>
            <li>SPA - Arquitectura</li>
            <li>SPA - Router</li>
            <li>SPA - Modelo-Vista-Controlador (MVC)</li>
          </ul>
        </li>
      </Concept>
    </Section>
  );
}
