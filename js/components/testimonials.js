import React, { useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import aos from "aos";
import "aos/dist/aos.css";

function Testimonials() {
  const testimonials = [
    {
      name: "ASHUTOSH",
      color: "bg-[#5ACAA7]",
      image:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1705057480/Club%20twenty%20Website/TESTOMONIALS%20IMAGES/ASHUTOSH_taxydl.webp",
      comment:
        "Club Twenty has truly exceeded my expectations. Their events like the Glow Run and Race for Grace are exceptional. The club's focus on holistic growth through diverse activities is commendable.",
    },
    {
      name: "RAKESH",
      color: "bg-[#4556B3]",
      image:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1705057485/Club%20twenty%20Website/TESTOMONIALS%20IMAGES/RAKESH_jk96dx.webp",
      comment:
        "I've been a part of Club Twenty for two years now, and it's been an incredible journey. The leadership opportunities and skill development under seniors' guidance have shaped me personally and professionally.",
    },
    {
      name: "ISHITA",
      color: "bg-[#00A5C5]",
      image:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1705057480/Club%20twenty%20Website/TESTOMONIALS%20IMAGES/ISHITA_sk5cwc.webp",
      comment:
        "Club Twenty's dedication to student development is evident in their tier 5 status. The events they organize, such as Glow Run, showcase their commitment to excellence and fostering a dynamic learning community.",
    },
    {
      name: "SRISTHI PALSRA",
      color: "bg-[#5ACAA7]",
      image:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1705057488/Club%20twenty%20Website/TESTOMONIALS%20IMAGES/SHRISHTI_eybuxi.webp",
      comment:
        "Club Twenty has been my launchpad for growth! From freshmen induction to Sports Utsav, each event taught me valuable skills. Grateful for the supportive seniors and unforgettable experiences.",
    },
    {
      name: "Nikunj kansal",
      color: "bg-[#4556B3]",
      image:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1705057484/Club%20twenty%20Website/TESTOMONIALS%20IMAGES/NIKUNJ_aku1hf.webp",
      comment:
        "Event planning mastery, teamwork, and resource management—Club Twenty is where I honed these skills. The Glow Run and Race for Grace exemplify the club's commitment to excellence. Proud team member!",
    },
    {
      name: "SACHIN",
      color: "bg-[#00A5C5]",
      image:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1705057486/Club%20twenty%20Website/TESTOMONIALS%20IMAGES/SACHIN_trcsao.webp",
      comment:
        "Seniors at Club Twenty are pillars of support. In my two years, I have not only gained friends but also leadership opportunities that have shaped my personal and professional journey profoundly. Proud team member!",
    },
    {
      name: "VIVEK YADAV",
      color: "bg-[#5ACAA7]",
      image:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1705057489/Club%20twenty%20Website/TESTOMONIALS%20IMAGES/VIVEK_YADAV_myrktf.webp",
      comment:
        "Club Twenty's holistic approach to student development shines through in their tier 5 status. The dynamic learning community and diverse activities like Glow Run showcase their commitment to excellence.",
    },
  ];

  useEffect(() => {
    aos.init({ once: true });
  }, []);

  return (
    <section className="text-neutral-700 dark:text-neutral-300 m-4 !my-12 lg:!my-24 lg:!mx-16">
      <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl">
        <h3 className="mb-6 text-3xl md:text-4xl font-semibold md:font-bold text-[#046EC1]">
          Testimonials
        </h3>
        <p className="mb-6 md:text-lg pb-2 md:mb-12 md:pb-0">
          Discover what our community has to say about Club Twenty! Dive into
          heartfelt testimonials from our members, sharing their experiences and
          insights on the transformative journey within our events.
        </p>
      </div>

      <Splide
        aria-label="Testimonials"
        className="text-center"
        options={{
          autoplay: true,
          type: "loop",
          perPage: 3,
          gap: "2rem",
          breakpoints: {
            640: {
              perPage: 1,
              gap: ".7rem",
            },
            795: {
              perPage: 2,
              gap: ".7rem",
            },
          },
        }}
      >
        {testimonials.map((testimonial) => (
          <SplideSlide>
            <div data-aos="zoom-in">
              <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
                <div
                  className={`h-28 overflow-hidden rounded-t-lg ${testimonial.color}`}
                ></div>
                <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                  <img
                    className="w-full !h-[90px]"
                    src={testimonial.image}
                    alt="Testimonial"
                  />
                </div>
                <div className="p-6">
                  <h4 className="mb-4 text-2xl font-semibold">
                    {testimonial.name}
                  </h4>
                  <hr />
                  <p className="mt-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="inline-block h-7 w-7 pr-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                    </svg>
                    {testimonial.comment}
                  </p>
                </div>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
}

export default Testimonials;
