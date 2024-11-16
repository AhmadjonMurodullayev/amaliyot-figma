import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { useGetBanner } from "../hooks/useGetBanner";

export const Banner = () => {
  const { data, isLoading } = useGetBanner();
  return (
    <>
      <Swiper
        navigation
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
        style={{ width: "100%", height: "401px" }}
      >
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          data?.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <img
                  style={{ width: "100%", height: "401px", objectFit: "cover" }}
                  src={item.img}
                  alt=""
                />
              </SwiperSlide>
            );
          })
        )}
      </Swiper>

      <style jsx>
        {`
          .swiper {
            width: 100%;
            height: 401px;
          }

          .swiper-slide {
            text-align: center;
            font-size: 18px;
            background: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
    </>
  );
};
