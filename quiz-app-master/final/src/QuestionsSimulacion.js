import React, { useState } from "react";
import "./Questions.css";
import { Link } from "react-router-dom";

function QuestionsSimulacion() {
  const questions = [
    {
      questionText:
        "RESPONDA LA PREGUNTA 1 DE ACUERDO CON LA SIGUIENTE INFORMACIÓN: Creo de todo corazón en el lema “El mejor gobierno es el que tiene que gobernar menos”, y me gustaría verlo hacerse efectivo más rápida y sistemáticamente. Bien llevado, finalmente resulta en algo en lo que también creo: “El mejor gobierno es el que no tiene que gobernar en absoluto”. Y cuando los pueblos estén preparados para ello, ése será el tipo de gobierno que tengan. En el mejor de los casos, el gobierno no es más que una conveniencia, pero en su mayoría los gobiernos son inconvenientes y todos han resultado serlo en algún momento. Las objeciones que se han hecho a la existencia de un ejército permanente, que son varias y de peso, y que merecen mantenerse, pueden también por fin esgrimirse en contra del gobierno. El ejército permanente es sólo el brazo del gobierno establecido. El gobierno en sí, que es únicamente el modo escogido por el pueblo para ejecutar su voluntad, está igualmente sujeto al abuso y la corrupción antes de que el pueblo pueda actuar a través suyo. Somos testigos de la actual guerra con México, obra de unos pocos individuos comparativamente, que utilizan como herramienta al gobierno actual; en principio, el pueblo no habría aprobado esta medida. Pero, para hablar en forma práctica y como ciudadano, a diferencia de aquellos que se llaman “anti-gobiernistas”, yo pido, no como “antigobiernista” sino como ciudadano, y de inmediato, un mejor gobierno. Permítasele a cada individuo dar a conocer el tipo de gobierno que lo impulsaría a respetarlo y eso ya sería un paso ganado para obtener ese respeto. Después de todo, la razón práctica por la cual, una vez que el poder está en manos del pueblo, se le permite a una mayoría, y por un período largo de tiempo, regir, no es porque esa mayoría esté tal vez en lo correcto, ni porque le parezca justo a la minoría, sino porque físicamente son los más fuertes. Pero un gobierno en el que la mayoría rige en todos los casos no se puede basar en la justicia. No es deseable cultivar respeto por la ley más de por lo que es correcto. La única obligación a la que debo someterme es a la de hacer siempre lo que creo correcto. La ley nunca hizo al hombre un ápice más justo, y a causa del respeto por ella, aún el hombre bien dispuesto se convierte a diario en un agente de la injusticia. ¿Cuál de los siguientes es un ejemplo que menciona el autor para apoyar su posición frente a los Gobiernos?",
      answerOptions: [
        {
          answerText: "A. La guerra con México.",
          isCorrect: true,
        },
        {
          answerText: "B. Los abusos del ejército.",
          isCorrect: false,
        },
        {
          answerText: "C. La tiranía de las mayorías.",
          isCorrect: false,
        },
        {
          answerText: "D. La debilidad de las minorías.",
          isCorrect: false,
        },
      ],
    },
    {
      questionText:
        "RESPONDA LA PREGUNTA 2 DE ACUERDO CON LA SIGUIENTE INFORMACIÓN ● Las filosofías comienzan en filosofía y acaban en retórica. (59)  ● La filosofía es actitud solitaria.La adhesión de cualquier muchedumbre a una doctrina la convierte en mitología. (110) ● Los sistemas filosóficos difieren los unos de los otros menos en la manera de resolver que en la manera de escamotear los problemas. (117) ● Los que se ocupan de filosofía no la tomarían tan en serio, si generalmente no vivieran de ella como profesión. (130)● En filosofía lo que no sea fragmento es estafa. (162). La principal diferencia entre un sistema filosófico y otro consiste en la manera de",
      answerOptions: [
        {
          answerText: "A. Plantear los problemas.",
          isCorrect: false,
        },
        {
          answerText: "B. Resolver los problemas.",
          isCorrect: false,
        },
        {
          answerText: "C. Esquivar los problemas.",
          isCorrect: true,
        },
        {
          answerText: "D. Burlarse de los problemas.",
          isCorrect: false,
        },
      ],
    },
    {
      questionText:
        "RESPONDA LA PREGUNTA 3 DE ACUERDO CON LA SIGUIENTE INFORMACIÓN: 1984 es una novela futurista que tiene lugar en una sociedad totalitaria. Los ciudadanos de esta sociedad son controlados por una figura omnipresente conocida como el Gran Hermano. En el siguiente apartado, un miembro defensor del orden le explica al protagonista el principal propósito del régimen. No habrá lealtad; no existirá más fidelidad que la que se debe al Partido, ni más amor que el amor al Gran Hermano. No habrá risa, excepto la risa triunfal cuando se derrota a un enemigo. No habrá arte, ni literatura, ni ciencia. No habrá ya distinción entre la belleza y la fealdad. Todos los placeres serán destruidos. Pero siempre, no lo olvides, Winston, siempre habrá el afán de poder, la sed de dominio, que aumentará constantemente y se hará cada vez más sutil. Siempre existirá la emoción de la victoria, la sensación de pisotear a un enemigo indefenso. Si quieres hacerte una idea de cómo será el futuro, figúrate una bota aplastando un rostro humano... incesantemente. ¿Cuál de las siguientes afirmaciones es incompatible con las políticas del Partido?",
      answerOptions: [
        {
          answerText: "A. El pueblo debe mantenerse unido.",
          isCorrect: false,
        },
        {
          answerText: "B. La individualidad debe ser eliminada.",
          isCorrect: true,
        },
        {
          answerText: "C. El poder está en ser fiel a uno mismo.",
          isCorrect: false,
        },
        {
          answerText:
            "D. Un pueblo ignorante es más poderoso.D. Un pueblo ignorante es más poderoso.",
          isCorrect: false,
        },
      ],
    },
    {
      questionText:
        "RESPONDA LA PREGUNTA 4 DE ACUERDO CON LA SIGUIENTE INFORMACIÓN El conocimiento no consiste en una serie de teorías auto consistentes que tiende a converger en una perspectiva ideal; no consiste en un acercamiento gradual hacia la verdad. Por el contrario, el conocimiento es un océano, siempre en aumento, de alternativas incompatibles entre sí (y tal vez inconmensurables); toda teoría particular, todo cuento de hadas, todo mito, forman parte del conjunto que obliga al resto a una articulación mayor, y todos ellos contribuyen, por medio de este proceso competitivo, al desarrollo de nuestro conocimiento. No hay nada establecido para siempre, ningún punto de vista puede quedar omitido en una explicación comprehensiva (...). Expertos y profanos, profesionales y diletantes, forjadores de utopías y mentirosos, todos ellos están invitados a participar en el debate y a contribuir al enriquecimiento de la cultura. La tarea del científico no ha de ser por más tiempo “la búsqueda de la verdad”, o “la glorificación de dios”, o “la sistematización de las observaciones” o “el perfeccionamiento de predicciones”. Todas estas cosas no son más que efectos marginales de una actividad a la que se dirige ahora su atención y que consiste en “hacer de la causa más débil la causa más fuerte”, como dijo el sofista, “por ello en apoyar el movimiento de conjunto”. ¿Cuál de las siguientes opciones describe mejor la relación entre el contenido del texto y el título de la obra de la que se extrajo?",
      answerOptions: [
        {
          answerText:
            "A. El texto introduce la propuesta de un nuevo método para la investigación científica, diferente del tradicional.",
          isCorrect: false,
        },
        {
          answerText:
            "B. El texto ataca diferentes ideas a propósito de qué es aquello en lo que consiste el llamado “método científico”.",
          isCorrect: false,
        },
        {
          answerText:
            "C. El texto crítica concepciones del conocimiento científico, el cual se ha concebido como resultado de un método.",
          isCorrect: true,
        },
        {
          answerText:
            "D. El texto argumenta a favor de la pluralidad de métodos disponibles para que cada ciencia alcance sus verdades.",
          isCorrect: false,
        },
      ],
    },
    {
      questionText:
        "Como argumento a favor del vegetarianismo, una persona afirma que consumir carne es nocivo para los humanos porque el animal, del cual se obtiene esta, sufre en el proceso, y esto produce energías negativas que se transmiten al consumidor y perjudican su salud. Otra persona, igualmente a favor del vegetarianismo, sostiene que el consumo de productos de origen animal es un acto amoral, en la medida en que resulta del abuso e insensibilidad del ser humano ante los demás seres vivos. ¿Cuál de las siguientes afirmaciones sobre la relación entre las opiniones presentadas NO es correcta?",
      answerOptions: [
        {
          answerText:
            "A. Son similares, porque ambas van en contra del consumo de carne.",
          isCorrect: false,
        },
        {
          answerText:
            "B. Son complementarias, porque ambas promueven el vegetarianismo cuando argumentan la obligación de proteger a los animales.",
          isCorrect: true,
        },
        {
          answerText:
            "C. Son diferentes, porque la primera aboga por la salud del ser humano y la segunda, por el bienestar de los animales.",
          isCorrect: false,
        },
        {
          answerText:
            "D. Son disímiles, porque la primera se centra en cómo el animal afecta al ser humano y la segunda, en cómo el ser humano afecta al animal.D. Son disímiles, porque la primera se centra en cómo el animal afecta al ser humano y la segunda, en cómo el ser humano afecta al animal.",
          isCorrect: false,
        },
      ],
    },
    {
      questionText:
        "Los habitantes de un barrio de clase media se oponen a que se construyan, en este, viviendas de interés social. Afirman que las personas de escasos recursos económicos que se beneficiarían con estas viviendas representarían un peligro para la seguridad de los habitantes actuales del barrio. Señalan que las zonas más pobres de la ciudad son también las más inseguras, y argumentan que esto prueba que una persona de escasos recursos tiene una probabilidad más alta de ser un delincuente que una persona acomodada. De los siguientes enunciados, ¿cuál contiene un argumento válido en contra de las afirmaciones de los habitantes del barrio de clase media?",
      answerOptions: [
        {
          answerText:
            "A. Quienes ejercen la delincuencia en una zona pobre de la ciudad pueden no ser habitantes de esa zona.",
          isCorrect: true,
        },
        {
          answerText:
            "B. Entre los delincuentes nunca hay personas de escasos recursos, pues todos son adinerados precisamente gracias a sus actividades delictivas.",
          isCorrect: false,
        },
        {
          answerText:
            "C. Los delincuentes que habitan en las zonas más pobres de la ciudad dejarían de violar la ley, si contaran con mejores condiciones de vida.",
          isCorrect: false,
        },
        {
          answerText:
            "D. Hay casos en que la pobreza y la falta de oportunidades llevan a una persona, en un momento de desesperación, a cometer un delito.",
          isCorrect: false,
        },
      ],
    },
    {
      questionText:
        "Un padre de familia no está de acuerdo con la participación de profesores homosexuales en la educación de sus hijos. Al respecto, el rector del colegio argumenta: “Las personas con inclinaciones homosexuales, como todas las personas, merecen ser amadas. Además, en muchos países gran parte de la población masculina y femenina es homosexual, y las preferencias sexuales son el resultado de una compleja interacción de la biología con el medio ambiente. Yo creo que los homosexuales pueden enseñar, siempre y cuando controlen su comportamiento en clase y no afecten la orientación sexual de los estudiantes”. ¿Cuál de los siguientes enunciados del rector contiene un prejuicio cuestionable?",
      answerOptions: [
        {
          answerText:
            "A. En muchos países, gran parte de la población masculina y femenina es homosexual.",
          isCorrect: false,
        },
        {
          answerText:
            "B. Las personas con inclinaciones homosexuales, como todas las personas, merecen ser amadas.",
          isCorrect: false,
        },
        {
          answerText:
            "C. Las preferencias sexuales son el resultado de una compleja interacción de la biología con el medio ambiente.",
          isCorrect: false,
        },
        {
          answerText:
            "D. Los homosexuales pueden enseñar, siempre y cuando controlen su comportamiento en clase y no afecte la orientación sexual de los estudiantes.",
          isCorrect: true,
        },
      ],
    },
    {
      questionText:
        "Los siguientes magnicidios tuvieron incidencia en la historia política de Colombia durante el siglo XX: 1. Asesinato de Luis Carlos Galán. 2. Asesinato de Jorge Eliécer Gaitán. 3. Asesinato de Rafael Uribe Uribe. 4. Asesinato de Álvaro Gómez Hurtado.",
      answerOptions: [
        { answerText: "A. 2, 3, 1 y 4.", isCorrect: false },
        { answerText: "B. 3, 2, 1 y 4.", isCorrect: true },
        { answerText: "C. 3, 1, 2 y 4.", isCorrect: false },
        { answerText: "D. 4, 3, 2 y 1.", isCorrect: false },
      ],
    },
    {
      questionText:
        "En Colombia se debate sobre la posibilidad de legalizar el tráfico y consumo de drogas, para contrarrestar los efectos económicos y sociales del narcotráfico. Algunos sectores sociales plantean que esta alternativa es indeseable y proponen, en cambio, fortalecer los procesos de sensibilización entre los consumidores sobre los riesgos de salud asociados al consumo de drogas. En contraste, otros sectores sociales proponen endurecer las penas para los productores y expendedores de drogas, así como para aquellos consumidores que porten más de la dosis legalmente permitida. Las dos posiciones frente a la legalización de las drogas descritas en el texto son",
      answerOptions: [
        {
          answerText:
            "A. diferentes, porque una está a favor de la legalización y la otra a favor del endurecimiento de las sanciones legales.",
          isCorrect: false,
        },
        {
          answerText:
            "B. similares, porque ambas consideran que la regulación legal del consumo tiene un efecto directo sobre el narcotráfico.",
          isCorrect: false,
        },
        {
          answerText:
            "C. diferentes, porque una plantea que la lucha contra el narcotráfico debe ser por la vía de la represión y la otra por la vía de la prevención del consumo.",
          isCorrect: true,
        },
        {
          answerText:
            "D. similares, porque ambas están en contra de la legalización y se enfocan en la protecciónde los consumidores de drogas.",
          isCorrect: false,
        },
      ],
    },
    {
      questionText:
        "Una persona que vive en Colombia tiene inversiones en dólares en Estados Unidos, y sabe que la tasa de cambio del dólar respecto al peso colombiano se mantendrá constante este mes, siendo 1 dólar equivalente a 2.000 pesos colombianos y que su inversión, en dólares, le dará ganancias del 3 % en el mismo periodo. Un amigo le asegura que en pesos sus ganancias también serán del 3 %. La afirmación de su amigo es:",
      answerOptions: [
        {
          answerText:
            "A. Correcta, pues, sin importar las variaciones en la tasa de cambio, la proporción en que aumenta la inversión en dólares es la misma que en pesos.",
          isCorrect: false,
        },
        {
          answerText:
            "B. incorrecta, pues debería conocerse el valor exacto de la inversión para poder calcular la cantidad de dinero que ganará.",
          isCorrect: false,
        },
        {
          answerText:
            "C. correcta, pues el 3 % representa una proporción fija en cualquiera de las dos monedas, puesto que la tasa de cambio permanecerá constante.",
          isCorrect: true,
        },
        {
          answerText:
            "D. incorrecta, pues el 3 % representa un incremento, que será mayor en pesos colombianos, pues en esta moneda cada dólar representa un valor 2.000 veces mayor.",
          isCorrect: false,
        },
      ],
    },
    {
      questionText:
        "Se necesita comparar la información sobre la obesidad, con la información sobre muertes causadas por otra enfermedad en P3. Se sabe que en P3 el número de muertes por esa enfermedad al año es 1.700. Tomando este valor, multiplicándolo por cien y dividiéndolo entre el número total de muertes en P3, se obtiene el porcentaje de fallecimientos que causa esta enfermedad. Usando la información, ¿es posible determinar qué porcentaje de muertes en P3 ocurre debido a esta otra enfermedad?",
      answerOptions: [
        {
          answerText:
            "A. Sí, porque adicionando el número de muertes de los países se obtiene el total de muertes que permite calcular el porcentaje pedido.",
          isCorrect: false,
        },
        {
          answerText:
            "B. Sí, porque solamente falta conocer el número total de muertes en P3, que se obtiene con la información de la figura.",
          isCorrect: true,
        },
        {
          answerText:
            "C. No, porque en la figura faltan los datos sobre el número total de muertes en cada país.",
          isCorrect: false,
        },
        {
          answerText:
            "D. No, porque los datos de P3 son información sobre las muertes por obesidad.",
          isCorrect: false,
        },
      ],
    },
    {
      questionText:
        "El IMC de una persona se calcula dividiendo su peso (en kg) entre su estatura (en m) elevada al cuadrado. De un hombre de P2 que tiene 30 años, pesa 75 kg y tiene una estatura de 3/2 m, puede afirmarse que forma parte del",
      answerOptions: [
        {
          answerText: "A. 1 % de hombres entre 26 y 60 años con bajo peso.",
          isCorrect: false,
        },
        {
          answerText: "B. 50 % de hombres entre 26 y 60 años con sobrepeso.",
          isCorrect: false,
        },
        {
          answerText: "C. 1 % de hombres entre 26 y 60 años con obesidad alta.",
          isCorrect: false,
        },
        {
          answerText:
            "D. 13 % de hombres entre 26 y 60 años con obesidad leve.",
          isCorrect: true,
        },
      ],
    },
    {
      questionText:
        "Si en un rectángulo se aumenta la longitud de uno de sus lados en 100 %, su área",
      answerOptions: [
        { answerText: "A. aumenta en un 50 %.", isCorrect: false },
        { answerText: "B. se duplica.", isCorrect: true },
        { answerText: "C. no cambia.", isCorrect: false },
        { answerText: "D. aumenta en 100 unidades.", isCorrect: false },
      ],
    },
    {
      questionText:
        "El sistema de comunicaciones de un hotel utiliza los dígitos 2, 3, 4 y 5 para asignar un número de extensión telefónica de 4 dígitos diferentes a cada habitación. ¿Cuántas habitaciones del hotel pueden tener extensión telefónica?",
      answerOptions: [
        {
          answerText: "A. 24",
          isCorrect: false,
        },
        {
          answerText: "B. 56",
          isCorrect: false,
        },
        {
          answerText: "C. 120",
          isCorrect: true,
        },
        {
          answerText: "D. 256",
          isCorrect: false,
        },
      ],
    },
    {
      questionText:
        "En una especie de pato se pueden encontrar individuos con cuello corto e individuos con cuello largo. En esta especie se encuentran una mayor cantidad de patos con cuello largo. En un experimento se aparearon una hembra y un macho de cuello largo; de sus hijos 3/4 son de cuello largo y 1/4 son de cuello corto. De los genotipos de los padres puede afirmarse que",
      answerOptions: [
        {
          answerText: "A. ambos padres eran heterocigotos.",
          isCorrect: true,
        },
        {
          answerText:
            "B. el macho era heterocigoto y la hembra era homocigoto recesivo.",
          isCorrect: false,
        },
        {
          answerText:
            "C. el macho era heterocigoto y la hembra era homocigoto dominante.",
          isCorrect: false,
        },
        {
          answerText: "D. ambos padres eran homocigotos dominantes.",
          isCorrect: false,
        },
      ],
    },
    {
      questionText:
        "La polilla grande de la cera es un patógeno que mata las larvas de las abejas y causa grandes pérdidas económicas a los apicultores de todo el mundo, por la gran cantidad de panales que destruye. Según la información anterior, ¿cuál de las siguientes preguntas está relacionada con la problemática descrita y puede resolverse mediante una investigación en el campo de las ciencias naturales?",
      answerOptions: [
        {
          answerText:
            "A. ¿En qué etapa del ciclo biológico la polilla afecta los panales de las abejas?",
          isCorrect: true,
        },
        {
          answerText:
            "B. ¿Cómo se afecta la economía de los apicultores por causa de la polilla?",
          isCorrect: false,
        },
        {
          answerText:
            "C. ¿Cuáles son las características morfológicas de las abejas usadas en la apicultura?",
          isCorrect: false,
        },
        {
          answerText:
            "D. ¿Cuánto invierten al año los apicultores para el control de la polilla en la región?",
          isCorrect: false,
        },
      ],
    },
    {
      questionText:
        "Unos estudiantes analizaron el agua de un río y encontraron que contenía altos niveles de cadmio y plomo, que son metales tóxicos. Al estudiar el origen de la contaminación descubrieron que los metales provenían de filtraciones de la descomposición de pilas en un botadero de basura cercano. Los estudiantes proponen que a futuro se deberían separar las pilas del resto de los desechos en contenedores completamente aislados. Con base en la información anterior, se puede afirmar que la propuesta de los estudiantes es",
      answerOptions: [
        {
          answerText:
            "A. inapropiada, porque es mejor desarmar las pilas y luego desecharlas.",
          isCorrect: false,
        },
        {
          answerText:
            "B. apropiada, porque se evitaría la presencia de metales pesados en el agua.",
          isCorrect: true,
        },
        {
          answerText:
            "C. apropiada, porque luego se podrían reutilizar las pilas desechadas.",
          isCorrect: false,
        },
        {
          answerText:
            "D. inapropiada, porque es mejor quemarlas ya que no entrarían en contacto con el agua.",
          isCorrect: false,
        },
      ],
    },
    {
      questionText:
        "Una estudiante calentó en una estufa, durante un minuto, un litro de agua que inicialmente estaba a 15 °C. La temperatura final del agua fue 17 °C. Si ahora calienta dos litros de agua que inicialmente están a 15 °C, en la misma estufa durante un minuto, se espera que la temperatura final de los dos litros de agua sea",
      answerOptions: [
        { answerText: "A. 19 ºC.", isCorrect: false },
        { answerText: "B. 17 ºC.", isCorrect: false },
        { answerText: "C. 16 ºC.", isCorrect: true },
        { answerText: "D. 15 ºC.", isCorrect: false },
      ],
    },
    {
      questionText:
        "En la extracción minera de oro se emplea cianuro de sodio, zinc y ácidos fuertes durante el proceso de purificación. Los ácidos fuertes que pueden emplearse son ácido sulfúrico (H2SO4) de una concentración volumen-volumen del 78 % o ácido nítrico (HNO3) que contenga 112 mL de ácido por cada 200 mL de solución. Si en la extracción del oro se requiere usar el ácido de mayor concentración, ¿cuál ácido debería emplearse?",
      answerOptions: [
        {
          answerText:
            "A. El HNO3, porque como su volumen es mayor que el de la solución de H2SO4 tiene una mayor concentración.",
          isCorrect: false,
        },
        {
          answerText:
            "B. El H2SO4, porque la concentración volumen-volumen del HNO3 es del 56%.",
          isCorrect: true,
        },
        {
          answerText:
            "C. El HNO3, porque su concentración volumen-volumen es del 112 %.",
          isCorrect: false,
        },
        {
          answerText:
            "D. El H2SO4, porque como su volumen es menor que el de la solución de HNO3 se encuentra más concentrado.",
          isCorrect: false,
        },
      ],
    },
    {
      questionText:
        "When I was a child in Ireland, I went to bed late, and I could not sleep past six. One morning, I found a Spanish television show with a French man who was painting a beautiful countryside with oil paints. Right then, I began watching this show. With his quiet voice he explained his natural way of painting, and he quickly made trees and rivers, simply by moving his hand across the paper. He made it look simple and easy, so I thought I could do it by myself. Every Sunday morning, I would try to paint what he was painting on the screen, but I needed oil paints to make my painting as beautiful as his. I could not buy oil paints; I was only seven, and my parents would not buy them for me. Then I decided to use my mother´s cosmetics and paper for my painting. I was ready to paint my first picture. After my mum saw what I did with her things, I was told I could not paint again. This put an end to my idea of using food the next time to make a picture. After a while, I stopped watching the French painter. It was difficult for me to simply watch him when I was unable to paint my own pictures. Where was the painter from?",
      answerOptions: [
        {
          answerText: "A. Ireland",
          isCorrect: false,
        },
        {
          answerText: "B. Spain",
          isCorrect: false,
        },
        {
          answerText: "C. France",
          isCorrect: true,
        },
        {
          answerText: "D. England",
          isCorrect: false,
        },
      ],
    },
    {
      questionText:
        "James Salter was a pilot in the united State Air Force. He abandoned the military profession in 1957 after the publication of his first novel, The Hunters. He is best known as a novelist, but during the sixties and seventies, he worked in film making. Salter made documentaries, wrote texts for films, and even was the director of a film called Three, starring Charlotte Rampling and Sam Waterston. In Passionate Falsehood, which was adapted from Salter´s book Burning the Days, published in The New York in 1997, Salter tells the story of his life in film. Salter´s time in the film world is both good and bad. In Rome, he met directors and stars. In New York, he explored the city with Robert Redford and enjoyed being famous. Deborah Treisman and Michael Agger have talked about Salter. Nick Paumgarten in The Last Book, describes Salter´s opinion about his film career: “Of sixteen texts for movies, only four were popular. There was money, attractive women, and entrance into rooms where there were stories more for the dinner table then for the page.” Salter thought he was wasting his time. Perhaps he wasted his time a larger artistic way, but it still makes for attractive reading. The Last Book is available to everyone in online stores. James Salter played an important part in the making of movies from",
      answerOptions: [
        {
          answerText: "A. 1960 to 1979.",
          isCorrect: true,
        },
        {
          answerText: "B. 1960 to 1970.",
          isCorrect: false,
        },
        {
          answerText: "C. 1960 to 1985.",
          isCorrect: false,
        },
        {
          answerText: "D. 1960 to 1988",
          isCorrect: false,
        },
      ],
    },
    {
      questionText:
        "Today we have the pleasure of showing you the best letter written by our customer Mark. He wins £25 for writing about us this week. He is so happy with the orders at Swift Pizza and Sandwich house that he wants to declare a holiday to celebrate his experience here: “Happy burger and Merry Sandwichmas to everyone!” he wrote. Wednesday May 18, 2011. One typical day I was too tired after working all day long to cook for myself, and I was very hungry, I really wanted something to eat, so I decided to find aa burger. I ordered a half-pound burger and a lamb and chicken sandwich. I also made some special orders for extra cheese and vegetables. Food arrived very fast (less than twenty minutes) and was hot and fresh. The burger was delicious, and left me wanting more – fortunately I had the sandwich left. It felt as if it had been cut just a minute before I opened it – juicy, fresh, and great. Every Single special request I made was completely satisfied, 100%! And the best thing was that all of the above and some drinks cost me ONLY 10 dollars! If that doesn´t say value for money, I don´t know what does. It certainly fells great to find new excellent food delivery companies for whenever you don´t feel like cooking yourself. I recently had a sad experience with my usual take away restaurant, so I decided to change to something else – and on my first try I got what I wanted! Order now from Swift Pizza and Sandwich House. According to the text, the customer",
      answerOptions: [
        {
          answerText: "A. left a £25 tip to the waiters who work there.",
          isCorrect: false,
        },
        {
          answerText:
            "B. celebrated Christmas and New Year at this restaurant.",
          isCorrect: false,
        },
        {
          answerText: "C. found this great restaurant after many attempts.",
          isCorrect: false,
        },
        {
          answerText: "D. posted an excellent review about this restaurant.",
          isCorrect: true,
        },
      ],
    },
    {
      questionText:
        "I went to Colombia last summer. My journey began on the Caribbean coast and ended on the border with Ecuador. Colombia is a splendid country, extremely diverse and full of wonderful people. I will tell you why. In South Colombia there is a city called Pereira; just outside you can find an area where you will see the farm Villa Maria – a hidden paradise that takes a long tine to get to -. It is working coffee farm located in the middle of a valley. Coffee and plantain grow as far the eye can see. The farm is made up of the house and the processing plant. The family business has guest at the house for just$45.000 a night. This includes three home-cooked meals a day, a swimming pool, and as much coffee as you can drink. The scene is quite unbelievable. Bamboo chairs rest on the corners of the Villa, mangos hang from the trees and parrots and birds fly wild. A wonderful man named Hector who runs the farm is happy to show guest around the coffee processing plant. By day, the only sounds are of the horses coming down the valley side carrying food. By night, the wildlife comes alive, and depending on the time of the years – thunderstorms offer a spectacular light show. For those who wish to escape, Villa maria is the answer. This is just one attraction of many in Colombia. I could write pages on the country and not get bored. I graduate next year, and I can´t wait to return to this beautiful country. Some of those reading may be stimulated to do the same. What is the writer trying to do in this article?",
      answerOptions: [
        {
          answerText: "A. convince people to buy a Colombian coffee farm.",
          isCorrect: false,
        },
        {
          answerText: "B. tell readers Torun a coffee business in Colombia.",
          isCorrect: false,
        },
        {
          answerText:
            "C. invite tourists to write about places they visit in Colombia.",
          isCorrect: false,
        },
        {
          answerText: "D. encourage tourists to visit Colombia.",
          isCorrect: true,
        },
      ],
    },
    {
      questionText:
        "RESPONDA LA PREGUNTA Grandma, shall I hold those bags for you?",
      answerOptions: [
        {
          answerText: "A. I'm not afraid!",
          isCorrect: false,
        },
        {
          answerText: "B. What's the matter?",
          isCorrect: false,
        },
        {
          answerText: "C. That's fine.",
          isCorrect: true,
        },
        {
          answerText: "D. I dont know",
          isCorrect: false,
        },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="questions">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
          <Link to="/">
            <button className="button__exit">Exit</button>
          </Link>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default QuestionsSimulacion;
