import React, { useEffect } from "react";
import "../assets/main.css";
import home_top from "../assets/HOME_PAGE_PHOTO_uz882h.webp";
import gallery_1 from "../assets/Gallery/1_sgcurq-2.webp";
import gallery_2 from "../assets/Gallery/2_jafihx.webp";
import gallery_3 from "../assets/Gallery/3_dofetg.webp";
import gallery_4 from "../assets/Gallery/4_bsecqw.webp";
import gallery_5 from "../assets/Gallery/5_borr7r.webp";
import gallery_6 from "../assets/Gallery/6_dji9qd.webp";
import gallery_7 from "../assets/Gallery/7_lcichr.webp";
import gallery_8 from "../assets/Gallery/8_dcbkhi.webp";
import gallery_9 from "../assets/Gallery/9_vmhk2w.webp";
import gallery_10 from "../assets/Gallery/10_mcmay9.webp";
import gallery_11 from "../assets/Gallery/11_e9moa6.webp";
import gallery_12 from "../assets/Gallery/12_cbpq8x.webp";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { Collapse, initTE } from "tw-elements";
import aos from "aos";
import "aos/dist/aos.css";
import Testimonials from "./testimonials";
import Sponsors from "./Sponsors";

function Home() {
  initTE({ Carousel });
  initTE({ Collapse });

  useEffect(() => {
    aos.init({ once: true });
  }, []);

  return (
    <div id="home">
      {/* Carousel */}
      <div className="flex justify-center items-center">
        <img src={home_top} alt="club 20" />
      </div>

      {/* What we do */}
      <section className="text-gray-600 body-font">
        <div className="container px-0 md:!px-5 py-5 md:py-24 mx-auto">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-semibold md:font-bold text-center title-font text-[#046EC1] drop-shadow-sm mb-4">
              What We do
            </h1>
            <p className="text-base lg:text-lg leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Founded in 2017, Club Twenty is a catalyst for student leadership
              and overall development, hosting over 100 diverse events. From
              marathons to EDM nights, social gatherings to sports competitions,
              corporate functions to cultural celebrations, we curate
              experiences that resonate with a wide audience.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Collage */}
      <Carousel
        autoPlay="true"
        infiniteLoop="true"
        showThumbs={false}
        dynamicHeight={false}
        showStatus={false}
        showIndicators={false}
      >
        <div
          className="container mx-auto  px-0 md:px-16 py-2 lg:px-32 lg:pt-24 mb-4 md:mb-10"
          data-aos="fade-up"
        >
          <div className="-m-1 flex flex-wrap md:-m-2">
            <div className="flex w-1/2 flex-wrap">
              <div className="w-1/2 p-1 md:p-2" data-aos="zoom-in">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={gallery_1}
                />
              </div>
              <div className="w-1/2 p-1 md:p-2" data-aos="zoom-in">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={gallery_2}
                />
              </div>
              <div className="w-full p-1 md:p-2" data-aos="zoom-in">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={gallery_3}
                />
              </div>
            </div>
            <div className="flex w-1/2 flex-wrap">
              <div className="w-full p-1 md:p-2" data-aos="zoom-in">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={gallery_4}
                />
              </div>
              <div className="w-1/2 p-1 md:p-2" data-aos="zoom-in">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={gallery_5}
                />
              </div>
              <div className="w-1/2 p-1 md:p-2" data-aos="zoom-in">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={gallery_6}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto  px-0 md:px-16 py-2 lg:px-32 lg:pt-24 mb-4 md:mb-10">
          <div className="-m-1 flex flex-wrap md:-m-2">
            <div className="flex w-1/2 flex-wrap">
              <div className="w-1/2 p-1 md:p-2" data-aos="zoom-in">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={gallery_7}
                />
              </div>
              <div className="w-1/2 p-1 md:p-2" data-aos="zoom-in">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={gallery_8}
                />
              </div>
              <div className="w-full p-1 md:p-2" data-aos="zoom-in">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={gallery_9}
                />
              </div>
            </div>
            <div className="flex w-1/2 flex-wrap">
              <div className="w-full p-1 md:p-2" data-aos="zoom-in">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={gallery_10}
                />
              </div>
              <div className="w-1/2 p-1 md:p-2" data-aos="zoom-in">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={gallery_11}
                />
              </div>
              <div className="w-1/2 p-1 md:p-2" data-aos="zoom-in">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={gallery_12}
                />
              </div>
            </div>
          </div>
        </div>
      </Carousel>

      {/* Past Events */}
      <section className="text-gray-600 body-font">
        <div className="container px-0 md:px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-24 h-full bg-[#046EC1]"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 text-[#046EC1] text-3xl md:text-4xl font-semibold  title-font  mb-2 sm:mb-0">
                Our Past events
              </h1>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-1 px-2 md:w-1/3">
              <Link to="/events" className="">
                <div data-aos="fade-up" className="p-2 clb-evnt-card">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center rounded-md"
                    src="https://res.cloudinary.com/dt5k5t2kd/image/upload/v1704991517/Club%20twenty%20Website/Events/GLOWRUN_xdznvz.webp"
                    alt="event"
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      Night Marathon
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      Glow Run
                    </h1>
                  </div>
                </div>
              </Link>
            </div>
            <div className="p-1 px-2 md:w-1/3">
              <Link to="/events" className="">
                <div data-aos="fade-up" className="p-2 clb-evnt-card">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center rounded-md"
                    src="https://res.cloudinary.com/dt5k5t2kd/image/upload/v1704991518/Club%20twenty%20Website/Events/KTM_STUNT_SHOW_qfd6v2.webp"
                    alt="event"
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      Stunt Show
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      KTM Stunt Show
                    </h1>
                  </div>
                </div>
              </Link>
            </div>
            <div className="p-1 px-2 md:w-1/3">
              <Link to="/events" className="">
                <div data-aos="fade-up" className="p-2 clb-evnt-card">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center rounded-md"
                    src="https://res.cloudinary.com/dt5k5t2kd/image/upload/v1704991517/Club%20twenty%20Website/Events/ISC_cyr0ik.webp"
                    alt="event"
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      Educational
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      Science Exhibition
                    </h1>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partners and Sponsors */}
      <Sponsors />

      {/* Upcoming Events */}
      <section className="text-gray-600 body-font">
        <div className="container px-0 md:!px-5 py-20 mx-auto overflow-x-hidden">
          <div className="text-center mb-20">
            <h1 className="text-3xl md:text-4xl font-semibold md:font-bold text-center title-font text-[#046EC1] mb-4">
              Our Upcoming Events
            </h1>
            <p className="md:text-lg leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Explore the excitement with Club Twenty's upcoming events! Get
              ready for a diverse range of engaging experiences that promise to
              captivate and inspire. Join us on this journey as we strive to
              foster a dynamic and vibrant community dedicated to continuous
              growth and excellence. Stay tuned for what's in store, and be part
              of the energy that propels us forward!
            </p>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div className="p-2 sm:w-1/2 w-full">
              <div
                className="bg-gray-100 rounded flex p-4 h-full items-center"
                data-aos="fade-right"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  className="text-[#02C7A4] w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">
                  STATE LEVEL SPORTS EVENT
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div
                className="bg-gray-100 rounded flex p-4 h-full items-center"
                data-aos="fade-left"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  className="text-[#02C7A4] w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">
                  NATIONAL LEVEL MARATHON
                </span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div
                className="bg-gray-100 rounded flex p-4 h-full items-center"
                data-aos="fade-right"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  className="text-[#02C7A4] w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">GLOW RUN 2.O</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div
                className="bg-gray-100 rounded flex p-4 h-full items-center"
                data-aos="fade-left"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  className="text-[#02C7A4] w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">FITNESS TALK</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div
                className="bg-gray-100 rounded flex p-4 h-full items-center"
                data-aos="fade-right"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  className="text-[#02C7A4] w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">YOGA SESSION</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div
                className="bg-gray-100 rounded flex p-4 h-full items-center"
                data-aos="fade-left"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  className="text-[#02C7A4] w-6 h-6 flex-shrink-0 mr-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">
                  AWARENESS PROGRAM FOR SELF DEFENCE
                </span>
              </div>
            </div>
          </div>
          <Link to="/events">
            <button className="flex mx-auto mt-16 text-white bg-[#02C7A4] border-0 py-2 px-8 focus:outline-none hover:bg-[#364494] rounded text-lg">
              Past Events
            </button>
          </Link>
        </div>
      </section>

      <hr />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQs Accordian */}
      <div className="w-screen flex items-center justify-center px-10 p-2">
        <img
          width="400"
          height="200"
          src="https://res.cloudinary.com/dt5k5t2kd/image/upload/v1705847172/Club%20twenty%20Website/WEBSITE%20IMAGES/FAQ_g423dk.webp"
          alt="FAQS"
          data-aos="fade-up"
          className="max-w-lg mx-auto"
        ></img>
      </div>

      <div className="accordian m-4 !mt-8 !mb-20">
        <Accordion allowZeroExpanded={true} allowMultipleExpanded={true}>
          <AccordionItem data-aos="fade-right">
            <AccordionItemHeading>
              <AccordionItemButton>
                What Drives Club Twenty's Mission?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Club Twenty is driven by the mission to cultivate student
                leadership and holistic growth. Our main objective is to
                organize diverse extracurricular activities, providing a
                platform for skill development and fostering a culture of
                all-around personal and professional development.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem data-aos="fade-right">
            <AccordionItemHeading>
              <AccordionItemButton>
                Can You Share Examples of Club Twenty's Impactful Events?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Absolutely! Club Twenty has successfully organized noteworthy
                events such as the Indian Science Congress, Glowrun Electrica,
                Race for Grace, The Fitness Talk, Sports Utsav, and more. These
                events have collectively engaged over 2000 participants,
                contributing to our vibrant and dynamic community.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem data-aos="fade-right">
            <AccordionItemHeading>
              <AccordionItemButton>
                How does Club Twenty facilitate skill development?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Club Twenty's diverse talent pool creates an enriching
                environment for skill development. Members have the opportunity
                to learn and share skills through interactions with experienced
                seniors and fellow peers, contributing significantly to their
                personal and professional growth.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem data-aos="fade-right">
            <AccordionItemHeading>
              <AccordionItemButton>
                How Can I Join Club Twenty and Become a member?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Joining Club Twenty is an excellent decision! Membership details
                are typically communicated through recruitment drives or
                announcements at the beginning of each academic year. Stay
                updated by following the club's official communications and
                social media channels for information on how to become part of
                this dynamic community focused on leadership and holistic
                growth.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default Home;
