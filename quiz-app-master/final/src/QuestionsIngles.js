import React, { useState } from "react";
import "./Questions.css";
import { Link } from "react-router-dom";

function QuestionsIngles() {
  const questions = [
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

export default QuestionsIngles;
