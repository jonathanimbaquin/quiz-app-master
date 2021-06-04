import React, { useState } from "react";
import "./Questions.css";
import { Link } from "react-router-dom";

function QuestionsSociales() {
  const questions = [
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

export default QuestionsSociales;
