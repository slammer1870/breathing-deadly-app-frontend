import { useRouter } from "next/router";
import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import Lungs from "../icons/Lungs";

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
    <div className="flex flex-col items-center w-screen h-screen p-6">
      <form onSubmit={handleSubmit}>
        <div className="w-full h-auto mx-auto flex animate-pulse items-center justify-center">
          <Lungs />
        </div>
        <h1 className="text-3xl">Sign up to Breathing Deadly</h1>
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
        <button className="bg-gray-500 p-2 rounded text-white mt-3 w-full">
          Continue
        </button>
      </form>
    </div>
  );
}
