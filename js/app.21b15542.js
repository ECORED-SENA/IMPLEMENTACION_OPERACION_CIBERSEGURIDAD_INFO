(function(a){function e(e){for(var i,n,c=e[0],s=e[1],l=e[2],d=0,u=[];d<c.length;d++)n=c[d],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&u.push(r[n][0]),r[n]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(a[i]=s[i]);p&&p(e);while(u.length)u.shift()();return o.push.apply(o,l||[]),t()}function t(){for(var a,e=0;e<o.length;e++){for(var t=o[e],i=!0,n=1;n<t.length;n++){var c=t[n];0!==r[c]&&(i=!1)}i&&(o.splice(e--,1),a=s(s.s=t[0]))}return a}var i={},n={app:0},r={app:0},o=[];function c(a){return s.p+"js/"+({}[a]||a)+"."+{"chunk-0206bfa0":"7f5bdb50","chunk-027270b8":"0810b4ca","chunk-04b93936":"80f6a8cb","chunk-0cc9fca2":"4ef0586e","chunk-13a6037e":"f7b888a7","chunk-2c06842c":"b867325a","chunk-2d208d90":"60cf423d","chunk-2d21d0e2":"16cb918b","chunk-2d22c123":"1b518306","chunk-2e80bb9a":"8b236161","chunk-43bc8300":"12ee4ec7","chunk-4cdd78c0":"7a7a9e28","chunk-4ebcb52d":"84bc2fab","chunk-515a8379":"306eaf99","chunk-53ccb27e":"6e4729df","chunk-5855c82e":"250e7f41","chunk-7781d802":"c251a3ca","chunk-7c83fc0b":"69ad1d89","chunk-839300a6":"74530117","chunk-b6ac33c0":"f78a5bd6","chunk-c796899c":"c9985060","chunk-d9f92dce":"27e43e8a"}[a]+".js"}function s(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return a[e].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.e=function(a){var e=[],t={"chunk-027270b8":1,"chunk-04b93936":1,"chunk-0cc9fca2":1,"chunk-43bc8300":1,"chunk-4ebcb52d":1,"chunk-515a8379":1,"chunk-5855c82e":1,"chunk-7781d802":1,"chunk-7c83fc0b":1,"chunk-839300a6":1,"chunk-b6ac33c0":1,"chunk-d9f92dce":1};n[a]?e.push(n[a]):0!==n[a]&&t[a]&&e.push(n[a]=new Promise((function(e,t){for(var i="css/"+({}[a]||a)+"."+{"chunk-0206bfa0":"31d6cfe0","chunk-027270b8":"92cde18b","chunk-04b93936":"2cd5135e","chunk-0cc9fca2":"d035a47c","chunk-13a6037e":"31d6cfe0","chunk-2c06842c":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-43bc8300":"d035a47c","chunk-4cdd78c0":"31d6cfe0","chunk-4ebcb52d":"1dbe8d4a","chunk-515a8379":"77feafb9","chunk-53ccb27e":"31d6cfe0","chunk-5855c82e":"d035a47c","chunk-7781d802":"bdae3807","chunk-7c83fc0b":"d035a47c","chunk-839300a6":"b67dc245","chunk-b6ac33c0":"d035a47c","chunk-c796899c":"31d6cfe0","chunk-d9f92dce":"d035a47c"}[a]+".css",r=s.p+i,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var l=o[c],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===i||d===r))return e()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){l=u[c],d=l.getAttribute("data-href");if(d===i||d===r)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var i=e&&e.target&&e.target.src||r,o=new Error("Loading CSS chunk "+a+" failed.\n("+i+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=i,delete n[a],p.parentNode.removeChild(p),t(o)},p.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){n[a]=0})));var i=r[a];if(0!==i)if(i)e.push(i[2]);else{var o=new Promise((function(e,t){i=r[a]=[e,t]}));e.push(i[2]=o);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=c(a);var u=new Error;l=function(e){d.onerror=d.onload=null,clearTimeout(p);var t=r[a];if(0!==t){if(t){var i=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;u.message="Loading chunk "+a+" failed.\n("+i+": "+n+")",u.name="ChunkLoadError",u.type=i,u.request=n,t[1](u)}r[a]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(e)},s.m=a,s.c=i,s.d=function(a,e,t){s.o(a,e)||Object.defineProperty(a,e,{enumerable:!0,get:t})},s.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},s.t=function(a,e){if(1&e&&(a=s(a)),8&e)return a;if(4&e&&"object"===typeof a&&a&&a.__esModule)return a;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:a}),2&e&&"string"!=typeof a)for(var i in a)s.d(t,i,function(e){return a[e]}.bind(null,i));return t},s.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return s.d(e,"a",e),e},s.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)},s.p="",s.oe=function(a){throw console.error(a),a};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var p=d;o.push([0,"chunk-vendors"]),t()})({0:function(a,e,t){a.exports=t("56d7")},"56d7":function(a,e,t){"use strict";t.r(e);t("e260"),t("e6cf"),t("cca6"),t("a79d");var i=t("68f3"),n=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"app",attrs:{id:"app"}},[a._m(0),t("div",{staticClass:"contenedor-principal"},[t("section",{staticClass:"seccion-principal"},[t("Inicio")],1)])])},r=[function(){var a=this,e=a.$createElement,i=a._self._c||e;return i("header",{staticClass:"header"},[i("div",{staticClass:"container"},[i("div",{staticClass:"row align-items-center justify-content-between"},[i("div",{staticClass:"col col-sm-auto d-flex align-items-center justify-content-between justify-content-sm-star"},[i("img",{staticClass:"header__logo me-sm-5",attrs:{src:t("9eb5")}})])])])])}],o=function(){var a=this,e=a.$createElement,i=a._self._c||e;return i("section",[i("div",{staticClass:"banner-principal mb-5"},[i("div",{staticClass:"container tarjeta p-4 p-sm-5",style:{"background-image":"url("+t("e6b0")+")"}},[a._m(0)])]),a._m(1),a._m(2),a._m(3),a._m(4),a._m(5),a._m(6),i("div",{staticClass:"container tarjeta tarjeta__template--azul-claro p-4 p-md-5 mb-5",attrs:{"data-aos":"fade-up"}},[a._m(7),i("div",{staticClass:"creditos"},a._l(Object.keys(a.creditosData),(function(e,t){return i("div",{class:t!=Object.keys(a.creditosData).length-1?"mb-4":""},[i("div",{staticClass:"creditos__titulo"},[a._v(a._s(a.configTitulos[e]))]),i("table",[i("tbody",a._l(a.creditosData[e],(function(t,n){return i("tr",{key:e+n},[i("td",{staticClass:"text-bold",attrs:{colspan:"2"},domProps:{innerHTML:a._s(a.renderText(t.nombre))}}),i("td",{attrs:{colspan:"2"},domProps:{innerHTML:a._s(a.renderText(t.cargo))}}),i("td",{attrs:{colspan:"3"},domProps:{innerHTML:a._s(a.renderText(t.centro))}})])})),0)])])})),0)]),i("Footer")],1)},c=[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"row justify-content-around align-items-center"},[t("div",{staticClass:"col-lg-7 col-xxl-6 banner-principal__info"},[t("div",{staticClass:"banner-principal__programa"},[t("div",{staticClass:"h1 mb-0"},[a._v("Implementación y operación de la ciberseguridad")])]),t("div",{staticClass:"h2"},[a._v("Información del programa")]),t("div",{staticClass:"banner-principal__datos"},[t("ul",[t("li",{staticClass:"mb-3 banner-principal__datos__item"},[t("p",{staticClass:"h6 mb-0 me-3 banner-principal__datos__item__titulo"},[a._v("Nombre del programa: ")]),t("p",{staticClass:"banner-principal__datos__item__texto"},[a._v("Implementación y operación de la ciberseguridad")])]),t("li",{staticClass:"mb-3 banner-principal__datos__item"},[t("p",{staticClass:"h6 mb-0 me-3 banner-principal__datos__item__titulo"},[a._v("Código: ")]),t("p",{staticClass:"banner-principal__datos__item__texto"},[a._v("228124")])]),t("li",{staticClass:"mb-3 banner-principal__datos__item"},[t("p",{staticClass:"h6 mb-0 me-3 banner-principal__datos__item__titulo"},[a._v("Total Horas: ")]),t("p",{staticClass:"banner-principal__datos__item__texto"},[a._v("3984")])]),t("li",{staticClass:"mb-3 banner-principal__datos__item"},[t("p",{staticClass:"h6 mb-0 me-3 banner-principal__datos__item__titulo"},[a._v("Duración: ")]),t("p",{staticClass:"banner-principal__datos__item__texto"},[a._v("27 meses")])]),t("li",{staticClass:"mb-3 banner-principal__datos__item"},[t("p",{staticClass:"h6 mb-0 me-3 banner-principal__datos__item__titulo"},[a._v("Modalidad: ")]),t("p",{staticClass:"banner-principal__datos__item__texto"},[a._v("virtual")])])])])]),t("div",{staticClass:"d-none d-lg-block col-lg-5"},[t("div",{staticClass:"video"},[t("iframe",{attrs:{"data-v-1f9e4816":"",width:"560",height:"315",src:"https://www.youtube.com/embed/ulnGV4p_sq8",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"allowfullscreen"}})])])])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"container tarjeta tarjeta__template--azul-claro p-4 p-md-5 mb-5",attrs:{"data-aos":"fade-up"}},[t("div",{staticClass:"titulo__template--a mb-4"},[t("span",{staticClass:"h4"},[a._v("1. Presentación")])]),t("p",{staticClass:"mb-3"},[a._v(" Le presentamos el programa virtual de formación "),t("b",[a._v("Tecnólogo en implementación y operación de la ciberseguridad.")])]),t("p",{staticClass:"mb-3"},[a._v(" Mediante este programa, el aprendiz desarrollará toda una serie de conocimientos tendientes a apropiar los conceptos más importantes de la ciberseguridad: desde diagnosticar el estado actual de la ciberseguridad para cada contexto empresarial, con conocimientos y habilidades en implementación de políticas y controles que garantizan la seguridad digital, hasta la aplicación de estándares y metodologías que permitan monitorear y controlar ciberamenazas. Además, el aprendiz, con actitud crítica y ética, afianzará su capacidad para realizar evaluaciones objetivas dentro del marco de la legislación aplicable, articulada con la mejora continua de la ciberseguridad.")]),t("p",{staticClass:"mb-3"},[a._v(" El "),t("b",[a._v("SENA")]),a._v(", conocedor de la necesidad del sector, le ofrece este programa de formación tecnológico con todos los elementos de formación profesional, sociales, tecnológicos y culturales, que le aportarán elementos diferenciadores de valor agregado, metodologías de aprendizaje innovadoras, acceso a tecnologías de última generación y una estructuración sobre métodos más que contenidos, que potenciarán su capacidad crítica, de librepensamiento, solidaridad y emprendimiento, innovación y adaptación a las tendencias y cambios tecnológicos y a las necesidades del sector empresarial y del trabajo.")])])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"container tarjeta tarjeta__template--azul-claro p-4 p-md-5 mb-5",attrs:{"data-aos":"fade-up"}},[t("div",{staticClass:"titulo__template--a mb-4"},[t("span",{staticClass:"h4"},[a._v("2. Justificación del programa")])]),t("p",{staticClass:"mb-3"},[a._v("En la actualidad y en el marco de la pandemia del COVID-19, en Colombia se ha logrado percibir una creciente participación de ciudadanos en el entorno digital, haciendo uso de las TIC (Tecnologías de la información y la comunicación) para el trabajo, el estudio, el entretenimiento, la cercanía digital entre personas, realizar pagos y otros micro servicios que facilitan y agilizan la vida cotidiana de las personas, empresas e instituciones. En virtud de lo anterior, se contempla un escenario de riesgo en el crecimiento de vulnerabilidades, aumento en las amenazas digitales y delitos informáticos para las personas, en los ambientes y sectores públicos y privados. Es así como el gobierno nacional ha dispuesto del CONPES (Consejo Nacional de Política Económica y Social) 3995, "),t("b",[a._v("Política Nacional de Confianza y Seguridad Digital")]),a._v(", que establece medidas para ampliar la confianza digital y mejorar la seguridad digital, favoreciendo a la sociedad colombiana ser incluyente y competitiva en el futuro digital.")]),t("p",{staticClass:"mb-3"},[a._v(" El Índice de Ciberseguridad Nacional, en inglés "),t("i",[a._v("National Cyber Security Index")]),a._v(" (NCSI), desarrollado y soportado por la "),t("i",[a._v("e-Governance Academy")]),a._v(" (eGA), que mide en uno de sus pilares la "),t("b",[a._v("educación y desarrollo profesional")]),a._v(", en materia de seguridad digital, muestra un bajo avance de Colombia en este ámbito, correspondiente al 44 %. Con datos como este, y de acuerdo con el análisis realizado sobre la existencia de programas de educación superior, a través del Sistema Nacional de Información de la Educación Superior (SNIES) del Ministerio de Educación Nacional, se refleja la necesidad de fortalecer los programas de educación sobre seguridad digital y ciberseguridad.")]),t("p",{staticClass:"mb-3"},[a._v(" Según el plan de acción para fortalecer las capacidades en seguridad digital de los ciudadanos, del sector público y privado, para aumentar la confianza digital en el país, del CONPES 3995, se plantea en el quinto lugar que “el SENA, con apoyo del Ministerio de Tecnologías de la Información y las Comunicaciones, diseñará programas de formación profesional con enfoque para el trabajo y desarrollo humano, los cuales atenderán las necesidades sectoriales que se identifiquen durante el desarrollo de esta acción, para fortalecer las competencias en áreas como la seguridad digital, seguridad de la información, ciberseguridad e infraestructuras críticas”. Como respuesta a lo anterior, se diseña el programa "),t("b",[a._v("Tecnólogo en implementación y operación de la ciberseguridad")]),a._v(", enfocado en brindar los conocimientos para diagnosticar, diseñar, implementar, operar y monitorear estrategias de ciberseguridad. Asimismo, evaluar y proponer estrategias de mejora continua. El programa ofrece la oportunidad de incorporar personal con alta calidad humana, laboral y profesional en todos los sectores, ya sean industriales, comerciales, de servicios, extractivos o primarios, contribuyendo con el desarrollo económico, social y tecnológico del país.")])])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"container tarjeta tarjeta__template--azul-claro p-4 p-md-5 mb-5",attrs:{"data-aos":"fade-up"}},[t("div",{staticClass:"titulo__template--a mb-4"},[t("span",{staticClass:"h4"},[a._v("3. Competencias a desarrollar")])]),t("div",{staticClass:"row justify-content-center"},[t("div",{staticClass:"col-lg-10"},[t("div",{staticClass:"tabla-a color-secundario mb-5"},[t("div",{staticClass:"tabla-b__header"},[t("h5",{staticClass:"mb-0"},[a._v("Competencias técnicas o específicas")])]),t("table",[t("tbody",[t("tr",[t("td",[a._v("Diagnosticar la seguridad de la información de acuerdo con métodos de análisis y normativa técnica.")]),t("td",[a._v("220501108")])]),t("tr",[t("td",[a._v("Diseñar el modelo de seguridad de la información de acuerdo con estándares y marco de referencia. ")]),t("td",[a._v("220501109")])]),t("tr",[t("td",[a._v("Implementar el sistema de seguridad de la información según modelo y estándares técnicos. ")]),t("td",[a._v("220501110 ")])]),t("tr",[t("td",[a._v(" Controlar sistema de seguridad de la información de acuerdo con los procedimientos y normativa técnica. ")]),t("td",[a._v(" 220501111 ")])]),t("tr",[t("td",[a._v(" Probar la solución del "),t("i",[a._v("software")]),a._v(" de acuerdo con parámetros técnicos y modelos de referencia. ")]),t("td",[a._v(" 220501099 ")])]),t("tr",[t("td",[a._v(" Monitorear sistemas de gestión de acuerdo con normativa y requerimientos técnicos.")]),t("td",[a._v(" 220601044 ")])])])])]),t("div",{staticClass:"tabla-a color-secundario mb-5"},[t("div",{staticClass:"tabla-b__header"},[t("h5",{staticClass:"mb-0"},[a._v("Competencia inducción")])]),t("table",[t("tbody",[t("tr",[t("td",[a._v("Resultado de Aprendizaje de la inducción-inducción")]),t("td",[a._v("240201530")])])])])]),t("div",{staticClass:"tabla-a color-secundario mb-5"},[t("div",{staticClass:"tabla-b__header"},[t("h5",{staticClass:"mb-0"},[a._v("Competencias transversales")])]),t("table",[t("tbody",[t("tr",[t("td",[a._v("Interactuar en el contexto productivo y social de acuerdo con principios éticos para la construcción de una cultura de paz – "),t("b",[a._v("Ética para la construcción de una cultura de paz.")])]),t("td",[a._v("240201526")])]),t("tr",[t("td",[a._v("Aplicar prácticas de protección ambiental, seguridad y salud en el trabajo de acuerdo con las políticas organizacionales y la normatividad vigente - "),t("b",[a._v("Medio ambiente, salud y seguridad.")])]),t("td",[a._v(" 220601501 ")])]),t("tr",[t("td",[a._v(" Ejercer derechos fundamentales del trabajo en el marco de la Constitución Política y los convenios internacionales – "),t("b",[a._v("Derechos fundamentales del trabajo.")])]),t("td",[a._v(" 210201501")])]),t("tr",[t("td",[a._v(" Fomentar cultura emprendedora según habilidades y competencias personales – "),t("b",[a._v("Cultura emprendedora y empresarial.")])]),t("td",[a._v(" 240201533 ")])]),t("tr",[t("td",[a._v(" Desarrollo de procesos de investigación efectivos, teniendo en cuenta situaciones de orden social y productivo – "),t("b",[a._v("Investigación.")])]),t("td",[a._v(" 240201064")])]),t("tr",[t("td",[a._v(" Generar hábitos saludables de vida mediante la aplicación de programas de actividad física en los contextos productivos y sociales – "),t("b",[a._v("Actividad física y hábitos de vida saludable.")])]),t("td",[a._v(" 230101507 ")])])])])]),t("div",{staticClass:"tabla-a color-secundario mb-5"},[t("div",{staticClass:"tabla-b__header"},[t("h5",{staticClass:"mb-0"},[a._v("Competencias clave")])]),t("table",[t("thead",[t("tr",[t("th",[a._v("Unidad de competencia")]),t("th",[a._v("Código UC")])])]),t("tbody",[t("tr",[t("td",[a._v("Razonar cuantitativamente frente a situaciones susceptibles de ser abordadas de manera matemática en contextos laborales, sociales y personales - "),t("b",[a._v("Matemática")])]),t("td",[a._v("240201528")])]),t("tr",[t("td",[a._v("Aplicación de conocimientos de las ciencias naturales de acuerdo con situaciones del contexto productivo y social ("),t("b",[a._v("Física")]),a._v(")")]),t("td",[a._v("220201501")])]),t("tr",[t("td",[a._v("Desarrollar procesos de comunicación eficaces y efectivos, teniendo en cuenta situaciones de orden social, personal y productivo. – "),t("b",[a._v("Comunicación")]),a._v(".")]),t("td",[a._v("220501524 ")])]),t("tr",[t("td",[a._v("Utilizar herramientas informáticas de acuerdo con necesidades de manejo de información. – "),t("b",[a._v("TIC")]),a._v(".")]),t("td",[a._v("240201046 ")])]),t("tr",[t("td",[a._v("Interactuar en lengua inglesa de forma oral y escrita dentro de contextos sociales y laborales según los criterios establecidos por el Marco Común Europeo de Referencia para las Lenguas. "),t("b",[a._v("Inglés")]),a._v(".")]),t("td",[a._v("240202501 ")])])])])])])])])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"container tarjeta tarjeta__template--azul-claro p-4 p-md-5 mb-5",attrs:{"data-aos":"fade-up"}},[t("div",{staticClass:"titulo__template--a mb-4"},[t("span",{staticClass:"h4"},[a._v("4. Perfil de ingreso")])]),t("p",[a._v("El aspirante que busca ingresar al Tecnólogo en implementación y operación de la ciberseguridad debe tener una "),t("b",[a._v("edad mínima de 16 años")]),a._v(" y contar con el "),t("b",[a._v("nivel de educación media aprobado y certificado")]),a._v("; lo que quiere decir que deberá "),t("b",[a._v("tener aprobado el grado 11")]),a._v(". No requiere tener, previamente, formación para el trabajo y el desarrollo humano. Adicionalmente, debe "),t("b",[a._v("aprobar una prueba de aptitud y conocimiento")]),a._v(".")])])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"container tarjeta tarjeta__template--azul-claro p-4 p-md-5 mb-5",attrs:{"data-aos":"fade-up"}},[t("div",{staticClass:"titulo__template--a mb-4"},[t("span",{staticClass:"h4"},[a._v("5. Perfil de egreso")])]),t("p",[a._v("El egresado del programa "),t("b",[a._v("Tecnólogo en implementación y operación de la ciberseguridad")]),a._v(" es un talento humano con la capacidad de diagnosticar el estado actual de la ciberseguridad para cada contexto empresarial, con conocimientos y habilidades para implementar políticas y controles que garantizan la seguridad digital, aplicando estándares y metodologías nacionales e internacionales que permitan monitorear y controlar ciberamenazas. El tecnólogo con actitud crítica y ética tendrá la capacidad para realizar evaluaciones objetivas dentro del marco de la legislación aplicable, articulado con la mejora continua. Además, podrá demostrar la apropiación de la cultura del autoaprendizaje, actualización permanente, trabajo colaborativo, valores y principios éticos, que le permitirán abordar las nuevas tendencias, innovar en su proceso personal y laboral, apoyando procesos de transformación organizacional.")])])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"container tarjeta tarjeta__template--azul-claro p-4 p-md-5 mb-5",attrs:{"data-aos":"fade-up"}},[t("div",{staticClass:"titulo__template--a mb-4"},[t("span",{staticClass:"h4"},[a._v("6. Estrategia metodológica")])]),t("p",{staticClass:"mb-3"},[a._v(" El programa se aborda teniendo como referencia principal el ciclo "),t("i",[a._v("Deming")]),a._v(", PHVA (Planear – Hacer – Verificar – Actuar), de tal manera que se puedan desarrollar los contenidos de conocimiento y prácticos, de forma ordenada, utilizando herramientas de formación virtual con contenidos de texto, interactivos y multimedia.")]),t("p",{staticClass:"mb-3"},[a._v(" La estrategia metodológica se centrará en la "),t("b",[a._v("construcción de autonomía")]),a._v(" para garantizar la calidad de la formación en el marco de la "),t("b",[a._v("formación por competencias")]),a._v(", el "),t("b",[a._v("aprendizaje por proyectos")]),a._v(" y el uso de técnicas "),t("b",[a._v("didácticas activas")]),a._v(" que estimulan el pensamiento para la resolución de problemas simulados y reales; soportada en la utilización de las tecnologías de la información y la comunicación, integradas en ambientes virtuales de aprendizaje, que en todo caso recrean el contexto productivo y vinculan al aprendiz con la realidad cotidiana y el desarrollo de las competencias.")]),t("p",{staticClass:"mb-3"},[a._v(" Igualmente, la estrategia metodológica estimulará de manera permanente la autocrítica y la reflexión del aprendiz sobre el quehacer y los resultados de aprendizaje que logra a través de la vinculación activa de las cuatro fuentes de información para la construcción de conocimiento:")]),t("ul",{staticClass:"lista-ul"},[t("li",[t("i",{staticClass:"fas fa-check"}),t("p",{staticClass:"mb-0"},[a._v("El instructor - tutor")])]),t("li",[t("i",{staticClass:"fas fa-check"}),t("p",{staticClass:"mb-0"},[a._v("El entorno ")])]),t("li",[t("i",{staticClass:"fas fa-check"}),t("p",{staticClass:"mb-0"},[a._v("Las TIC")])]),t("li",[t("i",{staticClass:"fas fa-check"}),t("p",{staticClass:"mb-0"},[a._v("El trabajo colaborativo")])])])])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"titulo__template--a mb-4"},[t("span",{staticClass:"h4"},[a._v("Créditos")])])}],s=(t("159b"),{name:"Inicio",data:function(){return{configTitulos:{liderEquipo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",contenidoInstruccional:"CONTENIDO INSTRUCCIONAL",desarrolloProducto:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",gestoresRepositorio:"GESTORES DE REPOSITORIO"}}},computed:{creditosData:function(){return this.$config.creditos}},methods:{renderText:function(a){var e="";return Array.isArray(a)?a.forEach((function(a,t){e+=(t?"<br/>":"")+a})):e+=a,e}}}),l=s,d=(t("6e1b"),t("2877")),u=Object(d["a"])(l,o,c,!1,null,null,null),p=u.exports,m={name:"App",components:{Inicio:p},mounted:function(){this.$aos.init()}},b=m,v=(t("cf25"),Object(d["a"])(b,n,r,!1,null,null,null)),_=v.exports,f=t("1c2c"),g=(t("a3a0"),{creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Joaquín Patiño Cerón",cargo:"Experto temático",centro:"Centro de Teleinformática y Producción Industrial - Regional Cauca"},{nombre:"Hernando José Peña Hidalgo",cargo:"Experto temático",centro:"Centro de Teleinformática y Producción Industrial - Regional Cauca"},{nombre:"Peter Emerson Pinchao Solis",cargo:"Experto temático",centro:"Centro de Teleinformática y Producción Industrial - Regional Cauca"},{nombre:"Darío González",cargo:"Corrección de estilo",centro:"Centro Agropecuario La Granja - Regional Tolima"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Leyson Fabian Castaño Perez",cargo:"Soporte organizacional",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Luis Fabian Robles Méndez",cargo:"Desarrollo front-end",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Andres Mauricio Santaella Ochoa",cargo:"Soporte front-end",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Zuleidy Maria Ruiz Torres",cargo:"Producción audiovisual",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Wilson Andrés Arenales Caceres",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Gilberto Junior Rodriguez Rodriguez",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"María Carolina Tamayo López",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Laura Gisselle Murcia Pardo",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Emilsen Alfonso Bautista",cargo:"Validación de diseño y contenido",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}],gestoresRepositorio:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"}]}});i["a"].prototype.$config=g;var h=t("9224");i["a"].prototype.$package=h,new i["a"]({store:f["a"],render:function(a){return a(_)}}).$mount("#app")},"6e1b":function(a,e,t){"use strict";t("703c")},"703c":function(a,e,t){},9224:function(a){a.exports=JSON.parse('{"name":"sena-base-info-2021","version":"1.1.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"3.0.3"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.12","@vue/cli-plugin-eslint":"^4.5.12","@vue/cli-plugin-router":"^4.5.12","@vue/cli-plugin-vuex":"^4.5.12","@vue/cli-service":"^4.5.12","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.1.3","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.11"}}')},"9eb5":function(a,e,t){a.exports=t.p+"img/logo-sena-naranja.43e61d0f.svg"},a3a0:function(a,e,t){},cf25:function(a,e,t){"use strict";t("fea6")},e6b0:function(a,e,t){a.exports=t.p+"img/fondo-banner-principal.8966873a.png"},fea6:function(a,e,t){}});
//# sourceMappingURL=app.21b15542.js.map