import { Concept } from "./Concept";
import { Enlace } from "./Enlace";
import { Section } from "./Section";

export function Backend() {
  return (
    <Section
      id="Backend"
      title={"Backend"}
      experiencia={
        "El curso repasa rapidamente las bases de javaScript sobre todo las clases, para empezar a utilizar Node.js y Express, creación de una API basica e irla reestructurando clase por clase conforme los temas son vistos, haciendola cada vez más robusta, aplicando una gran variedad de temas, con muchos más entregables en comparación a cursos previos y uso de diversas herramientas que fueron optimizandose, uso de librerias nuevas como: zod, pm2, winston, swagger, nodemailer, bcrypt, dotenv, cors, passport, faker, entre otras. Incluso frameworks como Nest.js, base de datos con MongoDB y Atlas. Un programa extenso, el cual ha transformado y refactorizado en repetidas ocasiones pera crear una API escalable, segura y dividida por capas. "
      }
      url={
        "https://joaquingv.github.io/starsjewerly/PreEntrega3-GonzalezVazquez/paginas/cita.html#"
      }
      proyectTitle={"API de ECOMMERCE (Usuarios, Productos, Carritos y Tickets)"}
      proyectDescription={
        "El proyecto sigue en curso y aplicandole testing entre otras optimizaciones de front-end, funcional, segura y usable por cualquiera. Se puede acceder a la documentación en la cual registrandose e iniciando sesion se le brinda un codigo JWT, el cual dependiendo el nivel de autorizacion registrado, tienen diferentes niveles de accesibilidad a los distintos endpoints, ejemplo: crear un producto siendo usuario PREMIUM y no como USER, como ADMIN no pueden realizar compras. Accede aqui ➪ "
      }
      proyectUrl={
        "https://github.com/joaquinGV/starsjewerly/tree/main/PreEntrega3-GonzalezVazquez#readme"
      }
      proyectText={"Documentación API."}
    >
      <Concept number={1} titulo={"Principios básicos de JavaScript"}>
        <li>
          <strong>ECMAScript: </strong>Es el estándar sobre el que se basa
          JavaScript. Define la especificación del lenguaje de programación
          JavaScript, incluyendo su sintaxis, tipos de datos, estructuras de
          control, funciones, y otros aspectos fundamentales. Los navegadores
          web y entornos de ejecución de JavaScript implementan este estándar
          para asegurar la consistencia en la forma en que se interpreta y
          ejecuta el código JavaScript en diferentes plataformas y dispositivos.
        </li>
        <li>
          <strong>Principios básicos: </strong>
          <ul>
            <li>Tipos de datos y variables.</li>
          </ul>
          <ul>
            <li>Declaraciones de variables.</li>
          </ul>
          <ul>
            <li>Funciones</li>
          </ul>
          <ul>
            <li>Scopes</li>
          </ul>
          <ul>
            <li>Template Strings</li>
          </ul>
          <ul>
            <li>Closures</li>
          </ul>
          <ul>
            <li>Clases</li>
          </ul>
        </li>
      </Concept>
      <Concept
        number={2}
        titulo={"Nuevas funcionalidades de los lenguajes ECMAScript"}
      >
        <li>
          <strong>ECMAScript 6 características importantes: </strong>
          <ul>
            <li>
              <strong>Declaración de variables: </strong>Se introdujeron las
              palabras clave &quot;let&quot; y &quot;const&quot; para declarar
              variables con ámbito de bloque.
            </li>
            <li>
              <strong>Arrow Functions: </strong>Funciones de flecha que ofrecen
              una sintaxis más concisa para definir funciones anónimas.
            </li>
            <li>
              <strong>Plantillas de cadena: </strong>Permiten incrustar
              expresiones dentro de cadenas de texto.
            </li>
            <li>
              <strong>Desestructuración: </strong>Permite extraer valores de
              arreglos o objetos usando una sintaxis concisa.
            </li>
            <li>
              <strong>Parámetros de funciones predeterminados:</strong>Permite
              asignar valores predeterminados a los parámetros de una función.
            </li>
            <li>
              <strong>Clases: </strong>Introduce una sintaxis más clara y
              orientada a objetos para definir clases en JavaScript.
            </li>
            <li>
              <strong>Módulos: </strong>Introduce un sistema de módulos nativo
              para organizar y reutilizar el código.
            </li>
            <li>
              <strong>Promesas: </strong>Proporciona una forma más limpia de
              trabajar con operaciones asíncronas.
            </li>
            <li>
              <strong>Rest y Spread operators: </strong>Permiten manipular
              arreglos y objetos de manera más flexible.
            </li>
            <li>
              <strong>Mapas y Sets: </strong>Introduce nuevos tipos de datos
              para manejar colecciones de datos de manera más eficiente.
            </li>
          </ul>
        </li>
        <li>
          <strong>ECMAScript 7 características importantes: </strong>
          <ul>
            <li>
              Se introduce el operador <strong>exponencial**</strong>{" "}
              independizándose poco a poco de la librería Math.
            </li>
            <li>
              Manejo de <strong>array includes.</strong> Éste nos permitirá
              saber si algún elemento existe dentro del arreglo.
            </li>
          </ul>
        </li>
        <li>
          <strong>ECMAScript 8 características importantes: </strong>
          <ul>
            <li>Async await para mejor control asíncrono.</li>
            <li>
              Object.entries, Object.values, Object.keys para mejor control
              interno sobre las propiedades de un objeto.
            </li>
          </ul>
        </li>
        <li>
          <strong>ECMAScript 9 características importantes: </strong>
          <ul>
            <li>
              Resolvedores de promesas con .finally() para atender una promesa,
              se cumpla o no se cumpla.
            </li>
            <li>
              Mayor control a los objetos con operadores <strong>rest </strong>y{" "}
              <strong>spread </strong>(aplicable también a arrays).
            </li>
          </ul>
        </li>
        <li>
          <strong>ECMAScript 10 características importantes: </strong>
          <ul>
            <li>
              String.trim(): Remueve los espacios innecesarios en una cadena.
              Sirve para validar cadenas enviadas vacías o eliminar los espacios
              iniciales y finales.
            </li>
            <li>
              Array.flat(): Remueve anidaciones internas en arrays para dejar un
              arreglo plano.
            </li>
            <li>
              Dinamyc import: Permite importar{" "}
              <strong>sólo los módulos necesarios</strong>, ahorrando espacio y
              memoria.
            </li>
          </ul>
        </li>
        <li>
          <strong>ECMAScript 11 características importantes: </strong>
          <ul>
            <li>
              Operador Nullish <b>??</b>. Sirve para poder colocar un valor por
              default o variables que podrían ser nulas o indefinidas, a
              diferencia del operador ||, éstas filtran &quot;falseys&quot;.
            </li>
            <li>
              Variables privadas dentro de las clases, esto permite que algunas
              variables no sean accesibles desde el entorno de instancia de una
              clase y sólo sea utilizada de manera interna.
            </li>
          </ul>
        </li>
      </Concept>
      <Concept number={3} titulo={"Programación sincrónica y asincrónica"}>
        <li>
          <b>Función definida: </b>Función que se declara con un nombre desde el
          inicio. Usualmente se usan para tareas específicas y no suelen
          reasignarse.
        </li>
        <li>
          <b>Función anónima: </b>Función que se declara sin tener un nombre,
          sino que se asigna a una variable desde el inicio. Se suele utilizar
          para reasignaciones o para <b>callbacks</b>.
        </li>
        <li>
          <b>Callback: </b>Bloque de código que encapsula una o más
          instrucciones, para ser utilizadas en cualquier otro momento del
          programa.
        </li>
        <li>
          <b>Promesa: </b>Operación <b>asíncrona</b> que tiene dos canales de
          salida: resolverse o rechazarse. Permite mejor control que los
          callbacks. Cuenta con 3 estados(Pending, Fulfilled, Rejected).
        </li>
        <li>
          <b>Operación síncrona: </b>Operación <b>bloqueante</b> en la cual, una
          tarea no puede comenzar hasta que haya finalizado la otra tarea.
        </li>
        <li>
          <strong>Operación asíncrona: </strong>Operación <b>no bloqueante</b>
          en la cual se puede iniciar múltiples tareas independientemente de que
          no hayan finalizado las tareas previas.
        </li>
      </Concept>
      <Concept number={4} titulo={"Manejo de archivos en JavaScript"}>
        <li>
          <strong>Archivo: </strong>Secuencia de información que permite ser
          almacenada en algún disco, resolviendo persistencia en memoria.
        </li>
        <li>
          <strong>Persistencia en memoria: </strong>Modelo de almacenamiento que
          sólo persiste a lo largo del programa, si el programa termina o se
          reinicia, la información se pierde. Usualmente son arrays y objetos.
        </li>
        <li>
          <strong>Persistencia de archivos: </strong>Modelo de almacenamiento
          utilizando archivos a partir de un FileSystem, previniendo la pérdida
          de información al reiniciar un programa.
        </li>
        <li>
          <strong>fs: </strong>Abreviación para &quot;fileSystem&quot;, que es
          el módulo interno de Node js para trabajar con archivos.
        </li>
        <li>
          <strong>Sufijo Sync: </strong>Se utiliza al frente de las operaciones
          de fs para indicar que el proceso será síncrono y, por lo tanto,
          bloqueante.
        </li>
        <li>
          <strong>fs.promises: </strong>Se utiliza para indicar que las
          operaciones de archivos deben realizarse como una promesa y, por lo
          tanto, no bloqueantes. Se trabajan con async await o con .then y
          .catch.
        </li>
      </Concept>
      <Concept number={5} titulo={"Administrador de paquetes NPM"}>
        <li>
          <strong>Nodejs: </strong>Entorno de ejecución de JavaScript. Es el
          corazón de nuestros programas.
        </li>
        <li>
          <strong>Módulo: </strong>Conjunto de funciones y objetos que permiten
          resolver un problema específico.
        </li>
        <li>
          <strong>Módulo nativo: </strong>Módulos que vienen incluidos al
          instalar node js, no requieren instalación, sólo importación.
        </li>
        <li>
          <strong>package.json: </strong>Archivo de especificación del proyecto,
          sirve para contener las dependencias a utilizar en el proyecto.
        </li>
        <li>
          <strong>Dependencias: </strong>Todos los módulos externos a nuestro
          proyecto que necesitamos instalar para poder correr el proyecto.
        </li>
        <li>
          <strong>Dependencia local: </strong>Dependencias que sólo viven dentro
          de nuestro proyecto.
        </li>
        <li>
          <strong>Dependencia global: </strong>Dependencias que se instalan a
          nivel computador y puede ser utilizadas en cualquer proyecto.
        </li>
        <li>
          <strong>Versión: </strong>Cada una de las etapas y cambios que
          representa nuestro proyecto, pueden ser mayores, menores o parches.
        </li>
      </Concept>
      <Concept number={6} titulo={"Servidores Web"}>
        <li>
          <strong>HTTP: </strong>Acrónimo para Hyper Text Transfer Protocol. Es
          el protocolo que nos permite comunicarnos a través de internet.
        </li>
        <li>
          <strong>Protocolo: </strong>Conjunto de estándares y normas que deben
          seguirse para poder llevar a cabo una comunicación correcta.
        </li>
        <li>
          <strong>Servidor: </strong>Sistema que permite recibir peticiones de
          otras computadoras y devolver una respuesta a éstas.
        </li>
        <li>
          <strong>Módulo http: </strong>Módulo nativo de nodejs que permite
          programar un servidor http.
        </li>
        <li>
          <strong>Express: </strong>Framework de desarrollo para crear
          servidores de una manera escalable.
        </li>
        <li>
          <strong>Endpoint: </strong>Punto (ruta) específico bajo el cual el
          servidor conectará con el servicio a proporcionar.
        </li>
        <li>
          <strong>Método GET: </strong>Método del porotocolo HTTP que permite
          indicar al servidor que deseamos hacer una consulta de obtención de
          datos.
        </li>
        <li>
          <strong>Objeto req: </strong>Objeto usado dentro de los servicios de
          express para poder realizar consultas más complejas. Sus principales
          componentes son: req.method, req.url, req.query, req.params y
          req.body.
        </li>
      </Concept>
      <Concept number={7} titulo={"Express avanzado"}>
        <li>
          <strong>Código de estado: </strong>Código que indica el estado de la
          petición en el servidor.
        </li>
        <li>
          <strong>Códigos 1xx: </strong>Códigos informativos, sirven para
          indicar que la petición sigue en curso.
        </li>
        <li>
          <strong>Códigos 2xx: </strong>Códigos de resolución satisfactoria,
          indica que todo salió &quot;ok&quot; en la petición.
        </li>
        <li>
          <strong>Códigos 3xx: </strong>Códigos de resolución, indican que tuvo
          que moverse el recurso(Indican redirecciones).
        </li>
        <li>
          <strong>Códigos 4xx: </strong>Códigos de error, principalmente errores
          del lado del cliente.
        </li>
        <li>
          <strong>Códigos 5xx: </strong>Códigos de error, principalmente errores
          de lado del servidor.
        </li>
        <li>
          <strong>Métodos: </strong>Indican las diferentes operaciones que
          podemos hacer con un recurso.
        </li>
        <ul>
          <li>
            <b>GET: </b>Solicita datos del servidor. Es utilizado para obtener
            recursos como páginas web, imágenes, archivos, etc.
          </li>
          <li>
            <b>POST: </b>Envía datos al servidor para ser procesados. Es
            utilizado comúnmente para enviar información de formularios o para
            crear recursos en el servidor.
          </li>
          <li>
            <b>PUT: </b>Actualiza un recurso existente en el servidor con los
            datos proporcionados. Es utilizado para modificar o actualizar
            recursos específicos.
          </li>
          <li>
            <b>DELETE: </b>Elimina un recurso especificado en el servidor.
          </li>
          <li>
            <b>PATCH: </b>Modifica parcialmente un recurso existente en el
            servidor. Es utilizado cuando se necesita realizar modificaciones
            parciales en un recurso.
          </li>
          <li>
            <b>HEAD: </b>Solicita encabezados de respuesta idénticos a los que
            se devolverían si se realizara una solicitud GET, pero sin el cuerpo
            de la respuesta.
          </li>
        </ul>
        <li>
          <strong>POSTMAN: </strong>Software para realizar peticiones como si
          fuéramos un cliente, donde podemos visualizar los resultados y enviar
          información necesaria al servidor al realizar una consulta.
        </li>
      </Concept>
      <Concept number={8} titulo={"Router y Multer"}>
        <li>
          <strong>Router: </strong>Middleware de Express que permite agrupar
          endpoints comunes para contar con una arquitectura más limpia.
        </li>
        <li>
          <strong>API: </strong>&quot;Contrato&quot; formado de definiciones y
          protocolos, con el fin de comunicar componentes.
        </li>
        <li>
          <strong>REST: </strong>Sistema de estilo arquitectural para sistemas
          distribuidos de hipermedios, con el fin de comprender la estructura de
          los datos a trabajar.
        </li>
        <li>
          <strong>Middleware: </strong>Funciones que se colocan en medio de la
          ruta y el callback (req, res) que se ejecutarán antes de comenzar a
          procesar la petición.
        </li>
        <li>
          <strong>Multer: </strong>Middleware desarrollado para poder realizar
          carga de archivos dentro de las peticiones, con el fin de que el
          cliente pueda manejar archivos como imágenes, videos o documentos;
          dentro de una petición.
        </li>
      </Concept>
      <Concept number={9} titulo={"Motores de plantillas"}>
        <li>
          <strong>Plantilla: </strong>Documento HTML con marcas reemplazables
          para poder ser reemplazadas por un motor de plantillas.
        </li>
        <li>
          <strong>Motor de plantillas: </strong>librería desarrollada para tomar
          un HTML y reemplazar datos en éste para generar un efecto de dinamismo
          en la página.
        </li>
        <li>
          <strong>Página estática: </strong>Página que no requiere cambio de
          elementos ni interacción compleja con el usuario.
        </li>
        <li>
          <strong>Handlebars: </strong>Motor de plantillas basado en la marca{" "}
          {"{{}}}"}.
        </li>
        <li>
          <strong>Layout: </strong>Marco de disposición que requiere handlebars
          para poder encapsular en un solo cuerpo HTML todas las vistas de
          diferentes plantillas.
        </li>
        <li>
          <strong>express-handlebars: </strong>Paquete o módulo de npm para
          conectar handlebars con express.
        </li>
      </Concept>
      <Concept number={10} titulo={"Websockets"}>
        <li>
          <strong>Websocket: </strong>Protocolo de comunicación que permite una
          sesión activa entre cliente y servidor.
        </li>
        <li>
          <strong>Handshake: </strong>Acuerdo entre cliente y servidor que
          permite establecer una conexión abierta entre ambos puntos.
        </li>
        <li>
          <strong>socket.on: </strong>Listener de eventos que involucren a los
          sockets. El listener debe escuchar un evento de nombre idéntico al
          emitido por el otro punto.
        </li>
        <li>
          <strong>socket.emit: </strong>Emisor de eventos tanto para cliente
          como para servidor. El emisor debe emitir un evento de nombre idéntico
          al que está escuchando del otro lado.
        </li>
        <li>
          <strong>socketServer.emit: </strong>Emisor de eventos del servidor
          para todos los clientes.
        </li>
        <li>
          <strong>socket.broadcast.emit: </strong>Emisor de eventos del servidor
          para todos los clientes, a excepción del socket raíz del cual se llama
          el evento.
        </li>
      </Concept>
      <Concept number={12} titulo={"MongoDB"}>
        <li>
          <strong>Base de datos: </strong>Recopilación organizada de datos sobre
          la cual se pueden aplicar operaciones de lectura, creación,
          modificación o eliminación de éstos.
        </li>
        <li>
          <strong>Modelo relacional: </strong>Gestión de datos que consiste en
          representar éstos como tablas relacionadas con el fin de brindar una
          estructura de relación solida entre ellos.
        </li>
        <li>
          <strong>Modelo no relacional: </strong>Gestión de datos flexible que
          sustituye las tablas relacionadas, por colecciones, garantizando
          facilidad y dinamismo en el manejo de los datos.
        </li>
        <li>
          <strong>MongoDB: </strong>Base de datos no relacional basada en
          documentos que ofrece un modelo de escalabilidad, gestión de consultas
          e indexación profesional.
        </li>
        <li>
          <strong>mongod --dbpath{"<name>"}: </strong>Comando de mongo que
          permite inicializar un servidor apuntando a una carpeta personalizada
          para trabajar la base de datos.
        </li>
        <li>
          <strong>mongo (en CLI): </strong>Comando para inicializar el cliente
          CLI del mongo en nuestra terminal.
        </li>
      </Concept>
      <Concept number={13} titulo={"CRUD en MongoDB"}>
        <li>
          <strong>CRUD: </strong>Acrónimo que hace referencia a las cuatro
          operaciones fundamentales de una base de datos (Create, Read, Update,
          Delete).
        </li>
        <li>
          <strong>Proyecciones: </strong>Una proyección se incluye al momento de
          hacer una búsqueda.
        </li>
        <li>
          <strong>Sort: </strong>Sirve para poder hacer un ordenamiento de la
          información. La sintaxis es:{" "}
          <code>db.collection.find().sort({"{val_A:1,val_B:-1}"})</code>
        </li>
        <li>
          <strong>Skip: </strong>Omite el número de documentos indicados su
          sintaxis es: <code>.skip(offset)</code>
        </li>
        <li>
          <strong>Limit: </strong>Limita el número de documentos devueltos. Su
          sintaxis es: <code>.limit(num)</code>
        </li>
      </Concept>
      <Concept number={14} titulo={"Mongoose"}>
        <li>
          <strong>Database as a Service (BDaaS): </strong>Sirve para poder
          contar con un alojamiento de nuestra base de datos desde un servidor
          en la nube para evitar hacer almacenamientos físicos propios.
        </li>
        <li>
          <strong>Mongo Atlas: </strong> DBaaS pensada para MongoDB para setear
          Clusters y alojar múltiples bases de datos.
        </li>
        <li>
          <strong>Cliente CLI: </strong>Cliente que conecta a la base de datos
          desde una terminal de comandos.
        </li>
        <li>
          <strong>Cliente UI: </strong>Cliente que conecta a la base de datos a
          partir de un programa de escritorio, como MongoDB Compass.
        </li>
        <li>
          <strong>Cliente Web: </strong>Cliente que conecta a la base de datos a
          partir del navegaro, como la gestión a partir de Atas.
        </li>
        <li>
          <strong>Cliente App: </strong>Client que conecta dentro de nuestro
          sistema de backend. Como nuestro programa de node.js con mongoose.
        </li>
        <li>
          <strong>Mongoose: </strong>ODM utilizado para gestionar schemas
          definidor para mantener un control en la flexibilidad de MongoDB.
          Además de otras operaciones importantes para el manejo de sus datos.
        </li>
      </Concept>
      <Concept number={15} titulo={"Conocimiento a este punto:"}>
        <li>
          <strong>En proceso... </strong>
        </li>
      </Concept>
      <Concept number={16} titulo={"Mongo Avanzado"}>
        <li>
          <strong>Indexación: </strong>Técnica utilizada para colocarse en una
          propiedad de un documento, permite realizar búsquedas más rápidas
          cuandos se involucra a dicha propiedad.
        </li>
        <li>
          <strong>find().explain(&quot;executionStats&quot;): </strong>No
          devuelve el resultado de la búsqueda, sino que tiene por objetivo
          devolver las estadísticas de la operación.
        </li>
        <li>
          <strong>executionStats.executionTimeMilis: </strong>Tiempo en
          milisegundos que demoró hacer la operación.
        </li>
        <li>
          <strong>population: </strong>Operación que permite transformar la
          referencia de un documento en su documento correspondiente en la
          colección indicada.
        </li>
        <li>
          <strong>middleware: </strong>Operación intermedia que ocurre entre la
          petición a la base de datos y la entrega del documento o los
          documentos correspondiente.
        </li>
        <li>
          <strong>pre: </strong>Middleware utilizado para realizar una operación
          &quot;antes&quot; de devolver el restultado de la operación principal.
        </li>
      </Concept>
      <Concept number={17} titulo={"Mongo Avanzado II"}>
        <li>
          <strong>Aggregation: </strong>Realización de múltiples operaciones,
          generalmente sobre múltiples documentos.
        </li>
        <li>
          <strong>Aggregation pipelines: </strong>Consistirán en un conjunto de
          pasos (stages), donde cada paso corresponderá a una operación a
          realizar.
        </li>
        <li>
          <strong>$count: </strong>Cuenta el número de documentos disponibles
          que se encuentren en la stage actual.
        </li>
        <li>
          <strong>$group: </strong>Permite agrupar los documentos disponibles en
          nuevos grupos según un criterio especificado.
        </li>
        <li>
          <strong>$limit: </strong>Limita el número de documentos que saldrán de
          dicha stage.
        </li>
        <li>
          <strong>$lookup: </strong>Permite realizar un &quot;left join&quot;
          (combinación de campos), de una colección de la misma base de datos a
          los documentos de la stage actual.
        </li>
        <li>
          <strong>$set / $addFields: </strong>Agregan una nueva propiedad a los
          documentos que se encuentren en dicha stage.
        </li>
        <li>
          <strong>$skip: </strong>Devuelve sólo los documentos que se encuentren
          despues del offset indicado.
        </li>
        <li>
          <strong>$sort: </strong>Ordena los documentos en la stage actual.
        </li>
        <li>
          <strong>$limit: </strong>Limita el número de documentos que saldrán de
          dicha stage.
        </li>
        <li>
          <strong>$match: </strong>Devuelve sólo los documentos que cumplan con
          un criterio de búsqueda, podemos colocar filtros comunes aquí.
        </li>
        <li>
          <strong>$merge: </strong>Escribe los resultados del pipeline en una
          colección. Debe ser la última stage del pipeline para poder funcionar.
        </li>
        <li>
          <strong>Mongoose-paginate-v2: </strong>Es un plugin para mongoose que
          nos permitirá realizar paginaciones eficientes para los modelos que
          nosotros especifiquemos.
        </li>
      </Concept>
      <Concept number={18} titulo={"Cookies, Sessions & Storages"}>
        <li>
          <strong>Cookie: </strong>Pequeña parte de información que se almacena
          en el navegador al momento de visitar un sitio web, utilizado para
          conservar detalles de información útiles para el sitio web.
        </li>
        <li>
          <strong>CookieParser: </strong>Módulo de Node que permite gestionar
          cookies desde el servidor, con el fin de poder obtenerlas, leerlas,
          escribirlas o eliminarlas.
        </li>
        <li>
          <strong>Cookie.maxAge: </strong>Indica en milisegundos el tiempo de
          vida de la cookie. Si no se especifica, la cookie persistirá hasta que
          se elimine.
        </li>
        <li>
          <strong>Signed Cookie: </strong>Cookie firmada que permite agregar
          seguridad, la cual escucha si la cookie fue alterada, invalidándose en
          dado caso.
        </li>
        <li>
          <strong>Session: </strong>Ciclo de interacción entre un sitio y un
          cliente, donde el cliente cuenta con un indentificador de sessión para
          reconocimineto desde el servidor.
        </li>
        <li>
          <strong>express-sessión: </strong>Módulo de Node que permite gestionar
          sesiones y almacenarlas en el servidor.
        </li>
      </Concept>
      <Concept number={19} titulo={"Cookies, Sessions & Storage II"}>
        <li>
          <strong>Storage: </strong>Lugar donde se almacenan las sesiones del
          lado del servidor. Es donde se consultan y comparan la sessionId.
        </li>
        <li>
          <strong>MemoryStorage: </strong>Almacenamiento por defecto de sesiones
          por express-session. Si el servidor cae, las sesiones caen.
        </li>
        <li>
          <strong>FileStorage: </strong>Almacenamiento alternativo que permite
          guardar las sesiones en archivos en una carpeta indicada. Cuando el
          servidor cae, aún puede consultar las sesiones de los archivos
          después.
        </li>
        <li>
          <strong>MongoStorage: </strong>Almacenamiento alternativo de sesión
          que permite guardar las sesiones en una base de datos. Es más
          accesible ya que tiene un sistema de autogestíon que permite limpiar
          las sesiones expiradas.
        </li>
      </Concept>
      <Concept number={20} titulo={"Autorización y autentificación."}>
        <li>
          <strong>Autentificación: </strong>Proceso por el cual el cliente
          otorga sus credenciales al servidor para definir su identidad en el
          uso de la aplicación.
        </li>
        <li>
          <strong>Autorización: </strong>Proceso por el cual, a un cliente{" "}
          <b>ya autenticado</b>, se le otorga o restringe el acceso a algún
          recurso, según su nivel jerárquico.
        </li>
        <li>
          <strong>Passport: </strong>Sistema de middleware para autenticación y
          autorización que permite realizar múltiples estrategias de manera
          limpia y modular.
        </li>
        <li>
          <strong>Passport-local: </strong>Estrategia de passport utilizada para
          mantener una lógica de autenticación bajo <b>username</b> y{" "}
          <b>password</b>.
        </li>
      </Concept>
      <Concept
        number={21}
        titulo={"Estrategia de autentificación por terceros + JWT."}
      >
        <li>
          <strong>Autentificación por terceros: </strong>Proceso por el cual
          realizamos una obtención de credenciales a partir de una aplicación
          externa.
        </li>
        <li>
          <strong>Passport-github: </strong>Módulo externo de node que permite
          conectar la dependencia de passport con una estrategia de
          autenticación por terceros basada en github.
        </li>
        <li>
          <strong>JWT: </strong>Estandar de creación de accesos basados en
          JSONS, generado tokens de autentificación con el fin de delegar la
          responsabilidad de sesión al frontend.
        </li>
      </Concept>
      <Concept number={22} titulo={"Passport Avanzado."}>
        <li>
          <strong>LocalStorage: </strong>Es un recurso que almacena información
          en una &quot;base interna&quot; del navegador.
        </li>
        <li>
          <strong>Estrategia de JWT con passport: </strong>Es una estrategia de
          autenticación que utiliza tokens JSON Web Token (JWT) para validar la
          identidad de los usuarios en aplicaciones web. Los usuarios reciben un
          token JWT al iniciar sesión, que luego se incluye en cada solicitud
          HTTP. Passport.js verifica y decodifica este token en el servidor para
          permitir el acceso a recursos protegidos. Esta estrategia proporciona
          un método seguro y eficiente para la autenticación de usuarios en
          aplicaciones web modernas.
        </li>
      </Concept>
      <Concept
        number={23}
        titulo={"Ruteo avanzado y estrategias avanzadas de autorización."}
      >
        <li>
          <strong>Estrategias de Router: </strong>
          <ul>
            <li>Restringiendo parámetros.</li> Hacer uso de regular expresions
            para filtrar datos no deseados.
            <li>Validación de parámetros con router.param().</li>
          </ul>
        </li>

        <li>Creación de un Custom Router.</li>
        <li>Creación de un Custom Responses.</li>
      </Concept>
      <Concept number={24} titulo={"Segunda Practica integradora."}>
        <li>
          <strong>Introducció: </strong>Es.
        </li>
      </Concept>
      <Concept
        number={25}
        titulo={"Proceso principal del servidor + Global & Child Process"}
      >
        <li>
          <strong>Process: </strong>En Node.js, un proceso es una instancia en
          ejecución de un programa de Node.js, que puede ejecutarse de forma
          independiente o en conjunto con otros procesos para realizar tareas
          específicas.
          <ul>
            <li>
              <code>process.cwd()</code>: Directorio actual del proceso.
            </li>
            <li>
              <code>process.argv</code>: Argumentos de línea de comandos pasados
              al proceso.
            </li>
            <li>
              <code>process.env</code>: Variables de entorno del proceso.
            </li>
            <li>
              <code>process.exit()</code>: Finaliza el proceso con un código de
              estado específico.
            </li>
            <li>
              <code>process.pid</code>: ID de proceso del proceso actual.
            </li>
            <li>
              <code>process.platform</code>: Plataforma en la que se está
              ejecutando el proceso.
            </li>
            <li>
              <code>process.stdin</code>: Entrada estándar (stdin) del proceso.
            </li>
            <li>
              <code>process.stdout</code>: Salida estándar (stdout) del proceso.
            </li>
            <li>
              <code>process.stderr</code>: Salida de error estándar (stderr) del
              proceso.
            </li>
            <li>
              <code>process.on()</code>: Permite registrar manejadores de
              eventos para diferentes señales y eventos del proceso.
            </li>
          </ul>
        </li>
        <li>
          <strong>Commander: </strong>Es una librería para el manejo de
          argumentos. Permite realizar funciones como:
          <ul>
            <li>Convertir flgas directamente en booleanos.</li>
            <li>Limitar sólo flags configuradas.</li>
            <li>Colocar argumentos predeterminados.</li>
          </ul>
        </li>
        <li>
          <strong>dotenv: </strong>La librería <code>dotenv</code> en Node.js
          carga variables de entorno desde un archivo <code>.env</code>,
          facilitando la gestión de configuraciones sensibles sin necesidad de
          exponerlas directamente en el código fuente.
        </li>
        <li>
          <strong>Archivo config: </strong>Es un archivo utilizado para
          almacenar ajustes y opciones necesarios para el funcionamiento de una
          aplicación o sistema. Contiene información como URL de bases de datos,
          claves API y otros valores de configuración importantes.
        </li>
        <li>
          <strong>Listener: </strong>Es una función que espera y responde a
          eventos específicos que ocurren en una aplicación o sistema.
        </li>
        <li>
          <strong>Child Process: </strong>Es un proceso secundario que es creado
          y ejecutado por otro proceso, conocido como proceso padre. En el
          contexto de Node.js, los child processes se utilizan para ejecutar
          tareas pesadas o para ejecutar programas externos de forma asincrónica
          sin bloquear el hilo principal de ejecución. Esto permite que una
          aplicación Node.js realice múltiples tareas de forma simultánea y
          eficiente.
          <ul>
            <li>
              <code>fork():</code>Es un método del módulo child_process de
              Node.js que crea un nuevo proceso hijo para ejecutar un script
              Node.js específico. Este método facilita la ejecución de tareas en
              paralelo sin bloquear el hilo principal.{" "}
            </li>
            <li>
              <code>spawn()</code>
            </li>
            <li>
              <code>execFile()</code>
            </li>
            <li>
              <code>exec()</code>
            </li>
          </ul>
        </li>
      </Concept>
      <Concept number={26} titulo={"Arquitectura de capas."}>
        <li>
          <strong>Arquitectura de capas: </strong>Es un enfoque de diseño de
          software que organiza una aplicación en capas separadas y específicas,
          facilitando la modularidad y el mantenimiento del sistema. Cada capa
          tiene una responsabilidad clara y se comunica solo con las capas
          adyacentes.
          <ul>
            <strong>Capas base:</strong>
            <li>
              <b>Capa de Modelo o Persistencia: </b> maneja el acceso y
              manipulación de datos en la aplicación, incluyendo operaciones
              como lectura y escritura en la base de datos, y puede contener
              lógica de negocio relacionada con la persistencia de datos.
            </li>
            <li>
              <b>Capa de Controlador o Negoció: </b> Implementa la lógica de
              negocio de la aplicación. Coordina las interacciones entre la capa
              de vista y la capa de modelo, procesando solicitudes de usuario y
              aplicando reglas de negocio para realizar operaciones requeridas.
            </li>
            <li>
              <b>Capa de Vista o Renderización: </b>se encarga de presentar la
              información al usuario final de la aplicación, utilizando
              tecnologías como HTML, CSS y JavaScript para crear una experiencia
              visual intuitiva y atractiva.
            </li>
            <strong>Capas adicionales: </strong>
            <li>
              <b>Capa de routing: </b>Gestiona las URL de una aplicación web,
              dirigiendo las solicitudes del usuario a las partes adecuadas de
              la aplicación para su procesamiento y respuesta.
            </li>
            <li>
              <b>Capa de servicio: </b>Es una capa intermedia entre el
              controlador y la persistencia, un servicio tiene la capacidad de
              servir como &quot;tunel&quot; de conexión, para que el controlador
              pueda acceder de manera más homologada a la persistencia.
            </li>
          </ul>
        </li>
      </Concept>
      <Concept number={27} titulo={"Arquitectura del servidor: Diseño"}>
        <li>
          <strong>Conceptos basicos al diseñar: </strong>
          <ul>
            <li>Código reutilizable.</li>
            <li>Código escalable.</li>
            <li>Homologación de patrones de diseño.</li>
          </ul>
        </li>
        <li>
          <strong>Adoptar Modelo por capas </strong>
        </li>
        <li>
          <strong>Manejo de entornos </strong>
          <ul>
            <li>Desarrollo.</li>
            <li>Productivo.</li>
            <li>Pruebas.</li>
          </ul>
        </li>
        <li>
          <strong>Patrones de diseño: </strong>Es una solución replicable para
          problemas comunes de desarrollo.
          <ul>
            <li>Cadena de responsabilidades.</li>
            <li>Decorador.</li>
            <li>Proxy.</li>
            <li>Patrón MVC.</li>
            <li>Patrón Singleton.</li>
          </ul>
        </li>

        <li>
          <strong>Cors (Cross-Origin Resource Sharing): </strong>Es una política
          de seguridad en los navegadores web que restringe las solicitudes HTTP
          entre diferentes orígenes para proteger la integridad y seguridad de
          los datos del usuario.
        </li>
      </Concept>
      <Concept number={28} titulo={"Arquitectura del servidor: Persistencia."}>
        <li>
          <strong>Patrón DAO (Data Access Object): </strong>Separa la lógica de
          acceso a datos (memoria, archivos, base de datos) de la lógica de
          negocio en una aplicación, facilitando el mantenimiento y la
          modularidad del código.
          <li>
            <b>Métodos homologados:</b>Son estándares o protocolos validados y
            aceptados en un contexto específico, utilizados como referencias
            para garantizar la calidad y la conformidad en diferentes áreas o
            industrias (<code>read</code> con archivos, <code>find</code> con
            mongo y <code>select</code> con SQL homologados en funcion{" "}
            <b>get()</b>.
          </li>
        </li>
        <li>
          <strong>Data Transfer Object (DTO): </strong>Es un objeto utilizado
          para transferir datos entre subsistemas de una aplicación. Su
          principal función es encapsular datos y transportarlos de un lugar a
          otro dentro de la aplicación o entre diferentes aplicaciones. Los DTOs
          suelen ser simples y contener únicamente datos, sin lógica de negocio
          adicional.
        </li>
        <li>
          <strong>Patron de diseño Repository: </strong>Eroporciona una capa de
          abstracción entre la lógica de negocio y la capa de acceso a datos,
          promoviendo la modularidad y la reutilización del código al
          proporcionar una interfaz uniforme para acceder a los datos.
        </li>
      </Concept>
      <Concept
        number={29}
        titulo={"Desarrollo de un servidor web basado en capas completo."}
      >
        <li>
          <strong>
            Ejemplo de programación aplicando los diseños aprendidos.
          </strong>
        </li>
      </Concept>
      <Concept number={30} titulo={"Mailing y mensajería."}>
        <li>
          <strong>SMTP - Protocolo para mailing: </strong>Es un protocolo
          estándar de Internet utilizado para el envío de correos electrónicos
          entre servidores de correo electrónico, proporcionando un mecanismo
          confiable para la transmisión de mensajes de correo electrónico a
          través de la red.
        </li>
        <li>
          <strong>Nodemailer: </strong>Es una biblioteca de Node.js que facilita
          el envío de correos electrónicos desde aplicaciones Node.js,
          ofreciendo una interfaz sencilla y características avanzadas para
          manejar el proceso de envío de correo electrónico de forma eficiente.
          <ul>
            <li>
              Tutorial de envío de mensajes con gmail.
              <Enlace
                url={
                  "https://microlab.ec/blog/enviar-correo-gmail-desde-nodejs/"
                }
              />
            </li>
            <li>
              Tutorial de envío con attachments e imagenes.
              <Enlace
                url={
                  "https://eduardo-arias.com/nodemailer-correo-electronico-en-node-js/"
                }
              />
            </li>
          </ul>
        </li>
        <li>
          <strong>Mensajeria con Twilio: </strong>Es una plataforma en la nube
          que proporciona herramientas y API para que los desarrolladores
          integren funciones de comunicación en sus aplicaciones y sitios web de
          forma fácil y rápida.
          <Enlace
            url={
              "https://www.twilio.com/es-mx/blog/envie-imagenes-de-whatsapp-con-node-js"
            }
          />
        </li>
      </Concept>
      <Concept number={31} titulo={"Test y Mocks"}>
        <li>
          <strong>TDD (Test Driven Develpment): </strong>Es una práctica de
          desarrollo de software que se centra en escribir pruebas automatizadas
          antes de escribir el código de producción, lo que ayuda a mejorar la
          calidad del código y la confiabilidad de las aplicaciones.
          <ul>
            <strong>Etapas:</strong>
            <li>Etapa 1: Escribir pruebas fallidas.</li>
            <li>Etapa 2: Hacer que las pruebas pasen.</li>
            <li>Etapa 3: Refactorizar.</li>
          </ul>
        </li>
        <li>
          <strong>Errores principales: </strong>
          <ul>
            <li>De compilación.</li>
            <li>De ejecución.</li>
            <li>Lógicos.</li>
          </ul>
        </li>
        <li>
          <strong>Mocks: </strong>Es un objeto simulado utilizado en pruebas de
          software para imitar el comportamiento de un objeto real, lo que
          permite aislar la funcionalidad que se está probando y realizar
          pruebas más efectivas y repetibles.
        </li>
        <li>
          <strong>Faker-js: </strong>Es una biblioteca de JavaScript que genera
          datos de prueba aleatorios de manera realista para su uso en el
          desarrollo y las pruebas de aplicaciones.{" "}
          <Enlace url={"https://fakerjs.dev/guide/"} />
        </li>
      </Concept>
      <Concept number={32} titulo={"Opmitización"}>
        <li>
          <strong>Brotli: </strong> una alternativa &quot;moderna&quot; de Gzip,
          desarrollado por Google, ofrece un algoritmo cuya comprensión puede
          resultar hasta 30% más efectiva que la prompresión de Gzip.
        </li>
        <li>
          <strong>Compresión: </strong>Aplicación de fuerzas equilibradas hascia
          adentro (&quot;empujar&quot;) a diferentes puntos de un material o
          estructura.
        </li>
        <li>
          <strong>Gzip: </strong>Es el pirmer y más conocido modelo de
          compresión, es altamente utilizado y sencillo de utilizar.
        </li>
      </Concept>
      <Concept number={33} titulo={"Versiones y paquetes."}>
        <li>
          <strong>Node Version Manager (NVM): </strong>Es un software que nos
          permitirá descargar, instalar y cambiar de versiones de node siempre
          que lo necesitemos.
          <ul>
            <li>
              <code>nvm install [version]</code>: Instala una versión específica
              de Node.js.
            </li>
            <li>
              <code>nvm use [version]</code>: Establece una versión específica
              de Node.js como la versión activa.
            </li>
            <li>
              <code>nvm ls</code>: Lista las versiones de Node.js instaladas en
              el sistema.
            </li>
            <li>
              <code>nvm ls-remote</code>: Lista las versiones de Node.js
              disponibles para descargar.
            </li>
            <li>
              <code>nvm current</code>: Muestra la versión de Node.js
              actualmente activa.
            </li>
            <li>
              <code>nvm alias [nombre] [version]</code>: Crea un alias para una
              versión de Node.js.
            </li>
            <li>
              <code>nvm uninstall [version]</code>: Desinstala una versión
              específica de Node.js.
            </li>
          </ul>
        </li>
        <li>
          <strong>YARN: </strong>Es una herramienta de gestión de paquetes para
          proyectos de JavaScript que ofrece una instalación más rápida, mejor
          manejo de dependencias y una experiencia de usuario mejorada en
          comparación con npm.
        </li>
        <li>
          <strong>NPM: </strong>Es una herramienta esencial en el ecosistema de
          Node.js y JavaScript que facilita la gestión de paquetes de código y
          la colaboración entre desarrolladores.
          <ul>
            <li>
              <code>npm install [paquete]</code>: Instala un paquete de npm.
            </li>
            <li>
              <code>npm init</code>: Inicializa un nuevo proyecto npm.
            </li>
            <li>
              <code>npm start</code>: Inicia la aplicación.
            </li>
            <li>
              <code>npm test</code>: Ejecuta las pruebas unitarias.
            </li>
            <li>
              <code>npm run [script]</code>: Ejecuta un script personalizado
              definido en el archivo package.json.
            </li>
            <li>
              <code>npm uninstall [paquete]</code>: Desinstala un paquete de
              npm.
            </li>
            <li>
              <code>npm update [paquete]</code>: Actualiza un paquete a la
              última versión disponible.
            </li>
            <li>
              <code>npm search [palabra clave]</code>: Busca paquetes de npm.
            </li>
            <li>
              <code>npm ci</code>: Permite realizar directamente la lectura e
              instalación a partir del archivo package-lock.json.
            </li>
            <li>
              <code>npm audit</code>: Revisa los problemas de vulnerabilidad y
              propone soluciones para poder mantener nuestro proyecto seguro de
              brechas de dependencias.
            </li>
          </ul>
        </li>
        <li>
          <strong>package-lock.json: </strong>Es una herramienta importante para
          garantizar la consistencia y reproducibilidad de las dependencias en
          un proyecto Node.js al fijar las versiones exactas de los paquetes
          instalados y sus dependencias.
        </li>
        <li>
          <strong>Extra: </strong>Creación de un módulo de npm.
        </li>
      </Concept>
      <Concept number={34} titulo={"Logging y performance"}>
        <li>
          <strong>Artillery: </strong>Es un tookit de performance que prueba
          nuestro servidor y corrobora su fiabilidad en un entorno real.
        </li>
        <li>
          <strong>Niveles: </strong>Permitirá priorizar &quot;qúe es importante
          mostrar&quot;y &quot;qué podría ignorar en algunos casos&quot;
        </li>
        <li>
          <strong>Transportes: </strong>Los transportes nativos de Winston
          permiten que nuestros logs puedan salir de la consola y enviarse por
          otros medios.
        </li>
        <li>
          <strong>Winston Logger: </strong>Winston es un logger diseñado para
          poder trabajar con multitransportes.
        </li>
      </Concept>
      <Concept number={35} titulo={"Clusters y escalabilidad"}>
        <li>
          <strong>Cluster: </strong>Es un conjunto de computadoras o servidores
          interconectados que trabajan juntos para realizar una tarea o conjunto
          de tareas relacionadas, mejorando el rendimiento, la disponibilidad y
          la escalabilidad de las aplicaciones.
        </li>
        <li>
          <strong>Docker: </strong>Es una plataforma que permitirá crear, probar
          e implementar aplicativos en unidades de software estanderizadas
          llamadas contenedores.
        </li>
        <li>
          <strong>Contenedor: </strong>Es un entorno de ejecución para un
          alicativo en partitular, el cual tiene todas las dependencias que
          necesita dicha aplicación para poder correr sin problemas de
          compatibilidad.
        </li>
        <li>
          <strong>Imagen base: </strong>Es una plantilla que contiene todas las
          instrucciones y archivos necesarios para crear un contenedor Docker, y
          se utiliza como base para ejecutar aplicaciones de forma aislada y
          portátil.
        </li>
      </Concept>
      <Concept number={36} titulo={"Orquetación de contenedores."}>
        <li>
          <strong>DockerHub: </strong>Es una librería, o repositorio de imágenes
          en la nube.
        </li>
        <li>
          <strong>kubernetes: </strong>Es una tecnología de orquestamiento de
          contendores, se trata de una plataforma que sirve para administrar
          cargas de trabajoy servicio.
        </li>
        <li>
          <strong>Minikube: </strong>Es un software que permite levantar un
          clustes local de kubernetes y hacer las pruebas necesarias.
        </li>
      </Concept>
      <Concept number={37} titulo={"Practica Integradora"}>
        <li>
          <strong>En proceso... </strong>
        </li>
      </Concept>
      <Concept number={38} titulo={"Seguridad"}>
        <li>
          <strong>OWASP: </strong>Open Web Application Security Project. Es un
          proyecto de código abierto internacional, sin fines de lucro que
          brinda información referente a la seguridad general de aplicaciones.
        </li>
        <li>
          <strong>OWASP top 10: </strong>Es un documento que muestra las 10
          vulnerabilidades principales y de impacto más crítico en las
          aplicaciones web a lo largo de un determinado tiempo.
        </li>
        <li>
          <strong>vulnerabilidad: </strong>Cualquier tipo de debilidad en un
          sistema que permita ser aprovechada por una persona malintencionada
          para comprometer la seguridad del sistema o el usuario.
        </li>
      </Concept>
      <Concept number={39} titulo={"Documentación de API"}>
        <li>
          <strong>Documentar: </strong>Significa brindar información suficiente
          sobre algún proceso, con el fin de que éste sea lo suficientemente
          entendible para quien lo lea. Puede darse a nivel simple (comentarios
          de codigo) o nivel complejo (herramientas de documentación para
          aplicativo general).
        </li>
        <li>
          <strong>Swagger: </strong>Es una herramienta de documentación, la cual
          nos permitirá mantener cada módulo de nuestra API dentro de un{" "}
          <b>espectro de entendimiento sólido</b>.
        </li>
        <li>
          <strong>Documentación basica:</strong>
          <ul>
            <li>Schemas.</li>
            <li>Routes.</li>
            <li>Inputs.</li>
            <li>Responses.</li>
          </ul>
        </li>
      </Concept>
      <Concept number={40} titulo={"Testing unitarios"}>
        <li>
          <strong>Assert: </strong>Módulo nativo de nodejs que nos permitirá
          hacer validaciones de manera estricta.
        </li>
        <li>
          <strong>archivo.test.js: </strong>La subextensión .test.js indica que
          el archivo será utilizado dentro de un contexto de testing.
        </li>
        <li>
          <strong>describe: </strong> función utilizada para definir diferentes
          contextos de testeo, podemos tener la cantidad de contextos que
          deseemos en un flujo de testing, siempre y cuando reflejen intenciones
          diferentes.
        </li>
        <li>
          <strong>it: </strong>unidad mínima de nuestro testing, en ella,
          definimos qué acción se está realizando y cuál será el resultado
          esperado.
        </li>
        <li>
          <strong>Mocha </strong>Es un framework de testing originalmente
          diseñado para nodejs, el cual nos permitirá ejecutar entornos
          complejos para poder hacer cualquier tipo de pruebas que necesitemos.
        </li>
        <li>
          <strong>Test unitario: </strong>está pensado para funcionalidades
          aisladas, es decir, aquellas funcionalidades en las que{" "}
          <b>no se consideran el contexto u otros componentes</b>.
        </li>
        <li>
          <strong>before: </strong>Función que nos permite inicializar elementos
          antes de comenzar con todo el contexto de testeo.
        </li>
        <li>
          <strong>beforeEach: </strong>Función que nos permite inicializar
          elementos antes de comenzar <b>cada test</b> dentro de un contexto
          particular.
        </li>
        <li>
          <strong>after: </strong>Función que nos permite realizar alguna acción
          una vez finalizado el contexto de testeo.
        </li>
        <li>
          <strong>afterEach </strong>Función que nos permite realizar alguna
          acción una vez finalizado{" "}
          <b>cada test dentro del contexto particular.</b>
        </li>
      </Concept>
      <Concept number={41} titulo={"Testing Avanzado"}>
        <li>
          <strong>Testing de integración: </strong>Tiene el objetivo de ver que
          los módulos funcionen en conjunto. POr ejemplo, módulo de Dao, Bcrypt.
        </li>
        <li>
          <strong>Test funcional: </strong>Hace referencia a aplicar las
          integraciones de la misma manera que se realizaría un test de
          integración, sin embargo enfocadas a cumplir una funcionalidad real.
        </li>
        <li>
          <strong>Supertest: </strong>Es una librería que nos permitirá ejecutar
          peticiones HTTP a nuestro servidor para poder probar funcionalidades.
        </li>
      </Concept>
      <Concept number={42} titulo={"Frameworks de desarrollo: Nest js I"}>
        <li>
          <strong>En proceso... </strong>
        </li>
      </Concept>
    </Section>
  );
}
