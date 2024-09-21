import React from "react";

function join() {
  return (
    <div className="container md:!px-5 px-0 py-24 mx-auto">
      <div className="flex flex-wrap w-full">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 className="text-3xl md:text-4xl font-semibold md:font-bold text-[#046EC1] title-font mb-2">
            Join Us
          </h1>
          <div className="h-1 w-20 bg-[#02C7A4] rounded"></div>
          <div className="flex items-center justify-center">
            <img
              width="450"
              height="400"
              src="https://res.cloudinary.com/dt5k5t2kd/image/upload/v1705847172/Club%20twenty%20Website/WEBSITE%20IMAGES/JOIN_US_j926em.webp"
              alt="events"
            ></img>
          </div>
        </div>
        <div className="lg:w-1/2 lg:my-auto w-full lg:!ps-8">
          <h2 className="text-[#046EC1] font-bold text-4xl md:text-6xl drop-shadow-sm md:drop-shadow-xl  mb-4">
            Join us Today
          </h2>
          <p className="leading-relaxed lg:leading-8 text-gray-500 lg:text-lg md:w-4/5">
            Join Club Twenty today and set forth on a transformative journey of
            growth. Explore thrilling opportunities, ranging from marathons and
            EDM nights to talk shows and sports events. Become a part of our
            vibrant community dedicated to holistic development and leadership.
            Join hands with us as we shape a dynamic future where learning and
            excellence seamlessly converge. Your journey to personal and
            collective growth starts here—experience the synergy of diverse
            events and the power of a community committed to shaping a dynamic
            future.
          </p>
          <div className="pt-4 md:!pt-10 ">
            <a
              href="https://forms.gle/NyAXrJp4B5DnfDnWA"
              target="blank"
              className="join-us-btn p-3 !px-20 bg-[#02C7A4] text-white drop-shadow-xl !shadow-2xl shadow-black rounded-full font-bold text-xl"
            >
              Join Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default join;
