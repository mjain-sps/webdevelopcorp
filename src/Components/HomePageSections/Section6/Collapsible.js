import React, { useState } from "react";
import "./Collapsible.css";
function Collapsible({ answers }) {
  const [clicked, setClicked] = useState(false);
  const [domSelected, setDomSelected] = useState(null);

  function toggleCollapsibleAnswer(index) {
    setClicked(!clicked);
    if (domSelected && domSelected === index) {
      console.log("entering null loop");
      setDomSelected(null);
    } else {
      const x = 0;
      const y = 0;
      console.log(x === y);
      setDomSelected(index);
    }
  }
  console.log(domSelected);
  return (
    <div className="section6-collapsible__wrapper">
      {answers.length
        ? answers.map((element, index) => {
            return (
              <div className="collapsible--questionsection-wrapper" key={index}>
                <div className="collapsible--question">
                  <span>{element.ques}</span>
                  <span
                    className="collapsible--question__button"
                    onClick={() => toggleCollapsibleAnswer(index)}
                  >
                    {index === domSelected && clicked ? "-" : "+"}
                  </span>
                </div>
                <div
                  className={
                    domSelected && domSelected === index
                      ? "show_answer"
                      : "collapsible--answer"
                  }
                >
                  {element.ans}
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
}

export default Collapsible;
//   <>
//       {
//       answers.length ? answers.map((element, index) =>{
//           return(
//               <>
//             <div className="section6-content__rightsection">
//           <h3>FAQ</h3>
//           <h1>{element.ques}</h1>
//           <div className="faq-questions__div">
//             <div className="faq-questions__actual-question-wrapper">
//               <div className="faq_hiddenDescription" id="answer-1">
//                {element.ans}
//               </div>
//             </div>
//           </div>
//         </div>
//     </>
//   )
// })
//       }
// </>
