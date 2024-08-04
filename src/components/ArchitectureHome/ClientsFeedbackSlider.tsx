"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

import quoteIcon from "../../../public/images/client/quote.svg";
import shape1 from "../../../public/images/client/shape1.png";
import shape2 from "../../../public/images/client/shape2.png";

const clientsFeedbackData = [
  {
    id: "1",
    feedbackText:
      "Exceptional Experience! The property was exactly as described and exceeded my expectations. The home was well-maintained, and the neighborhood was peaceful. The landlord was responsive and ensured everything was perfect. Highly recommend!",
    image: "/images/client/user1.png",
    name: "Jonathon Ronan",
    designation: "Marketing Manager",
  },
  {
    id: "2",
    feedbackText:
      "A Wonderful Stay! Renting this home was a fantastic decision. The house is beautiful, and having all utilities included was a huge convenience. The newly remodeled kitchen and in-unit laundry were major pluses. The landlord's professionalism and attention to detail made the experience seamless.",
    image: "/images/client/user2.png",
    name: "Angela Carter",
    designation: "Financial Analyst",
  },
  {
    id: "3",
    feedbackText:
      "Highly Recommend! This rental property is top-notch. From the high-quality finishes to the quiet neighborhood, everything was perfect. The landlord was extremely helpful and made the rental process easy and stress-free. A fantastic place to call home!",
    image: "/images/client/user3.png",
    name: "Skyler White",
    designation: "Software Engineer",
  },
  {
    id: "4",
    feedbackText:
      "Amazing Rental! This home is a gem. The private entrance and garage parking were very convenient. The landlord went above and beyond to ensure we were comfortable and had everything we needed. I couldn't have asked for a better rental experience.",
    image: "/images/client/user4.png",
    name: "Angela Carter",
    designation: "Sales Executive",
  },
];

const ClientsFeedbackSlider: React.FC = () => {
  return (
    <>
      <div className="client-area ptb-100">
        <div className="container">
          <div className="section-title d-flex justify-content-center">
            <h2>
              <span>Our Clients</span> Talk For Us
            </h2>
          </div>

          {clientsFeedbackData && (
            <Swiper
              pagination={{
                dynamicBullets: true,
                clickable: true,
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }}
              modules={[Autoplay, Pagination]}
              className="client-swiper"
            >
              {clientsFeedbackData &&
                clientsFeedbackData.map((value, i) => (
                  <SwiperSlide key={i}>
                    <div className="client-content">
                      <div className="icon">
                        <Image src={quoteIcon} alt="quote" width={56} height={56} />
                      </div>
                      <p>{value.feedbackText}</p>

                      <div className="client-information">
                        <div className="image">
                          <Image
                            src={value.image}
                            alt="image"
                            width={70}
                            height={70}
                          />
                        </div>
                        <div className="title">
                          <h3>{value.name}</h3>
                          <span>{value.designation}</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          )}
        </div>

        {/* Shape Images */}
        <div className="client-shape1">
          <Image src={shape1} alt="shape" width={88} height={125} />
        </div>
        <div className="client-shape2">
          <Image src={shape2} alt="shape" width={116} height={82} />
        </div>
      </div>
    </>
  );
};

export default ClientsFeedbackSlider;
