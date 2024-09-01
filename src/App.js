import React, { useState, useRef } from "react";
import './App.css';


function App() {
  const [selected, setSelected] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const faqRef = useRef(null); // Create a reference for the FAQ section

  const FAQtoggle = (i) => {
    setSelected(selected === i ? null : i);
    scrollIntoView(); // Call the function to scroll into view
  };

  const scrollIntoView = () => {
    if (faqRef.current) {
      // Scroll the FAQ section into the middle of the screen
      faqRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const FAQquestions = [
    
      {
        "question": "1. What services do you offer as a full-stack developer?",
        "answer": "I provide comprehensive full-stack development services, which include both front-end and back-end solutions. My expertise covers a wide range of technologies including HTML, CSS, Bootstrap, JavaScript, React.js, AngularJS, ChakraUI, Node.js, Express.js, MongoDB, SQL, C#, .NET Core, and ASP.NET. Whether you need a custom website, web application, or a complete digital solution, I can help."
      },
      {
        "question": "2. How can I contact you for a freelance project?",
        "answer": "You can reach me via email at shaikrafikpasha786@gmail.com or by phone at +91 8008146642. For a more detailed view of my work, you can check out my GitHub profile here or my CodePen here."
      },
      {
        "question": "3. What is your process for starting a new project?",
        "answer": "I start by discussing your project requirements and goals. This includes understanding your vision, budget, and timeline. After that, I provide a proposal outlining the scope of work, milestones, and deliverables. Once we agree on the terms, I begin the development process, keeping you updated throughout to ensure everything aligns with your expectations."
      },
      {
        "question": "4. Can you provide examples of your previous work?",
        "answer": "Absolutely! You can view my portfolio on GitHub here and my CodePen here. These platforms showcase a variety of projects demonstrating my skills in both front-end and back-end development."
      },
      {
        "question": "5. Where can I find more information about your professional background?",
        "answer": "You can find more information about my professional experience, skills, and endorsements on my LinkedIn profile here. This profile includes details about my work history, educational background, and recommendations from colleagues and clients."
      },
      {
        "question": "6. What is your preferred method for project communication?",
        "answer": "I prefer to communicate via email for detailed discussions and documentation. For quick updates or urgent matters, I am available via phone or messaging apps like WhatsApp. I also use project management tools like Trello or Asana to track progress and collaborate effectively with clients."
      }
    
    
  ];

  return (
    <div id="FAQ" ref={faqRef}>
      <p className="title">FAQ'S</p>
      <div className="q">
        <div className="accordian">
          {FAQquestions.slice(0, showMore ? FAQquestions.length : 4).map((item, i) => (
            <div
              className={`item ${selected === i ? "selected" : ""}`}
              key={i}
            >
              <div className="FAQ-title" onClick={() => FAQtoggle(i)}>
                <p className="faqQuestion">{item.question}</p>
                <span id="expandToggleOne">{selected === i ? "-" : "+"}</span>
              </div>
              <div className={`FAQ-content ${selected === i ? "show" : ""}`}>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
          <div className="FAQ-ShowMore">
            <button onClick={() => setShowMore(!showMore)}>
              {showMore ? "Show Less" : "Show More"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
