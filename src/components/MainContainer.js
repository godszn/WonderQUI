import React, { useState } from 'react'
import './Styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import newbtn from '../icons/add.png'; 



const MainContainer = () => {
  const [isShowAnswers, setShowAnswers] = useState(false)
  
  const handleShowAnswers = () => setShowAnswers(!isShowAnswers)
  
  return (
        <div className = 'Main-content container-fluid'>
        <div className = 'Navigation-widget navbar'>
            <div className = 'Nav-contents'>
                <div className = 'navbrand-container'>
                    <div className = 'd-flex p-2 navbrand'>
                        <h6>
                            Lorem-ipsum
                        </h6>
                    </div>
                </div>
                <div className = 'right-nav-widget'>
                </div>
            </div>
        </div>
        <div className = 'chat-widget d-flex p-1 m-3'>
            <div className = 'd-flex justify-contents-start sidebar p-4 '>
                <div className = 'btn d-flex p-2'>
                    <a className = 'active p-2' href = '#Lorem-ipsum'>
                        Lorem-ipsum
                    </a>
                </div>
                <div className = 'd-flex p-2 btn'>
                    <a href = '#Lorem-ipsum'>
                        Lorem-ipsum
                    </a>
                </div>
                <div className = 'd-flex p-2 btn'>
                    <a href = '#Lorem-ipsum'>
                        Lorem-ipsum
                    </a>
                </div>
                <div className = 'd-flex p-2 btn'>
                    <a href = '#Lorem-ipsum'>
                        Lorem-ipsum
                    </a>
                </div>
                <div className = 'new-widget btn d-flex'>
                    <img src = {newbtn} className = 'add'/>
                    <a>
                      New
                    </a>
                </div>
            </div>
            <div className = 'detail-widget d-flex p-4'>
              <p className = 'd-flex p-3'>
                 <ul className = 'chat-list d-flex p-4 '><a>
                    This is going to be the document preview page hhehehe
                    </a>
                </ul>
              </p>
            </div>
            <div className = 'chatbox-widget d-flex p-4'>
                <p className = 'd-flex chat-text p-4'>
                <ul className = 'chat-list d-flex p-4 '>
                    <h5>
                        Question 1
                    </h5>

                    <span className = 'span'>Ans:</span>

                    {isShowAnswers && (
                        <div id="answer-section" className = 'Answer-container d-flex p-2'>
                            <a>Answer 1</a> 
                        </div>
                    )}
                    
                </ul>
                </p>
                <div className = 'generate-wrapper container-fluid d-flex p-4'>
                    <div className = 'btn generate'>
                    <a>Generate questions</a>
                    </div>
                    <div id="view-answers" onclick={handleShowAnswers} className = 'btn Answer d-flex'>
                        {isShowAnswers ? <a>View Answer</a> : <a>Hide Answer</a>}
                    </div>
                </div>
            </div>
        </div>
      </div>
  )
}


export default MainContainer
