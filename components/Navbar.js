import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import Link from "next/link";
import Logo from "../icons/Logo";

const Navbar = ({ handleAccount }) => {
  const { user } = useContext(AuthContext);
  const [home, setHome] = useState();
  const [active, setActive] = useState();
  const router = useRouter();
  const path = router.pathname;

  useEffect(() => {
    if (path == "/") {
      setHome(true);
    } else {
      setHome(false);
    }
  });

  useEffect(() => {
    if(active){
      setActive(false)
    }
  },[])

  const handleMenu = () => {
    if (!active) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  if (home) {
    return (
      <div className="w-screen flex flex-col top-0 fixed z-10 lg:px-20 p-4 bg-white shadow-md" >
        <div className="h-22 w-full flex justify-between">
          <Link href="/">
            <a className="h-10 w-1/3">
              <Logo />
            </a>
          </Link>
          <div
            className={`${
              !active ? "hidden lg:flex" : "lg:flex"
            } flex pt-14 md:pt-14 lg:pt-0 justify-center lg:justify-end w-1/3 lg:w-full`}
          >
            {active ? (
              <ul className="lg:flex lg:pt-0">
                <li className="justify-center flex my-2 lg:mx-2"><a href="#whatwedo" onClick={handleMenu}>What We Do</a></li>
                <li className="justify-center flex my-2 lg:mx-2"><a href="#whybreathing" onClick={handleMenu}>Why Breathing?</a></li>
                <li className="justify-center flex my-2 lg:mx-2"><a href="#ourclients" onClick={handleMenu}>Our Clients</a></li>
                <li>
                  {user ? (
                    <Link href="/articles">
                      <button className="mt-1 p-1 w-28 bg-indigo-400 text-white text-center rounded font-light">
                        Dashboard
                      </button>
                    </Link>
                  ) : (
                    <div className="flex">
                      <Link href="/login">
                        <button className="p-1 w-20 mt-1">Log In</button>
                      </Link>
                      <Link href="/signup">
                        <button className="p-1 w-20 mt-1 bg-indigo-400 text-white text-center rounded font-light">Sign Up</button>
                      </Link>
                    </div>
                  )}
                </li>
              </ul>
            ) :  <ul className="lg:flex lg:pt-0">
            <li className="justify-center flex my-2 lg:mx-2"><a href="#whatwedo" onClick={handleMenu}>What We Do</a></li>
            <li className="justify-center flex my-2 lg:mx-2"><a href="#whybreathing" onClick={handleMenu}>Why Breathing?</a></li>
            <li className="justify-center flex my-2 lg:mx-2"><a href="#ourclients" onClick={handleMenu}>Our Clients</a></li>
            <li>
              {user ? (
                <Link href="/articles">
                  <button className="mt-1 p-1 w-28 bg-indigo-400 text-white text-center rounded font-light">
                    Dashboard
                  </button>
                </Link>
              ) : (
                <div className="flex">
                  <Link href="/login">
                    <button className="p-1 w-20 mt-1">Log In</button>
                  </Link>
                  <Link href="/signup">
                    <button className="p-1 w-20 mt-1 bg-indigo-400 text-white text-center rounded font-light">Sign Up</button>
                  </Link>
                </div>
              )}
            </li>
          </ul>}
          </div>
          <div className="w-1/3 justify-end lg:hidden">
            <button
              onClick={handleMenu}
              className="flex w-6 h-6 mt-2 ml-auto items-center "
            >
              {!active ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="17"
                  viewBox="0 0 28 17"
                >
                  <line
                    id="Line_1"
                    data-name="Line 1"
                    x2="28"
                    transform="translate(0 0.5)"
                    fill="none"
                    stroke="#707070"
                    stroke-width="1"
                  />
                  <line
                    id="Line_2"
                    data-name="Line 2"
                    x2="28"
                    transform="translate(0 16.5)"
                    fill="none"
                    stroke="#707070"
                    stroke-width="1"
                  />
                  <line
                    id="Line_3"
                    data-name="Line 3"
                    x2="28"
                    transform="translate(0 8.5)"
                    fill="none"
                    stroke="#707070"
                    stroke-width="1"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16.707"
                  height="16.707"
                  viewBox="0 0 16.707 16.707"
                >
                  <line
                    id="Line_10"
                    data-name="Line 10"
                    x1="16"
                    y2="16"
                    transform="translate(0.354 0.354)"
                    fill="none"
                    stroke="#707070"
                    stroke-width="1"
                  />
                  <line
                    id="Line_11"
                    data-name="Line 11"
                    x2="16"
                    y2="16"
                    transform="translate(0.354 0.354)"
                    fill="none"
                    stroke="#707070"
                    stroke-width="1"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-screen flex justify-between items-center top-0 fixed ${ path != "/login" && path != "/signup" ? "lg:left-20 lg:pr-28" : "px-20"} p-4 bg-white z-10 shadow-md`} >
    <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <div>
        {user ? (
          <button href="#" onClick={handleAccount}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="29"
              viewBox="0 0 16 16"
              className="mt-1"
            >
              <path
                id="Union_5"
                data-name="Union 5"
                d="M0,370v-2c0-2.2,3.6-4,8-4s8,1.8,8,4v2Zm4-12a4,4,0,1,1,4,4A4,4,0,0,1,4,358Z"
                transform="translate(0 -354)"
                fill="#2e2e2e"
              />
            </svg>
          </button>
        ) : (
          <Link href="/login">
            <button className="border p-1 w-20 rounded">Log In</button>
          </Link>
        )}
      </div>
    </div>
  );
};

Navbar.propTypes = {
  handleAccount: PropTypes.func,
};

export default Navbar;
