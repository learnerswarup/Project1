import React, { useEffect } from "react";
import Team from "./team";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import aos from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    aos.init({ once: true });
  }, []);

  return (
    <>
      <div className="about-page container md:px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1
              className="text-3xl md:text-4xl font-semibold md:font-bold title-font mb-2 text-[#046EC1]"
              data-aos="fade-in"
            >
              About Us
            </h1>
            <div className="h-1 w-20 bg-[#02C7A4] rounded"></div>
            <div className="flex justify-center items-center">
              <img
                width="400"
                height="200"
                data-aos="fade-up"
                src="https://res.cloudinary.com/dt5k5t2kd/image/upload/v1705847174/Club%20twenty%20Website/WEBSITE%20IMAGES/ABOUT_US_pbxiky.webp"
                alt="About us"
              ></img>
            </div>
          </div>
          <div className="lg:w-1/2 w-full lg:ps-8 my-auto">
            <h2
              className="text-[#046EC1] font-bold text-2xl md:text-4xl drop-shadow-sm md:drop-shadow-xl  mb-4"
              data-aos="fade-up"
            >
              Fostering Growth, Inspiring Leadership.
            </h2>
            <p
              className="w-full leading-relaxed lg:leading-8 text-gray-500 lg:text-lg"
              data-aos="fade-in"
            >
              Club Twenty, since its inception in 2017, champions holistic
              student development through 100+ diverse events. A beacon for
              leadership, our student-led organization offers a platform for
              learning and skill-building. From marathons to cultural
              celebrations, our events resonate widely, fostering a culture of
              excellence. Beyond event curation, we provide comprehensive event
              management services. At Club Twenty, our commitment lies in
              nurturing holistic growth, offering students opportunities to
              engage, lead, and thrive. Join us on a transformative journey,
              where dynamic experiences shape leaders and create lasting
              memories. This is Club Twenty—where growth meets inspiration, and
              excellence becomes a way of life.
            </p>
          </div>
        </div>
        <div className="about-heads md:px-16">
          <ul className="list-none ">
            <li>
              <a href="#who-we-are">Who we are</a>
            </li>
            <li>
              <a href="#story">Our Story</a>
            </li>
            <li>
              <a href="#team">Team</a>
            </li>
            <li>
              <Link to="/events">Past Events</Link>
            </li>
          </ul>
        </div>
        <div id="who-we-are" className="py-8 md:p-8 w-full">
          <h1 className="text-3xl md:text-4xl font-semibold md:font-bold text-center mt-6  text-[#046EC1]">
            Who we are
          </h1>
          <p className="text-center lg:text-lg leading-8 mt-6">
            At Club Twenty, we redefine student-led organizations. Operated by
            students, for students, our program transcends conventional models.
            Rooted in the core principle of fostering leadership growth and
            competency, we go beyond the ordinary. Empowering and innovative,
            Club Twenty is a dynamic platform where students drive and shape
            their own development, creating a unique community dedicated to
            leadership excellence.
          </p>
          <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-0 md:px-5 py-24 md:flex-row flex-col items-center">
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <iframe
                  className="object-cover object-center w-full h- lg:w-[580px] lg:h-[315px]"
                  src="https://www.youtube.com/embed/Y9-wdhbG5aQ?&autoplay=1&mute=1&controls=0&&showinfo=0&loop=1"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay;&autoplay=1; loop=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="title-font text-3xl md:text-4xl font-semibold  mb-4 text-[#046EC1]">
                  Our main goal
                </h1>
                <p className="mb-8 leading-relaxed text-left lg:text-lg">
                  Our primary objective at Club Twenty is to elevate the
                  interest and capabilities of our members across diverse
                  extracurricular activities, fostering a culture of holistic
                  growth. Having successfully hosted numerous significant
                  national events, our ambition is to expand further,
                  particularly in organizing national-level sports events. We
                  aspire to make a meaningful impact on our members, providing
                  them with a dynamic platform for growth, learning, and
                  enjoyment. Club Twenty is committed to creating experiences
                  that transcend boundaries, allowing members to flourish
                  personally and athletically.
                </p>
                <div className="flex justify-center">
                  <Link to="/contact">
                    <button className="inline-flex text-white bg-[#02C7A4] border-0 py-2 px-6 focus:outline-none hover:bg-[#30a892] rounded text-lg">
                      Join Us
                    </button>
                  </Link>
                  <Link to="/events">
                    <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                      Events
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <div className="club-count" id="story">
            <section className="text-gray-600 body-font">
              <div className="container px-0 md:px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                  <h1 className="text-3xl md:text-4xl font-semibold md:font-bold title-font mb-4 text-[#046EC1]">
                    Our Story
                  </h1>
                  <p className="lg:w-2/3 mx-auto leading-relaxed lg:text-lg">
                    In 2017, Club Twenty embarked on a journey to cultivate
                    student leadership and holistic growth. With over 100
                    events, including the nationally acclaimed GlowRun Electrica
                    marathon, our impact is undeniable. Having engaged over 1000
                    members to date, Club Twenty continues to be a vibrant
                    community dedicated to shaping leaders and creating
                    meaningful experiences.
                  </p>
                </div>
                <section class="text-gray-600 body-font">
                  <div class="container md:px-5 py-24 mx-auto flex flex-wrap">
                    <div class="flex flex-wrap w-full">
                      <div class="xl:w-2/5 md:pr-10 md:py-6">
                        <div class="flex relative pb-12">
                          <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                          </div>
                          <div
                            class="flex-shrink-0 w-10 h-10 rounded-full bg-[#02C7A4] inline-flex items-center justify-center text-white relative z-10"
                            data-aos="fade-in"
                          >
                            <svg
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              class="w-5 h-5"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                            </svg>
                          </div>
                          <div class="flex-grow pl-4" data-aos="slide-right">
                            <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                              Visionary Roots
                            </h2>
                            <p class="leading-relaxed">
                              Established in 2017, Club Twenty was born with a
                              distinct purpose – to revolutionize student
                              leadership and holistic growth, transcending the
                              norms of traditional student-run organizations.
                            </p>
                          </div>
                        </div>
                        <div class="flex relative pb-12">
                          <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                          </div>
                          <div
                            class="flex-shrink-0 w-10 h-10 rounded-full bg-[#02C7A4] inline-flex items-center justify-center text-white relative z-10"
                            data-aos="fade-in"
                          >
                            <svg
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              class="w-5 h-5"
                              viewBox="0 0 24 24"
                            >
                              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                            </svg>
                          </div>
                          <div class="flex-grow pl-4" data-aos="slide-left">
                            <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                              Dynamic Growth
                            </h2>
                            <p class="leading-relaxed">
                              Marking its trajectory with 100+ events, including
                              the prestigious Indian Science Congress and
                              marquee events like GlowRun Electrica and Race for
                              Grace, the club has proven its prowess in
                              orchestrating significant national gatherings.
                            </p>
                          </div>
                        </div>
                        <div class="flex relative pb-12">
                          <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                          </div>
                          <div
                            class="flex-shrink-0 w-10 h-10 rounded-full bg-[#02C7A4] inline-flex items-center justify-center text-white relative z-10"
                            data-aos="fade-in"
                          >
                            <svg
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              class="w-5 h-5"
                              viewBox="0 0 24 24"
                            >
                              <circle cx="12" cy="5" r="3"></circle>
                              <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                            </svg>
                          </div>
                          <div class="flex-grow pl-4" data-aos="slide-right">
                            <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                              Community Engagement
                            </h2>
                            <p class="leading-relaxed">
                              From the vibrant Glow Run to the impactful Race
                              for Grace and Freshmen Induction, each event draws
                              over 2000 participants, fostering shared interests
                              and holistic development within the community.
                            </p>
                          </div>
                        </div>
                        <div class="flex relative pb-12">
                          <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                          </div>
                          <div
                            class="flex-shrink-0 w-10 h-10 rounded-full bg-[#02C7A4] inline-flex items-center justify-center text-white relative z-10"
                            data-aos="fade-in"
                          >
                            <svg
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              class="w-5 h-5"
                              viewBox="0 0 24 24"
                            >
                              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                              <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                          </div>
                          <div class="flex-grow pl-4" data-aos="slide-left">
                            <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                              Future Horizons
                            </h2>
                            <p class="leading-relaxed">
                              Looking ahead, Club Twenty envisions hosting a
                              National-level marathon, State-level sports
                              events, Glow Run 2, and insightful Fitness talks,
                              setting the stage for even more ambitious
                              endeavors.
                            </p>
                          </div>
                        </div>
                        <div class="flex relative">
                          <div
                            class="flex-shrink-0 w-10 h-10 rounded-full bg-[#02C7A4] inline-flex items-center justify-center text-white relative z-10"
                            data-aos="fade-in"
                          >
                            <svg
                              fill="none"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              class="w-5 h-5"
                              viewBox="0 0 24 24"
                            >
                              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                              <path d="M22 4L12 14.01l-3-3"></path>
                            </svg>
                          </div>
                          <div class="flex-grow pl-4" data-aos="slide-right">
                            <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                              Excellence in Cultivation
                            </h2>
                            <p class="leading-relaxed">
                              A breeding ground for diverse talents, Club Twenty
                              thrives on mentorship from both seniors and peers.
                              The club's dedication propels it to Tier 5, a
                              testament to its unwavering commitment to ongoing
                              holistic growth.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center items-center">
                        <img
                          data-aos="zoom-in"
                          delay={2}
                          class="mx-auto object-cover object-center rounded-lg xl:mt-0 mt-12"
                          src="https://res.cloudinary.com/dt5k5t2kd/image/upload/v1705847174/Club%20twenty%20Website/WEBSITE%20IMAGES/OUR_STORY_tvuzyg.webp"
                          alt="Story"
                          width="595"
                          height="468"
                        />
                      </div>
                    </div>
                  </div>
                </section>
                <div className="flex flex-wrap -m-4 text-center">
                  <div className="p-4 lg:w-1/4 sm:w-1/2 w-full ">
                    <div
                      className="border-2 border-gray-200 px-4 py-6 rounded-lg hover:border-[#5ACAA7]"
                      data-aos="fade-up"
                      data-aos-duration="500"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="text-[#02C7A4] w-12 h-12 mb-3 inline-block"
                        viewBox="0 0 24 24"
                      >
                        <svg
                          fill="#02C7A4"
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 495.61 495.61"
                        >
                          <g>
                            <g>
                              <path
                                d="M193.833,412.266c-14.348-3.395-25.841-15.27-28.009-30.749c-0.674-4.814-0.376-9.538,0.728-13.982
			c-7.126,2.166-13.031,1.761-16.417,1.165l5.806,47.199c1.284,10.442,10.79,17.867,21.235,16.583
			C187.277,431.24,194.53,422.299,193.833,412.266z"
                              />
                            </g>
                          </g>
                          <g>
                            <g>
                              <path
                                d="M184.496,179.927l-6.617-19.629l4.019-21.246c2.429-12.846-6.014-25.228-18.86-27.658l-41.478-7.844
			c-9.883-1.869-19.488,2.703-24.5,10.759l32.372,0.76l-65.25,13.713c-5.237,1.102-9.524,4.748-11.482,9.657l-23.49,58.918
			c-3.226,8.088,0.667,17.359,8.867,20.627c8.046,3.204,17.351-0.651,20.627-8.867l20.338-51.012h0.001l59.089-12.418
			l-47.087,23.465l-11.384,28.551l-7.26,44.244c0.004,0.248-0.011,0.493,0.003,0.744l3.319,60.77l-59.313,8.306
			c-10.42,1.46-17.683,11.089-16.224,21.509c1.456,10.397,11.062,17.686,21.51,16.225l76.647-10.736
			c9.801-1.373,16.92-10.023,16.38-19.907l-3.804-69.627l9.91,1.874l18.48,55.158c6.408-6.553,16.827-15.537,32.115-24.085
			l-10.609-31.664l6.724-35.551c4.379,2.282,9.183,2.302,13.255,0.654l26.484-10.717c17.671-44.325,15.701-39.425,16.301-40.791
			L184.496,179.927z"
                              />
                            </g>
                          </g>
                          <g>
                            <g>
                              <circle cx="157.128" cy="61.736" r="35.041" />
                            </g>
                          </g>
                          <g>
                            <g>
                              <path
                                d="M304.45,363.835l-2.083-38.128c-15.333-1.348-28.871-1.31-40.758-0.32l1.202,22.008l-63.326,8.869
			c-11.125,1.558-18.88,11.841-17.322,22.965c1.559,11.129,11.844,18.879,22.965,17.322l81.834-11.463
			C297.427,383.622,305.026,374.387,304.45,363.835z"
                              />
                            </g>
                          </g>
                          <g>
                            <g>
                              <path
                                d="M388.833,462.477l-12.702-103.255c-0.166-1.353-0.469-2.685-0.902-3.979l-8.626-25.745
			c-13.984,1.251-28.455,0.832-43.326-1.265l12.728,37.989l12.451,101.222c1.372,11.148,11.518,19.078,22.672,17.704
			C382.278,483.777,390.205,473.627,388.833,462.477z"
                              />
                            </g>
                          </g>
                          <g>
                            <g>
                              <circle cx="349.721" cy="89.322" r="37.413" />
                            </g>
                          </g>
                          <g>
                            <g>
                              <path
                                d="M455.504,202.776c-3.4-8.402-13.151-12.935-22.032-9.337l-54.53,22.067l-7.064-20.957l4.29-22.684
			c2.593-13.715-6.421-26.936-20.136-29.53l-44.284-8.375c-10.552-1.996-20.805,2.885-26.158,11.487l34.563,0.811l-69.665,14.641
			h-0.001c-5.453,1.147-10.132,4.976-12.258,10.311l-25.079,62.906c-3.439,8.612,0.703,18.528,9.467,22.02
			c8.596,3.427,18.531-0.714,22.022-9.468c4.166-10.449,17.555-44.031,21.714-54.463l63.088-13.258L279.169,204l-19.027,53.237
			c21.457-1.249,46.977-0.023,71.343,3.634c9.622,1.444,18.822,1.822,27.632,1.151l1.72-9.098c4.525,2.351,9.652,2.508,14.155,0.685
			c7.956-3.219,63.265-25.602,71.175-28.803C454.829,221.302,459.009,211.438,455.504,202.776z"
                              />
                            </g>
                          </g>
                          <g>
                            <g>
                              <path
                                d="M500.426,166.296c-8.865-2.956-18.448,1.835-21.404,10.7c-0.099,0.295-10.11,29.805-34.128,57.294
			c-31.165,35.668-70.172,50.272-115.936,43.403c-133.73-20.085-181.587,44.719-183.562,47.491
			c-4.852,6.829-5.204,16.914,2.398,24.501c11.635,11.609,25.165-4.87,25.165-4.87l0.007,0.004
			c1.204-1.506,10.985-13.165,32.494-22.914c21.572-9.778,59.638-19.582,118.475-10.749c57.101,8.573,107.743-10.309,146.442-54.602
			c28.44-32.55,40.259-67.389,40.747-68.857C514.082,178.834,509.291,169.252,500.426,166.296z"
                              />
                            </g>
                          </g>
                        </svg>
                      </svg>
                      <h2 className="title-font font-medium text-3xl text-gray-900">
                        <CountUp end={10} enableScrollSpy />+
                      </h2>
                      <p className="leading-relaxed">Marathons</p>
                    </div>
                  </div>
                  <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
                    <div
                      className="border-2 border-gray-200 px-4 py-6 rounded-lg hover:border-[#5ACAA7]"
                      data-aos="fade-up"
                      data-aos-duration="500"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="text-[#02C7A4] w-12 h-12 mb-3 inline-block"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                      </svg>
                      <h2
                        className="title-font font-medium text-3xl text-gray-900"
                        ata-aos="fade-in"
                      >
                        <CountUp end={1000} enableScrollSpy />+
                      </h2>
                      <p className="leading-relaxed">Members</p>
                    </div>
                  </div>
                  <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
                    <div
                      className="border-2 border-gray-200 px-4 py-6 rounded-lg hover:border-[#5ACAA7]"
                      data-aos="fade-up"
                      data-aos-duration="500"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="text-[#02C7A4] w-12 h-12 mb-3 inline-block"
                        viewBox="0 0 24 24"
                      >
                        <svg
                          fill="#02C7A4"
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 495.61 495.61"
                        >
                          <path
                            d="M441.899,0H53.754C24.224,0,0.043,24.202,0.043,53.754v388.102c0,29.574,24.181,53.754,53.711,53.754h388.102
				c29.574,0,53.711-24.224,53.711-53.754V53.754C495.632,24.202,471.429,0,441.899,0z M427.921,44.414
				c13.978,0,25.367,11.346,25.367,25.367s-11.325,25.367-25.367,25.367c-14.043,0-25.367-11.346-25.367-25.367
				S413.922,44.414,427.921,44.414z M348.778,44.393c13.999,0,25.389,11.346,25.389,25.389S362.799,95.17,348.778,95.17
				s-25.389-11.346-25.389-25.389S334.778,44.393,348.778,44.393z M454.971,449.514H40.747V131.56h414.224V449.514z"
                          />
                          <rect
                            x="128.13"
                            y="317.047"
                            width="79.229"
                            height="79.208"
                          />
                          <rect
                            x="291.551"
                            y="317.047"
                            width="79.251"
                            height="79.208"
                          />
                          <rect
                            x="128.13"
                            y="188.291"
                            width="79.229"
                            height="79.186"
                          />
                          <rect
                            x="291.551"
                            y="188.291"
                            width="79.251"
                            height="79.186"
                          />
                        </svg>
                      </svg>
                      <h2 className="title-font font-medium text-3xl text-gray-900">
                        <CountUp end={100} enableScrollSpy />+
                      </h2>
                      <p className="leading-relaxed">Events</p>
                    </div>
                  </div>
                  <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
                    <div
                      className="border-2 border-gray-200 px-4 py-6 rounded-lg hover:border-[#5ACAA7]"
                      data-aos="fade-up"
                      data-aos-duration="500"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="text-[#02C7A4] w-12 h-12 mb-3 inline-block"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      </svg>
                      <h2 className="title-font font-medium text-3xl text-gray-900">
                        <CountUp end={6} delay={2} enableScrollSpy />+
                      </h2>
                      <p className="leading-relaxed">Years of Trust</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div id="team">
        <Team />
      </div>

      <section className="text-gray-600 body-font">
        <div className="container px-0 md:px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-24 h-full bg-[#4556B3]"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 text-3xl md:text-4xl font-semibold text-[#046EC1] title-font mb-2 sm:mb-0">
                Our Past events
              </h1>
              <p className="sm:w-3/5 leading-relaxed text-base lg:text-lg sm:pl-10 pl-0">
                Certainly! Explore a selection of meticulously organized past
                events by the proactive members of Club Twenty, a testament to
                their commitment to fostering leadership skills and holistic
                growth among students:
              </p>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 mb-4 -mx-4 -mt-4">
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
    </>
  );
}

export default About;
