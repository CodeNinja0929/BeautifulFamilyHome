"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import featureImg from "../../../public/images/features/wrap.png";
import arrowIcon from "../../../public/images/features/arrow.svg";
import architecturalShape from "../../../public/images/features/architectural-shape.png";

const CoreFeatures: React.FC = () => {
  return (
    <>
      <div className="features-area ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12">
              <div 
                className="features-content"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="600"
                data-aos-once="true"
              >
                <h2>
                Rental Contract: <span>High-Standard Family Residence</span> 
                </h2>

                <div className="row justify-content-center align-items-center">
                  <div className="col-lg-4 col-md-5">
                    <div className="inner-box">
                      <div className="title">
                        <h3 className="counter">$3000</h3>
                        <span>
                        704 El Monte Rd, El Cajon, CA 92020
                        </span>
                      </div>
                      <div className="wrap">
                        <Image src={featureImg} alt="image" width={161} height={231} />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-8 col-md-7">
                    <div className="inner-content">
                      <p>
                      This beautiful 2-bedroom, 1-bathroom house is located in a quiet and friendly neighborhood. It features a private entrance, a newly remodeled kitchen, and a free laundry facility in the garage. All utilities are included in the rent, making your stay comfortable and hassle-free. As seen in the pictures, the apartment is finished to high standards, providing you with a quality living experience.
                      </p>

                      <ul className="list">
                        <li>
                          <Image src={arrowIcon} alt="arrow" width={28} height={10} />
                          2 Bedrooms & 1 Bathroom
                        </li>
                        <li>
                          <Image src={arrowIcon} alt="arrow" width={28} height={10} />
                          SQFT: 848
                        </li>
                        <li>
                          <Image src={arrowIcon} alt="arrow" width={28} height={10} />
                          Date available: Today's Date 
                        </li>

                        <li>
                          <Image src={arrowIcon} alt="arrow" width={28} height={10} />
                          Lease length: 12 Months 
                        </li>
                        <li>
                          <Image src={arrowIcon} alt="arrow" width={28} height={10} />
                          Laundry Type: In Unit 
                        </li>
                        <li>
                          <Image src={arrowIcon} alt="arrow" width={28} height={10} />
                          Parking Type: Garage Parking  
                        </li>
                        <li>
                          <Image src={arrowIcon} alt="arrow" width={28} height={10} />
                          Cat: Friendly 
                        </li>
                        <li>
                          <Image src={arrowIcon} alt="arrow" width={28} height={10} />
                          Dog: Friendly  
                        </li>
                      </ul>
{/* 
                      <div className="features-btn">
                        <Link href="#" className="default-btn">
                          Our Core Features
                        </Link>
                      </div> */}
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div
                className="features-image"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="600"
                data-aos-once="true"
                style={{
                  backgroundImage: `url(/images/features/features1.jpg)`,
                }}
              ></div>
            </div>
          </div>
        </div>

        <div className="features-shape">
          <Image src={architecturalShape} alt="Architectural Shape" width={477} height={562} />
        </div>
      </div>
    </>
  );
};

export default CoreFeatures;
