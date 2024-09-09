import React, { useRef, useState, useEffect } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


export default function Slides() {
  const [swiperRef, setSwiperRef] = useState(null);
  // const appendNumber = useRef(500);
  // const prependNumber = useRef(1);
  // Create array with 500 slides
  const [ratingMovies, setRatingMovies] = useState(
    Array.from({ length: 20 }).map((_, index) => `Slide ${index + 1}`)
  );
 const [loading, setLoading] = useState(true);
 //const [ratingMovies, setRatingMovies] = useState([]);
 const getRatingMovies = async () => {
   const response = await fetch(
     "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
   );
   const json = await response.json();
   setRatingMovies(json.data.movies);
   setLoading(false);
 };
 useEffect(() => {
   getRatingMovies();
 }, []);

  // const prepend = () => {
  //   setSlides([
  //     `Slide ${prependNumber.current - 2}`,
  //     `Slide ${prependNumber.current - 1}`,
  //     ...slides,
  //   ]);
  //   prependNumber.current = prependNumber.current - 2;
  //   swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
  // };

  // const append = () => {
  //   setSlides([...slides, "Slide " + ++appendNumber.current]);
  // };

  // const slideTo = (index) => {
  //   swiperRef.slideTo(index - 1, 0);
  // };

  return (
    <>
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        //onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={50}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        virtual
      >
        {ratingMovies.map((m) => (
          <SwiperSlide key={m.id}>
            <div>
              <p>{m.title}</p>
              <img src={m.medium_cover_image} alt={m.title} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <p className="append-buttons">
        <button onClick={() => prepend()} className="prepend-2-slides">
          Prepend 2 Slides
        </button>
        <button onClick={() => slideTo(1)} className="prepend-slide">
          Slide 1
        </button>
        <button onClick={() => slideTo(250)} className="slide-250">
          Slide 250
        </button>
        <button onClick={() => slideTo(500)} className="slide-500">
          Slide 500
        </button>
        <button onClick={() => append()} className="append-slides">
          Append Slide
        </button>
      </p> */}
    </>
  );
}

