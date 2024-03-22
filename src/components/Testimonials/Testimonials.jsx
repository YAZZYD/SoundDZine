import React from "react";
import "./Testimonials.css";
import { testimonial1, testimonial2, testimonial3 } from "../../assets/import";

function Testimonials() {
  const testimonials = [
    {
      student: "Peter Adams",
      profile: testimonial1,
      company: "google",
      quote: "this is a great course. I got to learn a lot.",
    },
    {
      student: "Robert Fox",
      profile: testimonial2,
      company: "facebook",
      quote:
        "I got to learn a lot about music production with this course. Thanks :)",
    },
    {
      student: "Emily Smith",
      profile: testimonial3,
      company: "spotify",
      quote: "Awesome! Great job!",
    },
  ];
  return (
    <section id="testimonials" className="dark-green">
      <div className="wrapper">
        <h2>What our students say?</h2>
        <div className="content-container">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-container">
              <img src={testimonial.profile} />
              <div className="review-details"></div>
              <div className="name">{testimonial.student}</div>
              <div className="company">{testimonial.company}</div>
              <div className="review">{testimonial.quote}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
