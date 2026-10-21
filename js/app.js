// Esquema gráfico interactivo · Pedagogías y tecnologías emergentes
const shortCite=c=>{const p=c.split(';').map(x=>x.trim());return p.length>1?`${p[0]} +${p.length-1}`:p[0]};
const RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
const I = {
  chip:'<rect x="6" y="6" width="12" height="12" rx="2"/><rect x="9.5" y="9.5" width="5" height="5"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/>',
  book:'<path d="M3 5.5C5.5 4.5 9 4.5 12 6.5c3-2 6.5-2 9-1v13c-2.5-1-6-1-9 1-3-2-6.5-2-9-1z"/><path d="M12 6.5v13"/>',
  network:'<circle cx="5" cy="6" r="2"/><circle cx="19" cy="6" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="5" cy="18" r="2"/><circle cx="19" cy="18" r="2"/><path d="M6.7 7.1l3.6 3.8M17.3 7.1l-3.6 3.8M6.7 16.9l3.6-3.8M17.3 16.9l-3.6-3.8"/>',
  umbrella:'<path d="M3 12a9 9 0 0118 0z"/><path d="M12 12v6.5a2 2 0 01-4 0"/><path d="M12 3v-1"/>',
  prism:'<circle cx="9" cy="9.5" r="5"/><circle cx="15" cy="9.5" r="5"/><circle cx="12" cy="14.5" r="5"/>',
  head:'<path d="M14 20v-3h2.5a1.5 1.5 0 001.5-1.5V13l2-.5-2-4A7 7 0 004 10c0 2.4 1 4.2 3 5.5V20"/><path d="M9.5 9h4.5M9.5 12h2.5"/>',
  target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/><path d="M12 12l7-7M16 5h3v3"/>',
  bike:'<circle cx="6" cy="16" r="3.5"/><circle cx="18" cy="16" r="3.5"/><path d="M6 16l4-7h5l3 7M10 9l3 7H6M14 6h2.5"/><path d="M11.5 2.5L10 5h2l-1.5 2.5"/>',
  laptop:'<rect x="4" y="5" width="16" height="10" rx="1.5"/><path d="M2 19h20"/><path d="M9 10l2 2 4-4"/>',
  route:'<circle cx="6" cy="18" r="2"/><circle cx="18" cy="6" r="2"/><path d="M8 18h6a3 3 0 000-6h-4a3 3 0 010-6h6"/>',
  chart:'<path d="M4 20V4M4 20h16"/><rect x="7" y="12" width="3" height="5"/><rect x="12" y="8" width="3" height="9"/><rect x="17" y="5" width="3" height="12"/>',
  robot:'<rect x="5" y="8" width="14" height="10" rx="3"/><circle cx="9.5" cy="13" r="1.2"/><circle cx="14.5" cy="13" r="1.2"/><path d="M12 8V5M10 5h4M3 12v3M21 12v3"/>',
  seedling:'<path d="M12 21v-9"/><path d="M12 12c0-4 3-7 8-7 0 4-3 7-8 7z"/><path d="M12 14c0-3-2.5-5.5-7-5.5 0 3 2.5 5.5 7 5.5z"/><path d="M7 21h10"/>',
  loop:'<path d="M20 12a8 8 0 01-14.5 4.6"/><path d="M4 12a8 8 0 0114.5-4.6"/><path d="M18.5 3v4.6h-4.6M5.5 21v-4.6h4.6"/>',
  group:'<circle cx="8" cy="8" r="3"/><circle cx="16" cy="8" r="3"/><path d="M2.5 19c.5-3.5 2.8-5.5 5.5-5.5s5 2 5.5 5.5M10.5 19c.5-3.5 2.8-5.5 5.5-5.5s5 2 5.5 5.5"/>',
  check:'<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8l1.5 1.5L12 7M8 14l1.5 1.5L12 13M14 8.5h3M14 14.5h3"/>',
  teacher:'<circle cx="8" cy="7" r="3"/><path d="M3 20c0-4 2.2-7 5-7s5 3 5 7"/><rect x="13" y="4" width="8" height="6" rx="1"/><path d="M15 7h4"/>',
  calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4M7 14h2M11 14h2M15 14h2M7 17h2"/>',
  database:'<ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3"/>',
  loops3:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5.5"/><circle cx="12" cy="12" r="2"/>',
  shield:'<path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
  scale:'<path d="M12 4v16M7 20h10M5 7h14"/><path d="M5 7l-3 6a3 3 0 006 0zM19 7l-3 6a3 3 0 006 0z"/>',
  blackbox:'<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z"/><path d="M4 7.5l8 4.5 8-4.5M12 12v9"/>',
  warning:'<path d="M12 4l9 16H3z"/><path d="M12 10v4M12 17v.5"/>',
  globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 3.8 5.5 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.5-3.8-9S9.5 5.5 12 3z"/>',
  podium:'<path d="M3 20h18M4 20v-6h5v6M9 20V9h6v11M15 20v-8h5v8"/><path d="M12 3l.9 1.8 2 .3-1.45 1.4.35 2L12 7.6l-1.8.9.35-2L9.1 5.1l2-.3z"/>',
  code:'<path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14"/>',
  iot:'<circle cx="12" cy="18" r="1.6"/><path d="M8.5 14.5a5 5 0 017 0M5.5 11.5a9 9 0 0113 0M2.5 8.5a13 13 0 0119 0"/>',
  chain:'<rect x="2.5" y="8.5" width="9" height="7" rx="3.5"/><rect x="12.5" y="8.5" width="9" height="7" rx="3.5"/><path d="M8.5 12h7"/>',
  game:'<rect x="2" y="7" width="20" height="11" rx="5.5"/><path d="M7 10.5v4M5 12.5h4"/><circle cx="16" cy="11.3" r="1"/><circle cx="18.2" cy="13.8" r="1"/>',
  vr:'<path d="M3 9a2 2 0 012-2h14a2 2 0 012 2v6a2 2 0 01-2 2h-4l-2-2.5h-2L9 17H5a2 2 0 01-2-2z"/><circle cx="8" cy="12" r="1.6"/><circle cx="16" cy="12" r="1.6"/>',
  spark:'<path d="M12 2l2.3 6.7L21 11l-6.7 2.3L12 20l-2.3-6.7L3 11l6.7-2.3z"/><path d="M19 2v4M17 4h4"/>',
  bulb:'<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 00-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0012 3z"/>'
};
const ico = (k)=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${I[k]}</svg>`;

/* Ilustración central: libro abierto del que emerge una red neuronal */
const CORE_ART = `<svg viewBox="0 0 150 120" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <path d="M10 92c20-8 44-8 65 6 21-14 45-14 65-6V112c-20-8-44-8-65 6-21-14-45-14-65-6z" fill="currentColor" fill-opacity=".12"/>
  <path d="M75 98v20"/>
  <g stroke-width="2.2"><path d="M40 76L58 50M58 50L75 70M75 70L92 50M92 50L110 76M58 50L75 24M92 50L75 24M58 50L92 50M40 76L75 70M110 76L75 70"/></g>
  <circle cx="75" cy="24" r="9" fill="currentColor"/><circle cx="58" cy="50" r="7" fill="currentColor"/><circle cx="92" cy="50" r="7" fill="currentColor"/>
  <circle cx="40" cy="76" r="6" fill="currentColor"/><circle cx="75" cy="70" r="6" fill="currentColor"/><circle cx="110" cy="76" r="6" fill="currentColor"/>
</svg>`;

const CORE = {
  title:'Pedagogías y tecnologías emergentes',
  body:`<p>El tema central es la inteligencia artificial (IA) como tecnología emergente en educación y su relación con las pedagogías que le dan sentido. La pregunta orientadora del módulo es: ¿cuáles son las principales características y aplicaciones de las tecnologías emergentes en el contexto educativo y qué tipos de impacto han generado?</p><p>El mapa responde en ocho ramas: qué es la IA, cómo se entiende, qué otras tecnologías emergentes llegan a la educación, cómo se usa la IA en el aula, qué pedagogías la orientan, qué papel tiene el docente, qué riesgos trae y quién controla su desarrollo.</p><p>El material de clase plantea otra pregunta que el mapa ayuda a responder: ¿cómo pueden tecnologías emergentes como la inteligencia artificial, la gamificación y las redes sociales aplicarse de manera efectiva en el aula para fomentar la motivación, la personalización del aprendizaje y la creación de comunidades de aprendizaje activas y colaborativas?</p><p class="src">Sarmiento (2024); U.S. Department of Education, Office of Educational Technology (2023); Material de clase (s. f.)</p>`
};

const B = [
 {id:'A', c:'--cA', tag:'Rama 1', title:'¿Qué es la IA?', icon:'chip', link:'se define como', time:'30 s',
  summary:'La IA no es una sola tecnología. Es un campo de la computación que construye sistemas capaces de hacer tareas asociadas a la inteligencia humana, y también un término que agrupa métodos distintos.',
  subs:[
   {t:'Máquinas que hacen tareas propias de la inteligencia humana', icon:'book', via:'según los clásicos', cite:'Barr y Feigenbaum (1981); Rich y Knight (1991)',
    text:'Barr y Feigenbaum la describen como la parte de las ciencias de la computación que diseña sistemas con características de la conducta inteligente humana: lenguaje, aprendizaje, razonamiento y solución de problemas. Rich y Knight la plantean como el estudio de cómo lograr que los computadores hagan tareas que, por ahora, las personas hacen mejor. John McCarthy acuñó el término en la Conferencia de Dartmouth de 1956 (Sarmiento, 2024).'},
   {t:'Automatización basada en asociaciones', icon:'network', via:'para la educación', cite:'U.S. Department of Education, Office of Educational Technology (2023)',
    text:'El informe del Departamento de Educación de EE. UU. define la IA, de forma operativa, como la automatización de acciones a partir de patrones (asociaciones) que el sistema encuentra en los datos. Esta definición le permite al docente preguntar qué datos usa un sistema y qué decide por su cuenta.'},
   {t:'Término paraguas: aprendizaje automático y modelos de lenguaje', icon:'umbrella', via:'agrupa', cite:'Ruiz y Fusco (2024); Celik et al. (2022)',
    text:'El glosario de CIRCLS distingue la IA específica o débil, que resuelve problemas acotados, de la IA general, que todavía no existe. El aprendizaje automático encuentra reglas en datos históricos y por eso puede repetir sesgos; las redes neuronales y el aprendizaje profundo son subconjuntos suyos. Los grandes modelos de lenguaje predicen la palabra siguiente a partir de patrones estadísticos y son la base de la IA generativa.'}
  ]},
 {id:'B', c:'--cB', tag:'Rama 2', title:'Tres perspectivas de la IA', icon:'prism', link:'se comprende desde', time:'35 s',
  summary:'El informe del Departamento de Educación de EE. UU., retomado en el módulo, propone tres maneras de entender la IA. Cada una cambia la pregunta que el educador hace al evaluar una herramienta.',
  subs:[
   {t:'Razonamiento similar al humano: PLN, visión y robótica', icon:'head', via:'como', cite:'Sarmiento (2024); U.S. Department of Education, Office of Educational Technology (2023)',
    text:'Agrupa sistemas que hacen tareas que requieren inteligencia humana: percepción visual, reconocimiento del habla, toma de decisiones y procesamiento del lenguaje natural. El informe advierte que la etiqueta "similar al humano" puede confundir, porque la IA procesa la información de otra manera y con otros límites. El ejemplo de HAL, en la película 2001: Una odisea del espacio (1968), muestra una máquina que ayuda y a la vez trae riesgos imprevistos.'},
   {t:'Algoritmo que persigue un objetivo: recomendadores', icon:'target', via:'como', cite:'Park et al. (2012); Souabi et al. (2021)',
    text:'La IA elige acciones para lograr una meta a partir de patrones en los datos. En educación aparece en sistemas de aprendizaje personalizado que detectan dificultades y recomiendan otra ruta. Los recomendadores se basan en el contenido, en el filtrado colaborativo o en ambos (híbridos). El riesgo es que recomienden con datos sesgados o guíen mal al estudiante (Sarmiento, 2024).'},
   {t:'Inteligencia aumentada: la persona decide y la IA asiste', icon:'bike', via:'como', cite:'U.S. Department of Education, Office of Educational Technology (2023); Ruiz y Fusco (2024)',
    text:'Esta perspectiva deja la inteligencia y la decisión en las personas y usa la IA como apoyo cuando están sobrecargadas. Por ejemplo, si docente y estudiante acuerdan recordatorios, el sistema los envía en el formato que prefiere el estudiante sin sumar trabajo al docente. El informe compara esta visión con una bicicleta eléctrica, en la que quien pedalea sigue al mando, pero con menos esfuerzo.'}
  ]},
 {id:'H', c:'--cH', tag:'Rama 3', title:'Otras tecnologías emergentes', icon:'spark', link:'se amplía con', time:'35 s',
  summary:'Las tecnologías emergentes son herramientas digitales innovadoras que empiezan a influir en distintos ámbitos de la sociedad y pueden transformar los procesos educativos. Además de la IA, el material de clase destaca el Internet de las cosas, el blockchain, la gamificación y la realidad virtual y aumentada.',
  subs:[
   {t:'Internet de las cosas y aulas inteligentes', icon:'iot', via:'como', cite:'Material de clase (s. f.)', video:'https://www.youtube.com/watch?v=OvJ2QE_NzYI',
    text:'El Internet de las cosas (IoT) es la interconexión de dispositivos físicos que recogen y comparten información a través de internet. En educación permite crear aulas inteligentes, donde distintos dispositivos digitales interactúan para mejorar la experiencia de aprendizaje.'},
   {t:'Blockchain y certificación académica', icon:'chain', via:'como', cite:'Material de clase (s. f.)', video:'https://www.youtube.com/watch?v=1GwtHbMdFJg',
    text:'El blockchain registra información de manera segura y descentralizada. En educación, su principal aplicación es la certificación digital de títulos y credenciales académicas, mediante un registro distribuido que estudiantes, egresados e instituciones pueden consultar y verificar.'},
   {t:'Gamificación: misiones, puntos e insignias', icon:'game', via:'como', cite:'Material de clase (s. f.)', video:'https://www.youtube.com/watch?v=r8QRAsR5nCg',
    text:'La gamificación incorpora elementos propios de los juegos en los procesos educativos para aumentar la motivación y la participación de los estudiantes. El material de clase propone, por ejemplo, una asignatura organizada en misiones y desafíos, en la que los estudiantes obtienen puntos, insignias y niveles a medida que completan actividades académicas.'},
   {t:'Realidad virtual y realidad aumentada', icon:'vr', via:'como', cite:'Material de clase (s. f.)',
    text:'La realidad virtual permite interactuar con entornos completamente digitales; la realidad aumentada superpone información digital sobre el mundo real. Con ambas se crean entornos inmersivos en los que es posible explorar escenarios virtuales y ver objetos en tres dimensiones. En ciencias, por ejemplo, los estudiantes pueden explorar con realidad aumentada modelos en 3D del cuerpo humano o del sistema solar, que serían difíciles de visualizar en un libro.'}
  ]},
 {id:'C', c:'--cC', tag:'Rama 4', title:'La IA en el aula', icon:'laptop', link:'se concreta en', time:'35 s',
  summary:'El material de clase presenta la IA como una de las tecnologías emergentes con mayor influencia en la educación, porque analiza grandes cantidades de datos para identificar patrones de aprendizaje y ofrecer experiencias personalizadas. Sus principales aplicaciones son los sistemas de aprendizaje adaptativo, los tutores inteligentes y la analítica del aprendizaje.',
  subs:[
   {t:'Tutores inteligentes y aprendizaje adaptativo', icon:'route', via:'por ejemplo', cite:'Ruiz y Fusco (2024); U.S. Department of Education, Office of Educational Technology (2023); Material de clase (s. f.)',
    text:'Los tutores inteligentes dan retroalimentación inmediata y ajustada a cada estudiante. El aprendizaje adaptativo cambia la dificultad, el ritmo, la secuencia y el tipo de ayuda según el desempeño. El material de clase cita el caso de una universidad que usa una plataforma que analiza el desempeño en matemáticas y ajusta sola la dificultad de los ejercicios, de modo que cada estudiante avanza de forma progresiva. El informe del Departamento de Educación pide que la adaptación se apoye en las fortalezas del estudiante y no solo en lo que le falta.'},
   {t:'Analítica del aprendizaje', icon:'chart', via:'por ejemplo', cite:'Shemshack y Spector (2020); Material de clase (s. f.)',
    text:'La analítica del aprendizaje analiza los datos que generan los estudiantes para comprender cómo aprenden, identificar dificultades y diseñar estrategias pedagógicas más efectivas. Permite visualizar el progreso, identificar patrones de participación y tomar decisiones pedagógicas basadas en evidencia. Así, una institución puede detectar a los estudiantes en riesgo de bajo rendimiento y ofrecerles tutorías personalizadas a tiempo. Su utilidad depende de la calidad y la representatividad de los datos (Sarmiento, 2024).'},
   {t:'Agentes pedagógicos y chatbots', icon:'robot', via:'por ejemplo', cite:'Chen et al. (2020); Holstein et al. (2019)',
    text:'Chen et al. estudiaron un robot social que actúa como tutor o como tutelado según el dominio del niño, con efectos en su aprendizaje y en su implicación emocional. Holstein et al. diseñaron, junto con docentes, una herramienta para coordinar en tiempo real el trabajo del aula, lo que la literatura llama orquestación. La IA generativa suma conversación y sugerencias, pero hace más difícil verificar la originalidad de los trabajos.'}
  ]},
 {id:'D', c:'--cD', tag:'Rama 5', title:'Pedagogías que dan sentido', icon:'seedling', link:'se fundamenta en', time:'35 s',
  summary:'La tecnología no trae su propia pedagogía. Las teorías del aprendizaje dicen para qué se usa la IA y cómo se valora lo que aporta.',
  subs:[
   {t:'Aprender con la tecnología; estudiante activo', icon:'loop', via:'desde', cite:'Salomon (1996, citado en Celik et al., 2022); U.S. Department of Education, Office of Educational Technology (2023)',
    text:'Salomon señaló que hay que pensar cómo se aprende a través de los computadores y con ellos. El informe del Departamento de Educación parte de un estudiante activo: discute para avanzar en su comprensión, usa simulaciones para explicar conceptos y recibe andamiaje y retroalimentación oportuna, según la síntesis How People Learn de las Academias Nacionales de EE. UU.'},
   {t:'Teorías cognitivas, DUA y aprendizaje colaborativo', icon:'group', via:'desde', cite:'U.S. Department of Education, Office of Educational Technology (2023)',
    text:'El informe asocia cada uso de la IA con un marco teórico. La tutoría en matemáticas se apoya en las teorías cognitivas del aprendizaje; la adaptación a estudiantes con necesidades especiales, en el Diseño Universal para el Aprendizaje (DUA), y el apoyo al trabajo en equipo, en el aprendizaje colaborativo asistido por computador (CSCL). También pide rechazar usos basados solo en datos, sin contraste con la teoría y la práctica.'},
   {t:'Evaluación formativa y ciclos de retroalimentación', icon:'check', via:'desde', cite:'U.S. Department of Education, Office of Educational Technology (2023); Celik et al. (2022)',
    text:'La IA puede acortar el tiempo entre lo que hace el estudiante y la respuesta que recibe, por ejemplo con la calificación automatizada de ensayos. El informe insiste en que la evaluación formativa conserve el juicio del docente y en aprovechar la experiencia de los especialistas en evaluación para reducir el sesgo.'}
  ]},
 {id:'E', c:'--cE', tag:'Rama 6', title:'El docente en el circuito', icon:'teacher', link:'requiere', time:'35 s',
  summary:'La IA funciona en educación cuando el docente conserva las decisiones pedagógicas importantes. Mantener a las personas en el circuito de decisión (human in the loop) es la primera recomendación del informe y la idea que más apoyo tuvo en las sesiones de consulta que lo precedieron.',
  subs:[
   {t:'Ventajas para planear, implementar y evaluar', icon:'calendar', via:'le ofrece', cite:'Celik et al. (2022)',
    text:'La revisión de 44 estudios empíricos agrupó las ventajas en tres momentos. Para planear, la IA da información sobre los estudiantes y ayuda a elegir contenidos. Durante la clase, permite hacer seguimiento oportuno, que fue la ventaja más mencionada (12 estudios), dar retroalimentación inmediata y reducir la carga de trabajo. En la evaluación, automatiza la calificación y predice mejor el desempeño docente.'},
   {t:'Siete roles del docente en el desarrollo de la IA', icon:'database', via:'asume', cite:'Celik et al. (2022)',
    text:'La revisión de 44 estudios encontró siete formas en que los docentes participan en el desarrollo de la IA educativa. Entre paréntesis, el número de estudios en que aparece cada rol:',
    list:['<b>Modelo para entrenar la IA</b> (18): sus buenas prácticas de clase sirven de datos para enseñar al algoritmo.',
          '<b>Datos sobre su desarrollo profesional</b> (9): la IA predice su satisfacción, su desempeño o su implicación en el trabajo.',
          '<b>Información sobre sus estudiantes</b> (8): describen características y conductas que el sistema usa para intervenir.',
          '<b>Comprobar la calificación automática</b> (5): sus notas permiten medir si la IA califica bien.',
          '<b>Definir criterios de evaluación</b> (4): indican qué es una retroalimentación efectiva y oportuna.',
          '<b>Orientar la selección de materiales</b> (3): su criterio pedagógico decide qué contenido es adecuado.',
          '<b>Opinar sobre aspectos técnicos</b> (1): valoran el diseño y la facilidad de uso de la herramienta.'],
    after:'Los autores piden que los docentes no se limiten a entrenar algoritmos y que participen también en las decisiones sobre cómo desarrollar, o no, estos sistemas.'},
   {t:'Tres circuitos en los que el docente decide', icon:'loops3', via:'actúa en', cite:'U.S. Department of Education, Office of Educational Technology (2023)',
    text:'El informe propone centrar siempre al educador en tres circuitos: las decisiones del momento en el aula; la preparación, planeación y reflexión sobre la enseñanza, que incluye la formación docente; y la participación en el diseño, la selección y la evaluación de las tecnologías. El Departamento rechaza de forma explícita la idea de que la IA reemplace a los docentes.'}
  ]},
 {id:'F', c:'--cF', tag:'Rama 7', title:'Riesgos y límites', icon:'shield', link:'enfrenta', time:'30 s',
  summary:'Las mismas capacidades que ayudan pueden hacer daño si los datos son malos o si nadie puede revisar lo que decide el sistema.',
  subs:[
   {t:'Sesgo y discriminación algorítmica', icon:'scale', via:'como', cite:'U.S. Department of Education, Office of Educational Technology (2023); Ruiz y Fusco (2024)',
    text:'Los datos de entrenamiento reflejan la actividad humana pasada y pueden arrastrar sus sesgos. El informe da dos ejemplos: un sistema que acelera o frena el ritmo curricular con datos incompletos puede ampliar las brechas de rendimiento; uno de contratación docente entrenado con datos históricos de mala calidad puede descartar a candidatos idóneos.'},
   {t:'Privacidad, vigilancia y cajas negras', icon:'blackbox', via:'como', cite:'U.S. Department of Education, Office of Educational Technology (2023); Ruiz y Fusco (2024)',
    text:'Muchos sistemas de aprendizaje automático funcionan como cajas negras, porque se sabe qué datos usan, pero no cómo deciden. Por eso el informe pide una IA que el docente pueda revisar, entender y anular, de modo que sepa por qué se recomendó algo y pueda corregirlo. El glosario de CIRCLS prefiere modelos interpretables desde su diseño a explicaciones añadidas después.'},
   {t:'Límites técnicos y de contexto', icon:'warning', via:'como', cite:'Celik et al. (2022)',
    text:'Los desafíos más frecuentes fueron la fiabilidad limitada de los algoritmos (6 estudios) y su capacidad técnica limitada, por ejemplo para valorar textos que incluyen imágenes. Se suman la poca infraestructura de las escuelas, sistemas que no funcionan en otros contextos o idiomas y la falta de conocimiento tecnológico de los docentes.'}
  ]},
 {id:'G', c:'--cG', tag:'Rama 8', title:'¿Quién manda en la IA?', icon:'globe', link:'está atravesada por', time:'30 s',
  summary:'El documental de apoyo muestra que la IA que llega al aula depende de decisiones económicas y políticas que se toman lejos de la escuela.',
  subs:[
   {t:'Una carrera global entre Estados Unidos, China y Europa', icon:'podium', via:'porque hay', cite:'<i>¿Quién mandará en la inteligencia artificial?</i> (s. f.)',
    text:'El documental presenta la IA como un asunto de crecimiento económico, influencia política y poder. Sigue a empresas europeas que intentan competir con mucho menos capital que las estadounidenses y muestra que la potencia de cómputo (las GPU) es un recurso escaso que empuja a las empresas pequeñas a aliarse con grandes corporaciones.'},
   {t:'Código abierto, valores culturales y regulación', icon:'code', via:'porque', cite:'<i>¿Quién mandará en la inteligencia artificial?</i> (s. f.)',
    text:'Desde la plataforma de código abierto Hugging Face se plantea que ninguna empresa debería controlar sola una tecnología de la que dependen tantas otras y que los modelos de lenguaje pueden reflejar los valores culturales de su lugar de origen. El mismo documental muestra la otra cara de la apertura: los mecanismos de seguridad de un modelo abierto se pueden retirar. Europa responde con su Ley de Inteligencia Artificial, que busca limitar usos como la vigilancia masiva. En educación, esto lleva a preguntarse con qué datos y en qué idioma se entrenó una herramienta, y qué normas la regulan.'},
   {t:'Educar para no ser manipulados', icon:'bulb', via:'por eso', cite:'<i>¿Quién mandará en la inteligencia artificial?</i> (s. f.); U.S. Department of Education, Office of Educational Technology (2023)',
    text:'En el documental se señala la educación, junto con la regulación y la responsabilidad de las empresas, como respuesta al potencial de manipulación y desinformación de estos modelos. Al final, el documental deja abierta una pregunta para la escuela sobre cómo preparar a niños y jóvenes para crear algo propio en un mundo lleno de IA. Esta idea coincide con lo que el informe del Departamento de Educación llama una dualidad: aprender con la IA y también sobre ella, incluidos sus riesgos de sesgo y vigilancia.'}
  ]}
];
/* Conexiones transversales que muestran la interacción entre ramas */
const CROSS = [
  {a:'D', b:'C', label:'orientan el diseño de'},
  {a:'E', b:'D', label:'pone en práctica'},
  {a:'G', b:'F', label:'agrava'}
];


// ===== Etiquetas cortas para el mapa (el texto completo vive en la ventana emergente) =====
const SHORT = {
  'Máquinas que hacen tareas propias de la inteligencia humana':'Definiciones clásicas',
  'Automatización basada en asociaciones':'Automatiza asociaciones',
  'Término paraguas: aprendizaje automático y modelos de lenguaje':'Término paraguas',
  'Razonamiento similar al humano: PLN, visión y robótica':'Razonamiento humano',
  'Algoritmo que persigue un objetivo: recomendadores':'Algoritmo con objetivo',
  'Inteligencia aumentada: la persona decide y la IA asiste':'Inteligencia aumentada',
  'Internet de las cosas y aulas inteligentes':'Internet de las cosas',
  'Blockchain y certificación académica':'Blockchain',
  'Gamificación: misiones, puntos e insignias':'Gamificación',
  'Realidad virtual y realidad aumentada':'Realidad virtual y aumentada',
  'Tutores inteligentes y aprendizaje adaptativo':'Aprendizaje adaptativo',
  'Analítica del aprendizaje':'Analítica del aprendizaje',
  'Agentes pedagógicos y chatbots':'Agentes y chatbots',
  'Aprender con la tecnología; estudiante activo':'Estudiante activo',
  'Teorías cognitivas, DUA y aprendizaje colaborativo':'DUA y colaboración',
  'Evaluación formativa y ciclos de retroalimentación':'Evaluación formativa',
  'Ventajas para planear, implementar y evaluar':'Planear, enseñar, evaluar',
  'Siete roles del docente en el desarrollo de la IA':'Siete roles',
  'Tres circuitos en los que el docente decide':'Tres circuitos',
  'Sesgo y discriminación algorítmica':'Sesgo algorítmico',
  'Privacidad, vigilancia y cajas negras':'Privacidad y cajas negras',
  'Límites técnicos y de contexto':'Límites técnicos',
  'Una carrera global entre Estados Unidos, China y Europa':'Carrera global',
  'Código abierto, valores culturales y regulación':'Código abierto y valores',
  'Educar para no ser manipulados':'Educar contra la manipulación'
};
const short = s => SHORT[s.t] || s.t;

// ===== Ilustraciones planas (elaboración propia) =====
const NV='#173a5e', YL='#f6c945';
const ART = {
 A:`<svg class="art" viewBox="0 0 150 120" aria-hidden="true"><g stroke="${YL}" stroke-width="3" stroke-linecap="round"><path d="M14 30H4M14 50H4M14 70H4M14 90H4M30 14V4M50 14V4M70 14V4M30 98v10M50 98v10"/></g><rect x="14" y="14" width="80" height="84" rx="8" fill="#1f4f7a"/><path d="M24 30h16v12M24 86h20V72M84 28H70v14M84 84H72V72" stroke="${YL}" stroke-width="3" fill="none"/><rect x="38" y="40" width="32" height="32" rx="4" fill="#0e2338"/><rect x="45" y="47" width="18" height="18" fill="#fff"/><g transform="translate(76 42)"><path d="M10 30c-8-2-10-14-2-18 0-10 12-14 18-8 6-8 20-6 22 4 10 0 14 12 8 18 6 6 2 18-8 18-2 8-14 10-20 4-6 6-18 4-20-4-8 0-10-10-6-14z" fill="#e8f1fb" stroke="#8fb2d6" stroke-width="2.5"/><path d="M30 6v52M18 18c6 4 6 10 0 14M42 18c-6 4-6 10 0 14M14 40c6 0 10 4 10 10M46 40c-6 0-10 4-10 10" stroke="#8fb2d6" stroke-width="2.5" fill="none" stroke-linecap="round"/></g></svg>`,
 B:`<svg class="art" viewBox="0 0 150 120" aria-hidden="true"><g stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round"><path d="M75 26V8M58 28l-8-14M92 28l8-14M75 94v18M58 92l-8 14M92 92l8 14M22 60H6M128 60h16"/></g><g fill="#fff"><circle cx="75" cy="8" r="4"/><circle cx="50" cy="14" r="4"/><circle cx="100" cy="14" r="4"/><circle cx="75" cy="112" r="4"/><circle cx="50" cy="106" r="4"/><circle cx="100" cy="106" r="4"/><circle cx="6" cy="60" r="4"/><circle cx="144" cy="60" r="4"/></g><path d="M20 60c18-30 92-30 110 0-18 30-92 30-110 0z" fill="#fff" stroke="${NV}" stroke-width="7" stroke-linejoin="round"/><circle cx="75" cy="60" r="22" fill="#4fa8ee"/><circle cx="75" cy="60" r="11" fill="${NV}"/><circle cx="68" cy="53" r="5" fill="#fff"/></svg>`,
 H:`<svg class="art" viewBox="0 0 150 120" aria-hidden="true"><circle cx="75" cy="50" r="42" fill="${YL}"/><path d="M60 50a15 15 0 0130 0" fill="#fff" opacity=".35"/><g stroke="${NV}" stroke-width="3"><path d="M55 40L75 26 95 40 88 64 62 64Z M75 26 75 48 55 40M75 48 95 40M75 48 62 64M75 48 88 64"/></g><g fill="${NV}"><circle cx="55" cy="40" r="6"/><circle cx="75" cy="26" r="6"/><circle cx="95" cy="40" r="6"/><circle cx="62" cy="64" r="6"/><circle cx="88" cy="64" r="6"/><circle cx="75" cy="48" r="6"/></g><path d="M57 88h36v10H57z" fill="#2b2f36"/><path d="M59 100h32v8H59z" fill="#3b4049"/><path d="M64 110h22l-4 6H68z" fill="#2b2f36"/></svg>`,
 C:`<svg class="art" viewBox="0 0 150 120" aria-hidden="true"><rect x="20" y="22" width="100" height="66" rx="6" fill="#2b2f36"/><rect x="27" y="29" width="86" height="52" fill="#15191e"/><g transform="translate(52 36) scale(.62)"><path d="M10 30c-8-2-10-14-2-18 0-10 12-14 18-8 6-8 20-6 22 4 10 0 14 12 8 18 6 6 2 18-8 18-2 8-14 10-20 4-6 6-18 4-20-4-8 0-10-10-6-14z" fill="#fff"/><path d="M30 6v52M18 18c6 4 6 10 0 14M42 18c-6 4-6 10 0 14" stroke="#8fb2d6" stroke-width="3" fill="none"/></g><path d="M6 90h128l-10 12H16z" fill="#e9eef3"/><rect x="58" y="90" width="24" height="4" rx="2" fill="#c5ced8"/><circle cx="124" cy="24" r="17" fill="${YL}"/><rect x="117" y="40" width="14" height="9" fill="#2b2f36"/><path d="M118 20l6 6 6-6" stroke="#fff" stroke-width="2.5" fill="none"/></svg>`,
 D:`<svg class="art" viewBox="0 0 150 120" aria-hidden="true"><path d="M75 52V22" stroke="#3c8f3a" stroke-width="5" stroke-linecap="round"/><path d="M75 36c-18 0-28-10-28-24 17 0 28 9 28 24z" fill="#8bc34a"/><path d="M75 30c15 0 24-9 24-20-14 0-24 8-24 20z" fill="#5fae3a"/><path d="M12 104c21-11 43-11 63 0 20-11 42-11 63 0V58c-21-11-43-11-63 0-20-11-42-11-63 0z" fill="#fff" stroke="${NV}" stroke-width="5" stroke-linejoin="round"/><path d="M75 58v46" stroke="${NV}" stroke-width="5"/><g stroke="#9cc3e8" stroke-width="3" stroke-linecap="round"><path d="M24 70c12-5 26-5 40 0M24 82c12-5 26-5 40 0M86 70c14-5 28-5 40 0M86 82c14-5 28-5 40 0"/></g></svg>`,
 E:`<svg class="art" viewBox="0 0 150 120" aria-hidden="true"><rect x="62" y="12" width="82" height="62" rx="5" fill="#fff" stroke="${NV}" stroke-width="5"/><path d="M121 43a18 18 0 11-6-13" stroke="#e8604c" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M110 22l7 9-11 2" stroke="#e8604c" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/><circle cx="103" cy="43" r="5" fill="${YL}"/><path d="M98 74v14M108 74v14" stroke="${NV}" stroke-width="4"/><path d="M14 120c0-28 11-44 26-44s26 16 26 44z" fill="#fff"/><path d="M50 84l24-30" stroke="#f2c7a5" stroke-width="7" stroke-linecap="round"/><circle cx="40" cy="56" r="15" fill="#f2c7a5"/><path d="M25 54c0-14 8-20 16-20s16 6 15 18c-6-6-18-6-31 2z" fill="#2b2f36"/></svg>`,
 F:`<svg class="art" viewBox="0 0 150 120" aria-hidden="true"><path d="M75 6l48 17v32c0 30-21 49-48 58-27-9-48-28-48-58V23z" fill="#2f6fae"/><path d="M75 6l48 17v32c0 30-21 49-48 58z" fill="#245a91"/><path d="M75 34l26 44H49z" fill="${YL}" stroke="${YL}" stroke-width="4" stroke-linejoin="round"/><path d="M75 50v14M75 70v1" stroke="${NV}" stroke-width="6" stroke-linecap="round"/></svg>`,
 G:`<svg class="art" viewBox="0 0 150 120" aria-hidden="true"><ellipse cx="75" cy="60" rx="70" ry="20" fill="none" stroke="#fff" stroke-width="3" stroke-dasharray="4 7"/><circle cx="75" cy="60" r="46" fill="#3d8fd6"/><path d="M45 34c10-6 22-4 26 4s-4 14-12 14-6 10-14 12-14-8-12-16 4-10 12-14zM86 30c10 0 20 6 22 14s-10 6-14 12 4 14-4 18-16-6-14-16 0-18 10-28zM60 84c6-4 16-2 18 4s-6 10-12 8-10-8-6-12z" fill="#6dbb45"/><path d="M75 14c-14 14-14 78 0 92M75 14c14 14 14 78 0 92M30 50h90M30 72h90" stroke="#fff" stroke-width="2" fill="none" opacity=".55"/><path d="M118 20v26" stroke="${NV}" stroke-width="3"/><path d="M118 20h20l-5 6 5 6h-20z" fill="#e8604c"/></svg>`
};
const CORE_ILLU=`<svg class="cart" viewBox="0 0 150 120" aria-hidden="true"><circle cx="75" cy="40" r="32" fill="${YL}"/><g stroke="${NV}" stroke-width="2.5"><path d="M60 34L75 22 90 34 84 52 66 52Z M75 22 75 38 60 34M75 38 90 34M75 38 66 52M75 38 84 52"/></g><g fill="${NV}"><circle cx="60" cy="34" r="4.5"/><circle cx="75" cy="22" r="4.5"/><circle cx="90" cy="34" r="4.5"/><circle cx="66" cy="52" r="4.5"/><circle cx="84" cy="52" r="4.5"/><circle cx="75" cy="38" r="4.5"/></g><path d="M62 72h26v8H62z" fill="#2b2f36"/><path d="M14 112c20-10 41-10 61 0 20-10 41-10 61 0V82c-20-10-41-10-61 0-20-10-41-10-61 0z" fill="#fff" stroke="${NV}" stroke-width="5" stroke-linejoin="round"/><path d="M75 82v30" stroke="${NV}" stroke-width="5"/><g stroke="#9cc3e8" stroke-width="3" stroke-linecap="round"><path d="M26 92c12-4 24-4 36 0M88 92c12-4 24-4 36 0"/></g></svg>`;
// Ilustraciones de las ramas generadas por el grupo (fondo retirado)
const ART_IMG={A:1,B:2,H:3,C:4,D:5,E:6,F:7,G:8};
Object.entries(ART_IMG).forEach(([id,n])=>{ART[id]=`<img class="art" src="img/rama${n}.png" alt="" draggable="false">`});
const tileHTML=(icon,c,img)=>`<span class="tile" style="--c:var(${c})">${img?`<img src="${img}" alt="" draggable="false">`:ico(icon)}</span>`;
// Íconos de concepto generados por el grupo: img/c/<rama><n>.png
B.forEach(b=>b.subs.forEach((s,i)=>{s.img=`img/c/${b.id}${i+1}.png`}));
const CORE_IMG=`<img class="cart" src="img/c/centro.png" alt="" draggable="false">`;

// ===== Geometría =====
const W=2440,H=1470,CX=1220,CY=760;
const stage=document.getElementById('stage'), svg=document.getElementById('links');
const NS='http://www.w3.org/2000/svg';
const totalSubs=B.reduce((s,b)=>s+b.subs.length,0);
// El sector inferior queda libre para el robot: los conceptos se reparten a igual distancia sobre una elipse entre 135° y 405°.
const rad=a=>a*Math.PI/180, RX=1060, RY=690;
const samp=[];{let acc=0,prev=null;for(let a=135;a<=405.001;a+=0.25){const p={a,x:CX+RX*Math.cos(rad(a)),y:CY+RY*Math.sin(rad(a))};if(prev)acc+=Math.hypot(p.x-prev.x,p.y-prev.y);p.L=acc;samp.push(p);prev=p}}
const totalL=samp[samp.length-1].L; let si=0;
const slots=Array.from({length:totalSubs},(_,i)=>{const target=totalL*i/(totalSubs-1);while(si<samp.length-1&&samp[si].L<target)si++;return samp[si]});
let k=0;
B.forEach(b=>{
  const ss=b.subs.map(()=>slots[k++]);
  const mm=b.subs.length%2?ss[(b.subs.length-1)/2].a:(ss[b.subs.length/2-1].a+ss[b.subs.length/2].a)/2;
  b.pos={x:CX+640*Math.cos(rad(mm)), y:CY+470*Math.sin(rad(mm))};
  b.subs.forEach((s,i)=>{s.pos={x:ss[i].x,y:ss[i].y}});
});

function path(d,cls,on){const p=document.createElementNS(NS,'path');p.setAttribute('d',d);p.setAttribute('class',cls);if(on)p.dataset.on=on;svg.appendChild(p);return p}
// Etiquetas de enlace: cada una puede deslizarse a lo largo de su línea (along) para no tapar otros elementos
const LABELS=[];
function label(x,y,txt,cls,on,along){const l=document.createElement('div');l.className='lbl '+(cls||'');l.style.left=x+'px';l.style.top=y+'px';l.textContent=txt;if(on)l.dataset.on=on;stage.appendChild(l);if(along)LABELS.push({el:l,along});return l}
const alongLine=(a,b,t0,t1)=>t=>{const u=t0+(t1-t0)*t;return{x:a.x+(b.x-a.x)*u,y:a.y+(b.y-a.y)*u}};
const alongPoly=pts=>{const seg=[];let tot=0;for(let i=1;i<pts.length;i++){const l=Math.hypot(pts[i].x-pts[i-1].x,pts[i].y-pts[i-1].y);seg.push(l);tot+=l}
  return t=>{let d=t*tot,i=0;while(i<seg.length-1&&d>seg[i]){d-=seg[i];i++}const u=seg[i]?d/seg[i]:0;return{x:pts[i].x+(pts[i+1].x-pts[i].x)*u,y:pts[i].y+(pts[i+1].y-pts[i].y)*u}}};
const alongQuad=(a,c,b)=>t=>({x:(1-t)*(1-t)*a.x+2*(1-t)*t*c.x+t*t*b.x,y:(1-t)*(1-t)*a.y+2*(1-t)*t*c.y+t*t*b.y});
function placeLabels(){
  const sr=stage.getBoundingClientRect(), sc=sr.width/stage.offsetWidth||1;
  const box=e=>{const r=e.getBoundingClientRect();return{x:(r.left-sr.left)/sc,y:(r.top-sr.top)/sc,w:r.width/sc,h:r.height/sc}};
  const obs=[...stage.querySelectorAll('.node .tile,.node .sub b,.node .main .art,.node .main .tag,.node .main h3,.node .core')].filter(e=>!e.closest('.token')).map(box);
  const hit=(a,b,p=5)=>{const w=Math.min(a.x+a.w+p,b.x+b.w)-Math.max(a.x-p,b.x),h=Math.min(a.y+a.h+p,b.y+b.h)-Math.max(a.y-p,b.y);return w>0&&h>0?w*h:0};
  const T=[.5,.42,.58,.34,.66,.27,.73,.2,.8,.14,.86,.08,.92];
  const placed=[];
  LABELS.forEach(L=>{const w=L.el.offsetWidth,h=L.el.offsetHeight;let best=null;
    for(const t of T){const p=L.along(t),b={x:p.x-w/2,y:p.y-h/2,w,h};const cost=obs.concat(placed).reduce((s,o)=>s+hit(b,o),0);
      if(!best||cost<best.cost)best={p,b,cost};if(cost===0)break}
    L.el.style.left=best.p.x+'px';L.el.style.top=best.p.y+'px';placed.push(best.b)});
}
function q(x1,y1,x2,y2,bend){const mx=(x1+x2)/2,my=(y1+y2)/2,dx=x2-x1,dy=y2-y1;const cx=mx-dy*bend,cy=my+dx*bend;return {c:{x:cx,y:cy},d:`M${x1},${y1} Q${cx},${cy} ${x2},${y2}`,lx:(x1+2*cx+x2)/4,ly:(y1+2*cy+y2)/4}}
// Conector ortogonal estilo diagrama de flujo
function ortho(a,b){const dx=b.x-a.x,dy=b.y-a.y;
  if(Math.abs(dx)>Math.abs(dy)){const mx=a.x+dx/2;return{d:`M${a.x},${a.y} H${mx} V${b.y} H${b.x}`,lx:mx,ly:(a.y+b.y)/2}}
  const my=a.y+dy/2;return{d:`M${a.x},${a.y} V${my} H${b.x} V${b.y}`,lx:(a.x+b.x)/2,ly:my}}

B.forEach(b=>{
  path(`M${CX},${CY} L${b.pos.x},${b.pos.y}`,'lnk-main',b.id);
  label(CX+(b.pos.x-CX)*0.5,CY+(b.pos.y-CY)*0.5,b.link,'',b.id,alongLine({x:CX,y:CY},b.pos,.3,.75));
  const mid=Math.floor((b.subs.length-1)/2);
  b.subs.forEach((s,i)=>{const t=ortho(b.pos,s.pos);path(t.d,'lnk-sub',b.id); if(i===mid) label(t.lx,t.ly,s.via,'small',b.id,alongPoly(orthoPts(b.pos,s.pos).slice(1,-1).length?orthoPts(b.pos,s.pos):[b.pos,s.pos]));});
});
const byId=Object.fromEntries(B.map(b=>[b.id,b]));
CROSS.forEach(cx=>{const a=byId[cx.a].pos,b=byId[cx.b].pos;
  const t1=q(a.x,a.y,b.x,b.y,0.95), t2=q(a.x,a.y,b.x,b.y,-0.95); const t=Math.hypot(t1.lx-CX,t1.ly-CY)<Math.hypot(t2.lx-CX,t2.ly-CY)?t1:t2;
  path(t.d,'lnk-cross',cx.a+cx.b); label(t.lx,t.ly,cx.label,'cross',cx.a+cx.b,alongQuad(a,t.c,b));});

// ===== Robot asistente flotante, centrado bajo el núcleo (ilustración propia) =====
const RS=0.3, RTX=CX-975*0.3, RTY=CY+140;            // escala y posición del robot en el lienzo
const toStage=(x,y)=>({x:RTX+x*RS, y:RTY+y*RS});
const HEADC=toStage(975,520);
// Brazos: pivote en el hombro, punta de la mano en reposo y ángulo al levantar
const ARMS={
  L:{pivot:[640,935], tip:[465,1545], up:140},
  R:{pivot:[1310,940], tip:[1485,1545], up:-140}
};
const rotP=([x,y],[px,py],deg)=>{const a=deg*Math.PI/180,c=Math.cos(a),s=Math.sin(a);return[px+(x-px)*c-(y-py)*s, py+(x-px)*s+(y-py)*c]};
Object.values(ARMS).forEach(a=>{const t=rotP(a.tip,a.pivot,a.up);a.upLocal=t;a.upStage=toStage(t[0],t[1]);a.angle=0});
(function drawRobot(){
  const O='#1b1f3a', L='#e3e8ef', M='#d0d7e2', SW=16;
  const tipL=ARMS.L.upLocal, tipR=ARMS.R.upLocal;
  document.getElementById('robot').innerHTML=`
  <defs><clipPath id="rbBodyClip"><path d="M975 850C760 850 590 980 590 1180C590 1430 760 1700 975 1700C1190 1700 1360 1430 1360 1180C1360 980 1190 850 975 850Z"/></clipPath></defs>
  <g transform="translate(${RTX} ${RTY}) scale(${RS})" stroke-linejoin="round">
    <ellipse cx="975" cy="1800" rx="210" ry="40" fill="#173a5e" opacity=".16" class="rb-shadow"/>
    <g class="rb-float">
      <g id="armR">
        <path d="M1300 925C1460 930 1540 1150 1570 1330C1595 1470 1540 1560 1485 1560C1420 1560 1380 1490 1365 1400L1340 1210Z" fill="${L}" stroke="${O}" stroke-width="${SW}"/>
        <path d="M1360 990C1440 1060 1500 1250 1520 1400C1530 1480 1505 1530 1480 1545" fill="none" stroke="${M}" stroke-width="40" stroke-linecap="round"/>
      </g>
      <g id="armL">
        <path d="M650 925C490 930 410 1150 380 1330C355 1470 410 1560 465 1560C530 1560 570 1490 585 1400L610 1210Z" fill="${L}" stroke="${O}" stroke-width="${SW}"/>
        <path d="M590 990C510 1060 450 1250 430 1400C420 1480 445 1530 470 1545" fill="none" stroke="${M}" stroke-width="40" stroke-linecap="round"/>
      </g>
      <path d="M975 850C760 850 590 980 590 1180C590 1430 760 1700 975 1700C1190 1700 1360 1430 1360 1180C1360 980 1190 850 975 850Z" fill="${L}"/>
      <g clip-path="url(#rbBodyClip)">
        <path d="M1130 900C1250 980 1240 1400 1120 1560C1010 1690 780 1660 680 1600L700 1760L1420 1760L1420 880Z" fill="${M}"/>
        <path d="M600 1262C670 1286 735 1300 800 1308V1352C900 1368 1050 1368 1145 1352V1308C1210 1300 1275 1286 1345 1262" fill="none" stroke="#4fd6d8" stroke-width="11"/>
      </g>
      <path d="M975 850C760 850 590 980 590 1180C590 1430 760 1700 975 1700C1190 1700 1360 1430 1360 1180C1360 980 1190 850 975 850Z" fill="none" stroke="${O}" stroke-width="${SW}"/>
      <path d="M765 912C700 935 645 990 645 1070" fill="none" stroke="#fff" stroke-width="24" stroke-linecap="round"/><circle cx="652" cy="1126" r="12" fill="#fff"/>
      <path d="M815 830V880C815 940 900 966 975 966C1050 966 1132 940 1132 880V830Z" fill="${M}" stroke="${O}" stroke-width="${SW}"/>
      <g id="rbHead">
        <path d="M810 210C828 152 900 140 975 140C1050 140 1122 152 1138 210Z" fill="${M}" stroke="${O}" stroke-width="${SW}"/>
        <path d="M512 405C462 405 430 445 430 495V590C430 625 465 650 512 650Z" fill="${M}" stroke="${O}" stroke-width="${SW}"/>
        <path d="M1438 405C1488 405 1512 445 1512 495V590C1512 625 1488 650 1438 650Z" fill="#b9c2cf" stroke="${O}" stroke-width="${SW}"/>
        <path d="M975 205C1200 205 1330 240 1370 290C1410 340 1420 400 1420 520C1420 640 1410 720 1370 760C1300 822 1150 846 975 846C800 846 650 822 580 760C540 720 520 640 520 520C520 400 530 340 570 290C610 240 750 205 975 205Z" fill="${L}" stroke="${O}" stroke-width="${SW}"/>
        <path d="M1140 215C1260 230 1340 260 1370 290C1410 340 1420 400 1420 520C1420 640 1410 720 1370 760C1340 786 1300 806 1250 820C1300 700 1290 400 1140 215Z" fill="${M}"/>
        <path d="M975 310C1170 310 1282 330 1330 365C1370 395 1380 430 1380 470V640C1380 690 1365 720 1320 745C1240 785 1120 800 975 800C830 800 710 785 630 745C585 720 570 690 570 640V470C570 430 580 395 620 365C670 330 780 310 975 310Z" fill="#21485f" stroke="${O}" stroke-width="${SW}"/>
        <path d="M1160 318C1260 330 1310 345 1330 365C1370 395 1380 430 1380 470V640C1380 690 1365 720 1320 745C1250 780 1150 796 1060 800C1180 760 1220 650 1200 480C1190 400 1180 350 1160 318Z" fill="#1a3646"/>
        <g id="rbEyes" fill="#6cf0f7">
          <path d="M700 575C700 522 735 485 777 485C818 485 855 522 855 570C855 590 845 592 828 590C798 585 752 585 726 590C710 592 700 590 700 575Z"/>
          <path d="M1092 575C1092 522 1127 485 1169 485C1210 485 1247 522 1247 570C1247 590 1237 592 1220 590C1190 585 1144 585 1118 590C1102 592 1092 590 1092 575Z"/>
          <path d="M926 655H1016C1023 655 1023 661 1021 670C1016 695 996 710 971 710C946 710 926 695 922 670C920 661 920 655 926 655Z"/>
        </g>
        <path d="M630 290C690 265 750 255 805 250M580 330L595 316" fill="none" stroke="#fff" stroke-width="24" stroke-linecap="round"/>
      </g>
      <circle cx="${tipL[0]}" cy="${tipL[1]}" r="50" fill="#6cf0f7" opacity="0" id="tipL" class="rb-tip"/>
      <circle cx="${tipR[0]}" cy="${tipR[1]}" r="50" fill="#6cf0f7" opacity="0" id="tipR" class="rb-tip"/>
    </g>
  </g>`;
})();
const rbHead=document.getElementById('rbHead'), rbEyes=document.getElementById('rbEyes');
ARMS.L.el=document.getElementById('armL'); ARMS.R.el=document.getElementById('armR');
ARMS.L.tipEl=document.getElementById('tipL'); ARMS.R.tipEl=document.getElementById('tipR');
const setArmAngle=(a,deg)=>{a.angle=deg;a.el.setAttribute('transform',`rotate(${deg} ${a.pivot[0]} ${a.pivot[1]})`)};
let armsUp=false, armRaf=0;
// Levanta o baja los dos brazos con una transición corta
function setArms(up){
  if(armsUp===up && !armRaf) return; armsUp=up; cancelAnimationFrame(armRaf); armRaf=0;
  const from={L:ARMS.L.angle,R:ARMS.R.angle}, to={L:up?ARMS.L.up:0,R:up?ARMS.R.up:0};
  if(RM){setArmAngle(ARMS.L,to.L);setArmAngle(ARMS.R,to.R);return}
  const dur=480; let t0=null;
  const step=ts=>{if(t0===null)t0=ts;const t=Math.min(1,(ts-t0)/dur), e=up?1-Math.pow(1-t,3)+Math.sin(t*Math.PI)*.06:t*t*(3-2*t);
    setArmAngle(ARMS.L,lerp(from.L,to.L,e));setArmAngle(ARMS.R,lerp(from.R,to.R,e));
    if(t<1)armRaf=requestAnimationFrame(step);else armRaf=0};
  armRaf=requestAnimationFrame(step);
}
function lookAt(p){if(!p){rbHead.style.transform='';rbEyes.style.transform='';return}
  const ang=Math.max(-12,Math.min(12,(p.x-HEADC.x)/60)); rbHead.style.transform=`rotate(${ang}deg)`;
  rbEyes.style.transform=`translate(${Math.max(-40,Math.min(40,(p.x-HEADC.x)/8))}px,${Math.max(-25,Math.min(20,(p.y-HEADC.y)/12))}px)`}

// ===== Nodos =====
function nodeEl(x,y,html,onClick,color,on,aria){const b=document.createElement('button');b.type='button';b.className='node';b.style.left=x+'px';b.style.top=y+'px';if(color)b.style.setProperty('--c',`var(${color})`);b.innerHTML=html;b.addEventListener('click',onClick);if(on)b.dataset.on=on;if(aria)b.setAttribute('aria-label',aria);stage.appendChild(b);return b}
const coreEl=nodeEl(CX,CY,`<div class="core"><div class="in">${CORE_IMG}<span class="slot" id="core-slot"></span><h2 id="core-title">Pedagogías y tecnologías emergentes</h2><small id="core-small">Toque un concepto del mapa</small></div></div>`,()=>coreClick(),null,'core','Tema central: '+CORE.title);
B.forEach(b=>{
  b.el=nodeEl(b.pos.x,b.pos.y,`<div class="main">${ART[b.id]}<span class="tag">${b.tag}</span><h3>${b.title}</h3></div>`,()=>launch({kind:'b',b,el:b.el,pos:b.pos}),b.c,b.id,`${b.tag}: ${b.title}`);
  b.subs.forEach(s=>{s.el=nodeEl(s.pos.x,s.pos.y,`<div class="sub">${tileHTML(s.icon,b.c,s.img)}<b>${short(s)}</b></div>`,()=>launch({kind:'s',b,s,el:s.el,pos:s.pos}),b.c,b.id,s.t);});
});
let active=null;
function setActive(el){if(active)active.classList.remove('active');active=el;if(el)el.classList.add('active')}

// ===== Vuelo: nodo → dedo del robot → núcleo =====
let loaded=null, flight=null;
const lerp=(a,b,t)=>a+(b-a)*t, ease=t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2;
const bez=(p0,p1,p2,t)=>({x:(1-t)*(1-t)*p0.x+2*(1-t)*t*p1.x+t*t*p2.x, y:(1-t)*(1-t)*p0.y+2*(1-t)*t*p1.y+t*t*p2.y});
// Figura que viaja y se muestra en el centro: ilustración de la rama o baldosa del concepto
function figHTML(info){return info.art?`<img class="fig-art" src="${info.art}" alt="" draggable="false">`:tileHTML(info.icon,info.c,info.img)}
function itemInfo(it){if(it.kind==='s')return{c:it.b.c,icon:it.s.icon,img:it.s.img,title:it.s.t,short:short(it.s)};if(it.kind==='b')return{c:it.b.c,icon:it.b.icon,art:`img/rama${ART_IMG[it.b.id]}.png`,title:it.b.title,short:it.b.title};return{c:'--cB',icon:'network',title:CORE.title,short:CORE.title}}
function orthoPts(a,b){const dx=b.x-a.x,dy=b.y-a.y;
  if(Math.abs(dx)>Math.abs(dy)){const mx=a.x+dx/2;return[a,{x:mx,y:a.y},{x:mx,y:b.y},b]}
  const my=a.y+dy/2;return[a,{x:a.x,y:my},{x:b.x,y:my},b]}
// Al llegar al centro, las manos del robot se iluminan un instante
function glowHands(){if(RM)return;[ARMS.L.tipEl,ARMS.R.tipEl].forEach(el=>{el.setAttribute('opacity','.9');setTimeout(()=>el.setAttribute('opacity','0'),450)})}
function launch(it){
  if(pres.on) endPres();
  if(flight) flight.cancel();
  setActive(it.el);
  const info=itemInfo(it);
  setArms(true);
  if(RM){lookAt(it.pos);loadCore(it);return}
  // Recorrido por las mismas líneas blancas: concepto → (conector ortogonal) → rama → (línea principal) → centro
  const pts = it.kind==='s' ? [...orthoPts(it.b.pos,it.s.pos).reverse(), {x:CX,y:CY}] : [it.pos,{x:CX,y:CY}];
  const seg=[]; let total=0; for(let i=1;i<pts.length;i++){const l=Math.hypot(pts[i].x-pts[i-1].x,pts[i].y-pts[i-1].y);seg.push(l);total+=l}
  const at=d=>{let i=0;while(i<seg.length-1&&d>seg[i]){d-=seg[i];i++}const t=seg[i]?Math.min(1,d/seg[i]):1;return{x:lerp(pts[i].x,pts[i+1].x,t),y:lerp(pts[i].y,pts[i+1].y,t)}};
  const tok=document.createElement('div'); tok.className='token'; tok.innerHTML=figHTML(info); stage.appendChild(tok);
  const trail=document.createElementNS(NS,'path'); trail.setAttribute('class','trail');
  trail.setAttribute('d','M'+pts.map(p=>`${p.x},${p.y}`).join(' L')); svg.appendChild(trail);
  trail.style.strokeDasharray=total; trail.style.strokeDashoffset=total;
  lookAt(pts[0]);
  const DUR=Math.min(2000,Math.max(1000,total*1.4)); let t0=null, raf=0, done=false;
  function frame(ts){ if(t0===null)t0=ts; const t=Math.min(1,(ts-t0)/DUR), d=ease(t)*total, p=at(d);
    const sc=t>.85?lerp(1,1.35,(t-.85)/.15):1, op=t>.92?1-(t-.92)/.08:1;
    tok.style.transform=`translate(${p.x}px,${p.y}px) rotate(${t*720}deg) scale(${sc})`; tok.style.opacity=op;
    trail.style.strokeDashoffset=total-d; lookAt(p);
    if(t>=1){finish();return}
    raf=requestAnimationFrame(frame)}
  function cleanup(){cancelAnimationFrame(raf);tok.remove();trail.remove();flight=null}
  function finish(){if(done)return;done=true;cleanup();loadCore(it);glowHands();setTimeout(()=>lookAt(null),900)}
  flight={cancel(){done=true;cleanup()}};
  raf=requestAnimationFrame(frame);
}
const coreSlot=document.getElementById('core-slot'), coreTitle=document.getElementById('core-title'), coreSmall=document.getElementById('core-small'), coreBox=coreEl.querySelector('.core');
function loadCore(it){loaded=it; const info=itemInfo(it);
  coreSlot.innerHTML=figHTML(info);
  coreTitle.textContent=info.short;
  coreSmall.textContent='Toque aquí para leer'; coreSmall.classList.add('cta');
  coreBox.classList.add('loaded'); coreBox.classList.remove('pulse'); void coreBox.offsetWidth; coreBox.classList.add('pulse');
  coreEl.setAttribute('aria-label',`Centro con el concepto ${info.title}. Abrir información`);
  coreEl.focus({preventScroll:true});
}
function coreClick(){ if(pres.on) return; openModal(loaded||{kind:'core'}) }

// ===== Ventana emergente =====
const modal=document.getElementById('modal'), mCard=document.getElementById('m-card'), mT=document.getElementById('m-title'), mE=document.getElementById('m-eyebrow'), mB=document.getElementById('m-body'), mI=document.getElementById('m-icon');
const BOOK='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 5.5C5.5 4.5 9 4.5 12 6.5c3-2 6.5-2 9-1v13c-2.5-1-6-1-9 1-3-2-6.5-2-9-1z"/><path d="M12 6.5v13"/></svg>';
let lastFocus=null;
function relButtons(b,except){return `<div class="rel">${b.subs.filter(x=>x!==except).map(x=>`<button class="btn" type="button" data-rel="${b.subs.indexOf(x)}">${short(x)}</button>`).join('')}</div>`}
function wireRel(b){mB.querySelectorAll('[data-rel]').forEach(btn=>btn.onclick=()=>{const x=b.subs[+btn.dataset.rel];loadCore({kind:'s',b,s:x,el:x.el,pos:x.pos});setActive(x.el);openModal(loaded)})}
function openModal(it){
  if(modal.hidden) lastFocus=document.activeElement;
  const info=itemInfo(it);
  mCard.style.setProperty('--c',it.kind==='core'?'var(--sky-deep)':`var(${info.c})`);
  if(it.kind==='s'){const b=it.b,s=it.s;
    mI.innerHTML=tileHTML(s.icon,b.c,s.img); mE.textContent=`${b.tag} · ${b.title}`; mT.textContent=s.t;
    mB.innerHTML=`<p>${s.text}</p>${s.list?`<ol class="m-list">${s.list.map(x=>`<li>${x}</li>`).join('')}</ol>`:''}${s.after?`<p>${s.after}</p>`:''}<div class="m-src">${BOOK}<span>${s.cite}</span></div>${s.video?`<p><a class="btn primary" href="${s.video}" target="_blank" rel="noopener">▶ Ver video de apoyo</a></p>`:''}<h4>Más en esta rama</h4>${relButtons(b,s)}`;
    wireRel(b);
  } else if(it.kind==='b'){const b=it.b;
    mI.innerHTML=ART[b.id]; mE.textContent=`${b.tag} · el tema central ${b.link}`; mT.textContent=b.title;
    mB.innerHTML=`<p>${b.summary}</p><h4>Conceptos</h4>${relButtons(b,null)}`; wireRel(b);
  } else { mI.innerHTML=CORE_IMG; mE.textContent='Tema central'; mT.textContent=CORE.title; mB.innerHTML=CORE.body }
  modal.hidden=false; document.getElementById('m-x').focus();
}
function closeModal(){modal.hidden=true; clearSelection(); if(lastFocus&&lastFocus.focus)lastFocus.focus({preventScroll:true})}
// Sin selección: el núcleo vuelve a su estado inicial y el robot baja los brazos
function clearSelection(){if(flight)flight.cancel();loaded=null;setActive(null);coreBox.classList.remove('loaded','pulse');coreSlot.innerHTML='';coreTitle.textContent='Pedagogías y tecnologías emergentes';coreSmall.textContent='Toque un concepto del mapa';coreSmall.classList.remove('cta');coreEl.setAttribute('aria-label','Tema central: '+CORE.title);lookAt(null);setArms(false)}
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.hidden&&!pres.on&&loaded)clearSelection()});
document.getElementById('m-x').onclick=closeModal;
modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});
document.addEventListener('keydown',e=>{if(!modal.hidden&&e.key==='Escape')closeModal()});

// ===== Panel del recorrido de socialización =====
const panel=document.getElementById('panel'),pT=document.getElementById('p-title'),pB=document.getElementById('p-body'),pE=document.getElementById('p-eyebrow'),pTime=document.getElementById('p-time'),pNav=document.getElementById('p-nav');
function show(color,eyebrow,title,body){panel.style.setProperty('--c',color?`var(${color})`:'var(--yellow)');pE.textContent=eyebrow;pT.textContent=title;pB.innerHTML=body;panel.hidden=false}
document.getElementById('panel-x').addEventListener('click',()=>{endPres()});
const pres={on:false,i:0};
const steps=[{kind:'core',time:'20 s'},...B.map(b=>({kind:'b',b,time:b.time})),{kind:'cycle',time:'25 s'}];
function dimTo(id){stage.classList.toggle('dim',!!id);stage.querySelectorAll('[data-on]').forEach(e=>e.classList.toggle('on',!!id&&(e.dataset.on===id||(e.dataset.on.length===2&&e.dataset.on.includes(id)))))}
function renderPres(){const st=steps[pres.i];pNav.hidden=false;document.getElementById('p-count').textContent=`${pres.i+1} de ${steps.length}`;
  pTime.textContent=st.time;
  if(st.kind==='core'){dimTo('core');setActive(coreEl);show(null,'Tema central',CORE.title,CORE.body)}
  else if(st.kind==='b'){const b=st.b;dimTo(b.id);setActive(b.el);show(b.c,`${b.tag} · ${b.link}`,b.title,`<p>${b.summary}</p><ul>${b.subs.map(s=>`<li><b>${short(s)}</b> <span class="src">(${s.cite})</span></li>`).join('')}</ul>`)}
  else{dimTo(null);setActive(null);show(null,'Cierre','Cómo interactúan pedagogía y tecnología','<p>1. La pedagogía fija el propósito. 2. La tecnología amplía lo posible. 3. El docente interpreta y decide. 4. La evidencia ajusta la práctica y la herramienta.</p><p>Las líneas punteadas del mapa marcan esas interacciones: las pedagogías orientan el diseño de las tecnologías, el docente las pone en práctica y la concentración del poder agrava los riesgos.</p>')}
  document.getElementById('p-next').textContent=pres.i===steps.length-1?'Terminar':'Siguiente';
}
function startPres(){clearSelection();pres.on=true;pres.i=0;zoom=null;refit();box.scrollIntoView({behavior:RM?'auto':'smooth',block:'start'});renderPres()}
function endPres(){pres.on=false;pNav.hidden=true;pTime.textContent='';dimTo(null);panel.hidden=true;setActive(null)}
document.getElementById('btn-present').onclick=startPres;
document.getElementById('p-next').onclick=()=>{if(pres.i>=steps.length-1)return endPres();pres.i++;renderPres()};
document.getElementById('p-prev').onclick=()=>{if(pres.i>0){pres.i--;renderPres()}};
document.addEventListener('keydown',e=>{if(!pres.on||!modal.hidden)return;if(e.key==='ArrowRight')document.getElementById('p-next').click();if(e.key==='ArrowLeft')document.getElementById('p-prev').click();if(e.key==='Escape')endPres()});

// ===== Escala del mapa =====
const box=document.getElementById('mapbox'),outer=document.getElementById('outer');
box.addEventListener('click',e=>{if(!e.target.closest('.node'))clearSelection()});
let zoom=null;
// Margen interior para que los elementos ampliados con el zoom no se corten en los bordes
const PAD=70;
function fitScale(){return Math.max((box.clientWidth-PAD*2)/W, 0.45)}
function apply(s){stage.style.transform=`scale(${s})`;stage.style.left=PAD+'px';stage.style.top=PAD+'px';outer.style.width=(W*s+PAD*2)+'px';outer.style.height=(H*s+PAD*2)+'px'}
function refit(){apply(zoom??fitScale())}
window.addEventListener('resize',refit);refit();
placeLabels();
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(placeLabels);
window.addEventListener('load',placeLabels);
if(box.scrollWidth>box.clientWidth){box.scrollLeft=(box.scrollWidth-box.clientWidth)/2}
document.getElementById('btn-fit').onclick=()=>{zoom=null;refit()};
document.getElementById('btn-zoom-in').onclick=()=>{zoom=Math.min((zoom??fitScale())*1.2,1.4);refit()};
document.getElementById('btn-zoom-out').onclick=()=>{zoom=Math.max((zoom??fitScale())/1.2,0.3);refit()};

// ===== Ciclo e índice en lista =====
[['cy1','seedling'],['cy2','laptop'],['cy3','teacher'],['cy4','chart']].forEach(([id,ic])=>document.getElementById(id).innerHTML=ico(ic));
document.getElementById('outline').innerHTML=B.map(b=>`<article class="ob" style="--c:var(${b.c})"><h3>${b.tag}. ${b.title}</h3><ul>${b.subs.map(s=>`<li><b>${s.t}.</b> ${s.text}${s.list?`<ol>${s.list.map(x=>`<li>${x}</li>`).join('')}</ol>`:''}${s.after?' '+s.after:''} <cite>${s.cite}</cite></li>`).join('')}</ul></article>`).join('');
