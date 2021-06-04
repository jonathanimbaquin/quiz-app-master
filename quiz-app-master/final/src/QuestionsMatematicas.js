import React, { useState } from "react";
import "./Questions.css";
import { Link } from "react-router-dom";

function QuestionsMatematicas() {
  const questions = [
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

export default QuestionsMatematicas;
