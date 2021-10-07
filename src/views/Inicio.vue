<template lang="pug">
section
  .banner-principal.mb-5
    .container.tarjeta.p-4.p-sm-5(
      :style="{'background-image': `url(${require('@/assets/curso/fondo-banner-principal.png')})`}"
    )
      .row.justify-content-around.align-items-center
        .col-lg-7.col-xxl-6.banner-principal__info
          .banner-principal__programa
            .h1.mb-0 Implementación y operación de la ciberseguridad
          
          .h2 Información del programa
          .banner-principal__datos
            ul
              li.mb-3.banner-principal__datos__item
                p.h6.mb-0.me-3.banner-principal__datos__item__titulo Nombre del programa: 
                p.banner-principal__datos__item__texto Implementación y operación de la ciberseguridad
              li.mb-3.banner-principal__datos__item
                p.h6.mb-0.me-3.banner-principal__datos__item__titulo Código: 
                p.banner-principal__datos__item__texto 228124
              li.mb-3.banner-principal__datos__item
                p.h6.mb-0.me-3.banner-principal__datos__item__titulo Total Horas: 
                p.banner-principal__datos__item__texto 3984
              li.mb-3.banner-principal__datos__item
                p.h6.mb-0.me-3.banner-principal__datos__item__titulo Duración: 
                p.banner-principal__datos__item__texto 27 meses
              li.mb-3.banner-principal__datos__item
                p.h6.mb-0.me-3.banner-principal__datos__item__titulo Modalidad: 
                p.banner-principal__datos__item__texto virtual

        .d-none.d-lg-block.col-lg-5
          //- img(src="@/assets/curso/banner-princiapal.svg")
          .video
            | <iframe data-v-1f9e4816="" width="560" height="315" src="https://www.youtube.com/embed/ebMnAFYFWRg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

  .container.tarjeta.tarjeta__template--azul-claro.p-4.p-md-5.mb-5(data-aos="fade-up")
    .titulo__template--a.mb-4
      span.h4 1. Presentación
    p.mb-3  Le presentamos el programa virtual de formación <b>Tecnólogo en implementación y operación de la ciberseguridad.</b>
    p.mb-3  Mediante este programa, el aprendiz desarrollará toda una serie de conocimientos tendientes a apropiar los conceptos más importantes de la ciberseguridad: desde diagnosticar el estado actual de la ciberseguridad para cada contexto empresarial, con conocimientos y habilidades en implementación de políticas y controles que garantizan la seguridad digital, hasta la aplicación de estándares y metodologías que permitan monitorear y controlar ciberamenazas. Además, el aprendiz, con actitud crítica y ética, afianzará su capacidad para realizar evaluaciones objetivas dentro del marco de la legislación aplicable, articulada con la mejora continua de la ciberseguridad.
    p.mb-3  El <b>SENA</b>, conocedor de la necesidad del sector, le ofrece este programa de formación tecnológico con todos los elementos de formación profesional, sociales, tecnológicos y culturales, que le aportarán elementos diferenciadores de valor agregado, metodologías de aprendizaje innovadoras, acceso a tecnologías de última generación y una estructuración sobre métodos más que contenidos, que potenciarán su capacidad crítica, de librepensamiento, solidaridad y emprendimiento, innovación y adaptación a las tendencias y cambios tecnológicos y a las necesidades del sector empresarial y del trabajo.



  .container.tarjeta.tarjeta__template--azul-claro.p-4.p-md-5.mb-5(data-aos="fade-up")
    .titulo__template--a.mb-4
      span.h4 2. Justificación<br>del programa

    p.mb-3 En la actualidad y en el marco de la pandemia del COVID-19, en Colombia se ha logrado percibir una creciente participación de ciudadanos en el entorno digital, haciendo uso de las TIC (Tecnologías de la información y la comunicación) para el trabajo, el estudio, el entretenimiento, la cercanía digital entre personas, realizar pagos y otros micro servicios que facilitan y agilizan la vida cotidiana de las personas, empresas e instituciones. En virtud de lo anterior, se contempla un escenario de riesgo en el crecimiento de vulnerabilidades, aumento en las amenazas digitales y delitos informáticos para las personas, en los ambientes y sectores públicos y privados. Es así como el gobierno nacional ha dispuesto del CONPES (Consejo Nacional de Política Económica y Social) 3995, <b>Política Nacional de Confianza y Seguridad Digital</b>, que establece medidas para ampliar la confianza digital y mejorar la seguridad digital, favoreciendo a la sociedad colombiana ser incluyente y competitiva en el futuro digital.
    p.mb-3  El Índice de Ciberseguridad Nacional, en inglés <i>National Cyber Security Index</i> (NCSI), desarrollado y soportado por la <i>e-Governance Academy</i> (eGA), que mide en uno de sus pilares la <b>educación y desarrollo profesional</b>, en materia de seguridad digital, muestra un bajo avance de Colombia en este ámbito, correspondiente al 44 %. Con datos como este, y de acuerdo con el análisis realizado sobre la existencia de programas de educación superior, a través del Sistema Nacional de Información de la Educación Superior (SNIES) del Ministerio de Educación Nacional, se refleja la necesidad de fortalecer los programas de educación sobre seguridad digital y ciberseguridad.
    p.mb-3  Según el plan de acción para fortalecer las capacidades en seguridad digital de los ciudadanos, del sector público y privado, para aumentar la confianza digital en el país, del CONPES 3995, se plantea en el quinto lugar que “el SENA, con apoyo del Ministerio de Tecnologías de la Información y las Comunicaciones, diseñará programas de formación profesional con enfoque para el trabajo y desarrollo humano, los cuales atenderán las necesidades sectoriales que se identifiquen durante el desarrollo de esta acción, para fortalecer las competencias en áreas como la seguridad digital, seguridad de la información, ciberseguridad e infraestructuras críticas”. Como respuesta a lo anterior, se diseña el programa <b>Tecnólogo en implementación y operación de la ciberseguridad</b>, enfocado en brindar los conocimientos para diagnosticar, diseñar, implementar, operar y monitorear estrategias de ciberseguridad. Asimismo, evaluar y proponer estrategias de mejora continua. El programa ofrece la oportunidad de incorporar personal con alta calidad humana, laboral y profesional en todos los sectores, ya sean industriales, comerciales, de servicios, extractivos o primarios, contribuyendo con el desarrollo económico, social y tecnológico del país.

  .container.tarjeta.tarjeta__template--azul-claro.p-4.p-md-5.mb-5(data-aos="fade-up")
    .titulo__template--a.mb-4
      span.h4 2. Competencias a desarrollar
    .row.justify-content-center
      .col-lg-10
        //--tabla 1
        .tabla-a.color-secundario.mb-5 
          .tabla-b__header
            h5.mb-0 Competencias técnicas o específicas
          table
            //--thead
              tr
                th Unidad de competencia
                th Código UC
            tbody
              tr
                td Diagnosticar la seguridad de la información de acuerdo con métodos de análisis y normativa técnica.
                td 220501108
              tr
                td Diseñar el modelo de seguridad de la información de acuerdo con estándares y marco de referencia. 
                td 220501109
              tr
                td Implementar el sistema de seguridad de la información según modelo y estándares técnicos. 
                td 220501110         
              tr
                td  Controlar sistema de seguridad de la información de acuerdo con los procedimientos y normativa técnica. 
                td  220501111            
              tr
                td  Probar la solución del <i>software</i> de acuerdo con parámetros técnicos y modelos de referencia. 
                td  220501099 
              tr
                td  Monitorear sistemas de gestión de acuerdo con normativa y requerimientos técnicos.
                td  220601044                                  
                    
        //--tabla 2
        .tabla-a.color-secundario.mb-5 
          .tabla-b__header
            h5.mb-0 Competencia inducción
          table
            //--thead
              tr
                th Unidad de competencia
                th Código UC
            tbody
              tr
                td Resultado de Aprendizaje de la inducción-inducción
                td 240201530

        //--tabla 3
        .tabla-a.color-secundario.mb-5 
          .tabla-b__header
            h5.mb-0 Competencias transversales
          table
            //--thead
              tr
                th Unidad de competencia
                th Código UC
            tbody
              tr
                td Interactuar en el contexto productivo y social de acuerdo con principios éticos para la construcción de una cultura de paz – <b>Ética para la construcción de una cultura de paz.</b>
                td 240201526
              tr
                td Aplicar prácticas de protección ambiental, seguridad y salud en el trabajo de acuerdo con las políticas organizacionales y la normatividad vigente - <b>Medio ambiente, salud y seguridad.</b>
                td  220601501 
              tr
                td  Ejercer derechos fundamentales del trabajo en el marco de la Constitución Política y los convenios internacionales – <b>Derechos fundamentales del trabajo.</b> 
                td  210201501
              tr
                td  Fomentar cultura emprendedora según habilidades y competencias personales – <b>Cultura emprendedora y empresarial.</b> 
                td  240201533 
              tr
                td  Desarrollo de procesos de investigación efectivos, teniendo en cuenta situaciones de orden social y productivo – <b>Investigación.</b> 
                td  240201064
              tr
                td  Generar hábitos saludables de vida mediante la aplicación de programas de actividad física en los contextos productivos y sociales – <b>Actividad física y hábitos de vida saludable.</b> 
                td  230101507                         

        //-- tabla last 
        .tabla-a.color-secundario.mb-5 
          .tabla-b__header
            h5.mb-0 Competencias clave
          table
            thead
              tr
                th Unidad de competencia
                th Código UC
            tbody
              tr
                td Razonar cuantitativamente frente a situaciones susceptibles de ser abordadas de manera matemática en contextos laborales, sociales y personales - <b>Matemática</b>
                td 240201528
              tr
                td Aplicación de conocimientos de las ciencias naturales de acuerdo con situaciones del contexto productivo y social (<b>Física</b>)
                td 220201501
              tr
                td Desarrollar procesos de comunicación eficaces y efectivos, teniendo en cuenta situaciones de orden social, personal y productivo. – <b>Comunicación</b>.
                td 220501524            
              tr
                td Utilizar herramientas informáticas de acuerdo con necesidades de manejo de información. – <b>TIC</b>.
                td 240201046 
              tr
                td Interactuar en lengua inglesa de forma oral y escrita dentro de contextos sociales y laborales según los criterios establecidos por el Marco Común Europeo de Referencia para las Lenguas. <b>Inglés</b>.
                td 240202501 

  .container.tarjeta.tarjeta__template--azul-claro.p-4.p-md-5.mb-5(data-aos="fade-up")
    .titulo__template--a.mb-4
      span.h4 3. Perfil de ingreso

    p El aspirante que busca ingresar al Tecnólogo en implementación y operación de la ciberseguridad debe tener una <b>edad mínima de 16 años</b> y contar con el <b>nivel de educación media aprobado y certificado</b>; lo que quiere decir que deberá <b>tener aprobado el grado 11</b>. No requiere tener, previamente, formación para el trabajo y el desarrollo humano. Adicionalmente, debe <b>aprobar una prueba de aptitud y conocimiento</b>.

  .container.tarjeta.tarjeta__template--azul-claro.p-4.p-md-5.mb-5(data-aos="fade-up")
    .titulo__template--a.mb-4
      span.h4 3. Perfil de egreso

    p El egresado del programa <b>Tecnólogo en implementación y operación de la ciberseguridad</b> es un talento humano con la capacidad de diagnosticar el estado actual de la ciberseguridad para cada contexto empresarial, con conocimientos y habilidades para implementar políticas y controles que garantizan la seguridad digital, aplicando estándares y metodologías nacionales e internacionales que permitan monitorear y controlar ciberamenazas. El tecnólogo con actitud crítica y ética tendrá la capacidad para realizar evaluaciones objetivas dentro del marco de la legislación aplicable, articulado con la mejora continua. Además, podrá demostrar la apropiación de la cultura del autoaprendizaje, actualización permanente, trabajo colaborativo, valores y principios éticos, que le permitirán abordar las nuevas tendencias, innovar en su proceso personal y laboral, apoyando procesos de transformación organizacional.

  .container.tarjeta.tarjeta__template--azul-claro.p-4.p-md-5.mb-5(data-aos="fade-up")
    .titulo__template--a.mb-4
      span.h4 3. Estrategia metodológica
    p.mb-3  El programa se aborda teniendo como referencia principal el ciclo <i>Deming</i>, PHVA (Planear – Hacer – Verificar – Actuar), de tal manera que se puedan desarrollar los contenidos de conocimiento y prácticos, de forma ordenada, utilizando herramientas de formación virtual con contenidos de texto, interactivos y multimedia.
    p.mb-3  La estrategia metodológica se centrará en la <b>construcción de autonomía</b> para garantizar la calidad de la formación en el marco de la <b>formación por competencias</b>, el <b>aprendizaje por proyectos</b> y el uso de técnicas <b>didácticas activas</b> que estimulan el pensamiento para la resolución de problemas simulados y reales; soportada en la utilización de las tecnologías de la información y la comunicación, integradas en ambientes virtuales de aprendizaje, que en todo caso recrean el contexto productivo y vinculan al aprendiz con la realidad cotidiana y el desarrollo de las competencias.
    p.mb-3  Igualmente, la estrategia metodológica estimulará de manera permanente la autocrítica y la reflexión del aprendiz sobre el quehacer y los resultados de aprendizaje que logra a través de la vinculación activa de las cuatro fuentes de información para la construcción de conocimiento:
    ul.lista-ul
      li
        i.fas.fa-check  
        p.mb-0 El instructor - tutor
      li
        i.fas.fa-check
        p.mb-0 El entorno 
      li
        i.fas.fa-check 
        p.mb-0 Las TIC
      li
        i.fas.fa-check 
        p.mb-0 El trabajo colaborativo

  //- Créditos
  .container.tarjeta.tarjeta__template--azul-claro.p-4.p-md-5.mb-5(data-aos="fade-up")
    .titulo__template--a.mb-4
      span.h4 Créditos

    
    .creditos
      div(
        v-for="(creditoKey, index) of Object.keys(creditosData)"
        :class="index != Object.keys(creditosData).length -1 ? 'mb-4' : ''" 
      )
        .creditos__titulo {{configTitulos[creditoKey]}}
        table
          tbody
            tr(
              v-for="(item, idx) of creditosData[creditoKey]" 
              :key="creditoKey+idx"
            )
              td.text-bold(colspan='2' v-html="renderText(item.nombre)")
              td(colspan='2' v-html="renderText(item.cargo)")
              td(colspan='3' v-html="renderText(item.centro)")

  Footer

</template>
<script>
export default {
  name: 'Inicio',
  data: () => ({
    configTitulos: {
      liderEquipo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      contenidoInstruccional: 'CONTENIDO INSTRUCCIONAL',
      desarrolloProducto:
        'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      gestoresRepositorio: 'GESTORES DE REPOSITORIO',
    },
  }),
  computed: {
    creditosData() {
      return this.$config.creditos
    },
  },
  methods: {
    renderText(textObj) {
      let newText = ''
      if (Array.isArray(textObj)) {
        textObj.forEach((texto, index) => {
          newText += (index ? '<br/>' : '') + texto
        })
      } else {
        newText += textObj
      }
      return newText
    },
  },
}
</script>

<style lang="sass">
.creditos
  td, th
    border-color: $color-sistema-c
</style>
