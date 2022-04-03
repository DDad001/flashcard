import React, { useState, useEffect } from "react";
import { HTMLCards, CsharpCards } from "../Services/DataService";
import { Container, Col, Row, Button } from "react-bootstrap";
import '../App.css';

function FlashCards() {

  const [displayQuestions, setDisplayQuestions] = useState([]);
  const [Question, setQuestion] = useState([]);
  const [showHTML, setShowHTML] = useState(false);
  const [showCShap, setShowCShap] = useState(false);
  const [answer, setAnswer] = useState([]);
  const [showAnswer, setShowAnswer] = useState(false);

    const handleAnswer = () => {
        setShowAnswer(!showAnswer);
        // let result = Question.map((item) => item.htmlAnswer)
        // setAnswer(result);
    }

  const handleHtmlQuestions = async () => {
    setShowAnswer(false);
    setShowHTML(true);
    setShowCShap(false);
    let displayHTMLQuestions = await HTMLCards();
    console.log(displayHTMLQuestions)
    //Randomizing array
    // let list = displayHTMLQuestions;
    // list = list.sort(() => Math.random() - 0.5)

    setDisplayQuestions(displayHTMLQuestions);

    //Randomizing array and pulling out one object
    let r = Math.floor(Math.random() * displayHTMLQuestions.length);

    //Filtering out New array and grabbing just the html Question
    let displayResult = displayHTMLQuestions.filter((item) => item.id == r)
    console.log(displayResult);
   
    // let Result = displayHTMLQuestions.filter((item) => item.id).map((item) => item.id);
    // console.log(Result);
    
    setQuestion(displayResult);
  };



  const handleCSharpQuestions = async () => {
    setShowAnswer(false);
    setShowHTML(false);
    setShowCShap(true);
    let CSharpQuestions = await CsharpCards();
    console.log(CSharpQuestions)
    setDisplayQuestions(CSharpQuestions);

    //Randomizing array and pulling out one object
    let r = Math.floor(Math.random() * CSharpQuestions.length);

    //Filtering out New array and grabbing just the html Question
    let displayResult = CSharpQuestions.filter((item) => item.id == r)
    console.log(displayResult);

    // let Result = CSharpQuestions.filter((item) => item.id).map((item) => item.CShapQuestions);
    // console.log(Result);

    setQuestion(displayResult);
  }


  return (
    <div>
      <Container>
        <Row>
          <Col lg={12} className="d-flex justify-content-center mt-4">
            <h1>Coding Practice Questions</h1>
          </Col>
        </Row>

        <Row>
          <Col lg={12} className="d-flex justify-content-center mt-3 mx-4">
            <Button onClick={handleHtmlQuestions}>
                {
                    showHTML ?
                    <p className="m-0">Next HTML Question {'>>'}</p>
                    :
                    <p className="m-0">Practice HTML Questions</p>
                }
            </Button>
            <Button onClick={handleCSharpQuestions} className="mx-5">
            {
                    showCShap ?
                    <p className="m-0">Next C# Question {'>>'}</p>
                    :
                    <p className="m-0">Practice C# Questions</p>
             }
            </Button>
          </Col>
        </Row>

        <Row>
          <Col lg={12} className="d-flex justify-content-center mt-5">
            {Question.map((item, id) => {
              return (
                <div key={id}>
                {
                 showHTML ? (
                   <div>
                   <h2>{item.htmlQuestion}</h2>
                 </div>
                  ) 
                  : showCShap ? (
                    <div>
                    <h2>{item.cShapQuestion}</h2>
                  </div>
                  ) 
                  : null
                 }
                </div>
              );
            })}
          </Col>
        </Row>

        <Row>
          <Col lg={12} className="d-flex justify-content-center mt-5">
        
                    {Question.map((item, id) => {
                        return (
                            <div key={id}>
                            {
                            showAnswer && showHTML ? (
                               <div>
                               <h2>{item.htmlAnswer}</h2>
                             </div>
                              ) 
                              : showAnswer && showCShap ? (
                                <div>
                                <h2>{item.cShapAnswer}</h2>
                              </div>
                              ) 
                              : null
                             }
                            </div>
                        );
                      })}
          </Col>
        </Row>


        <Row>
            <Col lg={12} className="d-flex justify-content-center mt-5">
                <Button onClick={handleAnswer}>Reveal Answer</Button>
            </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FlashCards;
