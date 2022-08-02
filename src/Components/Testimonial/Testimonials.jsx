import "./Testimonials.css";
import Livingroom from "../../Assets/LivingRoom.png";
import test from "../../Assets/testimonial.png";

const Testimonials = () => {
  return (
    <section className="container test">
      <div className="testimonial-container">
        <div className="testimony">
          <h1>What People Are Saying About Us</h1>
          <div className="test-container">
            <div className="test-image">
              <img src={test} alt="pic" />
            </div>
            <div className="test-comment">
              <h3>Josh Smith</h3>
              <small>Manager of The New York Times</small>
            </div>
          </div>
          <p>
            "They have a perfect touch for making something so professional,
            interesting and useful for a lot of people"
          </p>
        </div>
        <div className="testimonial-image">
          <img src={Livingroom} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
