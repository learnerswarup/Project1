import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

function Sponsors() {
  const sponsors = [
    {
      name: "DECATHLON",
      imageUrl:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1705070557/Club%20twenty%20Website/SPONSORS%20LOGO/DECATHLON_swcfne.webp",
    },
    {
      name: "KTM",
      imageUrl:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1705070559/Club%20twenty%20Website/SPONSORS%20LOGO/KTM_n7n5ld.webp",
    },
    {
      name: "YONO SBI",
      imageUrl:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1705070570/Club%20twenty%20Website/SPONSORS%20LOGO/YONO_SBI_lbqglz.webp",
    },
    {
      name: "FAST&UP",
      imageUrl:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1705070558/Club%20twenty%20Website/SPONSORS%20LOGO/FAST_UP_hgozre.webp",
    },
    {
      name: "TRIBE VIBE ",
      imageUrl:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1705070569/Club%20twenty%20Website/SPONSORS%20LOGO/TRIBE_VIBE_p3pehn.webp",
    },
    {
      name: "PORTRONICS",
      imageUrl:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1705070564/Club%20twenty%20Website/SPONSORS%20LOGO/PORTRONICS_ej2dgj.webp",
    },
    {
      name: "RADIO CITY ",
      imageUrl:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1705070565/Club%20twenty%20Website/SPONSORS%20LOGO/RADIOCITY_cwm11w.webp",
    },
    {
      name: "NIVIA",
      imageUrl:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1705070561/Club%20twenty%20Website/SPONSORS%20LOGO/NIVIA_njdooq.webp",
    },
    {
      name: "OPPO",
      imageUrl:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1705070562/Club%20twenty%20Website/SPONSORS%20LOGO/OPPO_j8nfkc.webp",
    },
    {
      name: "ROYAL ENFIELD",
      imageUrl:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1705070566/Club%20twenty%20Website/SPONSORS%20LOGO/ROYAL_ENFIELD_pabmsn.webp",
    },
    {
      name: "TOYOTA",
      imageUrl:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1705070568/Club%20twenty%20Website/SPONSORS%20LOGO/TOYOTA_qyppll.webp",
    },
    {
      name: "LAKME",
      imageUrl:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1705070559/Club%20twenty%20Website/SPONSORS%20LOGO/LAKME_juqjqi.webp",
    },
    {
      name: "BAJAJ",
      imageUrl:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1705070557/Club%20twenty%20Website/SPONSORS%20LOGO/BAJAJ_vs3hnw.webp",
    },
    {
      name: "SUNBURN",
      imageUrl:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1705070566/Club%20twenty%20Website/SPONSORS%20LOGO/SUNBURN_ycjkg8.webp",
    },
    {
      name: "BONN",
      imageUrl:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1705070557/Club%20twenty%20Website/SPONSORS%20LOGO/BONN_xzujph.webp",
    },
    {
      name: "ORGANIC INDIA ",
      imageUrl:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1705070563/Club%20twenty%20Website/SPONSORS%20LOGO/ORGANIC_INDIA_ktiyva.webp",
    },
    {
      name: "NEVA",
      imageUrl:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1705070560/Club%20twenty%20Website/SPONSORS%20LOGO/NEVA_uckbjj.webp",
    },
    {
      name: "TOWNSCRIPT",
      imageUrl:
        "https://res.cloudinary.com/dt5k5t2kd/image/upload/v1705070567/Club%20twenty%20Website/SPONSORS%20LOGO/TOWNSCRIPT_ku1ecg.webp",
    },
  ];
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-0 md:px-5 py-12 md:py-24 md:mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-24 h-full bg-[#046EC1]"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 text-[#046EC1] text-3xl md:text-4xl font-semibold title-font mb-2 sm:mb-0">
                Our Partners and Sponsors
              </h1>
              <p className="sm:w-3/5 leading-relaxed md:text-lg sm:pl-10 pl-0">
                Club Twenty expresses sincere appreciation to our valued
                sponsors and partners whose steadfast support propels the
                success of our initiatives. Aligned with our vision for
                fostering holistic growth and leadership development among
                students, these dedicated collaborators play a pivotal role in
                making our endeavors impactful. Together, we create a powerful
                synergy that amplifies the positive impact on students' lives
                and contributes to the success of our shared goals.
              </p>
            </div>
          </div>
          <Splide
            aria-label="My Favorite Images"
            extensions={AutoScroll}
            arrows="false"
            className="text-center w-full"
            options={{
              type: "loop",
              drag: "free",
              focus: "center",
              perPage: 5,
              autoplay: true,
              autoStart: true,
              interval: 510,
              speed: 21100,
              arrows: false,
              autoScroll: {
                speed: 1,
              },
              breakpoints: {
                640: {
                  perPage: 2,
                  gap: ".7rem",
                },
                795: {
                  perPage: 3,
                  gap: ".7rem",
                },
              },
            }}
          >
            {sponsors.map((sponsor) => (
              <SplideSlide>
                <div
                  className="col-span-1 md:px-4 flex flex-col justify-center items-center h-full"
                  data-aos="zoom-in"
                >
                  <img
                    className="w-full h-fit"
                    width="170"
                    height="170"
                    src={sponsor.imageUrl}
                    alt={sponsor.name}
                  />
                </div>
              </SplideSlide>
            ))}
          </Splide>
          <div className="sponsors grid grid-cols-2 md:grid-cols-5 gap-5"></div>
        </div>
      </section>
    </>
  );
}

export default Sponsors;
