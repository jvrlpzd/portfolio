import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    avatar: AVTR1,
    name: "Fake Name",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore necessitatibus rem at repudiandae nesciunt vero, labore ratione distinctio asperiores consequuntur magni dolores, ipsum officiis assumenda explicabo ut. Nihil, minima eius!",
  },
  {
    avatar: AVTR2,
    name: "Fake Name",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore necessitatibus rem at repudiandae nesciunt vero, labore ratione distinctio asperiores consequuntur magni dolores, ipsum officiis assumenda explicabo ut. Nihil, minima eius!",
  },
  {
    avatar: AVTR3,
    name: "Fake Name",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore necessitatibus rem at repudiandae nesciunt vero, labore ratione distinctio asperiores consequuntur magni dolores, ipsum officiis assumenda explicabo ut. Nihil, minima eius!",
  },
  {
    avatar: AVTR4,
    name: "Fake Name",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore necessitatibus rem at repudiandae nesciunt vero, labore ratione distinctio asperiores consequuntur magni dolores, ipsum officiis assumenda explicabo ut. Nihil, minima eius!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

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
