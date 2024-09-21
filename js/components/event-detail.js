import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function EventDetails() {
  const location = useLocation();
  const data = location.state?.data;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="clb-event-details">
      {/* <div className='container w-full max-w-4xl !h-full py-20'>
        <div className='bg-white h-full rounded-2xl md:flex justify-center items-center min-h-[480px] shadow-2xl'>
          <div className='bg-blue-200 relative w-full md:w-2/5 min-h-[220px] md:min-h-[360px] h-2/5'>
          <div className=' rounded-2xl h-full w-full min-h-[380px] ' >
            <img alt={data?.name} width={20} src={data.image} className='rounded-2xl h-full max-h-[380px] w-auto mx-auto'></img>
          </div>
          </div>
          <div className= 'w-full h-3/5'>
          <div className='p-6 text-center md:!text-left bg-white rounded-2xl'>
            <h4 className='mb-2 text-xl font-bold'>{data?.name}</h4>
            <div className='mb-1'>
              <div className='inline-block me-4'>Category- {data?.category}</div>
              <div className='inline-block'>Year- {data?.year}</div>
              <div>{data?.participants} participants</div>
            </div>
            <hr></hr>
            <p>{data.desc}</p>
          </div>
          </div>
        </div>
      </div> */}
      <section class="text-gray-600 body-font ">
        <div class="container py-24 pb-36 mx-auto flex flex-col">
          <div class="lg:w-4/6 mx-auto rounded-2xl md:p-4">
            <div class="rounded-lg h-fit overflow-hidden">
              <img
                loading=" lazy"
                alt="content"
                class="object-cover object-center h-full w-full"
                src={data?.image}
              />
            </div>
            <div class="flex flex-col sm:flex-row mt-10">
              <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="55"
                    height="55"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#00000"
                      d="M223.75 130.75L154.62 15.54A31.997 31.997 0 0 0 127.18 0H16.03C3.08 0-4.5 14.57 2.92 25.18l111.27 158.96c29.72-27.77 67.52-46.83 109.56-53.39M495.97 0H384.82c-11.24 0-21.66 5.9-27.44 15.54l-69.13 115.21c42.04 6.56 79.84 25.62 109.56 53.38L509.08 25.18C516.5 14.57 508.92 0 495.97 0M256 160c-97.2 0-176 78.8-176 176s78.8 176 176 176s176-78.8 176-176s-78.8-176-176-176m92.52 157.26l-37.93 36.96l8.97 52.22c1.6 9.36-8.26 16.51-16.65 12.09L256 393.88l-46.9 24.65c-8.4 4.45-18.25-2.74-16.65-12.09l8.97-52.22l-37.93-36.96c-6.82-6.64-3.05-18.23 6.35-19.59l52.43-7.64l23.43-47.52c2.11-4.28 6.19-6.39 10.28-6.39c4.11 0 8.22 2.14 10.33 6.39l23.43 47.52l52.43 7.64c9.4 1.36 13.17 12.95 6.35 19.59"
                    />
                  </svg>
                </div>
                <div class="flex flex-col items-center text-center justify-center">
                  <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">
                    {data?.name}
                  </h2>
                  <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                  <p class="text-base">{data?.category}</p>
                  <p class="text-base">{data?.participants} Participants</p>
                  <p class="text-base">{data?.year}</p>
                </div>
              </div>
              <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left flex justify-center items-center">
                <p class="leading-relaxed text-lg mb-4 lg:leading-8 text-left">
                  {data?.desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EventDetails;
