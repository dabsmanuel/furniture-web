import "./Testimonials.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import testimony from "./testData";

const Testimonials = () => {
  return (
    <section className="container">
      <div className="testimonial-container">
        <div className="testimony">
          {testimony.map(({ id, picture, names, position, statement }) => {
            return (
              <div className="testimony-container" key={id}>
                <img src={picture} alt="pic" />
                <div className="status">
                  <h3>{names}</h3>
                  <small>{position}</small>
                </div>
                <p>{statement}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
