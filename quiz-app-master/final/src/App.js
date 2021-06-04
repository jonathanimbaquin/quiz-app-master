import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Categories from "./Categories";
import Home from "./Home";
import Questions from "./QuestionsSociales";
import Header from "./Header";
import Login from "./Login";
import QuestionsSociales from "./QuestionsSociales";
import QuestionsLectura from "./QuestionsLectura";
import QuestionsMatematicas from "./QuestionsMatematicas";
import QuestionsCiencias from "./QuestionsCiencias";
import QuestionsIngles from "./QuestionsIngles";
import QuestionsSimulacion from "./QuestionsSimulacion";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/Categories">
            <Categories />
          </Route>
          <Route path="/questionsSociales">
            <QuestionsSociales />
          </Route>
          <Route path="/questionsLectura">
            <QuestionsLectura />
          </Route>
          <Route path="/questionsMatematicas">
            <QuestionsMatematicas />
          </Route>
          <Route path="/questionsCiencias">
            <QuestionsCiencias />
          </Route>
          <Route path="/questionsIngles">
            <QuestionsIngles />
          </Route>
          <Route path="/questionsSimulacion">
            <QuestionsSimulacion />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
