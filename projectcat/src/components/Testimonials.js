import React from "react";
import "../stylesheets/Testimonials.css"

function Testimonials(props) {
  return(
    <div className="container-testimonials">
      <img 
      className="image-testimonials"
      src={require (`../images/cat-${props.image}.jfif`)}
      alt="funny cat with a job"
      />
      <div className="container-text-testimonials">
        <p className="name-testimonials">
        <strong>{props.name}</strong> from {props.country}
        </p>
        <p className="position-testimonials">
        {props.position} on <strong>{props.company}</strong>
        </p>
        <p className="text-testimonials">
        {props.testimonial}
        </p>
      </div>
    </div>
  );  
}

export default Testimonials;