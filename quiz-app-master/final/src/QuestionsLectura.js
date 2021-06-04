import React, { useState } from "react";
import "./Questions.css";
import { Link } from "react-router-dom";

function QuestionsLectura() {
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

export default QuestionsLectura;
