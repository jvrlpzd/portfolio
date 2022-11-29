import React from "react";
import "./testimonials.css";

// import Swiper core and required modules
import { Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    avatar: "https://static1.personality-database.com/profile_images/c4eea50d62294c569eb28b2940ca4a3d.png",
    name: "Harry S. Truman",
    review:
    "It is amazing what you can accomplish if you do not care who gets the credit.",
  },
  {
    avatar: "https://sevenov.com/wp-content/uploads/2022/07/f-scott-fitzgerald-sketch-1921-20220707.jpg",
    name: "Scott Fitzgerald",
    review:
    "...and Samuel had the little flicker of envy that city people feel toward men who live in the open",
  },
  {
    avatar: "https://i0.wp.com/newyorkirisharts.com/wp-content/uploads/2012/10/oscar-wilde-avatar-25791.jpg?ssl=1",
    name: "Oscar Wilde",
    review:
      "If one cannot enjoy reading a book over and over again, there is no use in reading it at all.",
  },
  {
    avatar: "https://www.premiere.fr/sites/default/files/styles/scale_crop_560x800/public/2018-04/abaca_504610_007.jpg",
    name: "Quentin Tarantino",
    review:
      "When people ask me if I went to film school I tell them, 'no, I went to films.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Avis clients</h5>
      <h2>Témoignages</h2>

      <Swiper className="container testimonials__container"
            modules={[Pagination, A11y]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
>
        {testimonials.map(({ avatar, name, review, index }) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
