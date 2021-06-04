import React, { useState } from "react";
import "./Questions.css";
import { Link } from "react-router-dom";

function QuestionsCiencias() {
  const questions = [
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

export default QuestionsCiencias;
