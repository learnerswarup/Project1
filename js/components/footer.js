import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();
  const { pathname } = location;

  return (
    <>
      <footer
        class={`text-gray-600 body-font border-t-2 bg-gray-50 ${
          pathname === "/glow-run-register" && "hidden xl:block"
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4 w-full p-4 md:!px-24 ">
          <div className="w-full flex justify-center items-center">
            <div className="p-4">
              <img src={logo} height={250} width={250} alt="logo"></img>
              <h4 className="p-4 pb-0 pe-0 text-xl font-bold drop-shadow-xl">
                Get your game on....
              </h4>
            </div>
          </div>
          <div className="w-full p-4 flex justify-start">
            <div>
              <div className="pb-2 flex items-center">
                <span className="text-lg font-bold me-2">Useful Links</span>
                <lord-icon
                  style={{ width: "25px", height: "25x" }}
                  src="https://cdn.lordicon.com/cbigqefp.json"
                  trigger="loop"
                ></lord-icon>
              </div>
              <ul>
                <li className="cursor-pointer hover:font-bold">
                  <Link to="/" className="flex items-center ">
                    <lord-icon
                      src="https://cdn.lordicon.com/wyjhrzdh.json"
                      trigger="loop"
                      style={{ width: "15px", height: "15x" }}
                    ></lord-icon>
                    <span className="ms-2">Home</span>
                  </Link>
                </li>
                <li className="cursor-pointer hover:font-bold">
                  <Link to="/about" className="flex items-center ">
                    <lord-icon
                      src="https://cdn.lordicon.com/wyjhrzdh.json"
                      trigger="loop"
                      delay="2000"
                      style={{ width: "15px", height: "15x" }}
                    ></lord-icon>
                    <span className="ms-2">About Us</span>
                  </Link>
                </li>
                <li className="cursor-pointer hover:font-bold">
                  <Link to="/events" className="flex items-center ">
                    <lord-icon
                      src="https://cdn.lordicon.com/wyjhrzdh.json"
                      trigger="loop"
                      delay="4000"
                      style={{ width: "15px", height: "15x" }}
                    ></lord-icon>
                    <span className="ms-2">Events</span>
                  </Link>
                </li>
                <li className="cursor-pointer hover:font-bold">
                  <Link to="/team" className="flex items-center ">
                    <lord-icon
                      src="https://cdn.lordicon.com/wyjhrzdh.json"
                      trigger="loop"
                      delay="6000"
                      style={{ width: "15px", height: "15x" }}
                    ></lord-icon>
                    <span className="ms-2">Team</span>
                  </Link>
                </li>
                <li className="cursor-pointer hover:font-bold">
                  <Link to="/join" className="flex items-center ">
                    <lord-icon
                      src="https://cdn.lordicon.com/wyjhrzdh.json"
                      trigger="loop"
                      delay="8000"
                      style={{ width: "15px", height: "15x" }}
                    ></lord-icon>
                    <span className="ms-2">Join us</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-4 flex justify-start">
            <div className="">
              <div className="pb-2 flex items-center">
                <span className="text-lg font-bold me-2">Support</span>
                <lord-icon
                  src="https://cdn.lordicon.com/kiynvdns.json"
                  trigger="loop"
                  style={{ width: "30px", height: "30x" }}
                ></lord-icon>
              </div>
              <ul>
                <li className="flex items-center cursor-pointer  py-2">
                  <span className="">
                    For all your question, we are officially here.
                  </span>
                </li>
                <li className="flex items-center font-semibold pb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="#5acaa7"
                      fill-rule="evenodd"
                      d="M12.5 6a4.47 4.47 0 0 1-.883 2.677L8 13.5L4.383 8.677A4.5 4.5 0 1 1 12.5 6M14 6c0 1.34-.439 2.576-1.18 3.574L8.937 14.75L8 16l-.938-1.25L3.18 9.574A6 6 0 1 1 14 6M8 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <div className="ms-2 flex flex-col">
                    <span className="">
                      <span className="font-bold">Head office:</span> Building
                      3, S Block, DLF Phase 3, Gurgaon, Haryana 122002
                    </span>
                    <span className="mt-2">
                      13-209 LPU, Jalandhar - Delhi, Grand Trunk Rd, Phagwara,
                      Punjab 144411
                    </span>
                  </div>
                </li>
                <li className="flex items-center font-semibold pb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="#5acaa7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    >
                      <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <path d="m3 7l9 6l9-6" />
                    </g>
                  </svg>
                  <span className="ms-2">info@clubtwenty.in</span>
                </li>
                <li className="flex items-center font-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                      <path
                        fill="#5acaa7"
                        d="M8.172 15.829c3.845 3.845 7.408 4.266 8.454 4.305c1.264.046 2.554-.986 3.112-2.043c-.89-1.044-2.049-1.854-3.318-2.732c-.749.748-1.672 2.138-2.901 1.64c-.699-.281-2.425-1.076-3.933-2.585C8.077 12.906 7.283 11.18 7 10.482c-.498-1.231.896-2.156 1.645-2.905c-.878-1.29-1.674-2.479-2.716-3.324c-1.072.56-2.11 1.84-2.063 3.121c.039 1.046.46 4.609 4.306 8.455m8.38 6.304c-1.44-.053-5.521-.617-9.795-4.89c-4.273-4.274-4.836-8.354-4.89-9.795c-.08-2.196 1.602-4.329 3.545-5.162a1.47 1.47 0 0 1 1.445.159c1.608 1.173 2.717 2.95 3.67 4.342A1.504 1.504 0 0 1 10.35 8.7l-1.356 1.357C9.309 10.752 9.95 11.95 11 13c1.05 1.05 2.248 1.691 2.944 2.006l1.355-1.356a1.503 1.503 0 0 1 1.918-.171c1.42.984 3.088 2.077 4.304 3.634a1.47 1.47 0 0 1 .189 1.485c-.837 1.953-2.955 3.616-5.158 3.535"
                      />
                    </g>
                  </svg>
                  <span className="ms-2">+91 7307463073</span>
                  <span className="ms-2">+91 7906440791</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a
            href="/"
            className="flex md:mt-4 title-font font-medium items-center md:justify-start justify-center text-gray-900"
          >
            <img className="w-20 md:w-24" src={logo} alt="Logo" />
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2023 Club Twenty —
            <a
              href="https://twitter.com/clubtwentyorg?s=21"
              className="text-gray-600 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              @clubtwentyorg
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a
              href="https://www.facebook.com/clubtwenty.in"
              target="blank"
              className="text-gray-500 cursor-pointer hover:scale-125"
            >
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/clubtwentyorg/"
              target="blank"
              className="ml-3 md:ml-6 text-gray-500 cursor-pointer hover:scale-125"
            >
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/clubtwentyorg/"
              target="blank"
              className="ml-3 md:ml-6 text-gray-500 cursor-pointer hover:scale-125"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a
              href="https://twitter.com/clubtwentyorg?s=11"
              target="blank"
              className="ml-3 md:ml-6 md:mr-12 text-gray-500 cursor-pointer hover:scale-125"
            >
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
