"use client";

import React from "react";
import Link from "next/link";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Image from "next/image";

const projectsData = [
  {
    id: "1",
    image: "/images/projects/p1.jpg",
    title: "",
    category: "",
    link: "",
  },
  // {
  //   id: "2",
  //   image: "/images/projects/projects8.jpg",
  //   title: "Tower House",
  //   category: "Architecture",
  //   link: "/portfolio/portfolio-details",
  // },
  // {
  //   id: "3",
  //   image: "/images/projects/projects9.jpg",
  //   title: "House Renovation",
  //   category: "Interior",
  //   link: "/portfolio/portfolio-details",
  // },
  // {
  //   id: "4",
  //   image: "/images/projects/projects10.jpg",
  //   title: "Penthouse",
  //   category: "Architecture",
  //   link: "/portfolio/portfolio-details",
  // },
  {
    id: "2",
    image: "/images/projects/p2.jpg",
    title: "",
    category: "",
    link: "",
  },
  {
    id: "3",
    image: "/images/projects/p3.jpg",
    title: "",
    category: "",
    link: "",
  },
  {
    id: "4",
    image: "/images/projects/p4.jpg",
    title: "",
    category: "",
    link: "",
  },
  {
    id: "5",
    image: "/images/projects/p5.jpg",
    title: "",
    category: "",
    link: "",
  },
  {
    id: "6",
    image: "/images/projects/p6.jpg",
    title: "",
    category: "",
    link: "",
  },
  {
    id: "7",
    image: "/images/projects/p7.jpg",
    title: "",
    category: "",
    link: "",
  },
  {
    id: "8",
    image: "/images/projects/p8.jpg",
    title: "",
    category: "",
    link: "",
  },
  {
    id: "9",
    image: "/images/projects/p9.jpg",
    title: "",
    category: "",
    link: "",
  },
  {
    id: "10",
    image: "/images/projects/p10.jpg",
    title: "",
    category: "",
    link: "",
  },
  {
    id: "11",
    image: "/images/projects/p11.jpg",
    title: "",
    category: "",
    link: "",
  },
  {
    id: "12",
    image: "/images/projects/p12.jpg",
    title: "",
    category: "",
    link: "",
  },
];

const ProjectCardStyle2: React.FC = () => {
  return (
    <>
      <div className="projects-area bg-wrap-with-black pt-100">
        <div className="container">
          <div className="section-title-wrap">
            <span>HOME</span>
            <h2>704 El Monte Rd, El Cajon, CA 92020</h2>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="600"
            data-aos-once="true"
          >
            {projectsData && (
              <ResponsiveMasonry
                columnsCountBreakPoints={{
                  300: 1,
                  768: 2,
                  992: 2,
                }}
              >
                <Masonry gutter="50px">
                  {projectsData &&
                    projectsData.map((value, i) => (
                      <div className="projects-item m-0" key={i}>
                        <div className="projects-image">
                          <Link href={value.link}>
                            <Image
                              src={value.image}
                              alt="projects"
                              width={750}
                              height={950}
                            />
                          </Link>
                          {/* <Link href={value.link} className="projects-btn">
                            SEE CASE STUDIES
                          </Link> */}
                        </div>
                        <div className="projects-content">
                          <h3>
                            <Link href={value.link}>{value.title}</Link>{" "}
                            <span>{value.category}</span>
                          </h3>
                        </div>
                      </div>
                    ))}
                </Masonry>
              </ResponsiveMasonry>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCardStyle2;
