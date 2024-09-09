import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";

// Import Swiper styles
import "swiper/css";

export default function Slides2() {
  const [loading, setLoading] = useState(true);
  const [ratingMovies, setRatingMovies] = useState([]);
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

  return (
    <Swiper
      spaceBetween={5}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {ratingMovies.map((m) => (
        <SwiperSlide>
          <div>
            <p>{m.title}</p>
            <img src={m.medium_cover_image} alt={m.title } />
          </div>
        </SwiperSlide>
      ))}

    
    </Swiper>
  );
};

