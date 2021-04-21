import { useRouter } from "next/router";
import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import Lungs from "../icons/Lungs";
import Image from "next/image";
import Logo from "../icons/Logo";

export default function Home() {
  const [email, setEmail] = useState("");
  const { user, loginUser } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    loginUser(email);
  };

  console.log(user);

  const router = useRouter();

  return (
    <div className="">
      <section className="p-6">
        <h1 className="text-5xl my-6 text-left">Breathing Deadly</h1>
        <h3 className="text-2xl font-thin my-6">
          Change your breathing to change your life
        </h3>
        <div className="bg-video bg-cover aspect-w-16 aspect-h-9 my-6">
          <div className="bg-black w-full h-full bg-opacity-50 flex justify-center items-center mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="178"
              height="45"
              viewBox="0 0 178 45"
            >
              <circle
                id="Ellipse_1"
                data-name="Ellipse 1"
                cx="22.5"
                cy="22.5"
                r="22.5"
                fill="#bcbcbc"
              />
              <rect
                id="Rectangle_3"
                data-name="Rectangle 3"
                width="154"
                height="29"
                rx="10"
                transform="translate(24 9)"
                fill="#bcbcbc"
              />
              <path
                id="Polygon_1"
                data-name="Polygon 1"
                d="M7.928,0l7.928,14.636H0Z"
                transform="translate(32.845 15.739) rotate(90)"
                fill="#f4f1f7"
              />
              <text
                id="Watch_the_video_2_minutes_"
                data-name="Watch the video (2 minutes)"
                transform="translate(45 18)"
                fill="#f4f1f7"
                font-size="10"
                font-family="HelveticaNeue-Light, Helvetica Neue"
                font-weight="300"
              >
                <tspan x="0" y="8">
                  Watch the video (2 minutes)
                </tspan>
              </text>
            </svg>
          </div>
        </div>
      </section>
      <section className="bg-purple-50 flex flex-col p-6">
        <a className="bg-white text-center p-2 rounded mt-6 mb-4 text-3xl font-light">
          Log In
        </a>
        <a className="bg-indigo-400 text-white text-center p-2 rounded mb-6 text-3xl font-light">
          Sign Up
        </a>
      </section>
      <section>
        <div class="container px-5 py-16 mx-auto flex flex-wrap">
          <h3 className="text-4xl font-regular text-center mx-auto">
            What we do
          </h3>
          <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-400 text-white relative title-font font-medium text-sm"></div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 class="font-medium title-font text-gray-900 mb-4 text-xl">
                  Articles
                </h2>
                <p class="leading-relaxed">
                  We have a selection of articles that explain our approach to
                  our breathing techniques.
                </p>
              </div>
            </div>
          </div>
          <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-400 text-white relative title-font font-medium text-sm"></div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 class="font-medium title-font text-gray-900 mb-4 text-xl">
                  Courses
                </h2>
                <p class="leading-relaxed">
                  Our courses are designed to guide you through your breathing
                  journey with high quality video tutorials
                </p>
              </div>
            </div>
          </div>
          <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
            <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-400 text-white relative title-font font-medium text-sm"></div>
            <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 class="font-medium title-font text-gray-900 mb-4 text-xl">
                  Curriculums
                </h2>
                <p class="leading-relaxed">
                  Looking for personal coaching? We 1:1 coaching over Zoom with
                  personalised video curriculums.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-purple-50 flex flex-col p-6">
        <h3 className="text-4xl font-regular text-center my-8">
          Why Breathing?
        </h3>
        <p class="leading-relaxed">
          Hi, I’m Chris 👋. I have spent the majority of my adult life training
          and coaching Brazilian Jiu Jitsu.
        </p>
        <p class="leading-relaxed pt-4">
          After 10+ years of training I received my Black Belt and my health was
          good until one day after years of training and some neglect of the
          more important aspects of recovery, the adversity I had put my body
          through finally caught up with me
        </p>
        <div className="my-10">
          <Image
            src="/screenshot.png"
            alt="Picture of the author"
            width={1920}
            height={1080}
          />
        </div>
        <p class="leading-relaxed">
          I was diagnosed with a herniated disc in my lower back. After months
          of excruciating pain I opted to have lower back surgery and began my
          road to recovery.
        </p>
        <p class="leading-relaxed pt-4">
          It was during this time that I met a man called David Grey who began
          to educate me on the biomechanics of breathing and the perpetual
          reliance our body has on our ability to work the muscles around our
          lungs and ribcage and how that affects the rest of our mobility
        </p>
        <p class="leading-relaxed py-4">
          It is these lessons that I will be sharing with you here at Breathing
          Deadly.
        </p>
      </section>
      <section className="p-6">
        <h3 className="text-4xl font-regular text-center my-8">
          A Word from our Clients
        </h3>
        <div className="max-w-screen-xs flex flex-col items-center bg-white">
          <div className="mx-auto absolute">
            <Image
              src="/profile-pic.png"
              alt="Picture of the author"
              width={160}
              height={160}
              className="rounded-full"
            />
          </div>
          <div className="bg-indigo-50 p-6 mt-20">
            <h3 className="text-2xl font-thin pt-20">
              “Breathing Deadly is like the digital equivalent of a mechanical
              ventilator.”
            </h3>
            <h3 className="text-2xl font-bold my-4">Sam Mc Nally</h3>
            <h3 className="text-2xl font-light my-4">
              Local Hero and Web Developer @ Here
            </h3>
          </div>
        </div>
        <div className="flex w-40 mx-auto justify-between mt-12 mb-6">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
          >
            <g
              id="Ellipse_7"
              data-name="Ellipse 7"
              fill="#707070"
              stroke="#707070"
              stroke-width="1"
            >
              <circle cx="11" cy="11" r="11" stroke="none" />
              <circle cx="11" cy="11" r="10.5" fill="none" />
            </g>
          </svg><svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
          >
            <g
              id="Ellipse_7"
              data-name="Ellipse 7"
              fill="#fff"
              stroke="#707070"
              stroke-width="1"
            >
              <circle cx="11" cy="11" r="11" stroke="none" />
              <circle cx="11" cy="11" r="10.5" fill="none" />
            </g>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
          >
            <g
              id="Ellipse_7"
              data-name="Ellipse 7"
              fill="#fff"
              stroke="#707070"
              stroke-width="1"
            >
              <circle cx="11" cy="11" r="11" stroke="none" />
              <circle cx="11" cy="11" r="10.5" fill="none" />
            </g>
          </svg>
        </div>
      </section>

      <footer>
        <div class="bg-gray-200">
          <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <a class="flex font-medium items-center md:justify-start justify-center">
              <Logo />
            </a>
            <p class="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
              © 2021 Breathing Deadly —
              <a
                href="https://instagram.com/breathingdeadly"
                rel="noopener noreferrer"
                class="text-gray-600 ml-1"
                target="_blank"
              >
                @breathingdeadly
              </a>
            </p>
            <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a class="text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
