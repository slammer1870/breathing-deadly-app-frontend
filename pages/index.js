import { useRouter } from "next/router";
import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import Lungs from "../icons/Lungs";
import Image from "next/image";
import Logo from "../icons/Logo";
import Link from "next/link";

export default function Home() {
  const [email, setEmail] = useState("");
  const { user, loginUser } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    loginUser(email);
  };

  const [video, setVideo] = useState();

  const handleVideo = () => {
    if (!video) {
      setVideo(true);
    } else {
      setVideo(false);
    }
  };

  const router = useRouter();

  const testimonials = [
    {
      thumbnail: "/darragh-testimonial.jpg",
      review:
        '"As a professional athlete I have used many methods throughout my career to prevent and rehabilitate injuries. Working with Chris has opened my mind and changed how I think about the body, the core and the breath.\nSimple yet incredibly effective exercises, explained thoroughly. What I have learnt has become part of my daily routine and something I am sure I will continue for the rest of my life."',
      name: "Darragh OConaill",
      occupation: "BJJ Black Belt",
    },
    {
      thumbnail: "/shane-testimonial.jpg",
      review:
        '"For me the best thing about all the exercises Chris has me doing is that most can easily be incorporated into your day to day life. Some you can even do while waiting waiting for the kettle to boil. Others you can do just sitting in a chair.\nThe few exercises i have learned are just the tip of iceberg and I can’t wait to keep doing more sessions and learning more. Its a whole new way of thinking about how the body moves and how important breathing is."',
      name: "Shane Murray",
      occupation: "Sample Occupation",
    },
  ];

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [testimonial, setTestimonial] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd < 75) {
      // do your stuff here for left swipe
      console.log("move right");
      if (testimonial < testimonials.length - 1) {
        setTestimonial((testimonial) => testimonial + 1);
      } else setTestimonial(0);
    }

    if (touchStart - touchEnd > 75) {
      // do your stuff here for right swipe
      console.log("move left");
      if (testimonial > 0) {
        setTestimonial((testimonial) => testimonial - 1);
      } else setTestimonial(testimonials.length - 1);
    }
  };

  return (
    <div className="">
      <section className="p-6 ">
        <div className="max-w-screen-md mx-auto">
          <h1 className="text-5xl lg:text-6xl my-6 text-center">
            Breathing Deadly
          </h1>
          <h3 className="text-2xl lg:text-3xl font-thin text-center mt-6 mb-10">
            Change your breathing to change your life
          </h3>
          <div className="bg-video bg-cover aspect-w-16 aspect-h-9 my-6" onClick={handleVideo}>
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
        </div>
      </section>
      <section className="bg-purple-50">
        <div className="p-6 max-w-screen-sm mx-auto">
          {user ? (
            <Link href="/articles">
              <a className="bg-indigo-400 text-white text-center p-2 rounded my-6 text-3xl font-light block">
                Dashboard
              </a>
            </Link>
          ) : (
            <div className="flex flex-col">
              <Link href="/login">
                <a className="bg-white text-center p-2 rounded mt-6 mb-4 text-3xl font-light">
                  Log In
                </a>
              </Link>
              <Link href="/signup">
                <a className="bg-indigo-400 text-white text-center p-2 rounded mb-6 text-3xl font-light">
                  Sign Up
                </a>
              </Link>
            </div>
          )}
        </div>
      </section>
      <section id="whatwedo" className="py-20">
        <div className="p-6 max-w-screen-lg mx-auto">
          <h3 className="text-4xl font-regular text-center mx-auto">
            What we do
          </h3>
          <div class="container px-5 py-16 mx-auto flex flex-wrap">
            <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
              <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-400 text-white relative title-font font-medium text-sm"></div>
              <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                  <h2 class="font-medium title-font text-gray-900 mb-4 text-xl">
                    ASSESS
                  </h2>
                  <p class="leading-relaxed">
                    Using a combination of methods, we assess clients movement,
                    their strengths and weaknesses - just like any other
                    trainer. Where we hope to set ourselves apart is in
                    assessing the breath, its mechanics, and its affect on the
                    whole musculoskeletal system.
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
                    CONSULT
                  </h2>
                  <p class="leading-relaxed">
                    We work with coaches and trainers from all disciplines, it
                    has been our experience that this work is beneficial for
                    athletes, rehabilitation patients and everyone in between.
                    If you are a physio, coach, personal trainer or similar -
                    dont hesitate to get in touch to level up your training!
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
                    PROGRAM
                  </h2>
                  <p class="leading-relaxed">
                    We provide customised and detailed exercise programs,
                    centred usually around breathing and its mechanisms. On
                    demand video tutorials and support are available any time.
                    Our programs are suitable for all ages, and all levels,
                    whether you are an athlete in the top of your field, a rehab
                    patient or someone simply a deeper understanding of the
                    breath and its fundamentals - we have something for you!
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
                    TEAMS
                  </h2>
                  <p class="leading-relaxed">
                    With many workplaces closed, and team sports on hold due the
                    lockdowns, we have enjoyed sharing our work online with
                    teams and groups of all kinds. We have provided seminars for
                    corporate teams, martial arts clubs, sports teams and small
                    private groups. Contact us today to get your club Breathing
                    Deadly!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-purple-50 py-20" id="whybreathing">
        <div className="p-6 max-w-screen-lg mx-auto">
          <h3 className="text-4xl font-regular text-center mb-10">
            Why Breathing?
          </h3>
          <p class="leading-relaxed">
            Hi, I’m Chris 👋. I'm a Brazilian Jiu Jitsu Black belt, a coach, and
            personal trainer, and I have been involved in sports as an athlete,
            coach, and everything in between since I was a schoolboy.
          </p>
          <p class="leading-relaxed pt-4">
            Like many people, my adult years were sprinkled with weeks or months
            of intermittent back pain, that through a combination of stretching,
            resting, hanging, foam rolling - was never a real cause for concern,
            everyone has a sore lower back right?!?!
          </p>
          <p class="leading-relaxed pt-4">
            So what was so special about 2019? Why all of a sudden, did the
            stretches, the foam rolling and the rest stop working? Was it a bad
            deadlift in the gym that set this off? Did I herniate my disc in Jiu
            Jitsu class? Well, the answer to that question is exactly what
            brought me to these methods and to creating this page!
          </p>
          <div className="my-10">
            <Image
              src="/teaching.jpg"
              alt="Picture of the author"
              width={1920}
              height={1080}
              objectFit="cover"
            />
          </div>
          <p class="leading-relaxed">
            Months before my pain began, my father passed away, and a long term
            relationship broke down unexpectedly, I was stressed, depressed, and
            lonely. Unknowingly, my breathing rate was changing, I was
            overstimulating my sympathetic (fight or flight) nervous system, my
            sleep quality was abysmal. Unlucky as I was to experience all of
            this in close succession, it led me to connect with some incredibly
            smart, and generous coaches and therapists.
          </p>
          <p class="leading-relaxed pt-4">
            Through a personalised rehab process, I was slowly exposed the idea
            that the shapes my body was taking as I inhaled, the areas that
            expanded, the areas that didn’t, the muscles used to pull and push
            air in and out - all of these things, had a massive impact on my
            posture, and my movement. I recognised these things as not just the
            remedy to my issues, but likely the cause!
          </p>
          <p class="leading-relaxed pt-4">
            It was around this time that my coaches instincts kicked in, I have
            always made it my business to further my education and training to
            better service my students, and what I have learned since hurting my
            back juuuust about makes the whole thing worth it! This is breath
            work like you have never seen before, this is core training like you
            have never seen before.
          </p>
          <p class="leading-relaxed pt-4">
            My goal is to work with you and give you the tools and the education
            to properly service your body from home, all sessions are carefully
            tailored with your speficic goal in mind. Are you a runner, hoping
            to improve your resiporatry rate during training and events?
          </p>
          <p class="leading-relaxed py-4">
            A tired parent in need of a good nights sleep? A breath work student
            from another discipline? Or like I was, are you suffering from back
            pain? Lets get to work today, I look forward to our first session!
          </p>
        </div>
      </section>
      <section className="px-6 py-28" id="ourclients">
        <h3 className="text-4xl font-regular text-center mb-8">
          A Word from our Clients
        </h3>
        <div
          className="lg:hidden"
          onTouchStart={(touchStartEvent) => handleTouchStart(touchStartEvent)}
          onTouchMove={(touchMoveEvent) => handleTouchMove(touchMoveEvent)}
          onTouchEnd={() => handleTouchEnd()}
        >
          <div className="relative w-full">
            <div className="flex flex-col bg-white m-4 z-0">
              <div className="flex justify-center ">
                <Image
                  src={testimonials[testimonial].thumbnail}
                  width={160}
                  height={160}
                  className="rounded-full z-10"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <div className="bg-indigo-50 p-6 -mt-20">
                <p className="font-thin pt-20">
                  {testimonials[testimonial].review}
                </p>
                <h3 className="text-xl font-bold my-4">
                  {testimonials[testimonial].name}
                </h3>
                <h3 className="text-xl font-light my-4">
                  {testimonials[testimonial].occupation}
                </h3>
              </div>
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
                fill={`${testimonial == 0 ? "#707070" : "#fff"}`}
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
                fill={`${testimonial == 1 ? "#707070" : "#fff"}`}
                stroke="#707070"
                stroke-width="1"
              >
                <circle cx="11" cy="11" r="11" stroke="none" />
                <circle cx="11" cy="11" r="10.5" fill="none" />
              </g>
            </svg>
          </div>
        </div>
        <div className="lg:flex max-w-screen-xl mx-auto justify-center hidden p-6">
          {testimonials.map((testimonial) => (
            <div className="flex flex-col bg-white m-4 w-1/3 pb-24">
              <div className="flex justify-center ">
                <Image
                  src={testimonial.thumbnail}
                  width={160}
                  height={160}
                  className="rounded-full z-10"
                  objectFit="cover"
                />
              </div>
              <div className="bg-indigo-50 p-6 -mt-20 min-h-full relative">
                <h3 className="text-lg font-thin pt-20">
                  {testimonial.review}
                </h3>
                <div className="bottom-0 absolute">
                  <h3 className="text-2xl font-bold my-4">
                    {testimonial.name}
                  </h3>
                  <h3 className="text-2xl font-light my-4">
                    {testimonial.occupation}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {video && (
        <div className="flex p-4 top-0 left-0 w-screen h-screen fixed bg-black bg-opacity-90 z-30 ">
          <button
            className="w-screen h-screen absolute"
            onClick={handleVideo}
          ></button>
          <div className="w-full max-w-screen-md bg-white md:p-0 mx-auto my-auto z-20 relative">
            <div class="aspect-w-16 aspect-h-9 mx-auto max-w-screen-md opacity-100">
              <iframe
                src="https://www.youtube.com/embed/qsBi_N_0xu0"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

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
