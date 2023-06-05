import React from 'react'

export default function About(props) {
  const myStyle={
    backgroundColor: props.Mode==='dark'? 'rgb(36,74,104)':'white', 
    color: props.Mode==='dark'?'white':'black'
  }
 
  
  
  return (
    <>
    <div className="container" >
      <h2 className="my-3 " style={{color: props.Mode==='dark'?'white':'black'}}> About Us </h2>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
     <strong>Analyze Text</strong> 
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
       Text Utils is a powerful application that enables users to analyze and manipulate text with ease. Whether you want to convert text to uppercase and lowercase, copy text, clear text, or remove extra spaces, this app offers a range of features to efficiently handle your text processing needs.


      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button"style={myStyle} st data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong> Free to Use </strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      Text Utils is a completely free-to-use app, providing its valuable features at no cost to the user. It eliminates the need for expensive software or subscriptions, making it accessible to professionals, students, and anyone working extensively with text.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
     <strong> Browser Compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      Text Utils is designed to be compatible with all modern web browsers, ensuring a seamless experience across different platforms. Whether you prefer Chrome, Firefox, Safari, or any other popular browser, you can easily access and utilize Text Utils without the need for additional software installations.
      </div>
    </div>
  </div>
</div>
   
      
    </div>
    </>
  )
}
