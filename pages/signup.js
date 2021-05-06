import { useRouter } from "next/router";
import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import Lungs from "../icons/Lungs";
import Link from "next/link"

export default function SignUp() {
  const [email, setEmail] = useState("");
  const { user, loginUser } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    loginUser(email);
  };

  console.log(user);

  const router = useRouter();

  return (
    <div className="container h-full flex items-center justify-center m-auto p-6">
      <form onSubmit={handleSubmit} className="my-20 max-w-screen-lg">
        <div className="animate-pulse flex justify-center">
          <Lungs />
        </div>
        <h1 className="text-3xl">Sign Up to Breathing Deadly</h1>
        <p className="mb-6 mt-3 text-md font-thin">
          Enter your email to create your account and access
        </p>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email Address"
          className="border border-gray-500 rounded p-2 w-full"
        ></input>
        <button className="p-2 rounded text-white mt-3 w-full bg-indigo-300 text-center text-xl font-light">
          Continue
        </button>
        <p className="mt-2">
          Already have an account?{" "}
          <Link href="/login"><a className="underline">Click Here to Log In</a></Link>
        </p>
      </form>
    </div>
  );
}
