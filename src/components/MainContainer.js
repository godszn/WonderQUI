import React, { useState } from 'react'
import './Styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import newbtn from '../icons/add.png'; 



const MainContainer = () => {
  const [isShowAnswers, setShowAnswers] = useState(false)
  
  const handleShowAnswers = () => setShowAnswers(!isShowAnswers)

  
  const [fileContent, setSelectedFile] = useState('');

  const handleFileSelect = (event) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      setSelectedFile(event.target.result);
    };
    reader.readAsText(event.target.files[0])
  };


  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);

  const requestBody = {
    body: fileContent
  }

  const handleSubmit = async (e) => {
    console.log("Trying to submit text data")
    e.preventDefault();

    try {
        const response = await fetch("http://localhost:8000/api/v1/process-long-passage", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody),
        });
        const data = await response.json();
        setQuestions(data.questions);
        setAnswers(data.answers);

        console.log(data)

    } catch (error) {
        console.error(error);
    };
  };
  
  
  return (
        <div className = 'Main-content container-fluid'>
        <div className = 'Navigation-widget navbar'>
            <div className = 'Nav-contents'>
                <div className = 'navbrand-container'>
                    <div className = 'd-flex p-2 navbrand'>
                        <h6>
                            Wonder Q
                        </h6>
                    </div>
                </div>
                <div className = 'right-nav-widget'>
                </div>
            </div>
        </div>
        <div className = 'chat-widget d-flex p-1 m-3'>
            
            <div className = 'd-flex justify-contents-start sidebar p-4 '>
                {/* <div className = 'btn d-flex p-2'>
                    <a className = 'active p-2' href = '#Lorem-ipsum'>
                        
                    </a>
                </div> */}
                <div className = 'new-widget btn d-flex'>
                    <input type="file" name="Select File" onChange={handleFileSelect} />
                </div>
            </div>
            
            <div className = 'detail-widget d-flex p-4'>
              <p style={{ maxHeight: '670px', overflow: 'auto' }} className = 'd-flex p-3'>
                {fileContent}
              </p>
            </div>
            
            <div style={{ maxHeight: '760px', overflow: 'auto' }}  className = 'chatbox-widget d-flex p-4'>
                 
                {questions.map((question, index) => (
                        <p key={index}  className = 'd-flex chat-text p-2'>
                        <ul className = 'chat-list d-flex p-2'>
                            <h5 key={question}>
                                {question}
                            </h5>

                            {isShowAnswers && (
                                <div id="answer-section" className = 'Answer-container d-flex p-2'>
                            
                                    <p>
                                        {answers[index]}
                                    </p>
                            
                                </div>
                            )}
                            
                        </ul>
                        </p>
                    
                ))}
            
                <div style={{ maxHeight: '90px' }} className = 'generate-wrapper container-fluid d-flex p-4'>
                    <div onClick={handleSubmit} className = 'btn generate'>
                    <a>Generate questions</a>
                    </div>
                    <div id="view-answers" onClick={handleShowAnswers} className = 'btn Answer d-flex'>
                        {isShowAnswers ? <a>Hide Answer</a> : <a>View Answer</a>}
                    </div>
                </div>
            </div>
        </div>
      </div>
  )
}


export default MainContainer
