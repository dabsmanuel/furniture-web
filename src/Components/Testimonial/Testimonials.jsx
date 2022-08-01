import './Testimonials.css'
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import testimony from './testData';


const Testimonials = () => {
  return (
    <section className="container">
      <div className="testimonial-container">
        <div className="testimony">
          {testimony.map(({id, picture, names, position, statement})=> {
            return (
              <div className="testimony-container">
                <Swiper
                  key={id}
                  // install Swiper modules
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={50}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                >
                  <SwiperSlide>
                    <img src={picture} alt="pic" />
                    <div className="status">
                      <h3>{names}</h3>
                      <small>{position}</small>
                    </div>
                    <p>{statement}</p>
                  </SwiperSlide>
                </Swiper>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Testimonials